import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import eventsData from "../data/eventsData.json";

function EventDetails() {
  // 1. Get the event ID from the URL
  const { id } = useParams();

  // 2. Find the specific event in your JSON data
  // Note: useParams returns strings, so we convert it to a Number to match your JSON ids
  const event = eventsData.find((e) => e.id === Number(id));

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

        <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-lg mb-8" />
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>
          {event.url ? (
            event.url.includes("luma.com") || event.url.includes("lu.ma") ? (
              <a
                href={event.url}
                className="luma-checkout--button bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors text-sm inline-block"
                data-luma-action="checkout"
              >
                Register Now
                {event.memberDiscount && (
                  <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                    Member Discount
                  </span>
                )}
              </a>
            ) : (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors text-sm inline-block"
              >
                Buy Tickets
              </a>
            )
          ) : (
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg font-medium cursor-not-allowed opacity-50">
              Registration Closed
            </button>
          )}
        </div>

        <p className="text-lg text-gray-700">{event.description}</p>

        <p className="text-lg text-gray-700">{event.iframe}</p>
      </div>
    </Layout>
  );
}

export default EventDetails;