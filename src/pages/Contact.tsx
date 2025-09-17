import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the Australian Pashtun Association for questions, support, or collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h2>
            <form name="contact" method="POST" data-netlify="true" className="space-y-6" netlify>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Question Regarding
                </label>
                <select
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="membership">Membership</option>
                  <option value="events">Events</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Community Support</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 mt-6 text-center">We respect your privacy. Your information will only be used to respond to your inquiry.</p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Contact</h2>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:info@pashtun.org.au" className="text-green-700 underline">info@pashtun.org.au</a></p>
          <p className="text-gray-700 mb-2">Phone: <span className="text-green-700">+61 432-800-789</span></p>
          <p className="text-gray-700">Address: <span className="text-green-700">Sydney, NSW, Australia</span></p>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
