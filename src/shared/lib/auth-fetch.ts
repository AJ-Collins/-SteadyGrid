// Authenticated fetch for client components. Tokens live in HttpOnly
// cookies (never localStorage), so a 401 means the 15-minute access token
// died: refresh once (single-flight, so concurrent calls rotate exactly
// once) and retry the original request a single time.
let inflightRefresh: Promise<boolean> | null = null;

async function tryRefresh(): Promise<boolean> {
  try {
    const res = await fetch("/api/auth/refresh", { method: "POST" });
    return res.ok;
  } catch {
    return false;
  }
}

export async function authFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const first = await fetch(input, init);
  if (first.status !== 401) return first;
  inflightRefresh ??= tryRefresh().finally(() => {
    inflightRefresh = null;
  });
  const refreshed = await inflightRefresh;
  if (!refreshed) return first;
  return fetch(input, init);
}
