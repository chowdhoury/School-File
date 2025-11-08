import Marquee from "react-fast-marquee";
import notice from "/public/notice.json";

const LatestNews = () => {
    return (
        <div className="w-full text-lg">
            {/* Notice Runner */}
            <div className="bg-[#022c1f] h-12 flex items-center w-full">
                {/* Latest Notice Label */}
                <div className="bg-red-800 text-white h-full w-fit flex items-center px-3 sm:px-4 md:px-6 shrink-0">
                    <h2 className="font-bold whitespace-nowrap">
                        Latest News
                    </h2>
                </div>

                {/* Marquee Container */}
                <div className="h-full flex items-center flex-1 px-2 min-w-0">
                    <Marquee
                        speed={80}
                        pauseOnHover
                        gradient={false}
                        className="text-white h-full flex items-center"
                    >
                        <div className="flex items-center gap-5">
                            {notice.notices.map((noticeItem) => (
                                <div
                                    key={noticeItem.id}
                                    className="flex items-center gap-3 whitespace-nowrap"
                                >
                                    {/* Dot separator */}
                                    <span className="bg-white w-2 h-2 shrink-0 ml-4"></span>

                                    {/* Notice title - truncated on mobile */}
                                    <span className="font-medium px-1">
                                        {noticeItem.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;