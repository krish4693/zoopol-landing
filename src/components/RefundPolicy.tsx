import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import { Receipt } from "lucide-react";

export function RefundPolicy() {
  return (
    <section id="refund-policy" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <ReadingProgress />
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10">
          <div className="mb-6 md:mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Receipt className="w-6 h-6 text-[#156BFC]" aria-hidden="true" />
              <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold tracking-tight">Refund & Cancellation Policy — Zoopol</h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base">Last Updated: November 27, 2025</p>
          </div>

          <div className="hidden md:block sticky top-20 z-10 mb-6">
            <TableOfContents
              items={[
                { id: "payments-note", title: "1. Important note about payments" },
                { id: "employer-cancellations", title: "2. Employer cancellations" },
                { id: "worker-cancellations", title: "3. Service provider cancellations" },
                { id: "refunds-disputes", title: "4. Refunds & disputes" },
                { id: "group-jobs", title: "5. Group jobs & cancellations" },
                { id: "completion-verification", title: "6. Job completion & verification" },
                { id: "dispute-resolution", title: "7. Dispute resolution" },
                { id: "abuse", title: "8. Abuse of system" },
                { id: "changes", title: "9. Changes to this policy" },
              ]}
            />
          </div>

          <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            <div className="pt-6 md:pt-8 mb-12 md:mb-16">
              <p className="leading-relaxed">
                This Refund & Cancellation Policy explains how cancellations work for both Employers and Service Providers, and how refunds (if any) are handled. Because Zoopol does not process payments internally, this policy focuses on job cancellations, direct payment disputes between users, and rating impacts.
              </p>
            </div>
            
            <div className="space-y-12 md:space-y-16 divide-y divide-gray-100">
            <div id="payments-note" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">1. Important Note About Payments</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Zoopol does not process payments within the Platform.</li>
                <li className="pl-2">Zoopol does not hold money, escrow funds, or issue refunds.</li>
                <li className="pl-2">Zoopol does not intervene in payment settlements between users.</li>
              </ul>
              <p className="mt-4 mb-4 text-gray-600">All payments are handled externally via cash, bank transfers, or third‑party payment apps.</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Zoopol cannot issue refunds.</li>
                <li className="pl-2">Refunds, payment disputes, or incorrect payment amounts must be settled privately between Employer and Service Provider.</li>
              </ul>
            </div>

            <div id="employer-cancellations" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">2. Employer Cancellations</h3>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">2.1 Free Cancellation Window</h4>
              <p className="text-gray-600 mb-4">Employers may cancel a job up to 24 hours before the scheduled job start time without penalty.</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">All accepted workers are notified.</li>
                <li className="pl-2">No rating penalties apply.</li>
                <li className="pl-2">The job is removed from the active list.</li>
              </ul>

              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">2.2 Late Cancellations (Less Than 24 Hours)</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">May affect the employer’s rating.</li>
                <li className="pl-2">Workers may leave a review.</li>
                <li className="pl-2">The cancellation reason may be recorded.</li>
                <li className="pl-2">Frequent late cancellations may lead to reduced visibility, temporary suspension, or permanent removal.</li>
              </ul>

              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">2.3 Cancelling Accepted Applicants Only</h4>
              <p className="text-gray-600">Employers may cancel individual accepted applicants (not the entire job) up to 24 hours before the job. After this time, cancellation may harm employer ratings.</p>
            </div>

            <div id="worker-cancellations" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">3. Service Provider Cancellations</h3>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">3.1 Free Cancellation Window</h4>
              <p className="text-gray-600 mb-4">Service Providers may cancel or withdraw from a job up to 24 hours before the job starts. No penalties apply during this window.</p>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">3.2 Late Cancellations (Less Than 24 Hours)</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">May negatively impact the worker’s rating.</li>
                <li className="pl-2">The employer may report the cancellation.</li>
                <li className="pl-2">Repeated last‑minute cancellations may trigger account suspension.</li>
              </ul>

              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">3.3 Failure to Show Up (No‑Show)</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">A “No‑Show” tag may be added to the profile.</li>
                <li className="pl-2">Significant rating damage may occur.</li>
                <li className="pl-2">Repeated violations may lead to suspension.</li>
              </ul>
            </div>

            <div id="refunds-disputes" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">4. Payment Refunds & Disputes</h3>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">4.1 No Refunds From Zoopol</h4>
              <p className="text-gray-600 mb-4">Zoopol cannot provide refunds, adjustments, chargebacks, or partial settlements.</p>
              <p className="text-gray-600">Users must settle money‑related disputes between themselves, including underpayment, overpayment, non‑payment, cancellations after payment, or tipping issues.</p>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">4.2 Payment Tracking Feature</h4>
              <p className="text-gray-600">The app provides payment status and breakdowns for record‑keeping only. These do not act as proof of payment or a financial guarantee.</p>
            </div>

            <div id="group-jobs" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">5. Group Jobs & Cancellations</h3>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">Employer Side</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Cancelling the entire job follows the same 24‑hour rule.</li>
                <li className="pl-2">Cancelling individual workers within 24 hours may affect employer ratings.</li>
              </ul>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">Worker Side</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Workers in group jobs must mark “Completed” within 7 days.</li>
                <li className="pl-2">If a worker cancels, the employer may reassign the slot to others.</li>
              </ul>
            </div>

            <div id="completion-verification" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">6. Job Completion & Verification</h3>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">6.1 PIN Verification</h4>
              <p className="text-gray-600">Employers may request a unique PIN ID from accepted workers to verify job start.</p>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">6.2 Completion Marking</h4>
              <p className="text-gray-600">Workers must mark jobs as “Completed” before initiating payment requests. For group jobs, all workers should click “Complete” before payment is requested.</p>
              
              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">6.3 Employer Confirmation</h4>
              <p className="text-gray-600">Employers confirm completion using PIN, OTP, or in‑app confirmation. If either party disputes completion, they must resolve it privately.</p>
            </div>

            <div id="dispute-resolution" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">7. Dispute Resolution</h3>
              <p className="text-gray-600">Zoopol is a marketplace platform only. We will not mediate financial disputes, decide work quality outcomes, or force either party to pay or refund. We may review chat logs, job details, and verification activity to assist, but not to make binding decisions.</p>
            </div>

            <div id="abuse" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">8. Abuse of Cancellation System</h3>
              <p className="text-gray-600">Zoopol reserves the right to restrict, suspend, or terminate any user who frequently cancels jobs, cancels repeatedly within the 24‑hour window, manipulates ratings via cancellations, posts spam or fraudulent listings, or attempts to misuse the refund system.</p>
            </div>

            <div id="changes" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">9. Changes to This Policy</h3>
              <p className="text-gray-600">We may modify or update this policy at any time. Significant changes will be communicated through in‑app notifications, email (if available), and an updated posting within the app. Continued use of the Platform means you accept the updated policy.</p>
            </div>

            <div className="pt-12 border-t border-gray-100 mt-12 text-sm text-gray-500">
              <p>For questions about this policy, please contact us via in‑app support.</p>
            </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#156BFC] hover:underline cursor-pointer bg-transparent border-none"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
