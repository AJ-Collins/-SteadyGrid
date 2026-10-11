"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages < 1) return null;
  return (
    <div className="mb-4 mt-8 flex justify-center space-x-2">
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="flex h-10 w-10 items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange?.(page)}
          className={cn(
            "flex h-10 w-10 items-center justify-center border text-sm font-bold",
            page === currentPage
              ? "border-black bg-surface text-white"
              : "border-gray-300 text-gray-700 hover:bg-gray-50",
          )}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="flex h-10 w-10 items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
