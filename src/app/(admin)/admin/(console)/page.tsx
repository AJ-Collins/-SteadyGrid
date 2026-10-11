import { db } from "@/shared/lib/db";

export default async function AdminDashboardPage() {
  const [products, orders, users] = await Promise.all([
    db.product.count().catch(() => 0),
    db.order.count().catch(() => 0),
    db.user.count().catch(() => 0),
  ]);
  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {[["Products", products], ["Orders", orders], ["Users", users]].map(([label, value]) => (
          <div key={label as string} className="rounded-lg border bg-white p-6">
            <p className="text-xs font-bold uppercase text-text-muted">{label}</p>
            <p className="text-3xl font-black">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
