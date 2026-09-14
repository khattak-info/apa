import { useState, useMemo, useEffect } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabase";
import type { Tables } from "../types/supabase";

type DirectoryRow = Tables<"members">;
// Public directory only ever gets the non-sensitive columns back (no dob / identity_number)
type PublicMember = Pick<
  DirectoryRow,
  "name" | "membership_status" | "voter" | "gender" | "committee_member" | "year_of_first_membership" | "years_active"
>;

function Members() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedVoter, setSelectedVoter] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const [members, setMembers] = useState<PublicMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.rpc("get_member_directory");
      if (cancelled) return;
      if (error) {
        setError(error.message);
      } else {
        setMembers((data as PublicMember[]) ?? []);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const roleCategories = ["All", "Committee Member"];
  const voterOptions = ["All", "Voter", "Non-Voter"];

  const genderOptions = useMemo(() => {
    const genders = new Set(members.map(m => m.gender).filter(Boolean));
    return ["All", ...Array.from(genders).sort()];
  }, [members]);

  const statusOptions = useMemo(() => {
    const statuses = new Set(members.map(m => m.membership_status).filter(Boolean));
    return ["All", ...Array.from(statuses).sort()];
  }, [members]);

  const yearOptions = useMemo(() => {
    const years = new Set(members.map(m => String(m.year_of_first_membership)).filter(y => y !== '0' && y !== 'null'));
    return ["All", ...Array.from(years).sort((a, b) => Number(b) - Number(a))];
  }, [members]);

  const handleResetFilters = () => {
    setSelectedRole("All");
    setSelectedVoter("All");
    setSelectedGender("All");
    setSelectedStatus("All");
    setSelectedYear("All");
  };

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      if (selectedRole === "Committee Member" && !member.committee_member) {
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
      if (selectedStatus !== "All" && member.membership_status !== selectedStatus) {
        return false;
      }
      if (selectedYear !== "All" && String(member.year_of_first_membership) !== selectedYear) {
        return false;
      }
      return true;
    });
  }, [members, selectedRole, selectedVoter, selectedGender, selectedStatus, selectedYear]);

  const FilterDropdown = ({ title, options, selected, onSelect }: { title: string; options: string[]; selected: string; onSelect: (v: string) => void }) => (
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
          <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-50 rounded-lg shadow-md">
            <FilterDropdown title="Committee Role" options={roleCategories} selected={selectedRole} onSelect={setSelectedRole} />
            <FilterDropdown title="Voter Status" options={voterOptions} selected={selectedVoter} onSelect={setSelectedVoter} />
            <FilterDropdown title="Gender" options={genderOptions} selected={selectedGender} onSelect={setSelectedGender} />
            <FilterDropdown title="Membership Status" options={statusOptions} selected={selectedStatus} onSelect={setSelectedStatus} />
            <FilterDropdown title="First Membership Year" options={yearOptions} selected={selectedYear} onSelect={setSelectedYear} />

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

      {/* Grid Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <p className="text-center text-gray-500">Loading members...</p>
          ) : error ? (
            <p className="text-center text-red-500">Could not load members: {error}</p>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-gray-700 mb-6 text-right">
                Displaying {filteredMembers.length} member(s)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member, i) => (
                    <div key={`${member.name}-${i}`} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
                      <div className="relative">
                        {member.committee_member && (
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
                          <div className="flex items-center text-gray-600 text-sm">
                            Status: {member.membership_status}
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            Voter: {member.voter ? "Yes" : "No"}
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            Gender: {member.gender || 'N/A'}
                          </div>
                        </div>

                        <p className="text-gray-700 text-base">
                          Joined {member.year_of_first_membership} ({member.years_active} years active).
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
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Members;
