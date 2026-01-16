import React from "react";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaBookOpen,
  FaUmbrellaBeach,
  FaStar,
  FaMosque,
} from "react-icons/fa";

const Calender = () => {
  const academicEvents = [
    {
      month: "জানুয়ারি ২০২৬",
      events: [
        { date: "০১", event: "নববর্ষ - সরকারি ছুটি", type: "holiday" },
        // {
        //   date: "০৫-১০",
        //   event: "ষাণ্মাসিক পরীক্ষার ফলাফল প্রকাশ",
        //   type: "result",
        // },
        { date: "২৬", event: "প্রজাতন্ত্র দিবস", type: "event" },
      ],
    },
    {
      month: "ফেব্রুয়ারি ২০২৬",
      events: [
        { date: "০২", event: "সরস্বতী পূজা", type: "event" },
        { date: "১৫", event: "প্রথম শ্রেণি পরীক্ষা শুরু", type: "exam" },
        {
          date: "২১",
          event: "শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস",
          type: "holiday",
        },
      ],
    },
    {
      month: "মার্চ ২০২৬",
      events: [
        { date: "০১", event: "বার্ষিক ক্রীড়া প্রতিযোগিতা", type: "event" },
        { date: "১৭", event: "জাতীয় শিশু দিবস", type: "event" },
        { date: "২৬", event: "স্বাধীনতা ও জাতীয় দিবস", type: "holiday" },
        { date: "২৮-৩১", event: "রমজান শুরু (আনুমানিক)", type: "religious" },
      ],
    },
    {
      month: "এপ্রিল ২০২৬",
      events: [
        { date: "০১-১৩", event: "রমজান মাস", type: "religious" },
        { date: "১৪", event: "বাংলা নববর্ষ (পহেলা বৈশাখ)", type: "holiday" },
        { date: "১৫-২০", event: "প্রথম সাময়িক পরীক্ষা", type: "exam" },
        { date: "২৬-২৮", event: "ঈদ-উল-ফিতর (আনুমানিক)", type: "holiday" },
      ],
    },
    {
      month: "মে ২০২৬",
      events: [
        { date: "০১", event: "মে দিবস - সরকারি ছুটি", type: "holiday" },
        { date: "০৫-১০", event: "ফলাফল প্রকাশ ও অভিভাবক সভা", type: "result" },
        { date: "১৫", event: "গ্রীষ্মকালীন ছুটি শুরু", type: "vacation" },
      ],
    },
    {
      month: "জুন ২০২৬",
      events: [
        { date: "০১-১৫", event: "গ্রীষ্মকালীন ছুটি চলমান", type: "vacation" },
        { date: "১৬", event: "বিদ্যালয় পুনরায় খোলা", type: "event" },
        { date: "২০", event: "শিক্ষক প্রশিক্ষণ কর্মসূচি", type: "event" },
      ],
    },
    {
      month: "জুলাই ২০২৬",
      events: [
        { date: "০১", event: "দ্বিতীয় সেমিস্টার শুরু", type: "event" },
        { date: "০৩-০৫", event: "ঈদ-উল-আযহা (আনুমানিক)", type: "holiday" },
        { date: "২৫", event: "আশুরা (আনুমানিক)", type: "religious" },
      ],
    },
    {
      month: "আগস্ট ২০২৬",
      events: [
        { date: "১৫", event: "জাতীয় শোক দিবস", type: "holiday" },
        { date: "২০-২৫", event: "দ্বিতীয় শ্রেণি পরীক্ষা", type: "exam" },
        { date: "৩১", event: "জন্মাষ্টমী", type: "event" },
      ],
    },
    {
      month: "সেপ্টেম্বর ২০২৬",
      events: [
        { date: "০৫", event: "বিশ্ব শিক্ষক দিবস উদযাপন", type: "event" },
        { date: "১৫-২২", event: "অর্ধ-বার্ষিক পরীক্ষা", type: "exam" },
        { date: "২৪", event: "ঈদ-ই-মিলাদুন্নবী (আনুমানিক)", type: "religious" },
      ],
    },
    {
      month: "অক্টোবর ২০২৬",
      events: [
        { date: "০১-০৫", event: "দুর্গা পূজার ছুটি", type: "holiday" },
        { date: "১২", event: "অর্ধ-বার্ষিক ফলাফল প্রকাশ", type: "result" },
        { date: "২০", event: "দীপাবলি", type: "event" },
        { date: "২৫", event: "বিজ্ঞান মেলা", type: "event" },
      ],
    },
    {
      month: "নভেম্বর ২০২৬",
      events: [
        { date: "০৪", event: "জাতীয় বিপ্লব ও সংহতি দিবস", type: "holiday" },
        { date: "১০-১৫", event: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান", type: "event" },
        {
          date: "২০",
          event: "প্রাক-নির্বাচনী পরীক্ষা (১০ম শ্রেণি)",
          type: "exam",
        },
      ],
    },
    {
      month: "ডিসেম্বর ২০২৬",
      events: [
        { date: "০১-১২", event: "বার্ষিক পরীক্ষা", type: "exam" },
        { date: "১৬", event: "মহান বিজয় দিবস", type: "holiday" },
        { date: "২০", event: "বার্ষিক পুরস্কার বিতরণী", type: "event" },
        { date: "২৫", event: "বড়দিন - সরকারি ছুটি", type: "holiday" },
        {
          date: "৩১",
          event: "বার্ষিক ফলাফল প্রকাশ ও শীতকালীন ছুটি",
          type: "vacation",
        },
      ],
    },
  ];

  const getEventStyle = (type) => {
    switch (type) {
      case "holiday":
        return "bg-red-50 border-l-4 border-red-500 text-red-700";
      case "exam":
        return "bg-amber-50 border-l-4 border-amber-500 text-amber-700";
      case "result":
        return "bg-blue-50 border-l-4 border-blue-500 text-blue-700";
      case "event":
        return "bg-purple-50 border-l-4 border-purple-500 text-purple-700";
      case "vacation":
        return "bg-green-50 border-l-4 border-green-500 text-green-700";
      case "religious":
        return "bg-teal-50 border-l-4 border-teal-500 text-teal-700";
      default:
        return "bg-gray-50 border-l-4 border-gray-500 text-gray-700";
    }
  };

  return (
    <div className="max-w-11/12 w-full mx-auto py-10">
      {/* Header */}
      {/* <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white px-8 py-4 rounded-xl shadow-lg mb-4">
          <FaCalendarAlt className="text-3xl" />
          <h1 className="text-2xl md:text-4xl font-bold">
            একাডেমিক ক্যালেন্ডার ২০২৬
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#013223] mt-3">
          মোড়াগাছা মাধ্যমিক বিদ্যালয়
        </h2>
        <p className="text-gray-600 mt-2 italic">
          "শিক্ষার আলোয় আলোকিত হোক প্রতিটি শিশু"
        </p>
        <div className="w-32 h-1 bg-[#006747] mx-auto mt-4 rounded-full"></div>
      </div> */}

      {/* Legend */}
      {/* <div className="bg-white border border-[#013223] rounded-xl p-5 mb-8 shadow-md">
        <h3 className="text-lg font-bold text-[#013223] mb-4 text-center">
          চিহ্ন ব্যাখ্যা
        </h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-lg">
            <span className="w-4 h-4 bg-red-500 rounded"></span>
            <span className="text-sm font-medium">সরকারি ছুটি</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-lg">
            <span className="w-4 h-4 bg-amber-500 rounded"></span>
            <span className="text-sm font-medium">পরীক্ষা</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
            <span className="w-4 h-4 bg-blue-500 rounded"></span>
            <span className="text-sm font-medium">ফলাফল প্রকাশ</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg">
            <span className="w-4 h-4 bg-purple-500 rounded"></span>
            <span className="text-sm font-medium">বিশেষ অনুষ্ঠান</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
            <span className="w-4 h-4 bg-green-500 rounded"></span>
            <span className="text-sm font-medium">ছুটি</span>
          </div>
          <div className="flex items-center gap-2 bg-teal-50 px-3 py-2 rounded-lg">
            <span className="w-4 h-4 bg-teal-500 rounded"></span>
            <span className="text-sm font-medium">ধর্মীয় দিবস</span>
          </div>
        </div>
      </div> */}

      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 li-font">
          একাডেমিক ক্যালেন্ডার ২০২৬
        </h3>
        {/* <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 li-font"></h1> */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {academicEvents.map((monthData, index) => (
          <div
            key={index}
            className="border border-[#013223] rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Month Header */}
            <div className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white px-5 py-4">
              <h3 className="text-xl font-bold text-center tracking-wide">
                {monthData.month}
              </h3>
            </div>

            {/* Events */}
            <div className="p-4 space-y-3">
              {monthData.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className={`p-3 rounded-lg ${getEventStyle(
                    event.type
                  )} transition-all duration-200 hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg min-w-[50px]">
                      {event.date}
                    </span>
                    <span className="text-sm font-medium leading-relaxed">
                      {event.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Important Information */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-[#013223] rounded-xl bg-white shadow-lg overflow-hidden">
          <div className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white px-5 py-3">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <FaGraduationCap /> শিক্ষাবর্ষের গুরুত্বপূর্ণ তথ্য
            </h3>
          </div>
          <div className="p-5">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#006747]">
                <FaStar className="text-[#006747]" />
                <span>
                  <strong>শিক্ষাবর্ষ শুরু:</strong> জানুয়ারি ০১, ২০২৬
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#006747]">
                <FaStar className="text-[#006747]" />
                <span>
                  <strong>শিক্ষাবর্ষ সমাপ্তি:</strong> ডিসেম্বর ৩১, ২০২৬
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#006747]">
                <FaStar className="text-[#006747]" />
                <span>
                  <strong>প্রথম সেমিস্টার:</strong> জানুয়ারি - জুন
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#006747]">
                <FaStar className="text-[#006747]" />
                <span>
                  <strong>দ্বিতীয় সেমিস্টার:</strong> জুলাই - ডিসেম্বর
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#006747]">
                <FaStar className="text-[#006747]" />
                <span>
                  <strong>মোট কর্মদিবস:</strong> আনুমানিক ২২০ দিন
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-[#013223] rounded-xl bg-white shadow-lg overflow-hidden">
          <div className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white px-5 py-3">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <FaBookOpen /> পরীক্ষার সময়সূচি
            </h3>
          </div>
          <div className="p-5">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <span className="font-bold text-amber-700">
                  ১ম শ্রেণি পরীক্ষা
                </span>
                <span className="text-amber-600">— ফেব্রুয়ারি ১৫</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <span className="font-bold text-amber-700">
                  ১ম সাময়িক পরীক্ষা
                </span>
                <span className="text-amber-600">— এপ্রিল ১৫-২০</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <span className="font-bold text-amber-700">
                  ২য় শ্রেণি পরীক্ষা
                </span>
                <span className="text-amber-600">— আগস্ট ২০-২৫</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <span className="font-bold text-amber-700">
                  অর্ধ-বার্ষিক পরীক্ষা
                </span>
                <span className="text-amber-600">— সেপ্টেম্বর ১৫-২২</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                <span className="font-bold text-amber-700">
                  বার্ষিক পরীক্ষা
                </span>
                <span className="text-amber-600">— ডিসেম্বর ০১-১২</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Footer Note */}
      <div className="mt-8 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 text-center">
        <p className="text-gray-600 text-sm leading-relaxed">
          <strong className="text-[#013223]">বিশেষ দ্রষ্টব্য:</strong> ধর্মীয়
          ছুটির তারিখ চন্দ্র ক্যালেন্ডারের উপর নির্ভরশীল এবং পরিবর্তন হতে পারে।
          জরুরি প্রয়োজনে ক্যালেন্ডার পরিবর্তনের অধিকার বিদ্যালয় কর্তৃপক্ষ
          সংরক্ষণ করেন।
        </p>
      </div>
    </div>
  );
};

export default Calender;
