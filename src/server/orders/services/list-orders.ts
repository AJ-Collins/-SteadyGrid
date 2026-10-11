import { db } from "@/server/db/client";
import type { Order, OrderItem, Product } from "@prisma/client";

export type OrderWithItems = Order & { items: (OrderItem & { product: Product })[] };

export interface OrderListResult {
  items: OrderWithItems[];
  total: number;
}

export async function listOrders(limit = 50): Promise<OrderListResult> {
  const take = Math.min(100, Math.max(1, limit));
  const [total, items] = await Promise.all([
    db.order.count(),
    db.order.findMany({
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: "desc" },
      take,
    }),
  ]);
  return { items, total };
}
