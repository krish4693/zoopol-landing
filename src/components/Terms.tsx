import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import { FileText } from "lucide-react";

export function Terms() {
  return (
    <section id="terms" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <ReadingProgress />
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10">
          <div className="mb-6 md:mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <FileText className="w-6 h-6 text-[#156BFC]" aria-hidden="true" />
              <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold tracking-tight">Terms & Conditions — Zoopol</h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base">Last Updated: November 27, 2025</p>
          </div>

          <div className="hidden md:block sticky top-20 z-10 mb-6">
            <TableOfContents
              items={[
                { id: "definitions", title: "1. Definitions" },
                { id: "eligibility", title: "2. Eligibility" },
                { id: "user-accounts", title: "3. User accounts" },
                { id: "platform-role", title: "4. Platform role" },
                { id: "job-posting", title: "5. Job posting & applications" },
                { id: "verification", title: "6. Job verification" },
                { id: "ratings", title: "7. Ratings & reviews" },
                { id: "payments-fees", title: "8. Payments & fees" },
                { id: "cancellations", title: "9. Cancellations & no‑show" },
                { id: "conduct", title: "10. User conduct" },
                { id: "chat", title: "11. Chat & communication" },
              ]}
            />
          </div>

          <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            <div className="pt-6 md:pt-8 mb-12 md:mb-16">
              <p className="leading-relaxed">
                Welcome to Zoopol ("we"). By accessing, downloading, or using our website, mobile application, or related services, you ("User," "Employer," or "Service Provider/Worker") agree to these Terms & Conditions. If you do not agree, please discontinue use of the Platform immediately. These Terms govern your use of all services offered through the Zoopol Platform.
              </p>
            </div>
            
            <div className="space-y-12 md:space-y-16 divide-y divide-gray-100">
            <div id="definitions" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">1. Definitions</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2"><span className="font-bold text-gray-900">Employer / Job Poster:</span> a user who posts job listings and hires service providers.</li>
                <li className="pl-2"><span className="font-bold text-gray-900">Service Provider / Worker:</span> a user who applies for jobs and provides on-demand services.</li>
                <li className="pl-2"><span className="font-bold text-gray-900">Platform:</span> the Zoopol website, mobile application, and any related digital services.</li>
                <li className="pl-2"><span className="font-bold text-gray-900">Job Slot:</span> the number of available workers needed for a job.</li>
                <li className="pl-2"><span className="font-bold text-gray-900">PIN Verification:</span> a unique PIN used to verify job start and completion.</li>
                <li className="pl-2"><span className="font-bold text-gray-900">Group Chat:</span> a communication channel automatically created for jobs with multiple vacancies.</li>
              </ul>
            </div>

            <div id="eligibility" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">2. Eligibility</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Be at least 18 years old.</li>
                <li className="pl-2">Provide accurate registration information.</li>
                <li className="pl-2">Do not create fake profiles or use false identification.</li>
                <li className="pl-2">Comply with local laws and regulations when offering or hiring services.</li>
                <li className="pl-2">Use of the Platform by minors is strictly prohibited.</li>
              </ul>
            </div>

            <div id="user-accounts" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">3. User Accounts</h3>

              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">3.1 Registration</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4 mb-4">
                <li className="pl-2">Name</li>
                <li className="pl-2">Phone number</li>
                <li className="pl-2">OTP verification</li>
              </ul>
              <p className="mb-4 text-gray-600">Optional but recommended:</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">ID verification</li>
                <li className="pl-2">Profile photo</li>
                <li className="pl-2">Skill set or job preferences</li>
              </ul>

              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">3.2 Account Responsibilities</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Keep login details secure and do not share your account.</li>
                <li className="pl-2">Ensure information provided is accurate and updated.</li>
                <li className="pl-2">You are responsible for actions performed using your account.</li>
              </ul>
              <p className="mt-4 text-gray-600">We reserve the right to suspend or terminate accounts with suspicious or fraudulent activity.</p>
            </div>

            <div id="platform-role" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">4. Platform Role & Disclaimer</h3>
              <p className="mb-4 text-gray-600">Zoopol is not an employer, agency, or contractor.</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4 mb-4">
                <li className="pl-2">We connect employers with service providers.</li>
                <li className="pl-2">We do not employ any user.</li>
                <li className="pl-2">We do not control the quality, timing, legality, or safety of services.</li>
                <li className="pl-2">We do not guarantee job availability or job performance.</li>
              </ul>
              <p className="mb-4 text-gray-600">The Platform is a digital marketplace only. Users are responsible for:</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Hiring decisions</li>
                <li className="pl-2">Work performed</li>
                <li className="pl-2">Payment settlements</li>
                <li className="pl-2">Ratings & reviews</li>
              </ul>
            </div>

            <div id="job-posting" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">5. Job Posting & Applications</h3>

              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">5.1 For Employers</h4>
              <p className="mb-4 text-gray-600">Employers may post listings with:</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4 mb-4">
                <li className="pl-2">Job description</li>
                <li className="pl-2">Date & time</li>
                <li className="pl-2">Location</li>
                <li className="pl-2">Pay rate</li>
                <li className="pl-2">Number of vacancies</li>
              </ul>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Employers may accept or reject applicants.</li>
                <li className="pl-2">Employers can review applicant profiles before approval.</li>
                <li className="pl-2">Employers may cancel a job up to 24 hours before the start time.</li>
              </ul>

              <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">5.2 For Service Providers</h4>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Browse job listings and apply for available jobs.</li>
                <li className="pl-2">Request job slots for multi-worker jobs.</li>
                <li className="pl-2">Withdraw/cancel applications up to 24 hours before the job start.</li>
              </ul>
              <p className="mt-4 text-gray-600">Cancelling within 24 hours may negatively impact your rating.</p>
            </div>

            <div id="verification" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">6. Job Verification (PIN & OTP)</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Each accepted worker receives a unique PIN after employer approval.</li>
                <li className="pl-2">Employers may request this PIN at job start.</li>
                <li className="pl-2">Employers may use OTP or PIN to verify completion.</li>
                <li className="pl-2">Failure to verify may result in delayed payment, dispute, or account review.</li>
              </ul>
            </div>

            <div id="ratings" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">7. Ratings & Reviews</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">After completing a job, employers and workers must rate each other.</li>
                <li className="pl-2">Written feedback may be added.</li>
                <li className="pl-2">Fake, misleading, or abusive reviews are prohibited and may be moderated or removed.</li>
              </ul>
            </div>

            <div id="payments-fees" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">8. Payments & Fees</h3>
              <div className="space-y-4">
                <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">8.1 External Payments</h4>
                <p className="text-gray-600">Zoopol does not process payments internally. All payments are made directly between employers and service providers using cash, bank transfer, or third-party payment apps.</p>
                
                <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">8.2 Commission</h4>
                <p className="text-gray-600">The Platform may charge a commission on jobs, deducted from the service provider’s earnings. This amount may vary based on job type, location, or marketplace conditions.</p>
                
                <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">8.3 Payment Tracking</h4>
                <p className="text-gray-600">
                  The Platform provides payment tracking and status screens for organization purposes. Zoopol is not responsible for late payments, incorrect amounts, or failed transactions.
                </p>
              </div>
            </div>

            <div id="cancellations" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">9. Cancellations & No-Show Policy</h3>
              <div className="space-y-4">
                <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">9.1 Employer Cancellations</h4>
                <p className="text-gray-600">Allowed up to 24 hours before the job start time. Employers must provide a cancellation reason.</p>
                
                <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">9.2 Worker Cancellations</h4>
                <p className="text-gray-600">Allowed up to 24 hours before the job start time. Late cancellations may negatively affect ratings and profile trustworthiness.</p>
                
                <h4 className="text-gray-900 text-xl font-bold mt-10 mb-6">9.3 No-Shows</h4>
                <p className="text-gray-600">Repeated no-shows may lead to rating penalties, temporary suspension, or permanent removal from the Platform.</p>
              </div>
            </div>

            <div id="conduct" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">10. User Conduct</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Do not post misleading job listings or provide false profile information.</li>
                <li className="pl-2">Do not spam, harass, or abuse other users.</li>
                <li className="pl-2">Do not discuss payments inside the Platform to bypass commission.</li>
                <li className="pl-2">Do not use the Platform for illegal activities.</li>
                <li className="pl-2">Do not attempt to exploit system flaws or features.</li>
                <li className="pl-2">Do not upload harmful, defamatory, or explicit content.</li>
              </ul>
              <p className="mt-4 text-gray-600">Violation may result in account termination.</p>
            </div>

            <div id="chat" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">11. Chat & Communication</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">Users may communicate through direct chat.</li>
                <li className="pl-2">Group chat may be provided for jobs with multiple vacancies.</li>
              </ul>
            </div>

            <div className="pt-12 border-t border-gray-100 mt-12 text-sm text-gray-500">
              <p>For questions about these Terms, please contact us via in-app support.</p>
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
