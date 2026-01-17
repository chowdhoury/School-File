import React from "react";
import schoolImage from "../../assets/img/schoolImage.jpg";

const History = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            আমাদের ইতিহাস
          </h3>
          {/* <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 li-font"></h1> */}
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* School Image */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={schoolImage}
              alt="মোড়াগাছা মাধ্যমিক বিদ্যালয়"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold li-font">
                মোড়াগাছা মাধ্যমিক বিদ্যালয়
              </h2>
              <p className="text-xl sm:text-xl mt-2 li-font">প্রতিষ্ঠাঃ ১৯৯৯</p>
            </div>
          </div>

          {/* History Text Content */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed text-justify li-font">
                <p className="text-lg md:text-xl first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-600 first-letter:mr-1 first-letter:float-left">
                  কুষ্টিয়া জেলার খোকসা উপজেলায় অবস্থিত মোড়াগাছা মাধ্যমিক
                  বিদ্যালয় অত্র অঞ্চলের একটি সুপ্রতিষ্ঠিত ও ঐতিহ্যবাহী শিক্ষা
                  প্রতিষ্ঠান। প্রাকৃতিক সৌন্দর্যে ঘেরা শান্ত ও মনোরম গ্রামীণ
                  পরিবেশে অবস্থিত এ বিদ্যালয়টি শিক্ষার্থীদের জন্য একটি নিরাপদ,
                  সুশৃঙ্খল ও শিক্ষাবান্ধব পরিবেশ নিশ্চিত করে, যা মানসম্মত
                  শিক্ষাদানে সহায়ক ভূমিকা পালন করে।
                </p>

                <p className="text-xl sm:text-xl">
                  বিস্তৃত পরিসরে গড়ে ওঠা বিদ্যালয়টিতে রয়েছে সুসংগঠিত একাডেমিক
                  ভবন, পর্যাপ্ত শ্রেণিকক্ষ, খেলার মাঠ এবং প্রয়োজনীয়
                  শিক্ষাসহায়ক অবকাঠামো। নিয়মিত পাঠদানের পাশাপাশি সহশিক্ষা
                  কার্যক্রমের মাধ্যমে শিক্ষার্থীদের মানসিক, শারীরিক ও নৈতিক
                  বিকাশে বিদ্যালয়টি গুরুত্বপূর্ণ ভূমিকা রেখে চলেছে।
                </p>

                <p className="text-xl sm:text-xl bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  ১৯৯৯ সালে প্রতিষ্ঠার পর থেকেই মোড়াগাছা মাধ্যমিক বিদ্যালয়
                  সুনাম ও সাফল্যের সঙ্গে শিক্ষা কার্যক্রম পরিচালনা করে আসছে।
                  বিদ্যালয়টি খোকসা শহর থেকে প্রায় ২.৫ কিলোমিটার দূরে অবস্থিত
                  এবং এর পাশ দিয়ে ঢাকা–কুষ্টিয়া মহাসড়ক অতিক্রম করেছে, যা
                  যোগাযোগ ব্যবস্থাকে আরও সহজ করেছে। বিদ্যালয় সংলগ্ন এলাকায়
                  রয়েছে মোড়াগাছা কমিউনিটি ক্লিনিক এবং মাত্র ১০০ মিটার দূরত্বে
                  অবস্থিত মোড়াগাছা সরকারি প্রাথমিক বিদ্যালয়, যা একটি সমন্বিত
                  শিক্ষাবান্ধব পরিবেশ গড়ে তুলেছে।
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center li-font">
                    <span className="w-2 h-8 bg-emerald-500 mr-3 rounded"></span>
                    জনবল
                  </h3>
                  <p className="text-xl sm:text-xl">
                    বর্তমানে এ প্রতিষ্ঠানে ১ জন প্রধান শিক্ষক, ১ জন সহকারী
                    প্রধান শিক্ষক এবং ১৩ জন সহকারী শিক্ষক দক্ষতা ও নিষ্ঠার সঙ্গে
                    পাঠদান কার্যক্রম পরিচালনা করছেন। পাশাপাশি প্রশাসনিক ও
                    দাপ্তরিক কার্যক্রম সুষ্ঠুভাবে পরিচালনার জন্য ৬ জন
                    কর্মকর্তা-কর্মচারী নিয়োজিত রয়েছেন। বিদ্যালয়টিতে বর্তমানে
                    ৩৫০ জনেরও বেশি শিক্ষার্থী অধ্যয়নরত রয়েছে।
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center li-font">
                    <span className="w-2 h-8 bg-teal-500 mr-3 rounded"></span>
                    শিক্ষাগত সাফল্য
                  </h3>
                  <p className="text-xl sm:text-xl">
                    শিক্ষাগত সাফল্যের ধারাবাহিকতায় বিদ্যালয়টি উল্লেখযোগ্য
                    অগ্রগতি অর্জন করেছে। ২০১১ সালের এস.এস.সি পরীক্ষায়
                    প্রথমবারের মতো ৪ জন শিক্ষার্থী জিপিএ–৫ অর্জন করে এবং ২০১৩
                    সালে ৬ জন শিক্ষার্থী জিপিএ–৫ অর্জনের পাশাপাশি খোকসা উপজেলায়
                    পাসের হারে প্রথম স্থান অধিকার করে। এ প্রতিষ্ঠান থেকে
                    শিক্ষালাভ করে বহু শিক্ষার্থী ঢাকা বিশ্ববিদ্যালয়সহ দেশের
                    বিভিন্ন স্বনামধন্য শিক্ষা প্রতিষ্ঠানে অধ্যয়নরত রয়েছে এবং
                    বিভিন্ন গুরুত্বপূর্ণ পেশায় সাফল্যের সঙ্গে কর্মরত রয়েছে।
                  </p>
                </div>

                <p className="text-base md:text-lg font-semibold text-gray-800 bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg border-t-4 border-green-500 italic">
                  শিক্ষা, শৃঙ্খলা ও নৈতিক মূল্যবোধের সমন্বয়ে শিক্ষার্থীদের গড়ে
                  তোলার দৃঢ় অঙ্গীকার নিয়ে মোড়াগাছা মাধ্যমিক বিদ্যালয় আজ
                  খোকসা উপজেলাসহ কুষ্টিয়া জেলার একটি আস্থাভাজন ও সম্মানিত
                  শিক্ষা প্রতিষ্ঠান হিসেবে সুপরিচিত।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
