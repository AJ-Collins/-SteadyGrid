export interface PageParams {
  page: number;
  pageSize: number;
  skip: number;
  take: number;
}

const DEFAULT_PAGE_SIZE = 24;
const MAX_PAGE_SIZE = 100;

export function parsePageParams(searchParams: URLSearchParams): PageParams {
  const page = Math.max(1, Number(searchParams.get("page") ?? 1) || 1);
  const rawSize = Number(searchParams.get("pageSize") ?? DEFAULT_PAGE_SIZE) || DEFAULT_PAGE_SIZE;
  const pageSize = Math.min(MAX_PAGE_SIZE, Math.max(1, rawSize));
  return { page, pageSize, skip: (page - 1) * pageSize, take: pageSize };
}
