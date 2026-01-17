import React, { useState } from "react";

const Internal = () => {
  const [searchClass, setSearchClass] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchRoll, setSearchRoll] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  // Available classes and years
  const classes = ["৬ষ্ঠ", "৭ম", "৮ম", "৯ম", "১০ম"];
  const years = ["২০২৫", "২০২৪", "২০২৩"];

  // Sample student results database (in real app, this would be from API)
  const studentResults = [];

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);

    // Find matching result
    const result = studentResults.find(
      (student) =>
        student.class === searchClass &&
        student.year === searchYear &&
        student.roll === searchRoll
    );

    setSearchResult(result || null);
  };

  const handleReset = () => {
    setSearchClass("");
    setSearchYear("");
    setSearchRoll("");
    setHasSearched(false);
    setSearchResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 li-font">
            অভ্যন্তরীণ পরীক্ষার ফলাফল
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Information Card */}
        {/* <div className="mb-8 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-[2px] rounded-xl">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">ℹ️</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2 li-font">
                    গুরুত্বপূর্ণ তথ্য
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ছাত্র-ছাত্রীদের অভ্যন্তরীণ পরীক্ষার ফলাফল দেখতে নিচের ফর্মে
                    আপনার শ্রেণি, বছর এবং রোল নম্বর দিয়ে অনুসন্ধান করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Search Form */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center li-font">
              ফলাফল অনুসন্ধান করুন
            </h2>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Class Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    শ্রেণি <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={searchClass}
                      onChange={(e) => setSearchClass(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all appearance-none bg-white cursor-pointer text-gray-800 font-medium"
                    >
                      <option value="">শ্রেণি নির্বাচন করুন</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls} শ্রেণি
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      ▼
                    </span>
                  </div>
                </div>

                {/* Year Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    বছর <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={searchYear}
                      onChange={(e) => setSearchYear(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all appearance-none bg-white cursor-pointer text-gray-800 font-medium"
                    >
                      <option value="">বছর নির্বাচন করুন</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                      ▼
                    </span>
                  </div>
                </div>

                {/* Roll Number Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    রোল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={searchRoll}
                    onChange={(e) => setSearchRoll(e.target.value)}
                    placeholder="রোল নম্বর লিখুন"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all text-gray-800 font-medium"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 li-font"
                >
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  ফলাফল অনুসন্ধান করুন
                </button>

                {hasSearched && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    পুনরায় শুরু করুন
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Search Results */}
        {hasSearched && (
          <>
            {searchResult ? (
              // Result Found - Display Result Card
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-200">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 li-font">
                          {searchResult.name}
                        </h3>
                        <p className="text-green-100 text-sm">
                          শ্রেণি: {searchResult.class} | রোল:{" "}
                          {searchResult.roll} | বছর: {searchResult.year}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold">
                          {searchResult.grade}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2 li-font">
                        {searchResult.exam}
                      </h4>
                      <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                    </div>

                    {/* Subjects Table */}
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">
                              বিষয়
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">
                              নম্বর
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-700">
                              গ্রেড
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {searchResult.subjects.map((subject, index) => (
                            <tr
                              key={index}
                              className="hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-4 py-3 text-gray-800 font-medium">
                                {subject.name}
                              </td>
                              <td className="px-4 py-3 text-center text-gray-800 font-bold">
                                {subject.marks}
                              </td>
                              <td className="px-4 py-3 text-center">
                                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                                  {subject.grade}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Summary Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200">
                        <p className="text-sm text-blue-600 font-semibold mb-1">
                          মোট নম্বর
                        </p>
                        <p className="text-2xl font-bold text-blue-700">
                          {searchResult.total}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
                        <p className="text-sm text-green-600 font-semibold mb-1">
                          গড় নম্বর
                        </p>
                        <p className="text-2xl font-bold text-green-700">
                          {searchResult.average}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200">
                        <p className="text-sm text-purple-600 font-semibold mb-1">
                          গ্রেড
                        </p>
                        <p className="text-2xl font-bold text-purple-700">
                          {searchResult.grade}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
                        <p className="text-sm text-orange-600 font-semibold mb-1">
                          অবস্থান
                        </p>
                        <p className="text-2xl font-bold text-orange-700">
                          {searchResult.position}
                        </p>
                      </div>
                    </div>

                    {/* Print Button */}
                    <div className="mt-6 flex justify-center">
                      <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 li-font">
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
                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                          />
                        </svg>
                        ফলাফল প্রিন্ট করুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // No Result Found
              <div className="text-center py-16">
                <div className="inline-block p-8 bg-white rounded-2xl shadow-lg max-w-md">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                    <span className="text-5xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 li-font">
                    কোনো ফলাফল পাওয়া যায়নি
                  </h3>
                  <p className="text-gray-600 mb-4 li-font">
                    প্রদত্ত তথ্যের সাথে মিলে এমন কোন ফলাফল খুঁজে পাওয়া যায়নি।
                  </p>
                  {/* <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-left">
                    <p className="text-sm text-yellow-800">
                      <strong>দয়া করে নিশ্চিত করুন:</strong>
                    </p>
                    <ul className="text-sm text-yellow-700 mt-2 space-y-1 list-disc list-inside">
                      <li>শ্রেণি সঠিকভাবে নির্বাচন করেছেন</li>
                      <li>বছর সঠিক আছে</li>
                      <li>রোল নম্বর সঠিকভাবে লিখেছেন</li>
                    </ul>
                  </div> */}
                </div>
              </div>
            )}
          </>
        )}

        {/* Help Section */}
        {/* <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4 li-font flex items-center gap-2">
            <span className="text-2xl">💡</span>
            সাহায্য প্রয়োজন?
          </h3>
          <div className="space-y-3 text-gray-600">
            <p className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>
                আপনার ফলাফল দেখতে উপরের ফিল্টার ব্যবহার করে আপনার শ্রেণি এবং
                পরীক্ষা নির্বাচন করুন।
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>
                কোনো সমস্যা হলে বিদ্যালয় প্রশাসনের সাথে যোগাযোগ করুন।
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-green-500 font-bold">•</span>
              <span>নতুন ফলাফল প্রকাশের জন্য নিয়মিত এই পেজ চেক করুন।</span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Internal;
