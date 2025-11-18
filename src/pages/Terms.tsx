import React, { useState } from 'react';
import Layout from "../components/Layout";
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

function Terms() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate(); // Initialize the hook for redirection

  // The Terms and Conditions Content
  const termsContent = [
    {
      id: 1,
      title: "Agreement to Terms",
      content: [
        "By submitting a membership application or making payment toward any membership category of the Australian Pashtun Association (APA), you acknowledge that you:",
        "Have read, understood, and agree to be bound by these **Terms and Conditions**;",
        "Agree to abide by the **APA Association Rules and Governing Document (v2)**; and",
        "Consent to the collection and handling of your personal information as described in APA’s **privacy statement** and in compliance with the *Privacy Act 1988 (Cth)*.",
        "If you do not agree to these Terms, please do not proceed with your membership application or payment."
      ],
      listType: 'bullet'
    },
    {
      id: 2,
      title: "Membership Categories and Eligibility",
      content: [
        "Membership is open to individuals who support the purposes of the APA and agree to comply with its rules and constitution."
      ],
      subSections: [
        {
          subId: '2.1',
          subTitle: 'Premium Membership',
          subContent: [
            "Available to **Pashtuns by birth** or individuals married to a Pashtun by birth.",
            "Entitled to **funeral, repatriation, and hospitalisation assistance**, subject to the APA’s disbursement policies.",
            "Includes one **Executive Council (Jirga) voting right** per household head, plus event discounts and access to cultural and educational programs.",
            "**Fee**: AUD 150 per person (**once-off subscription**) + AUD 20 **annual renewal fee**.",
            "**Instalment options** apply for families as specified in Clause 9.1.3 of the APA Governing Rules."
          ]
        },
        {
          subId: '2.2',
          subTitle: 'General Membership',
          subContent: [
            "Open to eligible individuals supporting APA’s charitable purposes.",
            "Includes discounts on events and access to all cultural and educational activities.",
            "**Fee**: AUD 20 **annual renewal** (non-refundable)."
          ]
        },
        {
          subId: '2.3',
          subTitle: 'Special Category Membership',
          subContent: [
            "For Pashtun students, non-residents, or non-Pashtun individuals recommended by existing members.",
            "Applications are reviewed by the **Executive Committee** and may be accepted or declined at its discretion.",
            "Honorary memberships may be granted without a registration fee."
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Application and Approval",
      content: [
        "Membership applications must be submitted in writing and include accurate personal details.",
        "The **Executive Committee** reviews all applications and may approve or reject them at its discretion.",
        "Membership commences once payment is received in Australian Pashtun Association's Bank Account",
        "Application is approved in writing through the email provided with membership number and validity.",
        "Applicants agree to provide truthful information and update APA if their circumstances change."
      ]
    },
    {
      id: 4,
      title: "Payments and Refunds",
      content: [
        "All membership payments must be made in **Australian Dollars (AUD)**.",
        "Once-off subscription fees and annual renewals are **non-refundable**, except where required by law (e.g., Australian Consumer Law).",
        "Members who resign or whose memberships are terminated for cause are **not entitled to refunds**.",
        "Payments are processed securely via APA’s approved payment gateway or nominated bank account."
      ]
    },
    {
      id: 5,
      title: "Member Obligations",
      content: [
        "By becoming a member, you agree to:",
        "Act respectfully and uphold APA’s values and purposes.",
        "Comply with all relevant sections of the **APA Constitution**, including disciplinary, voting, and meeting provisions.",
        "Not engage in conduct **injurious or prejudicial to APA’s reputation**, members, or charitable objectives.",
        "Pay all applicable fees on time to maintain **active membership status**.",
        "Failure to comply may result in suspension or termination of membership in accordance with the rules of APA."
      ],
      listType: 'bullet'
    },
    {
      id: 6,
      title: "Privacy and Data Protection",
      content: [
        "APA collects personal information solely for the purpose of managing membership, communication, and community engagement activities.",
        "Your data will be:",
        "Stored securely on cloud storage provided by **Google Cloud** and accessed only by authorised APA officers;",
        "Not shared with third parties except where required by law; and",
        "Managed in accordance with the *Privacy Act 1988 (Cth)* and the **Australian Privacy Principles (APPs)**.",
        "Members have the right to access or correct their information by written request to the Executive Committee.",
        "* Liability of privacy and security of Cloud Storage Provider, will lie upon the Google Inc [https://cloud.google.com/terms/cloud-privacy-notice](https://cloud.google.com/terms/cloud-privacy-notice)"
      ],
      listType: 'bullet'
    },
    {
      id: 7,
      title: "Liability and Indemnity",
      content: [
        "Members acknowledge that APA is an **unincorporated association** and activities are undertaken voluntarily.",
        "Members participate in APA events and services at their **own risk**, and APA bears **no liability** for personal injury or property loss except where required by law.",
        "Members indemnify APA and its Executive Committee members for any loss or liability incurred in good faith while acting on behalf of the association, in accordance with Clause 4.7–4.9 of the APA Rules."
      ]
    },
    {
      id: 8,
      title: "Dispute Resolution",
      content: [
        "Disputes between members or with the Executive Committee must first be resolved amicably through internal discussion.",
        "If unresolved, the matter will be referred to the **Executive Council (Jirga)** for mediation, as outlined in Clause 16.17–16.19 of the APA Rules.",
        "Decisions of the Jirga are final and binding."
      ]
    },
    {
      id: 9,
      title: "Suspension or Termination of Membership",
      content: [
        "APA may suspend or cancel a membership if a member:",
        "Fails to pay fees for two consecutive years;",
        "Breaches any part of these Terms or the APA Rules;",
        "Acts in a manner detrimental to the association or its community.",
        "A **fair opportunity** will be given to the member to respond before termination. **No refunds** will be issued upon termination."
      ],
      listType: 'bullet'
    },
    {
      id: 10,
      title: "Legal Compliance",
      content: [
        "APA operates under the *Australian Charities and Not-for-profits Commission Act 2012 (Cth)*, *Associations Incorporation Act 2009 (NSW)*, and applicable Australian Consumer and Privacy laws.",
        "These Terms are governed by the **laws of New South Wales**. Any legal disputes shall be handled in New South Wales courts or relevant tribunals."
      ]
    },
    {
      id: 11,
      title: "Amendments",
      content: [
        "APA reserves the right to modify or update these Terms and Conditions to reflect changes in its governing rules, membership policies, or Australian law. Updated terms will be posted on the official APA website, and members will be notified via email."
      ]
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms and Conditions of Membership</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Australian Pashtun Association (APA) - ABN: **29856472593** <br />
                Unincorporated Not-for-Profit Association Registered in New South Wales
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700">
            {termsContent.map((section) => (
              <div key={section.id} className="p-6 bg-gray-50 rounded-xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.id}. {section.title}
                </h3>
                
                {/* Main Content */}
                {section.content.map((item, index) => (
                  <p key={index} className="mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                ))}

                {/* Sub-Sections (like 2.1, 2.2, 2.3) */}
                {section.subSections && (
                  <div className="mt-4 space-y-6">
                    {section.subSections.map((sub, subIndex) => (
                      <div key={subIndex} className="pl-4 border-l-2 border-gray-300">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{sub.subId} {sub.subTitle}</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-base">
                          {sub.subContent.map((item, itemIndex) => (
                            <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* --- Final Acknowledgement Section --- */}
          <div className="mt-16 p-8 bg-green-50 border-2 border-green-200 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Acknowledgement and Declaration</h2>
            <ul className="space-y-3 text-lg text-gray-800">
              <li>
                <input
                  type="checkbox"
                  id="agree1"
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mr-3"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                />
                <label htmlFor="agree1" className="font-medium">
                  I have read, understood, and agree to abide by the APA Terms and Conditions of Membership.
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="agree2"
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mr-3"
                  checked={agreed} // Simplified: link to main agreed state
                  onChange={() => setAgreed(!agreed)}
                />
                <label htmlFor="agree2">
                  I accept that membership fees are non-refundable except as required by law.
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="agree3"
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mr-3"
                  checked={agreed} // Simplified: link to main agreed state
                  onChange={() => setAgreed(!agreed)}
                />
                <label htmlFor="agree3">
                  I confirm that, to the best of my knowledge, I have no criminal record and no criminal charges pending as of today’s date. I am responsible for any false information.
                </label>
              </li>
            </ul>

            <button
              onClick={() => { navigate('/membership', { state: { from: 'terms' } }); }} // Updated to use navigate with state
              disabled={!agreed}
              className={`mt-6 w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                agreed
                  ? 'bg-green-700 text-white hover:bg-green-800 shadow-md'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Acknowledge and Proceed to Payment
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Terms;