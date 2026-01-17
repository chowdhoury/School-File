import React from "react";
import "./Routine.css";

const Routine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 li-font">
            ক্লাস রুটিন
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Announcement Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
          <div className="mb-6">
            <svg
              className="w-20 h-20 mx-auto text-emerald-500 opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 li-font">
            রুটিন শীঘ্রই প্রকাশিত হবে
          </h4>

          {/* <p className="text-gray-600 text-lg mb-6">
            Routine will be announced shortly
          </p> */}

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="li-font">অনুগ্রহ করে পরে আবার চেক করুন</span>
          </div>
        </div>

        {/* Additional Info Section */}
        {/* <div className="mt-8 text-center text-gray-600 text-sm">
          <p>For any queries, please contact the school administration</p>
        </div> */}
      </div>
    </div>
  );
};

export default Routine;
