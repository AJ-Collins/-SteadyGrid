// Bare shell for the cms surface: studio pages add their own sidebar via
// the (studio) layout; /login renders without chrome.
export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
