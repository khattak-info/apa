import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import eventsData from "../data/eventsData.json";

function EventsGallery() {
  // 1. Get the event ID from the URL
  const { id } = useParams();

  // 2. Find the specific event in your JSON data
  // Note: useParams returns strings, so we convert it to a Number to match your JSON ids
  const event = eventsData.find((e) => e.id === Number(id));

  useEffect(() => {
    if (event?.gallery && event.gallery.includes('picflow.com')) {
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

  // 3. Handle the case where the event ID doesn't exist
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

  // 4. Render your single event page
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Link to="/events" className="text-green-700 hover:underline mb-8 inline-block">
          &larr; Back to all events
        </Link>


        <h1 className="text-4xl font-bold mb-4">Images for the{event.title}</h1>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>
          {event.gallery && (
            <div className="mt-8" dangerouslySetInnerHTML={{ __html: event.gallery || "" }} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default EventsGallery;