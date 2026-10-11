import { describe, expect, it } from "vitest";
import { loginSchema } from "@/shared/schemas/login-schema";
import { productSchema } from "@/shared/schemas/product-schema";

describe("loginSchema", () => {
  it("rejects invalid email", () => {
    expect(loginSchema.safeParse({ email: "x", password: "12345678" }).success).toBe(false);
  });

  it("accepts valid input", () => {
    expect(
      loginSchema.safeParse({ email: "a@b.com", password: "12345678" }).success,
    ).toBe(true);
  });
});

describe("productSchema", () => {
  it("rejects negative price", () => {
    expect(
      productSchema.safeParse({
        sku: "S1",
        slug: "s1",
        title: "Test product",
        description: "A long enough description",
        price: -5,
      }).success,
    ).toBe(false);
  });
});
