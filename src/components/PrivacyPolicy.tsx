import { Shield } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 lg:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#156BFC]" aria-hidden="true" />
            <h1 className="text-gray-900 text-3xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 text-sm md:text-base mt-2">Last Updated: November 27, 2025</p>
        </div>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed flex flex-col gap-12">
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            Welcome to Zoopol. We are committed to protecting your personal information and maintaining your trust. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, mobile application, and related services (the "Platform"). By creating an account, browsing jobs, posting jobs, or using any feature on Zoopol, you agree to the practices described in this Privacy Policy.
          </p>
          
          <div id="info-we-collect" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">1. Information We Collect</h3>
            <p className="mb-6 text-gray-600">We collect information to provide a safe, efficient, and personalized experience for both Job Posters (Employers) and Service Providers (Workers).</p>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Personal Information:</span>
                <span className="text-gray-600">name, phone number (with OTP verification), email address, profile photo, skills, preferences, experience (for workers), job category preferences (for posters), work history and job activity, and optional identity verification documents (e.g., government-issued ID).</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Location Information:</span>
                <span className="text-gray-600">your approximate or exact location (with permission) and job location details provided by posters. Location data is used for job matching and proximity-based recommendations.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Job-Related Data:</span>
                <span className="text-gray-600">job postings, applications, acceptance or rejection decisions, job slot requests, and PIN verification records to confirm job start and completion.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Communication Data:</span>
                <span className="text-gray-600">direct chats, group chats (for multi-vacancy jobs), and support conversations.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Ratings & Reviews:</span>
                <span className="text-gray-600">after jobs are completed, both parties may rate and review each other.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Device Information:</span>
                <span className="text-gray-600">mobile device model, operating system version, IP address, app performance analytics, and crash logs.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Payment-Related Information:</span>
                <span className="text-gray-600">Zoopol does not process or store payments internally. We collect payment tracking data, payment status (e.g., pending or completed), and job completion confirmations to support transparency between users.</span>
              </li>
            </ul>
          </div>

          <div id="use-of-info" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">2. How We Use Your Information</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Provide & Improve the Platform:</span>
                <span className="text-gray-600">create and manage your account, enable job posting and applications, match workers to relevant jobs, and manage job requests, slots, and approvals.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Verify Identity & Ensure Safety:</span>
                <span className="text-gray-600">perform OTP verification, optional ID verification, and PIN verification at job start and completion.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Enable Communication:</span>
                <span className="text-gray-600">provide chat and group messaging and send in-app notifications about job activity.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Maintain Trust & Accountability:</span>
                <span className="text-gray-600">display ratings and reviews, track job history and performance, and analyze dispute cases when necessary.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Analytics & Improvements:</span>
                <span className="text-gray-600">monitor app performance to improve user experience and features.</span>
              </li>
            </ul>
          </div>

          <div id="share-info" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">3. How We Share Your Information</h3>
            <p className="mb-6 text-gray-600">We do not sell your personal data. We may share your information only in the following situations:</p>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">With Other Users:</span>
                <span className="text-gray-600">to enable hiring and job applications, we may share your name, profile details, ratings/reviews, and relevant contact information when necessary.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">With Service Providers:</span>
                <span className="text-gray-600">we may work with analytics providers, identity verification partners, cloud hosting providers, and SMS/OTP providers. These partners are bound by strict confidentiality obligations.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Legal Requirements:</span>
                <span className="text-gray-600">we may share information if required by law enforcement, court orders, or applicable government regulations.</span>
              </li>
            </ul>
          </div>

          <div id="security" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-8">4. Data Security</h3>
            <div className="space-y-10">
              <p className="text-gray-600 leading-relaxed">
                We take reasonable administrative, technical, and physical measures to protect your information from unauthorized access, loss, or theft.
              </p>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Our security practices include:</h4>
                <p className="text-gray-600 leading-relaxed">
                  Encryption of sensitive data, routine security audits, and access controls for our employees. However, no communication over the Internet or mobile networks is 100% secure. You use the Platform at your own risk.
                </p>
              </div>
            </div>
          </div>

          <div id="choices-rights" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">5. Your Choices & Rights</h3>
            <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-6">
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Access, Update & Delete Data:</span>
                <span className="text-gray-600">you can update most profile information directly in the app. You may also request data deletion or account deactivation.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Opt-Out of Notifications:</span>
                <span className="text-gray-600">you can turn off push notifications in app settings or device settings.</span>
              </li>
              <li className="pl-3">
                <span className="font-bold text-gray-900 block mb-1">Location Permissions:</span>
                <span className="text-gray-600">you may disable location access; note that some features (like nearby job recommendations) may not work properly.</span>
              </li>
            </ul>
          </div>

          <div id="retention" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">6. Data Retention</h3>
            <p className="text-gray-600 leading-relaxed">
              We retain data as long as necessary to operate the Platform, comply with legal obligations, resolve disputes, and maintain user safety. When data is no longer required, it is securely deleted.
            </p>
          </div>

          <div id="children" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">7. Children’s Privacy</h3>
            <p className="text-gray-600 leading-relaxed">
              Zoopol is not intended for users under the age of 18. If we discover underage usage, the account will be removed.
            </p>
          </div>

          <div id="external-payments" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">8. Third-Party Links & External Payments</h3>
            <p className="text-gray-600 leading-relaxed">
              The Platform does not process payments internally. Payments occur outside the app between users (e.g., cash, bank transfer, or third-party apps). We are not responsible for payment disputes, payment failures, or third-party policies.
            </p>
          </div>

          <div id="changes" className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-100 scroll-mt-24">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold mb-4">9. Changes to This Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. If changes are significant, we will notify you through in-app notifications and, if you have provided an email address, by email.
            </p>
          </div>

          <div className="pt-8 mt-12 text-center text-sm text-gray-500">
            <p>
              For questions about this Privacy Policy, please contact us via in-app support.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 text-[#156BFC] hover:text-blue-800 transition-colors font-medium cursor-pointer bg-transparent border-none inline-flex items-center gap-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
