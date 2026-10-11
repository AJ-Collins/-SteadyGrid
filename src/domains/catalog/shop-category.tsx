"use client";

import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { PageHeader } from "@/shared/components/common/page-header";
import { Pagination } from "@/shared/components/common/pagination";
import { ProductCard } from "@/shared/components/common/product-card";
import { BatteriesBanner } from "@/domains/catalog/batteries-banner";
import { ProductFilters } from "@/domains/catalog/product-filters";
import { ProductSort } from "@/domains/catalog/product-sort";
import type { ProductListItem } from "@/server/catalog/services/list-products";

export interface ShopCategoryConfig {
  title: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  description?: string;
  banner?: boolean;
}

interface ShopCategoryProps {
  config: ShopCategoryConfig;
  products: ProductListItem[];
}

// Family-A listing: PageHeader → banner → filter sidebar + sort + product
// grid + pagination. Matches the legacy category-page design exactly.
export function ShopCategory({ config, products }: ShopCategoryProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <PageHeader
        title={config.title}
        breadcrumbs={config.breadcrumbs}
        imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
      />
      <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 py-6 md:px-6 md:py-8 lg:flex-row lg:gap-8">
        {config.banner && (
          <div className="py-8">
            <BatteriesBanner />
          </div>
        )}
        <div className="mb-4 flex gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex h-10 flex-1 items-center justify-center gap-2 border border-gray-300 text-sm font-bold"
          >
            Filters <SlidersHorizontal className="h-4 w-4" />
          </button>
          <div className="flex h-10 flex-1 items-center justify-center">
            <ProductSort />
          </div>
        </div>
        {filtersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-surface bg-opacity-50" onClick={() => setFiltersOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-full max-w-xs overflow-y-auto bg-white shadow-xl">
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <button type="button" aria-label="Close filters" onClick={() => setFiltersOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <ProductFilters />
              </div>
            </div>
          </div>
        )}
        <div className="hidden lg:block">
          <ProductFilters />
        </div>
        <div className="min-w-0 flex-1">
          {config.description && (
            <div className="mb-6">
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{config.description}</p>
            </div>
          )}
          <div className="mb-6 hidden lg:block">
            <ProductSort />
          </div>
          {products.length === 0 ? (
            <p className="py-10 text-center text-sm text-gray-500">
              No products in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  brand={p.brand?.name ?? "SteadyGrid"}
                  title={p.title}
                  sku={p.sku}
                  description={p.description}
                  oldPrice={p.oldPrice}
                  price={p.price}
                  imageUrl={p.imageUrl}
                  inStock={p.inStock}
                />
              ))}
            </div>
          )}
          <Pagination currentPage={1} totalPages={3} />
        </div>
      </main>
    </div>
  );
}
