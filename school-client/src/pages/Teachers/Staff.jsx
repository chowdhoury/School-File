import React, { useState, useEffect } from "react";

const StaffCard = ({ staff, index }) => (
  <div
    className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden relative"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    {/* Decorative background gradient */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

    {/* Avatar */}
    <div className="relative">
      <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
        <span className="text-4xl">👨‍💼</span>
      </div>
    </div>

    {/* Name & Designation */}
    <div className="text-center mb-5 mt-2">
      <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-cyan-600 transition-colors">
        {staff.name}
      </h3>
      <p className="text-sm text-white bg-gradient-to-r from-cyan-500 to-teal-500 py-1.5 px-3 rounded-full inline-block font-medium shadow-sm">
        {staff.designation}
      </p>
    </div>

    {/* Contact Info - Grid Layout */}
    <div className="space-y-3 text-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-cyan-50 rounded-lg p-2 text-center hover:bg-cyan-100 transition-colors">
          <div className="text-lg mb-1">🆔</div>
          <div className="text-xs text-gray-600 mb-1">ইনডেক্স নং</div>
          <div className="text-xs font-semibold text-gray-800">
            {staff.indexNo}
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-2 text-center hover:bg-teal-100 transition-colors">
          <div className="text-lg mb-1">🔢</div>
          <div className="text-xs text-gray-600 mb-1">PDS ID</div>
          <div className="text-xs font-semibold text-gray-800">
            {staff.pdsID}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-sky-50 rounded-lg p-2 text-center hover:bg-sky-100 transition-colors">
          <div className="text-lg mb-1">🎂</div>
          <div className="text-xs text-gray-600 mb-1">জন্ম তারিখ</div>
          <div className="text-xs font-semibold text-gray-800">
            {staff.dateOfBirth}
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-2 text-center hover:bg-emerald-100 transition-colors">
          <div className="text-lg mb-1">📅</div>
          <div className="text-xs text-gray-600 mb-1">যোগদান</div>
          <div className="text-xs font-semibold text-gray-800">
            {staff.joiningDate || "N/A"}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">📞</span>
          <span className="text-gray-600 font-medium text-xs">যোগাযোগ</span>
        </div>
        <a
          href={`tel:${staff.phone}`}
          className="text-cyan-700 font-semibold block hover:text-cyan-800"
        >
          {staff.phone}
        </a>
      </div>
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">📧</span>
          <span className="text-gray-600 font-medium text-xs">ইমেইল</span>
        </div>
        <a
          href={`mailto:${staff.email}`}
          className="text-teal-700 text-xs break-all hover:text-teal-800 font-medium"
        >
          {staff.email}
        </a>
      </div>
    </div>
  </div>
);

const Staff = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDesignation, setFilterDesignation] = useState("all");

  useEffect(() => {
    fetch("/staff.json")
      .then((res) => res.json())
      .then((data) => {
        setStaffMembers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading staff:", error);
        setLoading(false);
      });
  }, []);

  // Filter staff based on search and designation
  const filteredStaff = staffMembers.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterDesignation === "all" || staff.designation === filterDesignation;
    return matchesSearch && matchesFilter;
  });

  // Get unique designations for filter
  const designations = [
    "all",
    ...new Set(staffMembers.map((s) => s.designation)),
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl text-gray-600 font-semibold">
            লোড হচ্ছে...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 li-font">
            আমাদের কর্মচারীবৃন্দ
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          {/* Search Box */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="কর্মচারী খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all text-sm"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={filterDesignation}
              onChange={(e) => setFilterDesignation(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all appearance-none bg-white cursor-pointer text-sm"
            >
              <option value="all">সকল কর্মচারী</option>
              {designations.slice(1).map((designation, idx) => (
                <option key={idx} value={designation}>
                  {designation}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {/* Staff Grid */}
        {filteredStaff.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStaff.map((staff, index) => (
              <StaffCard key={index} staff={staff} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              কোন কর্মচারী পাওয়া যায়নি
            </h3>
            <p className="text-gray-500">
              অনুগ্রহ করে অন্য নাম বা পদবী দিয়ে খুঁজুন
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;
