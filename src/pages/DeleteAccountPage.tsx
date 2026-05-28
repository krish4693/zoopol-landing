import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Trash2, ArrowRight, ExternalLink } from 'lucide-react';

export default function DeleteAccountPage() {
  return (
    <div className="pt-24 pb-20 px-4 bg-white dark:bg-[#0f172a] transition-colors duration-300 min-h-[80vh]">
      <Helmet>
        <title>Account Deletion Request — Zoopol</title>
        <meta name="description" content="Request permanent deletion of your Zoopol account and personal data." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 mb-6">
            <Trash2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Account Deletion Request
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We value your privacy. You can permanently delete your Zoopol account and all associated data at any time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-12 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </span>
                How to delete via App:
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Open App", desc: "Launch the Zoopol app on your device." },
                  { title: "Profile Settings", desc: "Navigate to your Profile and tap on Settings." },
                  { title: "Delete Account", desc: "Locate and tap the 'Delete Account' option." },
                  { title: "Confirm", desc: "Confirm your request to finalize the deletion." }
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white flex items-center justify-center text-sm font-bold shadow-sm">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </span>
                  Data removal details:
                </h2>
                <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    When an account is deleted, the following data is permanently removed:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "User profile data (Name, Photo, Bio)",
                      "Authentication records and credentials",
                      "Associated personal information and contact details"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://www.zoopol.com/delete-account" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 group"
                >
                  Manage Account Online
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Or email us at support@zoopol.com for manual assistance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
