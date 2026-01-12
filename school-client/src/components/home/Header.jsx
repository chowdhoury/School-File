import { FaFacebook, FaWhatsappSquare, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo/logo.svg"
import { Link } from "react-router";

const Header = () => {
    return (
      <header>
        {/* Identity Section */}
        <section className="p-4 section-gradient">
          <div className="max-w-11/12 w-full mx-auto flex md:flex-row flex-col items-center justify-between gap-4 md:gap-0">
            {/* Logo */}
            <Link to="/" className="relative group">
              <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-[0px_0px_10px_rgba(255,255,255,0.2)] group-hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105">
                <img
                  src={logo}
                  alt="মোড়াগাছা মাধ্যমিক বিদ্যালয় লোগো"
                  className="h-20 drop-shadow-[0px_4px_12px_rgba(255,255,255,0.7)] transition-all duration-300 group-hover:scale-110"
                />
              </div>
              {/* Glow ring effect */}
              <span className="absolute inset-0 rounded-full border border-[#ffffff40] opacity-0 group-hover:opacity-100 blur-sm transition duration-300"></span>
            </Link>

            {/* Title + Subtext */}
            <div className="text-center flex flex-col items-center justify-center leading-none gap-2">
              <h1 className="text-4xl lg:text-5xl text-white font-semibold li-font">
                মোড়াগাছা মাধ্যমিক বিদ্যালয়
              </h1>
              <h3 className="font-medium text-white text-sm lg:text-[1rem] lg:tracking-wider">
                EIIN: ১১৭৬৩৯ | ঠিকানা: মোড়াগাছা, খোকসা, কুষ্টিয়া-৭০২০
              </h3>
            </div>

            {/* Social Icons */}
            <div className="flex text-2xl lg:text-4xl text-white gap-5">
              <Link
                to="https://www.facebook.com/moragachass"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                title="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.youtube.com/@moragachass"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                title="Youtube"
              >
                <FaYoutube />
              </Link>
              {/* <Link
                to="#"
                className="hover:scale-110 transition-transform duration-200"
                title="WhatsApp"
              >
                <FaWhatsappSquare />
              </Link> */}
            </div>
          </div>
        </section>
      </header>
    );
};

export default Header;
