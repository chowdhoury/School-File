import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
              ৪
            </span>
            <span className="text-9xl md:text-[10rem] font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ০
            </span>
            <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
              ৪
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            পৃষ্ঠা পাওয়া যায়নি
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-700 li-font">
            দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি বিদ্যমান নেই বা সরানো হয়েছে।
          </p>
        </div>

        {/* Illustration */}
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-4 border-emerald-500 hover:shadow-emerald-100 transition-all duration-300 mb-8">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg
                viewBox="0 0 200 200"
                className="w-40 h-40 md:w-48 md:h-48 transform hover:scale-110 transition-transform duration-300"
              >
                <g>
                  {/* Book */}
                  <rect
                    x="60"
                    y="70"
                    width="80"
                    height="100"
                    fill="#006747"
                    rx="4"
                  />
                  <rect
                    x="65"
                    y="75"
                    width="70"
                    height="90"
                    fill="#013223"
                    rx="2"
                  />
                  <line
                    x1="100"
                    y1="75"
                    x2="100"
                    y2="165"
                    stroke="#006747"
                    strokeWidth="2"
                  />
                  {/* Pages */}
                  <line
                    x1="70"
                    y1="90"
                    x2="95"
                    y2="90"
                    stroke="#fff"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <line
                    x1="70"
                    y1="100"
                    x2="95"
                    y2="100"
                    stroke="#fff"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <line
                    x1="70"
                    y1="110"
                    x2="95"
                    y2="110"
                    stroke="#fff"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <line
                    x1="105"
                    y1="90"
                    x2="130"
                    y2="90"
                    stroke="#fff"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <line
                    x1="105"
                    y1="100"
                    x2="130"
                    y2="100"
                    stroke="#fff"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  <line
                    x1="105"
                    y1="110"
                    x2="130"
                    y2="110"
                    stroke="#fff"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />
                  {/* Question mark */}
                  <text
                    x="100"
                    y="145"
                    fontSize="28"
                    fill="#fff"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    ?
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transform hover:-translate-y-1 transition-all duration-300 li-font"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              হোম পেজে যান
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-emerald-600 hover:bg-emerald-50 transform hover:-translate-y-1 transition-all duration-300 li-font"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              পূর্ববর্তী পেজে ফিরে যান
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t-2 border-emerald-100 pt-6">
            <p className="text-center text-gray-700 font-semibold mb-4 li-font">
              দ্রুত লিংক:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                to="/notice"
                className="p-3 bg-emerald-50 text-emerald-700 text-center rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white font-medium transition-all duration-300 shadow hover:shadow-lg li-font"
              >
                নোটিশ বোর্ড
              </Link>
              <Link
                to="/academic/routine"
                className="p-3 bg-emerald-50 text-emerald-700 text-center rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white font-medium transition-all duration-300 shadow hover:shadow-lg li-font"
              >
                ক্লাস রুটিন
              </Link>
              <Link
                to="/results/public"
                className="p-3 bg-emerald-50 text-emerald-700 text-center rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white font-medium transition-all duration-300 shadow hover:shadow-lg li-font"
              >
                পরীক্ষার ফলাফল
              </Link>
              <Link
                to="/contact"
                className="p-3 bg-emerald-50 text-emerald-700 text-center rounded-lg hover:bg-gradient-to-r hover:from-emerald-600 hover:to-teal-600 hover:text-white font-medium transition-all duration-300 shadow hover:shadow-lg li-font"
              >
                যোগাযোগ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
