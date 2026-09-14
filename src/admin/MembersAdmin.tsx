import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Tables, TablesInsert } from "../types/supabase";

type MemberRow = Tables<"members">;
type MemberDraft = TablesInsert<"members">;

const emptyDraft: MemberDraft = {
  member_code: "",
  name: "",
  gender: "",
  dob: "",
  identity_number: "",
  membership_status: "Active",
  year_of_first_membership: new Date().getFullYear(),
  years_active: 0,
  committee_member: false,
  voter: true,
};

function MembersAdmin() {
  const [members, setMembers] = useState<MemberRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<MemberDraft & { id?: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("members").select("*").order("name");
    if (error) setError(error.message);
    setMembers(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startNew = () => setEditing({ ...emptyDraft });
  const startEdit = (m: MemberRow) => setEditing({ ...m });
  const cancel = () => setEditing(null);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setError(null);
    const { id, ...rest } = editing;
    const result = id
      ? await supabase.from("members").update(rest).eq("id", id)
      : await supabase.from("members").insert(rest);
    setSaving(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    setEditing(null);
    load();
  };

  const handleDelete = async (m: MemberRow) => {
    if (!confirm(`Remove member "${m.name}" (${m.member_code})? This cannot be undone.`)) return;
    const { error } = await supabase.from("members").delete().eq("id", m.id);
    if (error) setError(error.message);
    load();
  };

  if (editing) {
    return (
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{editing.id ? "Edit Member" : "New Member"}</h1>
        <p className="text-sm text-amber-600 mb-6">This record contains private data (DOB, ID number). It is never shown on the public site.</p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <Field label="Member code">
            <input className="input" value={editing.member_code} onChange={(e) => setEditing({ ...editing, member_code: e.target.value })} />
          </Field>
          <Field label="Name">
            <input className="input" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Gender">
              <select className="input" value={editing.gender ?? ""} onChange={(e) => setEditing({ ...editing, gender: e.target.value })}>
                <option value="">Not specified</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Field>
            <Field label="Date of birth">
              <input type="date" className="input" value={editing.dob ?? ""} onChange={(e) => setEditing({ ...editing, dob: e.target.value })} />
            </Field>
          </div>
          <Field label="Identity / ID number">
            <input className="input" value={editing.identity_number ?? ""} onChange={(e) => setEditing({ ...editing, identity_number: e.target.value })} />
          </Field>
          <Field label="Membership status">
            <select className="input" value={editing.membership_status} onChange={(e) => setEditing({ ...editing, membership_status: e.target.value })}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Expired">Expired</option>
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Year of first membership">
              <input type="number" className="input" value={editing.year_of_first_membership ?? ""} onChange={(e) => setEditing({ ...editing, year_of_first_membership: Number(e.target.value) })} />
            </Field>
            <Field label="Years active">
              <input type="number" className="input" value={editing.years_active ?? 0} onChange={(e) => setEditing({ ...editing, years_active: Number(e.target.value) })} />
            </Field>
          </div>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!editing.voter} onChange={(e) => setEditing({ ...editing, voter: e.target.checked })} />
              Voter
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!editing.committee_member} onChange={(e) => setEditing({ ...editing, committee_member: e.target.checked })} />
              Committee member
            </label>
          </div>
          <div className="flex gap-3 pt-4">
            <button onClick={handleSave} disabled={saving} className="bg-green-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-800 disabled:opacity-50">
              {saving ? "Saving..." : "Save"}
            </button>
            <button onClick={cancel} className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Members</h1>
        <button onClick={startNew} className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800">
          + New Member
        </button>
      </div>
      <p className="text-sm text-amber-600 mb-6">Private records — DOB and ID numbers are visible here only to members-editors and admins.</p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Voter</th>
                <th className="px-4 py-3">Committee</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {members.map((m) => (
                <tr key={m.id}>
                  <td className="px-4 py-3 text-gray-600">{m.member_code}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{m.name}</td>
                  <td className="px-4 py-3 text-gray-600">{m.membership_status}</td>
                  <td className="px-4 py-3 text-gray-600">{m.voter ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-gray-600">{m.committee_member ? "Yes" : "No"}</td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <button onClick={() => startEdit(m)} className="text-green-700 hover:underline">Edit</button>
                    <button onClick={() => handleDelete(m)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  );
}

export default MembersAdmin;
