import React, { useEffect, useMemo, useState } from "react";
import { FaUsers, FaMale, FaFemale, FaGraduationCap } from "react-icons/fa";

const Students = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/students.json")
      .then((r) => r.json())
      .then((data) => {
        setStudentsData(data || []);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error fetching students data:", e);
        setLoading(false);
      });
  }, []);

  // Bangla -> number (supports arrays)
  const banglaToEnglish = (banglaNum) => {
    if (Array.isArray(banglaNum))
      return banglaNum.map((bn) => banglaToEnglish(bn));
    if (banglaNum === null || banglaNum === undefined) return 0;

    const s = String(banglaNum);
    const banglaDigits = {
      "০": 0,
      "১": 1,
      "২": 2,
      "৩": 3,
      "৪": 4,
      "৫": 5,
      "৬": 6,
      "৭": 7,
      "৮": 8,
      "৯": 9,
    };

    const converted = s
      .split("")
      .map((ch) => (banglaDigits[ch] !== undefined ? banglaDigits[ch] : ch))
      .join("");

    const n = parseInt(converted, 10);
    return Number.isNaN(n) ? 0 : n;
  };

  // number -> Bangla string
  const englishToBangla = (num) => {
    const banglaDigits = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };
    return String(num)
      .split("")
      .map((ch) => (banglaDigits[ch] !== undefined ? banglaDigits[ch] : ch))
      .join("");
  };

  const totals = useMemo(() => {
    const grand = studentsData.reduce((sum, c) => {
      if (Array.isArray(c.total))
        return sum + c.total.reduce((s, t) => s + banglaToEnglish(t), 0);
      return sum + banglaToEnglish(c.total);
    }, 0);

    const male = studentsData.reduce((sum, c) => {
      if (Array.isArray(c.male))
        return sum + c.male.reduce((s, m) => s + banglaToEnglish(m), 0);
      return sum + banglaToEnglish(c.male);
    }, 0);

    const female = studentsData.reduce((sum, c) => {
      if (Array.isArray(c.female))
        return sum + c.female.reduce((s, f) => s + banglaToEnglish(f), 0);
      return sum + banglaToEnglish(c.female);
    }, 0);

    return { grand, male, female };
  }, [studentsData]);

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="flex items-center gap-3 text-gray-600">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-emerald-300 border-t-emerald-600" />
          <p className="li-font">তথ্য লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 li-font">
            প্রতি শ্রেণিতে শিক্ষার্থীদের পরিসংখ্যান
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          {/* <p className="text-sm text-gray-600 li-font">
            মোট শিক্ষার্থী, ছাত্র ও ছাত্রী সংখ্যা এক নজরে
          </p> */}
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <StatCard
            title="মোট শিক্ষার্থী"
            value={englishToBangla(totals.grand)}
            icon={<FaUsers />}
            color="green"
          />
          <StatCard
            title="ছাত্র"
            value={englishToBangla(totals.male)}
            icon={<FaMale />}
            color="blue"
          />
          <StatCard
            title="ছাত্রী"
            value={englishToBangla(totals.female)}
            icon={<FaFemale />}
            color="pink"
          />
          <StatCard
            title="ছাত্র-ছাত্রী অনুপাত"
            value={`${englishToBangla(totals.male)} : ${englishToBangla(
              totals.female
            )}`}
            icon={<FaGraduationCap />}
            color="purple"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {studentsData.map((classInfo) => {
            const hasDepartments = Boolean(classInfo?.department);
            const departments = hasDepartments
              ? String(classInfo.department)
                  .split(",")
                  .map((d) => d.trim())
                  .filter(Boolean)
              : [];

            const classTotal = Array.isArray(classInfo.total)
              ? classInfo.total.reduce((s, t) => s + banglaToEnglish(t), 0)
              : banglaToEnglish(classInfo.total);

            return (
              <div
                key={classInfo.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Card header */}
                <div className="px-5 py-4 bg-gradient-to-r from-[#013223] to-[#006747] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-sm text-white grid place-items-center shadow-lg">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white li-font">
                        {classInfo.name} শ্রেণি
                      </h2>
                      {hasDepartments ? (
                        <p className="text-sm text-white/80 li-font">
                          {englishToBangla(departments.length)} টি বিভাগ
                        </p>
                      ) : (
                        <p className="text-sm text-white/80 li-font">
                          সারসংক্ষেপ
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-white/80 li-font">মোট</p>
                    <p className="text-xl md:text-2xl font-extrabold text-white">
                      {englishToBangla(classTotal)}
                    </p>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  {!hasDepartments ? (
                    <div className="grid grid-cols-3 gap-3">
                      <MiniTile
                        label="ছাত্র"
                        value={classInfo.male}
                        color="blue"
                      />
                      <MiniTile
                        label="ছাত্রী"
                        value={classInfo.female}
                        color="pink"
                      />
                      <MiniTile
                        label="মোট"
                        value={classInfo.total}
                        color="green"
                        strong
                      />
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-base">
                        <thead>
                          <tr className="bg-gradient-to-r from-[#013223]/10 to-[#006747]/10 text-gray-700">
                            <th className="text-left font-semibold py-3 px-2 li-font">
                              বিভাগ
                            </th>
                            <th className="text-center font-semibold py-3 px-2 li-font">
                              ছাত্র
                            </th>
                            <th className="text-center font-semibold py-3 px-2 li-font">
                              ছাত্রী
                            </th>
                            <th className="text-center font-semibold py-3 px-2 li-font">
                              মোট
                            </th>
                          </tr>
                        </thead>
                        <tbody className="border-t border-gray-200">
                          {departments.map((dept, i) => (
                            <tr
                              key={dept + i}
                              className="border-b border-slate-100"
                            >
                              <td className="py-3 li-font text-slate-800">
                                {dept}
                              </td>
                              <td className="py-3 text-center font-semibold text-slate-900">
                                {classInfo.male[i]}
                              </td>
                              <td className="py-3 text-center font-semibold text-slate-900">
                                {classInfo.female[i]}
                              </td>
                              <td className="py-3 text-center font-semibold text-slate-900">
                                {classInfo.total[i]}
                              </td>
                            </tr>
                          ))}

                          {/* totals row */}
                          <tr className="bg-gradient-to-r from-[#013223]/5 to-[#006747]/5">
                            <td className="py-3 px-2 li-font font-bold text-gray-800">
                              মোট
                            </td>
                            <td className="py-3 px-2 text-center font-bold">
                              {englishToBangla(
                                classInfo.male.reduce(
                                  (s, m) => s + banglaToEnglish(m),
                                  0
                                )
                              )}
                            </td>
                            <td className="py-3 text-center font-bold">
                              {englishToBangla(
                                classInfo.female.reduce(
                                  (s, f) => s + banglaToEnglish(f),
                                  0
                                )
                              )}
                            </td>
                            <td className="py-3 text-center font-bold">
                              {englishToBangla(
                                classInfo.total.reduce(
                                  (s, t) => s + banglaToEnglish(t),
                                  0
                                )
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer summary */}
        {/* <div className="mt-12 bg-gradient-to-r from-[#013223] via-[#006747] to-[#013223] rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm grid place-items-center text-white shadow-lg">
              <FaGraduationCap className="text-xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white li-font">
              পরিসংখ্যান সারসংক্ষেপ
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white/90 li-font mb-2">
                    মোট শিক্ষার্থী সংখ্যা
                  </p>
                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    {englishToBangla(totals.grand)}
                  </p>
                  <p className="text-sm text-white/80 li-font mt-1">জন</p>
                </div>
                <div className="h-14 w-14 rounded-xl bg-white/10 grid place-items-center group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-white text-2xl" />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white/90 li-font mb-2">
                    ছাত্র-ছাত্রী অনুপাত
                  </p>
                  <p className="text-xl md:text-2xl font-extrabold text-white">
                    {englishToBangla(totals.male)} :{" "}
                    {englishToBangla(totals.female)}
                  </p>
                  <p className="text-sm text-white/80 li-font mt-1">অনুপাত</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-14 w-14 rounded-xl bg-blue-500/20 grid place-items-center group-hover:scale-110 transition-transform duration-300">
                    <FaMale className="text-blue-200 text-2xl" />
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-pink-500/20 grid place-items-center group-hover:scale-110 transition-transform duration-300">
                    <FaFemale className="text-pink-200 text-2xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-white/90 li-font mb-2">
                    গড় শ্রেণি আকার
                  </p>
                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    {englishToBangla(
                      Math.round(
                        totals.grand / Math.max(1, studentsData.length)
                      )
                    )}
                  </p>
                  <p className="text-sm text-white/80 li-font mt-1">
                    জন প্রতি শ্রেণি
                  </p>
                </div>
                <div className="h-14 w-14 rounded-xl bg-white/10 grid place-items-center group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

function StatCard({ title, value, icon, color = "green" }) {
  const colorClasses = {
    green: "from-[#013223] to-[#006747]",
    blue: "from-blue-500 to-blue-600",
    pink: "from-pink-500 to-pink-600",
    purple: "from-purple-500 to-purple-600",
  };

  const iconBgClasses = {
    green: "bg-[#013223]/10",
    blue: "bg-blue-500/10",
    pink: "bg-pink-500/10",
    purple: "bg-purple-500/10",
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border border-gray-100 overflow-hidden relative">
      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colorClasses[color]} opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500`}
      ></div>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm text-gray-600 font-medium li-font mb-2">
            {title}
          </p>
          <p
            className={`text-2xl md:text-3xl font-extrabold bg-gradient-to-r ${colorClasses[color]} bg-clip-text text-transparent`}
          >
            {value}
          </p>
        </div>
        <div
          className={`h-12 w-12 rounded-xl ${iconBgClasses[color]} text-gray-700 grid place-items-center text-xl group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function MiniTile({ label, value, strong, color = "gray" }) {
  const colorClasses = {
    green: "from-[#013223] to-[#006747]",
    blue: "from-blue-500 to-blue-600",
    pink: "from-pink-500 to-pink-600",
    gray: "from-gray-500 to-gray-600",
  };

  const bgClasses = {
    green: "bg-[#013223]/5",
    blue: "bg-blue-500/5",
    pink: "bg-pink-500/5",
    gray: "bg-gray-100",
  };

  return (
    <div
      className={`rounded-xl border border-gray-200 p-4 text-center hover:shadow-md transition-all duration-300 ${
        strong ? bgClasses[color] : "bg-white"
      }`}
    >
      <p className="text-sm text-gray-600 li-font mb-2">{label}</p>
      <p
        className={
          strong
            ? `text-xl md:text-2xl font-bold bg-gradient-to-r ${colorClasses[color]} bg-clip-text text-transparent`
            : "text-xl md:text-2xl font-bold text-gray-800"
        }
      >
        {value}
      </p>
    </div>
  );
}

function SummaryBox({ title, value }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
      <p className="text-xs text-slate-600 li-font">{title}</p>
      <p className="mt-2 text-xl font-extrabold text-slate-900">{value}</p>
    </div>
  );
}

export default Students;
