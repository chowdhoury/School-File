import { FaExternalLinkAlt } from "react-icons/fa";

// Links handler
const ImportantLinks = () => {
  const links = [
    {
      name: "প্রধান উপদেষ্টার কার্যালয়",
      url: "https://cao.gov.bd/",
    },
    {
      name: "জাতীয় তথ্য বাতায়ন",
      url: "https://www.bangladesh.gov.bd/",
    },
    {
      name: "শিক্ষা মন্ত্রণালয়",
      url: "https://moedu.gov.bd/",
    },
    {
      name: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর",
      url: "https://dshe.gov.bd/",
    },
    {
      name: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড",
      url: "https://nctb.gov.bd/",
    },
    {
      name: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর",
      url: "https://www.jessoreboard.gov.bd/",
    },
    {
      name: "পাবলিক পরীক্ষার ফলাফল",
      url: "https://eboardresults.com/v2/home",
    },
    {
      name: "বাংলাদেশ শিক্ষাতথ্য ও পরিসংখ্যান ব্যুরো",
      url: "https://banbeis.gov.bd/",
    },
  ];

  return (
    <section className="w-full lg:max-w-xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#013223]">
          গুরুত্বপূর্ণ লিঙ্কসমূহ
        </h2>
      </div>

      {/* Links Container */}
      <div className="bg-white shadow-lg border border-[#013223] rounded-xl p-4 space-y-4">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 bg-[#f8fff9] px-4 py-3 rounded-lg hover:bg-linear-to-r from-[#013223] to-[#006747] transition-all group cursor-pointer border border-transparent hover:border-white"
          >
            <span className="text-[#013223] font-medium group-hover:text-white transition-colors">
              {item.name}
            </span>

            <FaExternalLinkAlt className="text-[#006747] group-hover:text-white transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ImportantLinks;
