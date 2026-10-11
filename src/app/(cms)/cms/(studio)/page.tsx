import { db } from "@/shared/lib/db";

export default async function CmsHomePage() {
  const blocks = await db.contentBlock.findMany({ orderBy: { updatedAt: "desc" } }).catch(() => []);
  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold">Site content</h1>
      {blocks.length === 0 ? (
        <p className="text-sm text-text-muted">No content blocks yet. Seed the database, then edit blocks via PUT /api/content.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {blocks.map((b) => (
            <li key={b.id} className="rounded-lg border bg-white p-4 text-sm">
              <span className="font-mono text-xs">{b.key}</span> — {b.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
