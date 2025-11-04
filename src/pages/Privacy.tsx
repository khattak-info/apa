import Layout from "../components/Layout";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Privacy() {
  const [read, setRead] = useState(false);
  const navigate = useNavigate();

  // The Privacy Policy Content
  const privacyContent = [
    {
      id: 1,
      title: "Introduction and Compliance",
      content: [
        "The Australian Pashtun Association (APA) is committed to protecting the privacy of its members and stakeholders. This policy outlines how APA collects, uses, discloses, and manages personal information in compliance with the **Australian Privacy Principles (APPs)** contained in the *Privacy Act 1988 (Cth)*.",
        "By providing APA with your personal information, you consent to the collection, use, and disclosure of that information as set out in this policy."
      ],
    },
    {
      id: 2,
      title: "What Information We Collect",
      content: [
        "APA collects personal information necessary to manage our relationship with you and provide our charitable services. This includes:",
      ],
      listType: 'bullet',
      subContent: [
        "**Identity and Contact Data**: Full name, date of birth, address, email address, phone number.",
        "**Membership Data**: Membership category, application date, renewal dates, payment history.",
        "**Sensitive Data (Premium Members)**: Information related to family relationships (for repatriation eligibility) and necessary details for managing funeral/hospitalization assistance, collected only with explicit consent.",
        "**Engagement Data**: Records of event attendance, volunteer roles, and communication history."
      ]
    },
    {
      id: 3,
      title: "How We Collect Information",
      content: [
        "We collect personal information directly from you through various means, including:",
      ],
      listType: 'bullet',
      subContent: [
        "Membership application forms (online and physical).",
        "Event registration and attendance forms.",
        "Direct communication (email, phone, in-person meetings).",
        "Voluntary provision of data for specific services (e.g., assistance claim forms)."
      ]
    },
    {
      id: 4,
      title: "Purpose of Collection and Use",
      content: [
        "APA collects and uses your personal information for the following primary purposes:",
      ],
      listType: 'bullet',
      subContent: [
        "Managing your **membership status**, rights, and entitlements (including voting rights).",
        "Providing membership benefits, such as event discounts and access to cultural programs.",
        "Administering charitable services, particularly **funeral, repatriation, and hospitalization assistance** for eligible Premium Members.",
        "Communication regarding APA activities, meetings, and governance updates.",
        "Compliance with legal and regulatory obligations, including reporting to the Australian Charities and Not-for-profits Commission (ACNC)."
      ]
    },
    {
      id: 5,
      title: "Data Storage and Security",
      content: [
        "APA takes reasonable steps to protect the personal information we hold from misuse, interference, loss, unauthorized access, modification, or disclosure.",
        "**Storage**: Your data is stored securely on cloud storage provided by **Google Cloud**, leveraging their security protocols.",
        "**Access**: Access to personal and sensitive information is restricted to authorized APA Executive Committee members and officers who require the information to perform their duties.",
        "*Liability of privacy and security of the Cloud Storage Provider will lie upon Google Inc (refer to their Cloud Privacy Notice)."
      ]
    },
    {
      id: 6,
      title: "Disclosure of Information",
      content: [
        "We will not disclose your personal information to third parties except in the following circumstances:",
      ],
      listType: 'bullet',
      subContent: [
        "Where required by **Australian law** (e.g., legal warrants or court orders).",
        "To third-party service providers (e.g., repatriation agents or financial institutions) strictly to deliver the specific services requested by you (e.g., processing an assistance claim).",
        "With your **explicit consent** for any other purpose."
      ]
    },
    {
      id: 7,
      title: "Access and Correction",
      content: [
        "You have the right to request **access** to the personal information APA holds about you and to request that it be **corrected** if inaccurate or outdated.",
        "Requests must be submitted in writing to the Executive Committee via the official APA contact channels.",
        "We will respond to your request within a reasonable time and may charge a reasonable fee for providing access if the request is complex."
      ]
    },
    {
      id: 8,
      title: "Changes to the Policy and Contact",
      content: [
        "APA reserves the right to amend this Privacy Policy at any time. The updated policy will be posted on the APA website and will take effect immediately upon posting.",
        "If you have any questions or concerns about this Privacy Policy or how your personal information is managed, please contact the APA Executive Committee via our official email address."
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Australian Pashtun Association (APA) - Your privacy is important to us. <br />
                We comply with the Australian Privacy Principles (APPs).
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700">
            {privacyContent.map((section) => (
              <div key={section.id} className="p-6 bg-gray-50 rounded-xl shadow-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.id}. {section.title}
                </h3>
                
                {/* Main Content */}
                {section.content.map((item, index) => (
                  <p key={index} className="mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                ))}

                {/* Sub-Content (e.g., bulleted lists) */}
                {section.subContent && (
                  <ul className="list-disc list-inside space-y-1 ml-4 text-base mt-2">
                    {section.subContent.map((item, itemIndex) => (
                      <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* --- Final Acknowledgement Section --- */}
          <div className="mt-16 p-8 bg-blue-50 border-2 border-blue-200 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Data Consent and Acknowledgment</h2>
            <ul className="space-y-3 text-lg text-gray-800">
              <li>
                <input
                  type="checkbox"
                  id="readPolicy"
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                  checked={read}
                  onChange={() => setRead(!read)}
                />
                <label htmlFor="readPolicy" className="font-medium">
                  I have read and understood the Australian Pashtun Association Privacy Policy and consent to the collection and use of my information as described.
                </label>
              </li>
            </ul>

            <button
              onClick={() => { navigate('/membership', { state: { consent: 'privacy' } }); }}
              disabled={!read}
              className={`mt-6 w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                read
                  ? 'bg-blue-700 text-white hover:bg-blue-800 shadow-md'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Confirm Consent and Continue
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Privacy;