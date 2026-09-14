import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Dashboard() {
  const { hasRole, isAdmin } = useAuth();

  const cards = [
    { to: "/admin/events", label: "Events", desc: "Add, edit or remove events, upload event images.", show: hasRole("events_editor") },
    { to: "/admin/council", label: "Council", desc: "Manage council member profiles and photos.", show: hasRole("council_editor") },
    { to: "/admin/members", label: "Members", desc: "Manage the membership roster (private records).", show: hasRole("members_editor") },
    { to: "/admin/users", label: "Users & Roles", desc: "Grant or revoke admin access for other users.", show: isAdmin },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.filter((c) => c.show).map((c) => (
          <Link key={c.to} to={c.to} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{c.label}</h3>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </Link>
        ))}
        {cards.every((c) => !c.show) && (
          <p className="text-gray-500">You don't have any sections assigned yet. Ask an admin to grant you a role.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
