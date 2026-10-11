export default function CartPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold">Cart</h1>
      <p className="text-sm text-text-muted">Cart lines are server state via TanStack Query (see domains/cart/use-cart.ts).</p>
    </div>
  );
}
