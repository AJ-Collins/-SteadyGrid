"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/shared/lib/api-client";

export interface ContentBlockDto {
  id: string;
  key: string;
  title: string;
  payload: Record<string, unknown>;
  published: boolean;
}

export function useContentBlock(key: string) {
  return useQuery({
    queryKey: ["content", key],
    queryFn: () => apiFetch<ContentBlockDto>(`/api/content?key=${key}`),
    staleTime: 60_000,
  });
}
