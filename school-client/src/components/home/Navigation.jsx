import { HiChevronRight } from 'react-icons/hi';

const Navigation = () => {
    const menuItems = [
        {
            name: 'হোম',
            href: '#',
            submenu: null
        },
        {
            name: 'আমাদের সম্পর্কে',
            href: '#',
            submenu: null
        },
        {
            name: 'প্রশাসন',
            href: '#',
            submenu: [
                { name: 'প্রধান শিক্ষক', href: '#' },
                { name: 'সহকারী প্রধান শিক্ষক', href: '#' },
                { name: 'সহকারী শিক্ষক', href: '#' },
                { name: 'স্টাফ', href: '#' }
            ]
        },
        {
            name: 'একাডেমিক',
            href: '#',
            submenu: [
                { name: 'ইতিহাস', href: '#' },
                { name: 'ড্রেস কোড', href: '#' },
                { name: 'পাবলিক পরীক্ষা ফলাফল', href: '#' }
            ]
        },
        {
            name: 'নোটিস ও ইভেন্টস',
            href: '#',
            submenu: [
                { name: 'নোটিস', href: '#' },
                { name: 'ইভেন্টস', href: '#' }
            ]
        },
        {
            name: 'ডাউনলোড',
            href: '#',
            submenu: [
                { name: 'ফর্মস', href: '#' },
                { name: 'অন্যান্য ডকুমেন্টস', href: '#' }
            ]
        },
        {
            name: 'মিডিয়া সেন্টার',
            href: '#',
            submenu: [
                { name: 'ভিডিও গ্যালারি', href: '#' },
                { name: 'ফটো গ্যালারি', href: '#' }
            ]
        },
        {
            name: 'ক্যারিয়ার',
            href: '#',
            submenu: null
        },
        {
            name: 'যোগাযোগ',
            href: '#',
            submenu: null
        }
    ];

    return (
        <nav className="mx-auto">
            <div className="navbar min-h-8 bg-base-100 shadow-sm px-0">

                {/* Navigation and Login button */}
                <div className="max-w-11/12 w-full mx-auto flex items-center">
                    {/* Navbar Start */}
                    <div className="navbar-start lg:h-10">
                        {/* Mobile Menu */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            {/* Mobile Dropdown */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-lg w-56 shadow-xl z-50 border border-gray-200"
                            >
                                {menuItems.map((item, index) => (
                                    <li key={index} className="">
                                        {item.submenu ? (
                                            <details className="group">
                                                <summary className="px-3 hover:text-white hover:bg-[#013223] text-base font-semibold cursor-pointer transition-all duration-200 rounded-lg my-1">
                                                    <div className="flex items-center justify-between">
                                                        {item.name}
                                                        {/* <HiChevronRight className="text-lg transform transition-transform duration-200 group-open:rotate-90" /> */}
                                                    </div>
                                                </summary>
                                                <ul className="bg-gray-50 border-l-2 border-[#109970] ml-2 mt-1 mb-2 rounded-r-lg">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="border-b border-gray-100 last:border-b-0">
                                                            <a className="px-6 py-2.5 hover:text-white hover:bg-[#013223] text-sm font-medium block transition-all duration-200">
                                                                {subItem.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        ) : (
                                            <a className="px-3 hover:text-white hover:bg-[#013223] text-base font-semibold rounded-lg transition-all duration-200 block my-1">
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop Menu */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="group relative">
                                        {item.submenu ? (
                                            <>
                                                <a className="group-hover:text-white text-[#013223] group-hover:bg-[#013223] text-[18px] rounded-lg font-medium flex items-center gap-1">
                                                    {item.name}
                                                    <HiChevronRight className="text-2xl rotate-90 group-hover:-rotate-90" />
                                                </a>

                                                <ul className="absolute top-full right-0 mt-2 bg-white border border-[#013223bd] rounded-lg w-full z-30 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <a className="hover:text-white text-[#013223] hover:bg-[#013223] text-[16px] -ml-2 font-semibold block transition-colors duration-200">
                                                                {subItem.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                                <a className="hover:text-white text-[#013223] hover:bg-[#013223] text-[18px] font-medium rounded-lg transition-all duration-200">
                                                {item.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end">
                        <a className="px-3 py-1.5 bg-[#013223] text-white font-bold rounded-lg hover:bg-[#013223]/90 active:bg-[#013223] transition-colors duration-200 border-none cursor-pointer">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
