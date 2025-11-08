import { FaBullhorn } from "react-icons/fa";
import noticeData from "/public/notice.json";

const NoticeBoard = () => {
    return (
        <div>
            <aside className="w-full lg:max-w-4xl border border-[#013223] rounded-xl h-80 md:h-96 lg:h-[480px] bg-white shadow-md">
                <div className="h-[50px] sm:h-[60px] bg-linear-to-r from-[#013223] via-[#006747] to-[#013223] text-white font-medium text-lg sm:text-xl md:text-2xl flex items-center px-4 rounded-t-lg">
                    <h2 className="li-font flex items-center gap-2 text-2xl md:text-3xl">
                        <FaBullhorn /> Notice Board
                    </h2>
                </div>

                <marquee
                    direction="up"
                    className="h-64 md:h-80 lg:h-[410px] mt-1"
                    onMouseOver={(e) => e.currentTarget.stop()}
                    onMouseOut={(e) => e.currentTarget.start()}
                >
                    <div
                        id="noticeContainer"
                        className="notice-container p-3 sm:p-5 flex flex-col gap-3"
                    >
                        {noticeData.notices.map((notice) => (
                            <div
                                key={notice.id}
                                className="border border-gray-300 p-2 drop-shadow rounded-xl"
                            >
                                <div className="flex items-center gap-2 text-sm">
                                    <span>{notice.date}</span>
                                    <span>{notice.month}</span>
                                </div>
                                <h3 className="font-semibold text-md">{notice.title}</h3>
                                <p className="text-sm">{notice.body}</p>
                            </div>
                        ))}
                    </div>
                </marquee>
            </aside>
        </div>
    );
};

export default NoticeBoard;
