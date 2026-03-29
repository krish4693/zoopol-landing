import { FileText } from "lucide-react";

export function Terms() {
  return (
    <section id="terms" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 lg:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 md:w-10 md:h-10 text-[#156BFC]" aria-hidden="true" />
            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Terms & Conditions</h1>
          </div>
          <p className="text-white/50 text-sm md:text-base mt-2">Last Updated: March 29, 2026</p>
        </div>

        <div className="text-white/70 text-base md:text-lg leading-relaxed flex flex-col gap-12">
          
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12">
            Welcome to Zoopol ("we"). By accessing, downloading, or using our website, mobile application, or related services, you ("User," "Employer," or "Service Provider/Worker") agree to these Terms & Conditions. If you do not agree, please discontinue use of the Platform immediately. These Terms govern your use of all services offered through the Zoopol Platform.
          </p>
          
          <div id="definitions" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">1. Definitions</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
              <li className="pl-3"><span className="font-bold text-white block mb-1">Employer / Job Poster:</span> <span className="text-white/60">a user who posts job listings and hires service providers.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">Service Provider / Worker:</span> <span className="text-white/60">a user who applies for jobs and provides on-demand services.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">Platform:</span> <span className="text-white/60">the Zoopol website, mobile application, and any related digital services.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">Job Slot:</span> <span className="text-white/60">the number of available workers needed for a job.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">PIN Verification:</span> <span className="text-white/60">a unique PIN used to verify job start and completion.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">Group Chat:</span> <span className="text-white/60">a communication channel automatically created for jobs with multiple vacancies.</span></li>
            </ul>
          </div>

          <div id="eligibility" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">2. Eligibility</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
              <li className="pl-2 text-white/60">Be at least 18 years old.</li>
              <li className="pl-2 text-white/60">Provide accurate registration information.</li>
              <li className="pl-2 text-white/60">Do not create fake profiles or use false identification.</li>
              <li className="pl-2 text-white/60">Comply with local laws and regulations when offering or hiring services.</li>
              <li className="pl-2 text-white/60">Use of the Platform by minors is strictly prohibited.</li>
            </ul>
          </div>

          <div id="user-accounts" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-6">3. User Accounts</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-white text-lg font-bold mb-3">3.1 Registration</h4>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-2 mb-4">
                  <li className="pl-2 text-white/60">Name</li>
                  <li className="pl-2 text-white/60">Phone number</li>
                  <li className="pl-2 text-white/60">OTP verification</li>
                </ul>
                <p className="mb-3 text-white/60">Optional but recommended:</p>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-2">
                  <li className="pl-2 text-white/60">ID verification</li>
                  <li className="pl-2 text-white/60">Profile photo</li>
                  <li className="pl-2 text-white/60">Skill set or job preferences</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-bold mb-3">3.2 Account Responsibilities</h4>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                  <li className="pl-3"><span className="font-bold text-white block mb-1">Keep login details secure:</span> <span className="text-white/60">do not share your account or password with others.</span></li>
                  <li className="pl-3"><span className="font-bold text-white block mb-1">Accuracy:</span> <span className="text-white/60">Ensure all information provided is accurate and updated.</span></li>
                  <li className="pl-3"><span className="font-bold text-white block mb-1">Full Responsibility:</span> <span className="text-white/60">You are solely responsible for actions performed using your account.</span></li>
                </ul>
                <p className="mt-4 text-white/60">We reserve the right to suspend or terminate accounts with suspicious or fraudulent activity.</p>
              </div>
            </div>
          </div>

          <div id="platform-role" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-6">4. Platform Role & Disclaimer</h3>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-white/70 font-medium">Zoopol is not an employer, agency, or contractor.</p>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                  <li className="pl-3"><span className="text-white/60">We connect employers with service providers.</span></li>
                  <li className="pl-3"><span className="text-white/60">We do not employ any user directly.</span></li>
                  <li className="pl-3"><span className="text-white/60">We do not control the quality, timing, legality, or safety of services.</span></li>
                  <li className="pl-3"><span className="text-white/60">We do not guarantee job availability or job performance.</span></li>
                </ul>
              </div>

              <div className="pt-6">
                <p className="mb-4 text-white/70 font-medium">The Platform is a digital marketplace only. Users are responsible for:</p>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-3">
                  <li className="pl-2 text-white/60">Hiring decisions and background checks</li>
                  <li className="pl-2 text-white/60">Quality of work performed</li>
                  <li className="pl-2 text-white/60">Final payment settlements</li>
                  <li className="pl-2 text-white/60">Accuracy of ratings & reviews</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="registration" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-8">5. Registration & Job Posting</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-white text-lg font-bold mb-3">5.1 For Job Posters (Employers)</h4>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                  <li className="pl-2 text-white/60">Post unlimited job listings.</li>
                  <li className="pl-2 text-white/60">Select number of available slots (workers) for each job.</li>
                  <li className="pl-2 text-white/60">Review and approve/reject worker applications.</li>
                  <li className="pl-2 text-white/60">Employers may cancel a job up to 24 hours before the start time.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white text-lg font-bold mb-3">5.2 For Service Providers (Workers)</h4>
                <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                  <li className="pl-2 text-white/60">Browse job listings and apply for available jobs.</li>
                  <li className="pl-2 text-white/60">Request more slots for multi-worker jobs.</li>
                  <li className="pl-2 text-white/60">Withdraw/cancel applications up to 24 hours before the job start.</li>
                </ul>
                <p className="text-white/60 mt-4">Cancelling within 24 hours may negatively impact your rating.</p>
              </div>
            </div>
          </div>

          <div id="verification" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">6. Job Verification (PIN & OTP)</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
              <li className="pl-3"><span className="font-bold text-white block mb-1">Unique PINs:</span> <span className="text-white/60">Each accepted worker receives a unique PIN after employer approval.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">Start Verification:</span> <span className="text-white/60">Employers may request this PIN at job start.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">Completion Verification:</span> <span className="text-white/60">Employers may use OTP or PIN to verify completion.</span></li>
              <li className="pl-3"><span className="font-bold text-white block mb-1">Consequences:</span> <span className="text-white/60">Failure to verify may result in delayed payment, dispute, or account review.</span></li>
            </ul>
          </div>

          <div id="ratings" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">7. Ratings & Reviews</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
              <li className="pl-2 text-white/60">After completing a job, employers and workers must rate each other.</li>
              <li className="pl-2 text-white/60">Written feedback may be added.</li>
              <li className="pl-2 text-white/60">Fake, misleading, or abusive reviews are prohibited and may be moderated or removed.</li>
            </ul>
          </div>

          <div id="payments-fees" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-8">8. Payments & Fees</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-white text-lg font-bold mb-3">8.1 External Payments</h4>
                <p className="text-white/60 leading-relaxed">Zoopol does not process payments internally. All payments are made directly between employers and service providers using cash, bank transfer, or third-party payment apps.</p>
              </div>
              
              <div>
                <h4 className="text-white text-lg font-bold mb-3">8.2 Commission</h4>
                <p className="text-white/60 leading-relaxed">The Platform may charge a commission on jobs, deducted from the service provider’s earnings. This amount may vary based on job type, location, or marketplace conditions.</p>
              </div>
              
              <div>
                <h4 className="text-white text-lg font-bold mb-3">8.3 Payment Tracking</h4>
                <p className="text-white/60 leading-relaxed">The Platform provides payment tracking and status screens for organization purposes. Zoopol is not responsible for late payments, incorrect amounts, or failed transactions.</p>
              </div>
            </div>
          </div>

          <div id="cancellations" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-8">9. Cancellations & No-Shows</h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-white text-lg font-bold mb-3">9.1 Employer Cancellations</h4>
                <p className="text-white/60 leading-relaxed">Allowed up to 24 hours before the job start time. Employers must provide a cancellation reason.</p>
              </div>
              
              <div>
                <h4 className="text-white text-lg font-bold mb-3">9.2 Worker Cancellations</h4>
                <p className="text-white/60 leading-relaxed">Allowed up to 24 hours before the job start time. Late cancellations may negatively affect ratings and profile trustworthiness.</p>
              </div>
              
              <div>
                <h4 className="text-white text-lg font-bold mb-3">9.3 No-Shows</h4>
                <p className="text-white/60 leading-relaxed">Repeated no-shows may lead to rating penalties, temporary suspension, or permanent removal from the Platform.</p>
              </div>
            </div>
          </div>

          <div id="conduct" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">10. User Conduct</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
              <li className="pl-3"><span className="text-white/60">Do not post misleading job listings or provide false profile information.</span></li>
              <li className="pl-3"><span className="text-white/60">Do not spam, harass, or abuse other users.</span></li>
              <li className="pl-3"><span className="text-white/60">Do not discuss payments inside the Platform to bypass commission.</span></li>
              <li className="pl-3"><span className="text-white/60">Do not use the Platform for illegal activities.</span></li>
              <li className="pl-3"><span className="text-white/60">Do not attempt to exploit system flaws or features.</span></li>
              <li className="pl-3"><span className="text-white/60">Do not upload harmful, defamatory, or explicit content.</span></li>
            </ul>
            <p className="text-white/60">Violation may result in account termination.</p>
          </div>

          <div id="chat" className="bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 scroll-mt-24 backdrop-blur-sm">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">11. Chat & Communication</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-3">
              <li className="pl-2 text-white/60">Users may communicate through direct chat.</li>
              <li className="pl-2 text-white/60">Group chat may be provided for jobs with multiple vacancies.</li>
            </ul>
          </div>

          <div className="pt-8 mt-12 text-center text-sm text-white/50">
            <p>For questions about these Terms, please contact us via in-app support.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 text-[#156BFC] hover:underline transition-colors font-medium cursor-pointer bg-transparent border-none inline-flex items-center gap-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
