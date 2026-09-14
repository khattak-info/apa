import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { uploadMediaFile } from "./uploadImage";
import type { Tables, TablesInsert } from "../types/supabase";

type CouncilRow = Tables<"council_members">;
type CouncilDraft = TablesInsert<"council_members">;

const roleOptions = [
  "President",
  "Senior Vice President",
  "Vice President",
  "General Secretary",
  "Cultural Secretary",
  "Media Secretary",
  "Treasurer/Finance Secretary",
  "Executive Committee Member",
];

const emptyDraft: CouncilDraft = {
  name: "",
  role: roleOptions[0],
  description: "",
  email: "",
  term: "",
  photo_url: "",
  display_order: 0,
};

function CouncilAdmin() {
  const [members, setMembers] = useState<CouncilRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<CouncilDraft & { id?: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("council_members").select("*").order("display_order");
    if (error) setError(error.message);
    setMembers(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startNew = () => setEditing({ ...emptyDraft, display_order: members.length + 1 });
  const startEdit = (m: CouncilRow) => setEditing({ ...m });
  const cancel = () => setEditing(null);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setError(null);
    const { id, ...rest } = editing;
    const result = id
      ? await supabase.from("council_members").update(rest).eq("id", id)
      : await supabase.from("council_members").insert(rest);
    setSaving(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    setEditing(null);
    load();
  };

  const handleDelete = async (m: CouncilRow) => {
    if (!confirm(`Remove "${m.name}" from the council?`)) return;
    const { error } = await supabase.from("council_members").delete().eq("id", m.id);
    if (error) setError(error.message);
    load();
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editing) return;
    setUploading(true);
    setError(null);
    try {
      const url = await uploadMediaFile(file, "council");
      setEditing({ ...editing, photo_url: url });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  if (editing) {
    return (
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{editing.id ? "Edit Council Member" : "New Council Member"}</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <Field label="Name">
            <input className="input" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
          </Field>
          <Field label="Role">
            <select className="input" value={editing.role} onChange={(e) => setEditing({ ...editing, role: e.target.value })}>
              {roleOptions.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="Description">
            <textarea className="input" rows={3} value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
          </Field>
          <Field label="Email">
            <input className="input" value={editing.email ?? ""} onChange={(e) => setEditing({ ...editing, email: e.target.value })} />
          </Field>
          <Field label="Term">
            <input className="input" placeholder="2026-2028" value={editing.term ?? ""} onChange={(e) => setEditing({ ...editing, term: e.target.value })} />
          </Field>
          <Field label="Photo">
            <div className="flex items-center gap-4">
              {editing.photo_url && <img src={editing.photo_url} alt="" className="w-20 h-20 object-cover rounded-full" />}
              <input type="file" accept="image/*" onChange={handlePhotoUpload} disabled={uploading} />
              {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
            </div>
          </Field>
          <Field label="Display order">
            <input type="number" className="input" value={editing.display_order ?? 0} onChange={(e) => setEditing({ ...editing, display_order: Number(e.target.value) })} />
          </Field>
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Council</h1>
        <button onClick={startNew} className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800">
          + New Council Member
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Term</th>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {members.map((m) => (
                <tr key={m.id}>
                  <td className="px-4 py-3 font-medium text-gray-900">{m.name}</td>
                  <td className="px-4 py-3 text-gray-600">{m.role}</td>
                  <td className="px-4 py-3 text-gray-600">{m.term}</td>
                  <td className="px-4 py-3 text-gray-600">{m.display_order}</td>
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

export default CouncilAdmin;
