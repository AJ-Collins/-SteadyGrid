// Bare shell for the admin surface: console pages add their own sidebar via
// the (console) layout; /login renders without chrome.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
