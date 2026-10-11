import { expect, test } from "@playwright/test";

test("homepage renders hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("End-to-End Solar, Built Around You").first()).toBeVisible();
});

test("admin dashboard renders", async ({ page }) => {
  await page.goto("/admin");
  await expect(page.getByText("Dashboard")).toBeVisible();
});

test("cms page renders", async ({ page }) => {
  await page.goto("/cms/products");
  await expect(page.getByText("Items for sale")).toBeVisible();
});
