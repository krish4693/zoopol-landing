import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import { Shield } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <ReadingProgress />
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10">
          <div className="mb-6 md:mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Shield className="w-6 h-6 text-[#156BFC]" aria-hidden="true" />
              <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold tracking-tight">Privacy Policy — Zoopol</h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base">Last Updated: November 27, 2025</p>
          </div>

          <div className="md:grid md:grid-cols-[240px,1fr] md:gap-8">
            <div className="hidden md:block">
              <TableOfContents
                items={[
                  { id: "info-we-collect", title: "1. Information we collect" },
                  { id: "use-of-info", title: "2. How we use information" },
                  { id: "share-info", title: "3. How we share information" },
                  { id: "storage-security", title: "4. Data storage & security" },
                  { id: "choices-rights", title: "5. Your choices & rights" },
                  { id: "retention", title: "6. Data retention" },
                  { id: "children", title: "7. Children’s privacy" },
                  { id: "external-payments", title: "8. External payments" },
                  { id: "changes", title: "9. Changes to this policy" },
                ]}
              />
            </div>
            <div className="text-gray-700 text-base md:text-lg leading-relaxed">
              <div className="pt-6 md:pt-8 mb-12 md:mb-16">
                <p className="leading-relaxed">
                Welcome to Zoopol. We are committed to protecting your personal information and maintaining your trust. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, mobile application, and related services (the "Platform"). By creating an account, browsing jobs, posting jobs, or using any feature on Zoopol, you agree to the practices described in this Privacy Policy.
                </p>
              </div>
              
              <div className="space-y-12 md:space-y-16 divide-y divide-gray-100">
            <div id="info-we-collect" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10 mt-4">1. Information We Collect</h3>
              <p className="mb-4 text-gray-600">We collect information to provide a safe, efficient, and personalized experience for both Job Posters (Employers) and Service Providers (Workers).</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Personal Information:</span> name, phone number (with OTP verification), email address, profile photo, skills, preferences, experience (for workers), job category preferences (for posters), work history and job activity, and optional identity verification documents (e.g., government-issued ID).
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Location Information:</span> your approximate or exact location (with permission) and job location details provided by posters. Location data is used for job matching and proximity-based recommendations.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Job-Related Data:</span> job postings, applications, acceptance or rejection decisions, job slot requests, and PIN verification records to confirm job start and completion.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Communication Data:</span> direct chats, group chats (for multi-vacancy jobs), and support conversations.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Ratings & Reviews:</span> after jobs are completed, both parties may rate and review each other.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Device Information:</span> mobile device model, operating system version, IP address, app performance analytics, and crash logs.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Payment-Related Information:</span> Zoopol does not process or store payments internally. We collect payment tracking data, payment status (e.g., pending or completed), and job completion confirmations to support transparency between users.
                </li>
              </ul>
            </div>

            <div id="use-of-info" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">2. How We Use Your Information</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Provide & Improve the Platform:</span> create and manage your account, enable job posting and applications, match workers to relevant jobs, and manage job requests, slots, and approvals.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Verify Identity & Ensure Safety:</span> perform OTP verification, optional ID verification, and PIN verification at job start and completion.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Enable Communication:</span> provide chat and group messaging and send in-app notifications about job activity.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Maintain Trust & Accountability:</span> display ratings and reviews, track job history and performance, and analyze dispute cases when necessary.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Analytics & Improvements:</span> monitor app performance to improve user experience and features.
                </li>
              </ul>
            </div>

            <div id="share-info" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">3. How We Share Your Information</h3>
              <p className="mb-4 text-gray-600">We do not sell your personal data. We may share your information only in the following situations:</p>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">
                  <span className="font-bold text-gray-900">With Other Users:</span> to enable hiring and job applications, we may share your name, profile details, ratings/reviews, and relevant contact information when necessary.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">With Service Providers:</span> we may work with analytics providers, identity verification partners, cloud hosting providers, and SMS/OTP providers. These partners are bound by strict confidentiality obligations.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Legal Requirements:</span> we may share information if required by law enforcement, court orders, or applicable government regulations.
                </li>
              </ul>
            </div>

            <div id="storage-security" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">4. Data Storage & Security</h3>
              <p className="text-gray-600">
                We use industry-standard security practices to protect your data, including encrypted databases, protected cloud infrastructure, and restricted access controls. However, no system is completely secure. You share information at your own risk.
              </p>
            </div>

            <div id="choices-rights" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">5. Your Choices & Rights</h3>
              <ul className="list-disc marker:text-[#156BFC] pl-6 space-y-4">
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Access, Update & Delete Data:</span> you can update most profile information directly in the app. You may also request data deletion or account deactivation.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Opt-Out of Notifications:</span> you can turn off push notifications in app settings or device settings.
                </li>
                <li className="pl-2">
                  <span className="font-bold text-gray-900">Location Permissions:</span> you may disable location access; note that some features (like nearby job recommendations) may not work properly.
                </li>
              </ul>
            </div>

            <div id="retention" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">6. Data Retention</h3>
              <p className="text-gray-600">
                We retain data as long as necessary to operate the Platform, comply with legal obligations, resolve disputes, and maintain user safety. When data is no longer required, it is securely deleted.
              </p>
            </div>

            <div id="children" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">7. Children’s Privacy</h3>
              <p className="text-gray-600">
                Zoopol is not intended for users under the age of 18. If we discover underage usage, the account will be removed.
              </p>
            </div>

            <div id="external-payments" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">8. Third-Party Links & External Payments</h3>
              <p className="text-gray-600">
                The Platform does not process payments internally. Payments occur outside the app between users (e.g., cash, bank transfer, or third-party apps). We are not responsible for payment disputes, payment failures, or third-party policies.
              </p>
            </div>

            <div id="changes" className="pt-14 md:pt-16">
              <h3 className="text-gray-900 text-2xl md:text-3xl font-bold tracking-tight mb-10">9. Changes to This Policy</h3>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. If changes are significant, we will notify you through in-app notifications and, if you have provided an email address, by email.
              </p>
            </div>

            <div className="pt-12 border-t border-gray-100 mt-12 text-sm text-gray-500">
              <p>
                For questions about this Privacy Policy, please contact us via in-app support.
              </p>
            </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="#home" className="text-[#156BFC] hover:underline">Back to top</a>
          </div>
        </div>
      </div>
    </section>
  );
}
