import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import HtmlEmbed from "../components/HtmlEmbed";
import { useZeffyScript } from "../hooks/useZeffyScript";
import { supabase } from "../lib/supabase";
import type { Tables } from "../types/supabase";

type EventRow = Tables<"events">;

function EventDetails() {
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

  useZeffyScript(!loading && !!event, [event?.id]);

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

  const deadline = event.registration_deadline ? new Date(event.registration_deadline).getTime() : null;
  const isClosed = deadline !== null && deadline < Date.now();
  const timeRange = `${event.start_time ?? ""}${event.end_time ? ` - ${event.end_time}` : ""}`;

  const zeffyUrl = event.registration_url?.includes("zeffy.com") ? event.registration_url : null;
  const zeffyEmbedUrl = zeffyUrl
    ? zeffyUrl.split("?")[0].replace(/zeffy\.com\/(?:[a-z]{2}(?:-[A-Z]{2})?\/)?(?:embed\/)?/, "zeffy.com/embed/")
    : null;
  const embed = event.iframe_html ? (
    <HtmlEmbed className="mt-8" html={event.iframe_html} />
  ) : zeffyEmbedUrl ? (
    <div className="mt-8">
      <div className="relative w-full" style={{ height: "1000px" }}>
        <iframe
          title={`${event.title} registration`}
          src={zeffyEmbedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allow="payment"
        />
      </div>
      <a href={zeffyUrl!} target="_blank" rel="noreferrer" className="text-green-700 hover:underline">
        Open registration in a new tab
      </a>
    </div>
  ) : null;

  if (isClosed) {
    return (
      <Layout>
        <div id="event-details" className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-3xl font-bold text-red-500" style={{ textAlign: "center" }}>Event Registration is closed</h1>
          <Link to="/events" className="text-green-700 hover:underline mb-8 inline-block">
            &larr; Back to all events
          </Link>
          <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
          <p className="text-lg text-gray-700">{event.description}</p>
          <br />
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p><strong>Date:</strong> {event.display_date}</p>
            <p><strong>Time:</strong> {timeRange}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Category:</strong> {event.category}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div id="event-details" className="max-w-4xl mx-auto py-16 px-4">
        <Link to="/events" className="text-green-700 hover:underline mb-8 inline-block">
          &larr; Back to all events
        </Link>
        <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
        <p className="text-lg text-gray-700">{event.description}</p>
        <br />
        {embed}
        <br />
        Here is the event information:
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p><strong>Date:</strong> {event.display_date}</p>
          <p><strong>Time:</strong> {timeRange}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>
        </div>
      </div>
    </Layout>
  );
}
export default EventDetails;
