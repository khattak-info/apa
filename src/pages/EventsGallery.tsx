import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabase";
import type { Tables } from "../types/supabase";

type EventRow = Tables<"events">;

function EventsGallery() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const legacyId = Number(id);
      const query = Number.isFinite(legacyId)
        ? supabase.from("events").select("*").eq("legacy_id", legacyId)
        : supabase.from("events").select("*").eq("id", id);
      const { data } = await query.maybeSingle();
      if (!cancelled) {
        setEvent(data);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  useEffect(() => {
    if (event?.gallery_html && event.gallery_html.includes('picflow.com')) {
      if (!(window as any).picflow) {
        (window as any).picflow = true;
        const s = document.createElement('script');
        s.src = 'https://picflow.com/embed/main.js';
        s.type = 'module';
        s.defer = true;
        document.head.appendChild(s);
      }
    }
  }, [event]);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-20">
          <p className="text-gray-500">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!event) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold">Event not found</h1>
          <Link to="/events" className="text-green-700 hover:underline mt-4 inline-block">
            Back to Events
          </Link>
        </div>
      </Layout>
    );
  }

  const timeRange = `${event.start_time ?? ""}${event.end_time ? ` - ${event.end_time}` : ""}`;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Link to="/events" className="text-green-700 hover:underline mb-8 inline-block">
          &larr; Back to all events
        </Link>

        <h1 className="text-4xl font-bold mb-4">Images for the {event.title}</h1>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p><strong>Date:</strong> {event.display_date}</p>
          <p><strong>Time:</strong> {timeRange}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>
          {event.gallery_html && (
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: event.gallery_html }} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default EventsGallery;
