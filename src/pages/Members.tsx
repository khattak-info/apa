import { useState, useMemo } from "react";
import Layout from "../components/Layout";
// Ensure this path is correct for your project
import allMembers from "../data/memberData.json";

/**
 * Utility function to generate initials for the placeholder image.
 * @param {string} name - The member's full name.
 * @returns {string} The first two initials (e.g., "Mazhar Alam" -> "MA").
 */
const getInitials = (name) => {
  if (!name) return 'AP';
  const parts = name.split(/\s+/);
  if (parts.length >= 2) {
    return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

function Members() {
  // Filter States
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedVoter, setSelectedVoter] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  // --- Filter Options (Unchanged) ---
  const members = allMembers;
  const roleCategories = ["All", "Committee Member"]; 
  const voterOptions = ["All", "Voter", "Non-Voter"];
  
  const genderOptions = useMemo(() => {
    const genders = new Set(members.map(m => m.gender).filter(Boolean));
    return ["All", ...Array.from(genders).sort()];
  }, [members]);

  const statusOptions = useMemo(() => {
    const statuses = new Set(members.map(m => m.membershipStatus).filter(Boolean));
    return ["All", ...Array.from(statuses).sort()];
  }, [members]);

  const yearOptions = useMemo(() => {
    const years = new Set(members.map(m => String(m.yearOfFirstMembership)).filter(y => y !== '0')); 
    return ["All", ...Array.from(years).sort((a, b) => b - a)]; 
  }, [members]);

  // --- Reset Function 🔄 ---
  const handleResetFilters = () => {
    setSelectedRole("All");
    setSelectedVoter("All");
    setSelectedGender("All");
    setSelectedStatus("All");
    setSelectedYear("All");
  };

  // --- Combined Filtering Logic (Unchanged) ---
  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      if (selectedRole === "Committee Member" && !member.committeeMember) {
        return false;
      }
      if (selectedVoter === "Voter" && !member.voter) {
        return false;
      }
      if (selectedVoter === "Non-Voter" && member.voter) {
        return false;
      }
      if (selectedGender !== "All" && member.gender !== selectedGender) {
        return false;
      }
      if (selectedStatus !== "All" && member.membershipStatus !== selectedStatus) {
        return false;
      }
      if (selectedYear !== "All" && String(member.yearOfFirstMembership) !== selectedYear) {
        return false;
      }
      return true;
    });
  }, [members, selectedRole, selectedVoter, selectedGender, selectedStatus, selectedYear]);


    // Helper component for a single filter section
    const FilterDropdown = ({ title, options, selected, onSelect }) => (
        <div className="flex flex-col items-start min-w-[150px]">
            <label className="text-sm font-semibold text-gray-700 mb-1">{title}</label>
            <select
                value={selected}
                onChange={(e) => onSelect(e.target.value)}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
            >
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
    
    return (
        <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Member Directory</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the profiles of all members, filtered by role, status, and membership history.
                </p>
            </div>
            </div>
        </section>

        {/* Categories/Filters Section */}
        <section id="directory-filters" className="py-10 bg-white border-b shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Filter Members</h2> */}
                <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-50 rounded-lg shadow-md">
                    
                    {/* Committee Role Filter */}
                    <FilterDropdown
                        title="Committee Role"
                        options={roleCategories}
                        selected={selectedRole}
                        onSelect={setSelectedRole}
                    />
                    
                    {/* Voter Status Filter */}
                    <FilterDropdown
                        title="Voter Status"
                        options={voterOptions}
                        selected={selectedVoter}
                        onSelect={setSelectedVoter}
                    />

                    {/* Gender Filter */}
                    <FilterDropdown
                        title="Gender"
                        options={genderOptions}
                        selected={selectedGender}
                        onSelect={setSelectedGender}
                    />

                    {/* Membership Status Filter */}
                    <FilterDropdown
                        title="Membership Status"
                        options={statusOptions}
                        selected={selectedStatus}
                        onSelect={setSelectedStatus}
                    />
                    
                    {/* Year of First Membership Filter */}
                    <FilterDropdown
                        title="First Membership Year"
                        options={yearOptions}
                        selected={selectedYear}
                        onSelect={setSelectedYear}
                    />
                    
                    {/* --- Reset Button --- */}
                    <div className="flex flex-col items-start min-w-[150px] justify-end">
                        <label className="text-sm font-semibold text-gray-700 mb-1 invisible">Reset Button</label> 
                        <button
                            onClick={handleResetFilters}
                            className="w-full px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition-colors shadow-md text-sm"
                        >
                            Reset Filters
                        </button>
                    </div>

                </div>
            </div>
        </section>

        {/* Grid Section (Unchanged) */}
        <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-6 text-right">
                    Displaying {filteredMembers.length} member(s)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {filteredMembers.length > 0 ? (
                        filteredMembers.map((member) => (
                            <div key={member.memberId} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                                <div className="relative">                      
                                    {/* <img
                                    src={`https://placehold.co/400x400/10B981/ffffff?text=${getInitials(member.name)}`}
                                    alt={`Profile of ${member.name}`}
                                    className="w-full h-full object-cover bg-gray-200"
                                    /> */}
                                    
                                    {/* Status/Role Tag */}
                                    {member.committeeMember && (
                                        <div className="absolute top-1 right-1">
                                            <span className="px-1 py-1 rounded-full text-xs font-semibold shadow-md bg-green-700 text-white">
                                                Committee Members
                                            </span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
                                    
                                    <div className="space-y-3 mb-4">
                                    {/* Membership Status */}
                                    <div className="flex items-center text-gray-600 text-sm">
                                        {/* <svg className="w-5 h-5 mr-3 text-green-600" fill="green" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292m0 5.354a4 4 0 110 5.292" /></svg> */}
                                        Status: {member.membershipStatus}
                                    </div>
                                    {/* Voter Status */}
                                    <div className="flex items-center text-gray-600 text-sm">
                                        {/* <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.944 12c.045 2.584.871 5.064 2.378 7.15A10.002 10.002 0 0012 22a10.002 10.002 0 006.678-2.85c1.507-2.086 2.333-4.566 2.378-7.15A12.001 12.001 0 0021.056 12z" /></svg> */}
                                        Voter: {member.voter ? "Yes" : "No"}
                                    </div>
                                    {/* Gender */}
                                    <div className="flex items-center text-gray-600 text-sm">
                                        {/* <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0a3 3 0 10-4.243 4.243L12 18l5.636-5.636a3 3 0 10-4.243-4.243z" /></svg> */}
                                        Gender: {member.gender || 'N/A'}
                                    </div>
                                    </div>
                                    
                                    <p className="text-gray-700 text-base">
                                        Joined {member.yearOfFirstMembership} ({member.yearsActive} years active).
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                    <div className="md:col-span-4 text-center p-12 bg-white rounded-xl shadow-lg">
                        <p className="text-xl text-gray-600">No members match the selected filter criteria.</p>
                    </div>
                    )}
                </div>
            </div>
        </section>
        </Layout>
    );
}

export default Members;