import messageData from "/public/notice.json";
import { FaMessage, FaSignature } from "react-icons/fa6";
import { useState } from "react";

const Message = () => {
  const { chairman, principal } = messageData;
  const [isChairmanExpanded, setIsChairmanExpanded] = useState(false);
  const [isPrincipalExpanded, setIsPrincipalExpanded] = useState(false);

  return (
    <section className="max-w-11/12 w-full mx-auto flex flex-col lg:flex-row gap-10">
      {/* Chairman Message */}
      <div className=" border border-[#013223] rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white font-semibold flex items-center px-5 py-3 rounded-t-lg">
          <h2 className="flex items-center gap-3 text-xl lg:text-2xl tracking-wide">
            <FaMessage className="text-2xl animate-pulse" />
            সভাপতির বার্তা
          </h2>
        </div>

        <div className="bg-white m-3 p-3 shadow-inner rounded-lg flex flex-col items-center text-center">
          <img
            className="rounded-full h-40 w-40 lg:h-48 lg:w-48 border-4 border-[#013223] shadow-xl object-cover"
            src={chairman.image}
            alt={chairman.name}
          />

          <h1 className="text-2xl font-bold text-[#013223] my-5 tracking-wide">
            {chairman.name}
          </h1>

          <p className="text-base leading-relaxed text-justify">
            মোড়াগাছা মাধ্যমিক বিদ্যালয়ের সঙ্গে সম্পৃক্ত থাকতে পারা আমার জন্য
            গর্ব ও সম্মানের বিষয়। ১৯৯৯ সালে প্রতিষ্ঠার পর থেকে এ বিদ্যালয়টি
            শিক্ষা, শৃঙ্খলা ও নৈতিক মূল্যবোধকে মূল ভিত্তি হিসেবে গ্রহণ করে সুনাম
            ও সফলতার সঙ্গে এগিয়ে চলেছে। শান্ত ও শিক্ষাবান্ধব পরিবেশে মানসম্মত
            শিক্ষা প্রদানের যে স্বপ্ন নিয়ে এই প্রতিষ্ঠান যাত্রা শুরু করেছিল, আজ
            শিক্ষক ও শিক্ষার্থীদের নিষ্ঠা ও পরিশ্রমের মাধ্যমে সেই স্বপ্ন বাস্তব
            রূপ পেয়েছে।
            {isChairmanExpanded && (
              <>
                <br />
                <br />
                বর্তমান যুগে শিক্ষা কেবল পাঠ্যবইয়ের মধ্যে সীমাবদ্ধ নয়; বরং
                শিক্ষার্থীদের চিন্তাশক্তি বিকাশ, নেতৃত্বের গুণাবলি অর্জন এবং
                বাস্তব জীবনের চ্যালেঞ্জ মোকাবিলায় সক্ষম করে তোলাই শিক্ষার মূল
                লক্ষ্য। মোড়াগাছা মাধ্যমিক বিদ্যালয় শিক্ষার্থীদের জ্ঞানভিত্তিক
                দক্ষতার পাশাপাশি মানবিকতা, দায়িত্ববোধ ও আত্মবিশ্বাসে গড়ে তুলতে
                নিরলসভাবে কাজ করে যাচ্ছে।
                <br />
                <br />
                আমি দৃঢ়ভাবে বিশ্বাস করি, বিদ্যালয়ের অগ্রগতির পেছনে শিক্ষক,
                শিক্ষার্থী, অভিভাবক ও স্থানীয় জনগণের সম্মিলিত প্রচেষ্টা সবচেয়ে
                বড় শক্তি। এই ঐক্য ও সহযোগিতার মাধ্যমেই আমাদের বিদ্যালয় একসময়
                খোকসা উপজেলায় শিক্ষার ক্ষেত্রে একটি অনুসরণযোগ্য প্রতিষ্ঠানে
                পরিণত হয়েছে এবং ভবিষ্যতেও আরও এগিয়ে যাবে।
                <br />
                <br />
                বিদ্যালয়ের উন্নয়ন ও সাফল্যের এই যাত্রায় যাঁরা বিভিন্নভাবে
                সহযোগিতা ও সমর্থন দিয়ে পাশে থেকেছেন, তাঁদের প্রতি আমি আন্তরিক
                কৃতজ্ঞতা প্রকাশ করছি। আমি বিশ্বাস করি, সবার সম্মিলিত প্রচেষ্টা,
                নতুন ভাবনা ও আধুনিক দৃষ্টিভঙ্গির মাধ্যমে মোড়াগাছা মাধ্যমিক
                বিদ্যালয় ভবিষ্যতে আরও উচ্চতর সাফল্য অর্জন করবে।
              </>
            )}
          </p>

          <button
            onClick={() => setIsChairmanExpanded(!isChairmanExpanded)}
            className="mt-4 px-6 py-2 bg-[#013223] text-white rounded-lg hover:bg-[#006747] transition-colors duration-300 font-semibold"
          >
            {isChairmanExpanded ? "সংক্ষিপ্ত করুন" : "আরও পড়ুন"}
          </button>

          {/* <div className="mt-6 flex items-center gap-2 text-[#013223] font-semibold uppercase tracking-wider">
                        <FaSignature size={20} />
                        <span>Chairman</span>
                    </div> */}
        </div>
      </div>

      {/* Principal Message */}
      <div className=" border border-[#013223] rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white font-semibold flex items-center px-5 py-3 rounded-t-lg">
          <h2 className="flex items-center gap-3 text-xl lg:text-2xl tracking-wide">
            <FaMessage className="text-2xl animate-pulse" />
            প্রধান শিক্ষকের বার্তা
          </h2>
        </div>

        <div className="bg-white m-3 p-3 shadow-inner rounded-lg flex flex-col items-center text-center">
          <img
            className="rounded-full h-40 w-40 lg:h-48 lg:w-48 border-4 border-[#013223] shadow-xl object-cover"
            src={principal.image}
            alt={principal.name}
          />

          <h1 className="text-2xl font-bold text-[#013223] my-5 tracking-wide">
            {principal.name}
          </h1>

          <p className="text-base leading-relaxed text-justify">
            মোড়াগাছা মাধ্যমিক বিদ্যালয়ের প্রধান শিক্ষক হিসেবে দায়িত্ব পালন করতে
            পারা আমার জন্য অত্যন্ত গৌরব ও সম্মানের বিষয়। প্রতিষ্ঠালগ্ন থেকেই এই
            বিদ্যালয়টি অত্র অঞ্চলে শিক্ষার আলো ছড়িয়ে দিতে নিরলসভাবে কাজ করে
            যাচ্ছে। আমরা বিশ্বাস করি, প্রকৃত শিক্ষা কেবল পাঠ্যবই ও শ্রেণিকক্ষের
            মধ্যেই সীমাবদ্ধ নয়; বরং এটি জ্ঞান, শৃঙ্খলা, সৃজনশীলতা ও নৈতিক
            মূল্যবোধের সমন্বয়ে একজন মানুষকে পরিপূর্ণ করে গড়ে তোলার একটি
            ধারাবাহিক প্রক্রিয়া।
            {isPrincipalExpanded && (
              <>
                <br />
                <br />
                আমাদের নিবেদিতপ্রাণ শিক্ষকবৃন্দ, সহযোগিতাপরায়ণ অভিভাবক এবং
                উদ্যমী শিক্ষার্থীরাই বিদ্যালয়ের সাফল্যের মূল ভিত্তি। সম্মিলিত
                প্রচেষ্টার মাধ্যমে আমরা এমন একটি শিক্ষাবান্ধব পরিবেশ গড়ে তুলতে
                প্রতিশ্রুতিবদ্ধ, যেখানে প্রতিটি শিক্ষার্থী তার নিজস্ব প্রতিভা
                বিকাশের সুযোগ পাবে এবং শিক্ষা ও জীবনের প্রতিটি ক্ষেত্রে উৎকর্ষ
                অর্জনে অনুপ্রাণিত হবে।
                <br />
                <br />
                দ্রুত পরিবর্তনশীল বর্তমান বিশ্বে শিক্ষা ব্যবস্থাকে হতে হবে
                যুগোপযোগী ও বাস্তবমুখী। সে লক্ষ্যেই আমরা পাঠ্যক্রমের পাশাপাশি
                চরিত্র গঠন, সমালোচনামূলক চিন্তাশক্তি এবং ডিজিটাল দক্ষতার উপর
                গুরুত্ব দিচ্ছি, যাতে আমাদের শিক্ষার্থীরা কেবল পরীক্ষায় সফলই না
                হয়, বরং বাস্তব জীবনের চ্যালেঞ্জ মোকাবিলায় আত্মবিশ্বাসী ও
                দায়িত্বশীল নাগরিক হিসেবে গড়ে ওঠে।
                <br />
                <br />
                বিদ্যালয়ের সার্বিক উন্নয়ন ও অগ্রগতিতে যাঁরা সর্বদা সহযোগিতা ও
                সমর্থন দিয়ে পাশে রয়েছেন—সেসব সম্মানিত অভিভাবক, শুভানুধ্যায়ী ও
                সংশ্লিষ্ট সকলের প্রতি আমি আন্তরিক কৃতজ্ঞতা প্রকাশ করছি। আসুন,
                আমরা সবাই একসঙ্গে কাজ করে মোড়াগাছা মাধ্যমিক বিদ্যালয়ের ঐতিহ্য ও
                সুনামকে আরও উচ্চতর পর্যায়ে নিয়ে যাই।
              </>
            )}
          </p>

          <button
            onClick={() => setIsPrincipalExpanded(!isPrincipalExpanded)}
            className="mt-4 px-6 py-2 bg-[#013223] text-white rounded-lg hover:bg-[#006747] transition-colors duration-300 font-semibold"
          >
            {isPrincipalExpanded ? "সংক্ষিপ্ত করুন" : "আরও পড়ুন"}
          </button>

          {/* <div className="mt-6 flex items-center gap-2 text-[#013223] font-semibold uppercase tracking-wider">
                        <FaSignature size={20} />
                        <span>Principal</span>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default Message;
