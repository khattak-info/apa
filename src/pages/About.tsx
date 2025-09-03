import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about our history, values, and commitment to the Pashtun community in Australia
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                The Australian Pashtun Association (APA) was established as a not-for-profit community organization dedicated to supporting the well-being, cultural identity, and integration of Pashtuns living in Australia. Our organization serves as a bridge between our rich cultural heritage and our new home in Australia.
              </p>
              <p className="mb-6">
                Founded on the principles of compassion, cultural pride, and social responsibility, the APA has grown to become a vital support network for Pashtun families and individuals across Australia. We understand the unique challenges faced by our community members as they navigate life in a new country while maintaining their cultural identity.
              </p>
              <p>
                Our commitment extends beyond mere cultural preservation – we actively work to create opportunities for integration, education, and mutual support among community members while fostering understanding and respect within the broader Australian society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach every interaction with empathy and understanding, supporting our community members through both joyful and challenging times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Pride</h3>
              <p className="text-gray-600">
                We celebrate and preserve our rich Pashtun heritage, language, and traditions while embracing our place in Australian society.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Responsibility</h3>
              <p className="text-gray-600">
                We believe in giving back to our community and society, creating positive change through collective action and mutual support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purposes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Purposes</h2>
          
          {/* Main Purposes */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Main Purposes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Funeral Trust Fund</h4>
                    <p className="text-gray-600">
                      Providing comprehensive support for funeral services, repatriation, and hospitalization needs for our premium members and their families.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Pashto Language & Culture Promotion</h4>
                    <p className="text-gray-600">
                      Preserving and promoting the Pashto language and Pashtun cultural traditions through educational programs and community events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Youth Empowerment</h4>
                    <p className="text-gray-600">
                      Mentoring and empowering young Pashtuns through educational opportunities, leadership development, and community engagement programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Identity & Pashtunwali Values</h4>
                    <p className="text-gray-600">
                      Strengthening community identity and promoting the traditional values of Pashtunwali including hospitality, honor, and justice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Purposes */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Additional Purposes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Volunteer Support Networks</h4>
                <p className="text-gray-600 text-sm">
                  Creating support systems for isolated individuals, families, and elders within our community.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ethical Fundraising</h4>
                <p className="text-gray-600 text-sm">
                  Facilitating ethical fundraising initiatives for community members experiencing distress or hardship.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Celebrations</h4>
                <p className="text-gray-600 text-sm">
                  Organizing poetry gatherings, storytelling sessions, and cultural celebrations throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Structure</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Governance Model</h3>
              <p className="text-gray-600 mb-6">
                The Australian Pashtun Association operates under a structured governance model that honors traditional Pashtun decision-making processes while meeting modern organizational requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Executive Council (Pashtun Jirga)</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our Executive Council, known as the Pashtun Jirga, consists of respected community elders who provide wisdom, guidance, and oversight to the organization's activities and decisions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Provides strategic guidance</li>
                    <li>• Upholds traditional values</li>
                    <li>• Resolves community disputes</li>
                    <li>• Maintains cultural authenticity</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Executive Committee</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    The Executive Committee handles the day-to-day operations of the association, implementing programs and managing administrative responsibilities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Manages daily operations</li>
                    <li>• Implements programs</li>
                    <li>• Handles membership applications</li>
                    <li>• Coordinates events and activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;