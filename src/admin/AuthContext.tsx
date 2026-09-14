import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import type { Enums } from "../types/supabase";

export type AppRole = Enums<"app_role">;

interface AuthState {
  session: Session | null;
  roles: AppRole[];
  loading: boolean;
  isAdmin: boolean;
  hasRole: (role: AppRole) => boolean;
  signOut: () => Promise<void>;
  refreshRoles: () => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [roles, setRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  const loadRoles = async (userId: string | undefined) => {
    if (!userId) {
      setRoles([]);
      return;
    }
    const { data } = await supabase.from("admin_roles").select("role").eq("user_id", userId);
    setRoles((data ?? []).map((r) => r.role));
  };

  useEffect(() => {
    let cancelled = false;

    supabase.auth.getSession().then(async ({ data }) => {
      if (cancelled) return;
      setSession(data.session);
      await loadRoles(data.session?.user.id);
      if (!cancelled) setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession);
      await loadRoles(newSession?.user.id);
      setLoading(false);
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  const isAdmin = roles.includes("admin");
  const hasRole = (role: AppRole) => isAdmin || roles.includes(role);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const refreshRoles = async () => {
    await loadRoles(session?.user.id);
  };

  return (
    <AuthContext.Provider value={{ session, roles, loading, isAdmin, hasRole, signOut, refreshRoles }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
