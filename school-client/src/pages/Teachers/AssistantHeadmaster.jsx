import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTint,
  FaCalendarAlt,
  FaBriefcase,
  FaIdCard,
  FaHashtag,
} from "react-icons/fa";

const AssistantHeadmaster = () => {
  const [assistantPrincipal, setAssistantPrincipal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/notice.json")
      .then((res) => res.json())
      .then((data) => {
        setAssistantPrincipal(data.assistantPrincipal);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching assistant principal data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#006747]"></div>
      </div>
    );
  }

  if (!assistantPrincipal) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">তথ্য পাওয়া যায়নি</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 li-font">
            সহকারী প্রধান শিক্ষক
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Assistant Principal Card */}
        <div className="bg-white border border-[#013223] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="lg:flex">
            {/* Image Section */}
            <div className="lg:w-2/5 bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex items-center justify-center rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
              <div className="relative">
                <img
                  src={assistantPrincipal.image}
                  alt={assistantPrincipal.name}
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>

            {/* Information Section */}
            <div className="lg:w-3/5 p-6 md:p-8">
              {/* Name and Designation */}
              <div className="mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-[#013223] mb-2 li-font">
                  {assistantPrincipal.name}
                </h2>
                <p className="text-lg md:text-xl text-[#006747] font-semibold">
                  {assistantPrincipal.designation}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#013223] rounded-lg flex items-center justify-center">
                    <FaPhoneAlt className="text-white text-sm" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600 font-medium">মোবাইল</p>
                    <p className="text-base text-gray-800 font-semibold">
                      {assistantPrincipal.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#006747] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600 font-medium">ইমেইল</p>
                    <p className="text-base text-gray-800 font-semibold break-all">
                      {assistantPrincipal.email}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#013223] rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600 font-medium">ঠিকানা</p>
                    <p className="text-base text-gray-800 font-semibold">
                      {assistantPrincipal.address}
                    </p>
                  </div>
                </div>

                {/* Additional Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-gray-200">

                  {/* Date of Birth */}
                  {/* PDS ID */}
                  <div className="flex items-center bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                      <FaHashtag className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-600">পিডিএস আইডি</p>
                      <p className="text-sm font-bold text-orange-600">
                        {assistantPrincipal.pdsID}
                      </p>
                    </div>
                  </div>
                  {/* Index Number */}
                  <div className="flex items-center bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <FaIdCard className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-600">ইনডেক্স</p>
                      <p className="text-sm font-bold text-purple-600">
                        {assistantPrincipal.indexNo}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#006747] rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-600">জন্ম তারিখ</p>
                      <p className="text-sm font-bold text-[#006747]">
                        {assistantPrincipal.dateOfBirth}
                      </p>
                    </div>
                  </div>
                  {/* Blood Group */}
                  <div className="flex items-center bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <FaTint className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-600">রক্তের গ্রুপ</p>
                      <p className="text-lg font-bold text-red-600">
                        {assistantPrincipal.bloodGroup}
                      </p>
                    </div>
                  </div>

                  {/* Joining Date */}
                  <div className="flex items-center bg-blue-50 border border-blue-200 rounded-lg p-3 sm:col-span-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#013223] rounded-full flex items-center justify-center">
                      <FaBriefcase className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-600">যোগদানের তারিখ</p>
                      <p className="text-base font-bold text-[#013223]">
                        {assistantPrincipal.joiningDate}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantHeadmaster;
