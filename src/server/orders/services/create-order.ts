import { db } from "@/server/db/client";

export interface CreateOrderItem {
  productId: string;
  qty: number;
}

export async function createOrder(items: CreateOrderItem[], userId?: string): Promise<{ id: string }> {
  if (items.length === 0) throw new Error("Order must contain at least one item");
  const products = await db.product.findMany({
    where: { id: { in: items.map((i) => i.productId) } },
  });
  const total = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product ? Number(product.price) * item.qty : 0);
  }, 0);
  const order = await db.order.create({
    data: {
      userId: userId ?? null,
      total,
      items: {
        create: items.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          return {
            productId: item.productId,
            qty: item.qty,
            unitPrice: Number(product?.price ?? 0),
          };
        }),
      },
    },
    select: { id: true },
  });
  return order;
}
