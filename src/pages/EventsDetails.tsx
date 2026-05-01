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
      <div id="event-details" className="max-w-4xl mx-auto py-16 px-4">
        <Link to="/events" className="text-green-700 hover:underline mb-8 inline-block">
          &larr; Back to all events
        </Link>

        <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
        <br />
        <form action="https://www.paypal.com/donate" method="post" target="_top" className="flex items-center gap-2">
          <input type="hidden" name="campaign_id" value="LSA3FYW4TA82E" />
          <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white align-center rounded-lg font-semibold hover:bg-green-700 transition-colors" title="PayPal - The safer, easier way to pay online!">
            Donate via Paypal and Register below
          </button>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          <p>You can also transfer to APA Donation account<br />
            <strong>BSB:</strong> 012445 <br />
            <strong>Account:</strong> 800288903
          </p>
        </form>

        <div className="mt-8" dangerouslySetInnerHTML={{ __html: event.iframe }} />

        {/* <img src={event.image} alt={event.title} className="w-full h-96 o?bject-cover rounded-lg mb-8" /> */}


        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>
        </div>

        <p className="text-lg text-gray-700">{event.description}</p>
      </div>
    </Layout>
  );
}
export default EventDetails;