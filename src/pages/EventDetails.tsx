import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useZeffyScript } from "../hooks/useZeffyScript";
import { supabase } from "../lib/supabase";
import type { Tables } from "../types/supabase";

import React from 'react';

interface ZeffyEmbedProps {
formId: string;
formType?: 'donation-form' | 'ticketing' | 'membership';
locale?: string;
title?: string;
}

export const ZeffyEmbed: React.FC<ZeffyEmbedProps> = ({
formId,
formType = 'donation-form',
locale = 'en',
title = 'Zeffy Fundraising Form'
}) => {
const embedUrl = `https://www.zeffy.com/embed/ticketing/pashtun-culture-day`;

return (
<div style={{ width: '100%', minHeight: '600px', overflow: 'hidden' }}>
    <iframe
    title={title}
    src={embedUrl}
    allow="payment"
    style={{
        width: '100%',
        height: '100%',
        minHeight: '600px',
        border: 'none',
    }}
    />
</div>
);
};




type EventRow = Tables<"events">;

// innerHTML never runs <script>, and the fallback iframe only has data-zeffy-embed-src,
// so drop the script/placeholder, reveal the fallback and set the iframe src.
function prepareEmbed(html: string): string {
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll("script, [data-zeffy-embed]:not([data-zeffy-embed-fallback])").forEach((el) => el.remove());
    doc.querySelectorAll<HTMLElement>("[data-zeffy-embed-fallback]").forEach((el) => {
        el.style.display = "block";
    });
    doc.querySelectorAll<HTMLIFrameElement>("iframe[data-zeffy-embed-src]").forEach((frame) => {
        frame.setAttribute("src", frame.getAttribute("data-zeffy-embed-src") ?? "");
    });
    return doc.body.innerHTML;
    }

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

    // The head script only binds to buttons present at page load, so re-run it once the button renders.
    useZeffyScript(!loading && !!event, [event?.id]);

    

    const embedHtml = useMemo(
        () => (event?.iframe_html ? prepareEmbed(event.iframe_html) : ""),
        [event?.iframe_html],
    );

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
            <Link to={event.registration_url} className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors text-sm">
            &rarr; Registration Link if the doesn't load
            </Link>
            <br />
            <button
                type="button"
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
                {...{ "zeffy-form-link": "https://www.zeffy.com/embed/ticketing/pashtun-culture-day?modal=true" }}
            >
                Register Now
            </button>
            
            {embedHtml && <div className="mt-8" dangerouslySetInnerHTML={{ __html: embedHtml }} />}
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