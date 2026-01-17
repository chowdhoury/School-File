import React from "react";

const Ataglance = () => {
  const schoolData = [
    { label: "বিদ্যালয়ের EIIN নম্বর", value: "117639" },
    { label: "বিদ্যালয়ের নাম", value: "মোড়াগাছা মাধ্যমিক বিদ্যালয়" },
    { label: "SCHOOL NAME", value: "MORAGACHA SECONDARY SCHOOL" },
    { label: "স্থাপিত", value: "১৯৯৯ খ্রিষ্টাব্দ" },
    { label: "প্রধান শিক্ষক", value: "মোঃ হাসান আলী মোল্লা" },
    {
      label: "গ্রাম/সড়কের বিবরণ",
      value: "ঢাকা–কুষ্টিয়া মহাসড়ক সংলগ্ন, মোড়াগাছা",
    },
    { label: "পোস্ট অফিস", value: "খোকসা" },
    { label: "পোস্ট কোড", value: "৭০২০" },
    { label: "পুলিশ স্টেশন", value: "খোকসা" },
    { label: "উপজেলা", value: "খোকসা" },
    { label: "জেলা", value: "কুষ্টিয়া" },
    { label: "বিভাগ", value: "খুলনা" },
    { label: "শিক্ষক সংখ্যা", value: "১৫ জন" },
    { label: "শিক্ষার্থী সংখ্যা", value: "৩৫০+" },
    { label: "বিদ্যালয়ের শিফট", value: "এক শিফট" },
    { label: "বিদ্যালয়ের ধরন", value: "সহশিক্ষা" },
    { label: "টেলিফোন", value: "০১৩০৯-১১৭৬৩৯" },
    {
      label: "ই-মেইল",
      value: (
        <a
          href="mailto:mhskhoksa1999@gmail.com"
          className="text-[#006747] hover:text-[#013223] transition-colors"
        >
          mhskhoksa1999@gmail.com
        </a>
      ),
    },
    {
      label: "ওয়েবসাইট",
      value: (
        <a
          href="https://www.moragachass.edu.bd"
          target="_blank"
          rel="noreferrer"
          className="text-[#006747] hover:text-[#013223] transition-colors"
        >
          www.moragachass.edu.bd
        </a>
      ),
    },
  ];

  return (
    <div className="w-full max-w-11/12 mx-auto px-4 py-8 sm:py-12">
      {/* Section Header */}
      {/* <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          এক নজরে
        </h2>
        <p className="mt-2 text-base sm:text-lg text-gray-600">
          মোড়াগাছা মাধ্যমিক বিদ্যালয়
        </p>
        <div className="w-24 h-1 bg-[#006747] mt-4 rounded-full"></div>
      </div> */}

      {/* Information Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <div className="bg-gradient-to-r from-[#013223] via-[#006747] to-[#013223] py-4 px-4 sm:px-6 rounded-t-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center li-font">
            বিদ্যালয়ের সংক্ষিপ্ত তথ্য
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {schoolData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0 p-4 sm:p-5 transition-colors ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-emerald-50`}
            >
              <div className="font-semibold text-gray-700 text-xl sm:text-xl li-font">
                {item.label} :
              </div>
              <div className="text-gray-800 text-xl sm:text-xl break-words li-font">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Card */}
      {/* <div className="mt-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border border-blue-100 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg
              className="w-8 h-8 text-[#006747]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              বিদ্যালয় সম্পর্কে
            </h4>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
              মোড়াগাছা মাধ্যমিক বিদ্যালয় ১৯৯৯ সালে প্রতিষ্ঠিত হয়েছে এবং এটি
              কুষ্টিয়া জেলার খোকসা উপজেলায় অবস্থিত একটি সুপ্রতিষ্ঠিত ও
              ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। ঢাকা–কুষ্টিয়া মহাসড়ক সংলগ্ন
              মোড়াগাছায় অবস্থিত এ বিদ্যালয়টি মানসম্মত শিক্ষা প্রদানে সুনাম
              অর্জন করেছে।
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Ataglance;
