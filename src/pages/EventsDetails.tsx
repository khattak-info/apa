import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
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
          {event.iframe_html && (
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: event.iframe_html }} />
          )}

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
        {event.donation_link && (
          <form action="https://www.paypal.com/donate" method="post" target="_top" className="flex items-center gap-2">
            <input type="hidden" name="campaign_id" value="LSA3FYW4TA82E" />
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white align-center rounded-lg font-semibold hover:bg-green-700 transition-colors" title="PayPal - The safer, easier way to pay online!">
              Donate via Paypal and Register below
            </button>
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            <p>You can also transfer to APA Donation account<br />
              <strong>BSB:</strong> 012445 <br />
              <strong>Account:</strong> 800288903
            </p>
          </form>
        )}

        {event.iframe_html && (
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: event.iframe_html }} />
        )}

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
