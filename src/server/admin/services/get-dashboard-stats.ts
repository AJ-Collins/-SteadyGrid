import { db } from "@/server/db/client";

// Dashboard aggregates for the admin overview. Read-only, stats:read-guarded
// at the controller layer.
export interface DashboardStats {
  products: number;
  orders: number;
  users: number;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const [products, orders, users] = await Promise.all([
    db.product.count(),
    db.order.count(),
    db.user.count(),
  ]);
  return { products, orders, users };
}
