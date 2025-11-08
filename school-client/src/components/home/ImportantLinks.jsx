import { FaExternalLinkAlt } from "react-icons/fa";

// Links handler
const ImportantLinks = () => {
    const links = [
        {
            name: "Education Board Bangladesh",
            url: "https://www.educationboard.gov.bd/",
        },
        {
            name: "Ministry of Education",
            url: "https://moedu.gov.bd/",
        },
        {
            name: "NCTB (Curriculum & Textbook Board)",
            url: "https://nctb.gov.bd/",
        },
        {
            name: "DSHE (Directorate of Secondary & Higher Education)",
            url: "https://dshe.gov.bd/",
        },
        {
            name: "Education Board Result",
            url: "https://www.educationboardresults.gov.bd/",
        },
        {
            name: "BANBEIS (Education Statistics)",
            url: "http://www.banbeis.gov.bd/",
        },
        {
            name: "Sikkha Batayon (Education Portal)",
            url: "http://www.sheikhasoft.com/",
        },
        {
            name: "Bangladesh Government Portal",
            url: "https://www.bangladesh.gov.bd/",
        },
    ];

    return (
        <section className="w-full lg:max-w-xl mx-auto">

            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#013223]">Important Links</h2>
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
