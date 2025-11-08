const History = () => {
    return (
        <div className="w-full lg:max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="">
                <h2 className="text-2xl md:text-3xl font-bold">History of Our School</h2>
                <p className="mt-2 text-base sm:text-lg">
                    A Journey of Growth & Excellence — Moragacha Secondary School
                </p>
                <div className="w-24 h-1 bg-[#006747] mt-4 rounded-full"></div>
            </div>

            {/* Timeline */}
            <div className="relative mt-10 border-l-4 border-[#013223] pl-6 space-y-12">

                {/* Point 1 */}
                <div className="relative">
                    <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#013223] border-4 border-white shadow-lg"></div>
                    <h3 className="text-xl font-semibold text-[#013223] ml-5">Founded — 1982</h3>
                    <p className="text-gray-700 mt-2 text-justify">
                        Moragacha Secondary School began its academic journey in 1982 with a small tin-shed
                        structure, limited classrooms, and a vision to deliver quality education to rural students.
                    </p>
                </div>

                {/* Point 2 */}
                <div className="relative">
                    <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#013223] border-4 border-white shadow-lg"></div>
                    <h3 className="text-xl font-semibold text-[#013223] ml-5">Infrastructure Development — 1995</h3>
                    <p className="text-gray-700 mt-2 text-justify">
                        Due to community support and outstanding academic performance, the school expanded to
                        a two-story academic building and introduced science labs and a library.
                    </p>
                </div>

                {/* Point 3 */}
                <div className="relative">
                    <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#013223] border-4 border-white shadow-lg"></div>
                    <h3 className="text-xl font-semibold text-[#013223] ml-5">Academic Excellence — 2008 - Present</h3>
                    <p className="text-gray-700 mt-2 text-justify">
                        The school consistently achieved top results in SSC exams. Students began participating
                        in scouting, sports, cultural activities, and science fairs at district level.
                    </p>
                </div>

                {/* Point 4 */}
                <div className="relative">
                    <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#013223] border-4 border-white shadow-lg"></div>
                    <h3 className="text-xl font-semibold text-[#013223] ml-5">Digital Classroom Era — Present</h3>
                    <p className="text-gray-700 mt-2 text-justify">
                        With multimedia classrooms, digital content, online resources and a strong teaching team,
                        Moragacha Secondary School continues its mission: **Transforming Education, Shaping the Future**.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default History;
