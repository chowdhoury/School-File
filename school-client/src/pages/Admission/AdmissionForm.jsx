import React from "react";
import { Link } from "react-router";

const AdmissionForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            ভর্তি ফরম
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-4 border-emerald-500 hover:shadow-emerald-100 transition-all duration-300">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg
                  className="w-16 h-16 md:w-20 md:h-20 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Coming Soon Text */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4 li-font">
              শীঘ্রই প্রকাশিত হবে
            </h2>
            <p className="text-lg text-gray-700 mb-6 li-font">
              ভর্তি ফরম শীঘ্রই এখানে উপলব্ধ হবে। অনুগ্রহ করে নিয়মিত আমাদের
              নোটিশ বোর্ড চেক করুন।
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 rounded-lg font-semibold li-font">
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              প্রস্তুতি চলছে...
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-emerald-100 my-8"></div>

          {/* Important Notice Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 li-font text-lg">
                  গুরুত্বপূর্ণ তথ্য
                </h3>
                <ul className="space-y-2 text-gray-700 li-font">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      ভর্তি সংক্রান্ত সকল তথ্য নোটিশ বোর্ডে প্রকাশ করা হবে
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>ভর্তি নোটিশের জন্য নিয়মিত ওয়েবসাইট ভিজিট করুন</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>যেকোনো তথ্যের জন্য স্কুল অফিসে যোগাযোগ করুন</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/notice"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transform hover:-translate-y-1 transition-all duration-300 li-font"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              নোটিশ বোর্ড দেখুন
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-emerald-600 hover:bg-emerald-50 transform hover:-translate-y-1 transition-all duration-300 li-font"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              যোগাযোগ করুন
            </Link>
          </div>

          {/* Additional Links */}
          <div className="border-t-2 border-emerald-100 pt-6">
            <p className="text-center text-gray-700 font-semibold mb-4 li-font">
              আরও তথ্যের জন্য:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link
                to="/admission/notice"
                className="p-3 bg-emerald-50 text-emerald-700 text-center rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white font-medium transition-all duration-300 shadow hover:shadow-lg li-font text-sm"
              >
                ভর্তি নোটিশ
              </Link>
              <Link
                to="/admission/result"
                className="p-3 bg-emerald-50 text-emerald-700 text-center rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white font-medium transition-all duration-300 shadow hover:shadow-lg li-font text-sm"
              >
                ভর্তি ফলাফল
              </Link>
              <Link
                to="/"
                className="p-3 bg-emerald-50 text-emerald-700 text-center rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white font-medium transition-all duration-300 shadow hover:shadow-lg li-font text-sm"
              >
                হোম পেজ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
