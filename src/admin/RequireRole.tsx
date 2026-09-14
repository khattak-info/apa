import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth, AppRole } from "./AuthContext";

export function RequireRole({ role, children }: { role?: AppRole; children: ReactNode }) {
  const { session, loading, hasRole } = useAuth();

  if (loading) {
    return <div className="p-12 text-center text-gray-500">Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  if (role && !hasRole(role)) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access denied</h1>
        <p className="text-gray-600">You don't have permission to view this section. Ask an admin to grant you access.</p>
      </div>
    );
  }

  return <>{children}</>;
}
