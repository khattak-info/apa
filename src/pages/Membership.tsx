import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Membership() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Membership</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community and become part of a vibrant network supporting Pashtun culture and values in Australia
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Eligibility Requirements</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Eligibility</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Who Can Apply:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Individuals who are Pashtun by birth</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Individuals married to a Pashtun</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Additional Requirements:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Head of family must be a member of the Executive Council (for Premium Membership)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Commitment to upholding Pashtunwali values</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Category Applications</h3>
              <p className="text-gray-600 mb-4">
                We welcome applications from individuals who may not meet the standard eligibility criteria but have a genuine connection to or interest in supporting the Pashtun community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">This includes:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Non-Australian citizens or permanent residents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Non-Pashtun individuals with community connections</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Review Process:</h4>
                  <p className="text-gray-600 text-sm">
                    All special category applications are carefully reviewed by our Executive Committee on a case-by-case basis to ensure alignment with our community values and objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Membership Tiers</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Premium Membership */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Membership</h3>
                <p className="text-gray-600">Comprehensive support and full community benefits</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-green-700 mb-2">
                  AUD $150
                  <span className="text-lg font-normal text-gray-600"> initial</span>
                </div>
                <div className="text-lg text-gray-600">
                  + AUD $20 annual renewal per family member
                </div>
                <p className="text-sm text-gray-500 mt-1">*Effective from August 1, 2025</p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Benefits Include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Financial, religious, and cultural services for funerals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Repatriation and hospitalization support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">20% discount on all event tickets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Eligibility for all educational and cultural events</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Priority access to community support services</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Apply for Premium Membership
              </button>
            </div>

            {/* General Membership */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">General Membership</h3>
                <p className="text-gray-600">Essential community access and event benefits</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  AUD $20
                  <span className="text-lg font-normal text-gray-600"> annually</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">*Effective from August 1, 2025</p>
                <p className="text-sm text-gray-500">Non-refundable annual fee</p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Benefits Include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">15% discount on all event tickets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Eligibility for all educational and cultural events</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Access to community networking opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Regular community updates and newsletters</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Apply for General Membership
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* How to Join */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Join</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> 
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pay Membership Fee</h3>
                <p className="text-gray-600 text-sm">
                  Submit the applicable membership fee based on your chosen tier and membership category for each member of your family. 
                  If this is your first time applying, please pay the one-time registration fee for Premium Membership for each family, this includes the General Membership fee for current year.
                  Alternatively, if you are renewing your membership only then you need to pay the General Membership for each family member. 
                  Remember to keep the payment receipt for your records and submit it with your application along with proof of identity.
                  <div>
                    <style>{`
                      .pp-QJ8NM22QMW2N2 {
                        text-align: center;
                        border: none;
                        border-radius: 0.25rem;
                        min-width: 11.625rem;
                        padding: 0.5rem;
                      }
                      `}</style>

                      <form
                        action="https://www.paypal.com/ncp/payment/QJ8NM22QMW2N2"
                        method="post"
                        target="_blank"
                        style={{ display: 'inline' }}
                      >
                        <input className="pp-QJ8NM22QMW2N2" type="submit" value="Buy Now" />
                      </form>
                  </div>
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Application</h3>
                <p className="text-gray-600 text-sm">
                  Fill out our membership application form with your personal details and membership tier preference.
                  You will be required to provide payment proof, proof of identity and any other necessary documentation as specified in the form.
                  Please add information for all family members applying for membership. 
                  The form also provides members to add details in a PDF format, which will be submitted along with the application on the same form.
                  Australian Pashtun Association reserves the right to accept or reject any application at its discretion.                  
                </p>
              </div>


              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Approval</h3>
                <p className="text-gray-600 text-sm">
                  All submitted applications will be reviewed by our Executive Committee and you'll receive formal approval notification within three working days.
                  Please ensure all submitted information is accurate to avoid delays. It will be appreciated if you ensure you have added the payment receipt, 
                  proof of identity and family details documentation as specified in the form.
                  Your application may be subject to additional review, and you may be contacted for further information.
                  Once approved, you'll gain access to all the benefits associated with your membership tier.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Join Our Community?</h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards becoming part of a vibrant community dedicated to preserving Pashtun culture and supporting each other in Australia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                    Family Data Document
                  </button>
                  <Link
                    to="https://drive.google.com/file/d/1NZN-2zufX15oV46q5KbN-p4U5G3GHeor/view?usp=sharing"
                    className="bg-white text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Contact Us for Questions
                  </Link>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <p>
                  For questions about membership or assistance with your application, please don't hesitate to{" "}
                  <Link to="/contact" className="text-green-700 hover:text-green-800 font-medium">
                    contact us
                  </Link>
                  . We're here to help you join our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Membership;