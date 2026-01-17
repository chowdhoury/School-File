import React, { useState, useEffect } from "react";

const AdmissionNotice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/notice.json")
      .then((response) => response.json())
      .then((data) => {
        const admissionNotices = data.notices.filter(
          (notice) => notice.category === "admission"
        );
        setNotices(admissionNotices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading admission notices:", error);
        setLoading(false);
      });
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            ভর্তি বিজ্ঞপ্তি
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Notices Grid */}
        {notices.length > 0 ? (
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Date Section */}
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white p-6 flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-0 sm:min-w-[100px]">
                    <div className="text-3xl font-bold">{notice.date}</div>
                    <div className="text-sm font-medium">{notice.month}</div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold text-gray-900 flex-1">
                        {notice.title}
                      </h3>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-gradient-to-r from-green-400 to-green-500 text-white">
                        ভর্তি
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {notice.body}
                    </p>

                    {notice.attachment && (
                      <button
                        onClick={() => handleDownload(notice.attachment.url)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-sm transform hover:-translate-y-0.5"
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
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              বর্তমানে কোন ভর্তি বিজ্ঞপ্তি নেই
            </h3>
            <p className="text-gray-500 text-sm">
              নতুন বিজ্ঞপ্তি প্রকাশিত হলে এখানে দেখতে পাবেন
            </p>
          </div>
        )}

        {/* Contact Section */}
        {/* <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">যোগাযোগ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">ঠিকানা</h3>
                <p className="text-gray-600 text-sm">
                  মোড়াগাছা, খোকসা, কুষ্টিয়া
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">☎️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">ফোন</h3>
                <p className="text-gray-600 text-sm">০১৭১৪-৬৭৪৩২৭</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📧</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">ইমেইল</h3>
                <p className="text-gray-600 text-sm">mhskhoksa1999@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🕐</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">সময়</h3>
                <p className="text-gray-600 text-sm">সকাল ৯:০০ - বিকাল ৪:০০</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdmissionNotice;
