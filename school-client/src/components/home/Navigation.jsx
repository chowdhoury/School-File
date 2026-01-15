import { HiChevronRight } from "react-icons/hi";
import { Link, NavLink } from "react-router";

const Navigation = () => {
  const menuItems = [
    {
      name: "হোম",
      href: "/",
      submenu: null,
    },
    {
      name: "পরিচিতি",
      href: "#",
      submenu: [
        { name: "এক নজরে", href: "/at-a-glance" },
        { name: "সংক্ষিপ্ত ইতিহাস", href: "/history" },
      ],
    },
    {
      name: "শিক্ষক ও কর্মচারী",
      href: "#",
      submenu: [
        { name: "প্রধান শিক্ষক", href: "/teachers/headmaster" },
        {
          name: "সহকারী প্রধান শিক্ষক",
          href: "/teachers/assistant-headmaster",
        },
        { name: "শিক্ষক-শিক্ষিকা", href: "/teachers" },
        { name: "কর্মচারী", href: "/staff" },
      ],
    },
    {
      name: "একাডেমিক",
      href: "#",
      submenu: [
        { name: "ড্রেস কোড", href: "/academic/dress-code" },
        { name: "ছাত্র-ছাত্রী", href: "/academic/students" },
        { name: "ক্লাস রুটিন", href: "/academic/routine" },
        { name: "পাবলিক পরীক্ষা ফলাফল", href: "/results/public" },
        { name: "একাডেমিক ক্যালেন্ডার", href: "/academic/calendar" },
      ],
    },
    {
      name: "ভর্তি",
      href: "#",
      submenu: [
        { name: "ভর্তি নোটিশ", href: "/admission/notice" },
        { name: "ভর্তি ফরম", href: "/admission/form" },
        { name: "ভর্তি পরীক্ষার ফলাফল", href: "/admission/result" },
      ],
    },
    {
      name: "ফলাফল",
      href: "#",
      submenu: [
        { name: "পাবলিক পরীক্ষার ফলাফল", href: "/results/public" },
        {
          name: "বিদ্যালয়ের অভ্যন্তরীণ পরীক্ষার ফলাফল",
          href: "/results/internal",
        },
      ],
    },
    {
      name: "নোটিশ বোর্ড",
      href: "/notice",
      submenu: null,
    },
    {
      name: "ফটো গ্যালারি",
      href: "/gallery",
      submenu: null,
    },
    {
      name: "যোগাযোগ",
      href: "/contact",
      submenu: null,
    },
  ];

  const baseLink =
    "text-[#013223] hover:text-white hover:bg-[#013223] text-[18px] font-medium rounded-lg transition-all duration-200";

  const activeLink =
    "text-white bg-[#013223] text-[18px] font-medium rounded-lg";

  return (
    <nav className="mx-auto">
      <div className="navbar min-h-8 bg-base-100 shadow-sm px-0">
        <div className="max-w-11/12 w-full mx-auto flex items-center">
          {/* Navbar Start */}
          <div className="navbar-start lg:h-10">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.submenu ? (
                      <details className="group">
                        <summary className="px-3 hover:text-white hover:bg-[#013223] text-base font-semibold cursor-pointer transition-all duration-200 rounded-lg my-1">
                          <div className="flex items-center justify-between">
                            {item.name}
                          </div>
                        </summary>

                        <ul className="bg-gray-50 border-l-2 border-[#109970] ml-2 mt-1 mb-2 rounded-r-lg">
                          {item.submenu.map((subItem) => (
                            <li
                              key={subItem.href}
                              className="border-b border-gray-100 last:border-b-0"
                            >
                              <Link
                                to={subItem.href}
                                className="px-6 py-2.5 hover:text-white hover:bg-[#013223] text-sm font-medium block transition-all duration-200"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        to={item.href}
                        className="px-3 hover:text-white hover:bg-[#013223] text-base font-semibold rounded-lg transition-all duration-200 block my-1"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal">
                {menuItems.map((item) => (
                  <li key={item.name} className="group relative">
                    {item.submenu ? (
                      <>
                        {/* parent item (no route click) */}
                        <span className="text-[#013223] group-hover:text-white group-hover:bg-[#013223] text-[18px] rounded-lg font-medium flex items-center gap-1 px-3 py-2 cursor-default">
                          {item.name}
                          <HiChevronRight className="text-2xl rotate-90 group-hover:-rotate-90" />
                        </span>

                        <ul className="absolute top-full right-0 mt-2 bg-white border border-[#013223bd] rounded-lg w-56 z-30 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                to={subItem.href}
                                className={({ isActive }) =>
                                  `text-[16px] font-semibold block transition-colors duration-200 -ml-2 px-4 py-2 ${
                                    isActive
                                      ? "text-white bg-[#013223]"
                                      : "text-[#013223] hover:text-white hover:bg-[#013223]"
                                  }`
                                }
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? `${activeLink} px-3 py-2`
                            : `${baseLink} px-3 py-2`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <Link
              to="/login"
              className="px-3 py-1.5 bg-[#013223] text-white font-bold rounded-lg hover:bg-[#013223]/90 active:bg-[#013223] transition-colors duration-200 border-none cursor-pointer"
            >
              লগইন
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
