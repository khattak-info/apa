import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth, AppRole } from "./AuthContext";

interface AdminUser {
  user_id: string;
  email: string;
  roles: AppRole[];
}

const allRoles: AppRole[] = ["admin", "events_editor", "council_editor", "members_editor"];

function UsersAdmin() {
  const { session, refreshRoles } = useAuth();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.rpc("list_admin_users");
    if (error) setError(error.message);
    setUsers((data as AdminUser[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const toggleRole = async (user: AdminUser, role: AppRole) => {
    setBusy(`${user.user_id}-${role}`);
    setError(null);
    const has = user.roles.includes(role);
    const result = has
      ? await supabase.from("admin_roles").delete().eq("user_id", user.user_id).eq("role", role)
      : await supabase.from("admin_roles").insert({ user_id: user.user_id, role });
    setBusy(null);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    await load();
    if (user.user_id === session?.user.id) {
      await refreshRoles();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Users & Roles</h1>
      <p className="text-sm text-gray-500 mb-6">
        Anyone can create an account at <code className="bg-gray-100 px-1 rounded">/admin/signup</code>, but they can't edit
        anything until you grant them a role here.
      </p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3">Email</th>
                {allRoles.map((r) => <th key={r} className="px-4 py-3">{r}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((u) => (
                <tr key={u.user_id}>
                  <td className="px-4 py-3 font-medium text-gray-900">{u.email}</td>
                  {allRoles.map((r) => (
                    <td key={r} className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={u.roles.includes(r)}
                        disabled={busy === `${u.user_id}-${r}`}
                        onChange={() => toggleRole(u, r)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UsersAdmin;
