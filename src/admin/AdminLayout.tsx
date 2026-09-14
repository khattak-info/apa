import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

function AdminLayout() {
  const { session, roles, isAdmin, hasRole, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const navItem = (to: string, label: string) => (
    <Link
      to={to}
      className={`block px-4 py-2 rounded-md text-sm font-medium ${
        location.pathname === to ? "bg-green-700 text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r px-4 py-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900">APA Admin</h2>
          <p className="text-xs text-gray-500 truncate">{session?.user.email}</p>
          <p className="text-xs text-gray-400 mt-1">{roles.length ? roles.join(", ") : "no roles yet"}</p>
        </div>
        <nav className="space-y-1 flex-1">
          {navItem("/admin", "Dashboard")}
          {hasRole("events_editor") && navItem("/admin/events", "Events")}
          {hasRole("council_editor") && navItem("/admin/council", "Council")}
          {hasRole("members_editor") && navItem("/admin/members", "Members")}
          {isAdmin && navItem("/admin/users", "Users & Roles")}
        </nav>
        <div className="space-y-2 pt-4 border-t">
          <Link to="/" className="block px-4 py-2 rounded-md text-sm text-gray-500 hover:bg-gray-100">
            &larr; Back to site
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 rounded-md text-sm text-red-600 hover:bg-red-50"
          >
            Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
