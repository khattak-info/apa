import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { uploadMediaFile } from "./uploadImage";
import type { Tables, TablesInsert } from "../types/supabase";

type EventRow = Tables<"events">;
type EventDraft = TablesInsert<"events">;

const emptyDraft: EventDraft = {
  title: "",
  event_date: "",
  display_date: "",
  start_time: "",
  end_time: "",
  location: "",
  category: "Community",
  description: "",
  member_discount: false,
  image_url: "",
  registration_url: "",
  donation_link: "",
  iframe_html: "",
  iframe_donation_html: "",
  gallery_html: "",
  main_event: false,
  registration_deadline: null,
};

function EventsAdmin() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<EventDraft & { id?: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("events").select("*").order("event_date", { ascending: false });
    if (error) setError(error.message);
    setEvents(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startNew = () => setEditing({ ...emptyDraft });
  const startEdit = (event: EventRow) => setEditing({ ...event });
  const cancel = () => setEditing(null);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    setError(null);
    const { id, ...rest } = editing;
    const payload = { ...rest, registration_deadline: rest.registration_deadline || null };
    const result = id
      ? await supabase.from("events").update(payload).eq("id", id)
      : await supabase.from("events").insert(payload);
    setSaving(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    setEditing(null);
    load();
  };

  const handleDelete = async (event: EventRow) => {
    if (!confirm(`Delete "${event.title}"? This cannot be undone.`)) return;
    const { error } = await supabase.from("events").delete().eq("id", event.id);
    if (error) setError(error.message);
    load();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editing) return;
    setUploadingImage(true);
    setError(null);
    try {
      const url = await uploadMediaFile(file, "events");
      setEditing({ ...editing, image_url: url });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploadingImage(false);
    }
  };

  if (editing) {
    return (
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{editing.id ? "Edit Event" : "New Event"}</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <Field label="Title">
            <input className="input" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Event date">
              <input type="date" className="input" value={editing.event_date ?? ""} onChange={(e) => setEditing({ ...editing, event_date: e.target.value })} />
            </Field>
            <Field label="Display date (e.g. 'October 10, 2026')">
              <input className="input" value={editing.display_date ?? ""} onChange={(e) => setEditing({ ...editing, display_date: e.target.value })} />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Start time">
              <input className="input" placeholder="11:00 AM" value={editing.start_time ?? ""} onChange={(e) => setEditing({ ...editing, start_time: e.target.value })} />
            </Field>
            <Field label="End time">
              <input className="input" placeholder="3:00 PM" value={editing.end_time ?? ""} onChange={(e) => setEditing({ ...editing, end_time: e.target.value })} />
            </Field>
          </div>
          <Field label="Location">
            <input className="input" value={editing.location ?? ""} onChange={(e) => setEditing({ ...editing, location: e.target.value })} />
          </Field>
          <Field label="Category">
            <select className="input" value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })}>
              {["Community", "Cultural", "Educational", "Youth"].map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Description">
            <textarea className="input" rows={4} value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
          </Field>
          <Field label="Event image">
            <div className="flex items-center gap-4">
              {editing.image_url && <img src={editing.image_url} alt="" className="w-24 h-24 object-cover rounded" />}
              <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} />
              {uploadingImage && <span className="text-sm text-gray-500">Uploading...</span>}
            </div>
          </Field>
          <Field label="Registration URL (Luma link, etc.)">
            <input className="input" value={editing.registration_url ?? ""} onChange={(e) => setEditing({ ...editing, registration_url: e.target.value })} />
          </Field>
          <Field label="Donation link">
            <input className="input" value={editing.donation_link ?? ""} onChange={(e) => setEditing({ ...editing, donation_link: e.target.value })} />
          </Field>
          <Field label="Embed iframe HTML (e.g. Luma embed)">
            <textarea className="input font-mono text-xs" rows={3} value={editing.iframe_html ?? ""} onChange={(e) => setEditing({ ...editing, iframe_html: e.target.value })} />
          </Field>
          <Field label="Donation iframe HTML">
            <textarea className="input font-mono text-xs" rows={3} value={editing.iframe_donation_html ?? ""} onChange={(e) => setEditing({ ...editing, iframe_donation_html: e.target.value })} />
          </Field>
          <Field label="Gallery embed HTML (Picflow, etc.)">
            <textarea className="input font-mono text-xs" rows={3} value={editing.gallery_html ?? ""} onChange={(e) => setEditing({ ...editing, gallery_html: e.target.value })} />
          </Field>
          <Field label="Registration deadline (optional)">
            <input
              type="datetime-local"
              className="input"
              value={editing.registration_deadline ? editing.registration_deadline.slice(0, 16) : ""}
              onChange={(e) => setEditing({ ...editing, registration_deadline: e.target.value ? new Date(e.target.value).toISOString() : null })}
            />
          </Field>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!editing.member_discount} onChange={(e) => setEditing({ ...editing, member_discount: e.target.checked })} />
              Member discount
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!editing.main_event} onChange={(e) => setEditing({ ...editing, main_event: e.target.checked })} />
              Featured on homepage (main event)
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Events</h1>
        <button onClick={startNew} className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800">
          + New Event
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
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Featured</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {events.map((event) => (
                <tr key={event.id}>
                  <td className="px-4 py-3 font-medium text-gray-900">{event.title}</td>
                  <td className="px-4 py-3 text-gray-600">{event.display_date}</td>
                  <td className="px-4 py-3 text-gray-600">{event.category}</td>
                  <td className="px-4 py-3 text-gray-600">{event.main_event ? "Yes" : ""}</td>
                  <td className="px-4 py-3 text-right space-x-3">
                    <button onClick={() => startEdit(event)} className="text-green-700 hover:underline">Edit</button>
                    <button onClick={() => handleDelete(event)} className="text-red-600 hover:underline">Delete</button>
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

export default EventsAdmin;
