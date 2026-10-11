import { db } from "@/shared/lib/db";

export default async function AdminProductsPage() {
  const products = await db.product.findMany({ take: 50, orderBy: { createdAt: "desc" } }).catch(() => []);
  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold">Products</h1>
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b text-xs uppercase text-text-muted">
            <tr><th className="p-3">SKU</th><th className="p-3">Title</th><th className="p-3">Price</th><th className="p-3">Stock</th></tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="p-3 font-mono text-xs">{p.sku}</td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">{Number(p.price).toFixed(2)}</td>
                <td className="p-3">{p.inStock ? "In stock" : "Out"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
