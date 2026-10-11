import { CheckoutForm } from "@/domains/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold">Checkout</h1>
      <CheckoutForm />
    </div>
  );
}
