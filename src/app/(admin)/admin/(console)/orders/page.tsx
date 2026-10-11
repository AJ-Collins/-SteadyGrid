import { db } from "@/shared/lib/db";

export default async function AdminOrdersPage() {
  const orders = await db.order.findMany({ include: { items: true }, take: 50, orderBy: { createdAt: "desc" } }).catch(() => []);
  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold">Orders</h1>
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b text-xs uppercase text-text-muted">
            <tr><th className="p-3">ID</th><th className="p-3">Status</th><th className="p-3">Total</th><th className="p-3">Items</th></tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b last:border-0">
                <td className="p-3 font-mono text-xs">{o.id.slice(0, 8)}</td>
                <td className="p-3">{o.status}</td>
                <td className="p-3">{Number(o.total).toFixed(2)}</td>
                <td className="p-3">{o.items.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
