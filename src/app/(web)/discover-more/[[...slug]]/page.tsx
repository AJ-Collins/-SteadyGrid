export default function DiscoverMorePage({ params }: { params: Promise<{ slug?: string[] }> }) {
  return <DiscoverContent params={params} />;
}

async function DiscoverContent({ params }: { params: Promise<{ slug?: string[] }> }) {
  const slug = ((await params).slug ?? []).join("/");
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10">
      <h1 className="mb-4 text-3xl font-extrabold capitalize">{slug.replaceAll("-", " ") || "Discover More"}</h1>
      <p className="text-sm text-text-muted">Editable via CMS content blocks (/api/content).</p>
    </div>
  );
}
