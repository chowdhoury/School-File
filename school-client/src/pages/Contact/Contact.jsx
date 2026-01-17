import React from "react";

const Contact = () => {
  const schoolInfo = {
    name: "মোড়াগাছা মাধ্যমিক বিদ্যালয়",
    address: "মোড়াগাছা, খোকসা, কুষ্টিয়া-৭০২০",
    officehours: "রবিবার-বৃহস্পতিবার: সকাল ৯টা - বিকাল ৪টা",
    phone: "০১৩০৯-১১৭৬৩৯",
    email: "mhskhoksa1999@gmail.com",
    website: "www.moragachass.edu.bd",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            যোগাযোগ করুন
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-700 font-medium">
            আমাদের সাথে যোগাযোগ করতে নিচের তথ্য ব্যবহার করুন
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-emerald-500 hover:shadow-emerald-100 transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-emerald-700 mb-2 li-font">
              {schoolInfo.name}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-6 rounded-full"></div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-emerald-700">ঠিকানা</h3>
                  <p className="mt-1 text-gray-700 font-medium">
                    {schoolInfo.address}
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-teal-700">অফিস সময়</h3>
                  <p className="mt-1 text-gray-700 font-medium">
                    {schoolInfo.officehours}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start p-4 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-cyan-700">ফোন</h3>
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="mt-1 text-emerald-600 hover:text-emerald-800 font-semibold text-lg transition-colors"
                  >
                    {schoolInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-700">ইমেইল</h3>
                  <a
                    href={`mailto:${schoolInfo.email}`}
                    className="mt-1 text-emerald-600 hover:text-emerald-800 font-semibold break-all transition-colors"
                  >
                    {schoolInfo.email}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-indigo-700">
                    ওয়েবসাইট
                  </h3>
                  <a
                    href={`https://${schoolInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-emerald-600 hover:text-emerald-800 font-semibold transition-colors"
                  >
                    {schoolInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-2xl p-6 border-t-4 border-teal-500 hover:shadow-teal-100 transition-all duration-300">
            <h2 className="text-xl md:text-2xl font-bold text-teal-700 mb-2 li-font">
              আমাদের অবস্থান
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mb-6 rounded-full"></div>
            <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-emerald-200 shadow-lg">
              <iframe
                title="school-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8893535354223!2d89.26056157589865!3d23.822533286002148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe8d74a29549f3%3A0xf746297bf3ed0122!2z4Kau4KeL4Kec4Ka-4KaX4Ka-4Kab4Ka-IOCmruCmvuCmp-CnjeCmr-CmruCmv-CmlSDgpqzgpr_gpqbgp43gpq_gpr7gprLgp58!5e0!3m2!1sen!2sbd!4v1768226999040!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        {/* <div className="mt-12 bg-white rounded-xl shadow-2xl p-8 border-t-4 border-emerald-500">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center li-font">
            আমাদের একটি বার্তা পাঠান
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  নাম *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  ইমেইল *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                বিষয় *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                placeholder="বার্তার বিষয় লিখুন"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                বার্তা *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
                placeholder="আপনার বার্তা লিখুন..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-lg font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                বার্তা পাঠান
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
