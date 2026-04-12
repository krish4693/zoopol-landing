import { ReceiptText } from "lucide-react";

export function RefundPolicy() {
  return (
    <section id="refund-policy" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 lg:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <ReceiptText className="w-8 h-8 md:w-10 md:h-10 text-brand-indigo" aria-hidden="true" />
            <h1 className="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight">Refund Policy</h1>
          </div>
          <p className="text-slate-500 text-sm md:text-base mt-2">Last Updated: March 29, 2026</p>
        </div>

        <div className="text-slate-600 text-base md:text-lg leading-relaxed flex flex-col gap-12">
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
            This Refund Policy explains how Zoopol ("we") handles payments, cancellations, and disputes on our Platform. Since Zoopol does not process payments internally, the following guidelines describe the responsibilities of both Jobs Posters (Employers) and Service Providers (Workers).
          </p>
          
          <div id="no-internal-payments" className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-4">1. No Internal Payments</h3>
            <p className="text-slate-600 leading-relaxed">
              Zoopol is a digital marketplace that connects people. All payments for services occur outside the Zoopol app—via cash, bank transfer, or third-party payment apps. Because we do not process, hold, or touch your money, Zoopol cannot issue direct refunds for service fees paid to workers.
            </p>
          </div>

          <div id="commission-fees" className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-6">2. Commission & Platform Fees</h3>
            <div className="space-y-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Commission Deductions:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Zoopol may charge a platform commission on completed jobs. This is deducted from the service provider's earnings and contributes to maintaining and improving the platform.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Refunds on Commission:</h4>
                <p className="mb-4 text-slate-600">Platform commission fees are generally non-refundable except in the following cases:</p>
                <ul className="list-disc marker:text-brand-indigo pl-6 space-y-3">
                  <li className="pl-2 text-slate-600">Technical errors resulting in double charging.</li>
                  <li className="pl-2 text-slate-600">Erroneous job status updates where a job was marked as complete but never occurred.</li>
                  <li className="pl-2 text-slate-600">Cases where the system fails to apply a relevant discount or promo.</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="cancellations" className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-6">3. Cancellations & Disputes</h3>
            <div className="space-y-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Pre-Job Cancellations:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Both employers and workers may cancel a job up to 24 hours before the scheduled start time without financial penalties.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Late Cancellations & No-Shows:</h4>
                <p className="text-slate-600 leading-relaxed">
                  If an employer or worker cancels within 24 hours of the job, no automatic platform refund is issued. Users are encouraged to resolve any pre-payments directly between themselves.
                </p>
              </div>
            </div>
          </div>

          <div id="service-quality" className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-6">4. Service Quality & Performance</h3>
            <div className="space-y-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Worker Performance:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Zoopol does not guarantee the quality of work. If an employer is unhappy with the service, they must negotiate a partial payment or refund directly with the worker before the job is finalized in the app.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Verification PINs:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Using the unique PIN for job start and completion is the best way to prevent payment disputes. Do not share your PIN or verify completion until you are satisfied with the arrangement.
                </p>
              </div>
            </div>
          </div>

          <div id="dispute-role" className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-4">5. Zoopol's Role in Disputes</h3>
            <p className="text-slate-600 leading-relaxed">
              While we cannot force a user to pay or refund money, we may investigate reports of fraud, non-payment, or no-shows. If a user is found to be consistently violating our Terms of Service, their account may be suspended or removed from the Platform.
            </p>
          </div>

          <div id="how-to-request" className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-4">6. How to Request Help</h3>
            <p className="mb-4 text-slate-600">If you believe there has been a technical error regarding platform fees or a fraudulent user interaction, please:</p>
            <ul className="list-disc marker:text-brand-indigo pl-6 space-y-3 mb-6">
              <li className="pl-2 text-slate-600">Go to the "Help & Support" section in the Zoopol app.</li>
              <li className="pl-2 text-slate-600">Provide the Job ID and a clear description of the issue.</li>
              <li className="pl-2 text-slate-600">Attach any relevant screenshots or proof of communication.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              We aim to review all support requests within 48-72 hours.
            </p>
          </div>

          <div id="changes" className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl md:text-2xl font-semibold mb-4">7. Changes to This Policy</h3>
            <p className="text-slate-600 leading-relaxed">
              We may update this Refund Policy to reflect changes in our fees or platform features. Users will be notified of major changes through in-app updates.
            </p>
          </div>

          <div className="pt-8 mt-12 text-center text-sm text-slate-500">
            <p>
              For any further questions, please contact our support team via the app.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 text-brand-indigo hover:underline transition-colors font-medium cursor-pointer bg-transparent border-none inline-flex items-center gap-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
