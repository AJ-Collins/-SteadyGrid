import { db } from "@/shared/lib/db";

export default async function AdminUsersPage() {
  const users = await db.user.findMany({ take: 50, orderBy: { createdAt: "desc" } }).catch(() => []);
  return (
    <div>
      <h1 className="mb-6 text-3xl font-extrabold">Users</h1>
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b text-xs uppercase text-text-muted">
            <tr><th className="p-3">Email</th><th className="p-3">Name</th><th className="p-3">Role</th></tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-0">
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.name ?? "—"}</td>
                <td className="p-3">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
