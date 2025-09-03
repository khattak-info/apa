import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Australian Pashtun Association
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              د استرالیا د پښتنو ټولنه
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Supporting the well-being, cultural identity, and integration of Pashtuns in Australia through community services, cultural preservation, and youth empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Become a Member
              </Link>
              <Link
                to="/contact"
                className="bg-white text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Support Our Cause
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The Australian Pashtun Association is committed to fostering a strong, united Pashtun community in Australia while preserving our rich cultural heritage and supporting the integration and well-being of all community members.
            </p>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Initiatives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Funeral Trust Fund</h3>
              <p className="text-gray-600">
                Providing financial, religious, and cultural support for funeral services, repatriation, and hospitalization for our premium members.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pashto Language & Culture</h3>
              <p className="text-gray-600">
                Promoting and preserving the Pashto language through educational programs, poetry gatherings, and cultural celebrations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Youth Empowerment</h3>
              <p className="text-gray-600">
                Mentoring and empowering young Pashtuns through educational opportunities, leadership development, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us for cultural celebrations, educational programs, and community gatherings</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-sm text-green-700 font-semibold mb-2">March 21, 2024</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nowruz Celebration</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join us for the traditional New Year celebration with cultural performances, traditional food, and community activities.
              </p>
              <Link to="/events" className="text-green-700 font-medium hover:text-green-800">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-sm text-green-700 font-semibold mb-2">April 15, 2024</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Poetry Gathering</h3>
              <p className="text-gray-600 text-sm mb-4">
                An evening of Pashto poetry, storytelling, and literary discussions celebrating our rich literary heritage.
              </p>
              <Link to="/events" className="text-green-700 font-medium hover:text-green-800">
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-sm text-green-700 font-semibold mb-2">May 8, 2024</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">International Pashto Day</h3>
              <p className="text-gray-600 text-sm mb-4">
                Celebrating the beauty and importance of the Pashto language with educational workshops and cultural activities.
              </p>
              <Link to="/events" className="text-green-700 font-medium hover:text-green-800">
                Learn More →
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/events"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium mb-4">
            "وايي اغيار چې د دوزخ ژبه ده زه به جنت ته د پښتو سره ځم"
          </blockquote>
          <p className="text-lg text-green-100">
            "They say the Pashto language is the language of hell, but I will go to heaven with it"
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-300 mb-8">
            Become part of a vibrant community dedicated to preserving Pashtun culture and supporting each other in Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Join Today
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;