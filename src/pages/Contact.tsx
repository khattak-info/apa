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
            <form className="space-y-6" name="contact" netlify>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition">Send Message</button>
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
          <p className="text-gray-700 mb-2">Phone: <span className="text-green-700">+61 400 000 000</span></p>
          <p className="text-gray-700">Address: <span className="text-green-700">Sydney, NSW, Australia</span></p>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;