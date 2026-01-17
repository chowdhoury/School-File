import React, { useState, useEffect } from "react";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/notice.json")
      .then((response) => response.json())
      .then((data) => {
        setNotices(data.notices);
        setFilteredNotices(data.notices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading notices:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = notices;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (notice) => notice.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (notice) =>
          notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          notice.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredNotices(filtered);
  }, [selectedCategory, searchTerm, notices]);

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            নোটিশ বোর্ড
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Section */}
        {/* <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 md:p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="নোটিশ খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all text-sm ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                সকল
              </button>
              <button
                onClick={() => setSelectedCategory("general")}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all text-sm ${
                  selectedCategory === "general"
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                সাধারণ
              </button>
              <button
                onClick={() => setSelectedCategory("admission")}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all text-sm ${
                  selectedCategory === "admission"
                    ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                ভর্তি
              </button>
            </div>
          </div>
        </div> */}

        {/* Notices Grid */}
        {filteredNotices.length > 0 ? (
          <div className="space-y-4">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Date Section */}
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-6 flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-0 sm:min-w-[100px]">
                    <div className="text-3xl font-bold li-font">
                      {notice.date}
                    </div>
                    <div className="text-sm font-medium li-font">
                      {notice.month}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold text-gray-900 flex-1 li-font">
                        {notice.title}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap li-font ${
                          notice.category === "admission"
                            ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-white"
                            : "bg-gradient-to-r from-emerald-400 to-teal-500 text-white"
                        }`}
                      >
                        {notice.category === "admission" ? "ভর্তি" : "সাধারণ"}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed li-font">
                      {notice.body}
                    </p>

                    {notice.attachment && (
                      <button
                        onClick={() => handleDownload(notice.attachment.url)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-sm transform hover:-translate-y-0.5 li-font"
                      >
                        <span>📥</span>
                        <span>বিস্তারিত</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2 li-font">
              কোন নোটিশ পাওয়া যায়নি
            </h3>
            <p className="text-gray-500 text-sm li-font">
              আপনার অনুসন্ধান পরিবর্তন করে চেষ্টা করুন
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;
