import { useState } from "react";
import Layout from "../components/Layout";
import allMembers from "../data/membersData.json";

/**
 * Utility function to generate initials for the placeholder image.
 * @param {string} name - The member's full name.
 * @returns {string} The first two initials (e.g., "Intikhab Alam" -> "IA").
 */
const getInitials = (name) => {
  if (!name) return 'AP';
  const parts = name.split(/\s+/);
  if (parts.length >= 2) {
    return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

function Council() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "President", "Vice President", "Treasurer", "Committee Member"];

  const members = allMembers;

  const filteredMembers = selectedCategory === "All" 
    ? members 
    : members.filter(member => member.role === selectedCategory);
    return (
        <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Governance Model</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Australian Pashtun Association operates under a structured governance model that honors traditional Pashtun decision-making processes while meeting modern organizational 
                requirements. The governance framework is designed to ensure transparency, accountability, and community representation.
                </p>
            </div>
            </div>
        </section>

          {/* Our Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
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

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Structure</h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((role) => (
                <button
                    key={role}
                    onClick={() => setSelectedCategory(role)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors shadow-sm ${
                    selectedCategory === role
                        ? "bg-green-700 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    }`}
                >
                    {role}
                </button>
                ))}
            </div>
            </div>
        </section>

        {/* Grid */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                    <div key={member.id} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                    <div className="relative">                      
                        <img
                        src={`https://placehold.co/400x400/10B981/ffffff?text=${getInitials(member.name)}`}
                        alt={`Profile of ${member.name}`}
                        className="w-full h-56 object-cover bg-gray-200"
                        />
                        
                        <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
                            member.role === "President" ? "bg-green-700 text-white" :
                            member.role === "Vice President" ? "bg-blue-600 text-white" :
                            member.role === "Treasurer" ? "bg-purple-600 text-white" :
                            member.role === "Committee Member" ? "bg-orange-600 text-white" :
                            "bg-gray-600 text-white"
                        }`}>
                            {member.role}
                        </span>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        
                        <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600 text-sm">
                            {/* Email Icon */}
                            <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v7a2 2 0 002 2h14a2 2 0 002-2v-7" /></svg>
                            {member.email}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                            {/* Term Icon */}
                            <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            Term: {member.term}
                        </div>
                        </div>
                        
                        <p className="text-gray-700 text-base line-clamp-4">
                        {member.description}
                        </p>
                    </div>
                    </div>
                ))
                ) : (
                <div className="md:col-span-3 text-center p-12 bg-white rounded-xl shadow-lg">
                    <p className="text-xl text-gray-600">No members found in the '{selectedCategory}' category.</p>
                </div>
                )}
            </div>
            </div>
        </section>
        </Layout>
    );
}        
export default Council;