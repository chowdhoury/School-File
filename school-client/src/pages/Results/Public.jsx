import React, { useState } from "react";

const Public = () => {
  const [selectedExam, setSelectedExam] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Define the results data
  const resultsData = [
    { exam: "জেএসসি", year: "২০১১", file: "jessore_jsc_2011_117639.pdf" },
    { exam: "জেএসসি", year: "২০১২", file: "jessore_jsc_2012_117639.pdf" },
    { exam: "জেএসসি", year: "২০১৩", file: "jessore_jsc_2013_117639.pdf" },
    { exam: "জেএসসি", year: "২০১৪", file: "jessore_jsc_2014_117639.pdf" },
    { exam: "জেএসসি", year: "২০১৫", file: "jessore_jsc_2015_117639.pdf" },
    { exam: "জেএসসি", year: "২০১৬", file: "jessore_jsc_2016_117639.pdf" },
    { exam: "জেএসসি", year: "২০১৭", file: "jessore_jsc_2017_117639.pdf" },
    { exam: "জেএসসি", year: "২০১৮", file: "jessore_jsc_2018_117639.pdf" },
    { exam: "জেএসসি", year: "২০১৯", file: "jessore_jsc_2019_117639.pdf" },
    { exam: "এসএসসি", year: "২০১২", file: "jessore_ssc_2012_117639.pdf" },
    { exam: "এসএসসি", year: "২০১৩", file: "jessore_ssc_2013_117639.pdf" },
    { exam: "এসএসসি", year: "২০১৪", file: "jessore_ssc_2014_117639.pdf" },
    { exam: "এসএসসি", year: "২০১৫", file: "jessore_ssc_2015_117639.pdf" },
    { exam: "এসএসসি", year: "২০১৬", file: "jessore_ssc_2016_117639.pdf" },
    { exam: "এসএসসি", year: "২০১৭", file: "jessore_ssc_2017_117639.pdf" },
    { exam: "এসএসসি", year: "২০১৮", file: "jessore_ssc_2018_117639.pdf" },
    { exam: "এসএসসি", year: "২০১৯", file: "jessore_ssc_2019_117639.pdf" },
    { exam: "এসএসসি", year: "২০২০", file: "jessore_ssc_2020_117639.pdf" },
    { exam: "এসএসসি", year: "২০২১", file: "jessore_ssc_2021_117639.pdf" },
    { exam: "এসএসসি", year: "২০২২", file: "jessore_ssc_2022_117639.pdf" },
    { exam: "এসএসসি", year: "২০২৩", file: "jessore_ssc_2023_117639.pdf" },
    { exam: "এসএসসি", year: "২০২৪", file: "jessore_ssc_2024_117639.pdf" },
    { exam: "এসএসসি", year: "২০২৫", file: "jessore_ssc_2025_117639.pdf" },
  ];

  // Get unique years and sort in descending order
  const years = [...new Set(resultsData.map((r) => r.year))].sort(
    (a, b) => b - a
  );

  // Filter results based on selection
  const filteredResults = resultsData
    .filter((result) => {
      const examMatch = selectedExam === "all" || result.exam === selectedExam;
      const yearMatch = selectedYear === "all" || result.year === selectedYear;
      const searchMatch =
        result.exam.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.year.includes(searchTerm);
      return examMatch && yearMatch && searchMatch;
    })
    .sort((a, b) => {
      const yearA = parseInt(
        a.year.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d))
      );
      const yearB = parseInt(
        b.year.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d))
      );
      return yearB - yearA;
    });

  // Group results by exam type
  const groupedResults = filteredResults.reduce((acc, result) => {
    if (!acc[result.exam]) {
      acc[result.exam] = [];
    }
    acc[result.exam].push(result);
    return acc;
  }, {});

  const handleDownload = (filename) => {
    const link = document.createElement("a");
    link.href = `/publicResults/${filename}`;
    link.download = filename;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            জেএসসি এবং এসএসসি পরীক্ষার ফলাফল
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          {/* Search Box */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="ফলাফল খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-sm li-font"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Exam Filter */}
          <div className="relative">
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all appearance-none bg-white cursor-pointer text-sm li-font"
            >
              <option value="all">সকল পরীক্ষা</option>
              <option value="জেএসসি">জেএসসি</option>
              <option value="এসএসসি">এসএসসি</option>
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
              ▼
            </span>
          </div>

          {/* Year Filter */}
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all appearance-none bg-white cursor-pointer text-sm li-font"
            >
              <option value="all">সকল বছর</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {/* Results Grid */}
        {filteredResults.length > 0 ? (
          <div className="space-y-8">
            {Object.entries(groupedResults).map(([exam, results]) => (
              <div key={exam}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-emerald-500 inline-block li-font">
                  {exam} ফলাফল
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

                      {/* Icon */}
                      <div className="relative mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            className="w-10 h-10"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="12" y1="18" x2="12" y2="12" />
                            <line x1="9" y1="15" x2="15" y2="15" />
                          </svg>
                        </div>
                      </div>

                      {/* Result Info */}
                      <div className="text-center mb-5">
                        <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-emerald-600 transition-colors li-font">
                          {result.exam}
                        </h3>
                        <p className="text-lg text-white bg-gradient-to-r from-emerald-500 to-teal-500 py-1.5 px-3 rounded-full inline-block font-semibold shadow-sm li-font">
                          {result.year}
                        </p>
                      </div>

                      {/* Board Info */}
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-3 mb-4">
                        <p className="text-sm text-gray-700 font-medium text-center li-font">
                          মোড়াগাছা মাধ্যমিক বিদ্যালয়
                        </p>
                      </div>

                      {/* Download Button */}
                      <button
                        onClick={() => handleDownload(result.file)}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg li-font"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-5 h-5"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        ডাউনলোড করুন
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2 li-font">
              কোন ফলাফল পাওয়া যায়নি
            </h3>
            <p className="text-gray-500 li-font">
              অনুগ্রহ করে অন্য নাম বা পদবী দিয়ে খুঁজুন
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Public;
