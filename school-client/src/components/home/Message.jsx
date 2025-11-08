import messageData from "/public/notice.json";
import { FaMessage, FaSignature } from "react-icons/fa6";

const Message = () => {
    const { chairman, principal } = messageData;

    return (
        <section className="max-w-11/12 w-full mx-auto flex flex-col lg:flex-row gap-10">

            {/* Chairman Message */}
            <div className="flex-1 border border-[#013223] rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white font-semibold flex items-center px-5 py-3 rounded-t-lg">
                    <h2 className="flex items-center gap-3 text-xl lg:text-2xl tracking-wide">
                        <FaMessage className="text-2xl animate-pulse" />
                        Chairman's Message
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
                        It is a matter of great pride and satisfaction for me to be associated with Moragacha Secondary School, an institution that has been serving the noble cause of education with dedication and sincerity. From its very beginning, our school has carried the vision of spreading knowledge, discipline, and moral values among the young generation, and I am delighted to see how this vision is being translated into reality through the hard work of our teachers and the achievements of our students.
                        <br /><br />
                        In this age of globalization and rapid technological progress, education has become more than just learning from books. It is about preparing our students to think critically, solve problems, and face real-life challenges with confidence and courage. Our mission is to create an atmosphere where learners can explore their talents, develop leadership qualities, and grow into responsible citizens who will contribute positively to our nation and the world.
                        <br /><br />
                        I firmly believe that the success of our school lies in the combined efforts of our teachers, students, guardians, and the local community. With the cooperation of all stakeholders, we aspire to move forward with new ideas and modern approaches, while keeping intact the values and traditions that define our identity.
                        <br /><br />
                        As Chairman, I extend my heartfelt gratitude to everyone who has supported Moragacha Secondary School on its journey of excellence. I am confident that, with continuous dedication and unity, we will achieve even greater milestones in the days ahead.
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[#013223] font-semibold uppercase tracking-wider">
                        <FaSignature size={20} />
                        <span>Chairman</span>
                    </div>
                </div>
            </div>

            {/* Principal Message */}
            <div className="flex-1 border border-[#013223] rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white font-semibold flex items-center px-5 py-3 rounded-t-lg">
                    <h2 className="flex items-center gap-3 text-xl lg:text-2xl tracking-wide">
                        <FaMessage className="text-2xl animate-pulse" />
                        Principal's Message
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
                        It is a matter of great honor and privilege for me to serve as the Principal of Moragacha Secondary School. Since its establishment, this institution has been working tirelessly to spread the light of education in our community. We believe that true education is not limited to textbooks or classrooms; it is a lifelong journey that develops knowledge, discipline, creativity, and moral values.
                        <br /><br />
                        Our dedicated teachers, supportive guardians, and enthusiastic students form the cornerstone of our success. Together, we are committed to building an environment where every learner feels inspired to discover their potential and achieve excellence in both academic and personal life.
                        <br /><br />
                        In today’s fast-changing world, education must prepare our students not only for examinations but also for real-life challenges. Therefore, we emphasize character building, critical thinking, and digital literacy alongside traditional learning. We aspire to nurture responsible citizens who will contribute positively to society and lead with honesty, courage, and compassion.
                        <br /><br />
                        I sincerely thank the guardians and well-wishers for their continued support and cooperation. Let us work hand in hand to uphold the glory of Moragacha Secondary School and take it to even greater heights.
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[#013223] font-semibold uppercase tracking-wider">
                        <FaSignature size={20} />
                        <span>Principal</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;
