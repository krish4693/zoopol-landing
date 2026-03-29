import { Receipt } from "lucide-react";

export function RefundPolicy() {
  return (
    <section id="refund-policy" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Receipt className="w-8 h-8 text-[#156BFC]" aria-hidden="true" />
            <h1 className="text-gray-900 text-3xl md:text-5xl font-bold tracking-tight">Refund & Cancellation Policy</h1>
          </div>
          <p className="text-gray-500 text-sm md:text-base mt-2">Last Updated: November 27, 2025</p>
        </div>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed flex flex-col gap-12">
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            This Refund & Cancellation Policy explains how cancellations work for both Employers and Service Providers, and how refunds (if any) are handled. Because Zoopol does not process payments internally, this policy focuses on job cancellations, direct payment disputes between users, and rating impacts.
          </p>
          
          <div id="payments-note" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-8">1. Important Note About Payments</h3>
            <div className="space-y-10">
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-3 text-gray-600">Zoopol does not process payments within the Platform.</li>
                <li className="pl-3 text-gray-600">Zoopol does not hold money, escrow funds, or issue refunds.</li>
                <li className="pl-3 text-gray-600">Zoopol does not intervene in payment settlements between users.</li>
              </ul>
              <div>
                <p className="mb-6 text-gray-600 font-medium">All payments are handled externally via cash, bank transfers, or third‑party payment apps.</p>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
                  <li className="pl-3">
                    <span className="font-bold text-gray-900 block mb-1">No Direct Refunds:</span>
                    <span className="text-gray-600">Zoopol cannot issue refunds as we do not touch the money.</span>
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-gray-900 block mb-1">Private Settlement:</span>
                    <span className="text-gray-600">Refunds, payment disputes, or incorrect payment amounts must be settled privately between the Employer and Service Provider.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="employer-cancellations" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-8">2. Employer Cancellations</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-gray-900 text-lg font-bold mb-3">2.1 Free Cancellation Window</h4>
                <p className="text-gray-600 mb-4">Employers may cancel a job up to 24 hours before the scheduled job start time without penalty.</p>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-2">
                  <li className="pl-3 text-gray-600">All accepted workers are notified automatically.</li>
                  <li className="pl-3 text-gray-600">No rating penalties apply to the employer.</li>
                  <li className="pl-3 text-gray-600">The job is removed from the active search list.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 text-lg font-bold mb-3">2.2 Late Cancellations</h4>
                <p className="text-gray-600 mb-4">Cancellations made less than 24 hours before job start:</p>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                  <li className="pl-3 text-gray-600">Will negatively affect the employer’s overall rating.</li>
                  <li className="pl-3 text-gray-600">Workers may leave a public review on the profile.</li>
                  <li className="pl-3 text-gray-600">Frequent late cancellations may lead to account suspension.</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="worker-cancellations" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-8">3. Service Provider Cancellations</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-gray-900 text-lg font-bold mb-3">3.1 Free Withdrawal</h4>
                <p className="text-gray-600">Service Providers may withdraw from a job up to 24 hours before the job starts without any penalty or rating impact.</p>
              </div>
              
              <div>
                <h4 className="text-gray-900 text-lg font-bold mb-3">3.2 Late Withdrawal & No-Shows</h4>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
                  <li className="pl-3">
                    <span className="font-bold text-gray-900 block mb-1">Rating Impact:</span>
                    <span className="text-gray-600">Cancelling within 24 hours will negatively impact your trustworthiness and worker rating.</span>
                  </li>
                  <li className="pl-3">
                    <span className="font-bold text-gray-900 block mb-1">No-Show Tag:</span>
                    <span className="text-gray-600">Failure to show up at the job location without cancellation (No-Show) results in severe rating damage and possible suspension.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="refunds-disputes" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-8">4. Payment Refunds & Disputes</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-gray-900 text-lg font-bold mb-3">4.1 No Financial Liability</h4>
                <p className="text-gray-600">Zoopol cannot provide refunds, adjustments, or chargebacks. Users must settle money‑related disputes directly, including non‑payment or underpayment cases.</p>
              </div>
              
              <div>
                <h4 className="text-gray-900 text-lg font-bold mb-3">4.2 Tracking vs Guarantee</h4>
                <p className="text-gray-600">The app's payment tracking feature is for record‑keeping only. It does not act as a financial guarantee or legal proof of payment.</p>
              </div>
            </div>
          </div>

          <div id="dispute-resolution" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-6">5. Dispute Resolution</h3>
            <p className="text-gray-600">
              As a marketplace, Zoopol does not mediate financial disputes or force either party to pay. We may review chat logs and verification data to assist in investigations of system abuse, but final payment outcomes are the responsibility of the users.
            </p>
          </div>

          <div className="pt-8 text-center text-sm text-gray-500">
            <p>
              For questions about this policy, please contact us via in-app support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
