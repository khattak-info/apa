import Layout from "../components/Layout";
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

/**
 * Default 404 page, displayed when a user attempts to access a non-existent route,
 * with automatic redirection to the home page after 3 seconds.
 */
const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigation function

  // Effect 1: Log the 404 error
  useEffect(() => {
    console.error(
      "404 not found: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Effect 2: Redirect to home page after 3 seconds (3000ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirects the user to the root path
    }, 4000);

    // Cleanup: This prevents memory leaks and unintended behavior if the component is
    // unmounted before the 4 seconds are up.
    return () => clearTimeout(timer);
  }, [navigate]);

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

      {/* Mission Statement and 404 Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">404 Not Found</h2>
            {/* Added message about the automatic redirect */}
            <p className="text-xl text-red-600 font-semibold mb-4">
              The requested page `{location.pathname}` could not be found.
            </p>
            <p className="text-lg text-gray-700">
              You will be automatically redirected to the Homepage in 4 seconds...
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;