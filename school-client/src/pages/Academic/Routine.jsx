import React, { useState } from "react";
import "./Routine.css";

const Routine = () => {
  const [selectedClass, setSelectedClass] = useState("6");
  const [viewMode, setViewMode] = useState("day"); // 'day', 'teacher'
  const [selectedDay, setSelectedDay] = useState("Sunday");
  const [selectedTeacher, setSelectedTeacher] = useState("");

  // Sample routine data - You can move this to a JSON file or fetch from API
  const routineData = {
    6: [
      {
        day: "Sunday",
        time: "8:30 - 9:15",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "101",
      },
      {
        day: "Sunday",
        time: "9:15 - 10:00",
        subject: "English",
        teacher: "Mr. Khan",
        room: "102",
      },
      {
        day: "Sunday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "103",
      },
      {
        day: "Sunday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Sunday",
        time: "11:00 - 11:45",
        subject: "Science",
        teacher: "Mr. Islam",
        room: "104",
      },
      {
        day: "Sunday",
        time: "11:45 - 12:30",
        subject: "Social Science",
        teacher: "Mrs. Begum",
        room: "105",
      },

      {
        day: "Monday",
        time: "8:30 - 9:15",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "103",
      },
      {
        day: "Monday",
        time: "9:15 - 10:00",
        subject: "English",
        teacher: "Mr. Khan",
        room: "102",
      },
      {
        day: "Monday",
        time: "10:00 - 10:45",
        subject: "ICT",
        teacher: "Mr. Hassan",
        room: "Lab-1",
      },
      {
        day: "Monday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Monday",
        time: "11:00 - 11:45",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "101",
      },
      {
        day: "Monday",
        time: "11:45 - 12:30",
        subject: "Religion",
        teacher: "Mr. Karim",
        room: "106",
      },

      {
        day: "Tuesday",
        time: "8:30 - 9:15",
        subject: "English",
        teacher: "Mr. Khan",
        room: "102",
      },
      {
        day: "Tuesday",
        time: "9:15 - 10:00",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "103",
      },
      {
        day: "Tuesday",
        time: "10:00 - 10:45",
        subject: "Physical Education",
        teacher: "Mr. Hossain",
        room: "Ground",
      },
      {
        day: "Tuesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Tuesday",
        time: "11:00 - 11:45",
        subject: "Social Science",
        teacher: "Mrs. Begum",
        room: "105",
      },
      {
        day: "Tuesday",
        time: "11:45 - 12:30",
        subject: "Art & Craft",
        teacher: "Ms. Sultana",
        room: "107",
      },

      {
        day: "Wednesday",
        time: "8:30 - 9:15",
        subject: "Science",
        teacher: "Mr. Islam",
        room: "104",
      },
      {
        day: "Wednesday",
        time: "9:15 - 10:00",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "101",
      },
      {
        day: "Wednesday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "103",
      },
      {
        day: "Wednesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Wednesday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "102",
      },
      {
        day: "Wednesday",
        time: "11:45 - 12:30",
        subject: "Social Science",
        teacher: "Mrs. Begum",
        room: "105",
      },

      {
        day: "Thursday",
        time: "8:30 - 9:15",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "103",
      },
      {
        day: "Thursday",
        time: "9:15 - 10:00",
        subject: "Science",
        teacher: "Mr. Islam",
        room: "104",
      },
      {
        day: "Thursday",
        time: "10:00 - 10:45",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "101",
      },
      {
        day: "Thursday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Thursday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "102",
      },
      {
        day: "Thursday",
        time: "11:45 - 12:30",
        subject: "Music",
        teacher: "Mr. Ali",
        room: "108",
      },
    ],
    7: [
      {
        day: "Sunday",
        time: "8:30 - 9:15",
        subject: "English",
        teacher: "Mr. Khan",
        room: "201",
      },
      {
        day: "Sunday",
        time: "9:15 - 10:00",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "202",
      },
      {
        day: "Sunday",
        time: "10:00 - 10:45",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "203",
      },
      {
        day: "Sunday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Sunday",
        time: "11:00 - 11:45",
        subject: "Science",
        teacher: "Mr. Islam",
        room: "204",
      },
      {
        day: "Sunday",
        time: "11:45 - 12:30",
        subject: "ICT",
        teacher: "Mr. Hassan",
        room: "Lab-1",
      },

      {
        day: "Monday",
        time: "8:30 - 9:15",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "202",
      },
      {
        day: "Monday",
        time: "9:15 - 10:00",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "203",
      },
      {
        day: "Monday",
        time: "10:00 - 10:45",
        subject: "Social Science",
        teacher: "Mrs. Begum",
        room: "205",
      },
      {
        day: "Monday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Monday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "201",
      },
      {
        day: "Monday",
        time: "11:45 - 12:30",
        subject: "Religion",
        teacher: "Mr. Karim",
        room: "206",
      },

      {
        day: "Tuesday",
        time: "8:30 - 9:15",
        subject: "Science",
        teacher: "Mr. Islam",
        room: "204",
      },
      {
        day: "Tuesday",
        time: "9:15 - 10:00",
        subject: "English",
        teacher: "Mr. Khan",
        room: "201",
      },
      {
        day: "Tuesday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "202",
      },
      {
        day: "Tuesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Tuesday",
        time: "11:00 - 11:45",
        subject: "Physical Education",
        teacher: "Mr. Hossain",
        room: "Ground",
      },
      {
        day: "Tuesday",
        time: "11:45 - 12:30",
        subject: "Art & Craft",
        teacher: "Ms. Sultana",
        room: "207",
      },

      {
        day: "Wednesday",
        time: "8:30 - 9:15",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "203",
      },
      {
        day: "Wednesday",
        time: "9:15 - 10:00",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "202",
      },
      {
        day: "Wednesday",
        time: "10:00 - 10:45",
        subject: "ICT",
        teacher: "Mr. Hassan",
        room: "Lab-1",
      },
      {
        day: "Wednesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Wednesday",
        time: "11:00 - 11:45",
        subject: "Science",
        teacher: "Mr. Islam",
        room: "204",
      },
      {
        day: "Wednesday",
        time: "11:45 - 12:30",
        subject: "Social Science",
        teacher: "Mrs. Begum",
        room: "205",
      },

      {
        day: "Thursday",
        time: "8:30 - 9:15",
        subject: "English",
        teacher: "Mr. Khan",
        room: "201",
      },
      {
        day: "Thursday",
        time: "9:15 - 10:00",
        subject: "Science",
        teacher: "Mr. Islam",
        room: "204",
      },
      {
        day: "Thursday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "202",
      },
      {
        day: "Thursday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Thursday",
        time: "11:00 - 11:45",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "203",
      },
      {
        day: "Thursday",
        time: "11:45 - 12:30",
        subject: "Music",
        teacher: "Mr. Ali",
        room: "208",
      },
    ],
    8: [
      {
        day: "Sunday",
        time: "8:30 - 9:15",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "301",
      },
      {
        day: "Sunday",
        time: "9:15 - 10:00",
        subject: "English",
        teacher: "Mr. Khan",
        room: "302",
      },
      {
        day: "Sunday",
        time: "10:00 - 10:45",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "303",
      },
      {
        day: "Sunday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Sunday",
        time: "11:00 - 11:45",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "304",
      },
      {
        day: "Sunday",
        time: "11:45 - 12:30",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "305",
      },

      {
        day: "Monday",
        time: "8:30 - 9:15",
        subject: "English",
        teacher: "Mr. Khan",
        room: "302",
      },
      {
        day: "Monday",
        time: "9:15 - 10:00",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "301",
      },
      {
        day: "Monday",
        time: "10:00 - 10:45",
        subject: "Biology",
        teacher: "Mr. Islam",
        room: "306",
      },
      {
        day: "Monday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Monday",
        time: "11:00 - 11:45",
        subject: "ICT",
        teacher: "Mr. Hassan",
        room: "Lab-2",
      },
      {
        day: "Monday",
        time: "11:45 - 12:30",
        subject: "Social Science",
        teacher: "Mrs. Begum",
        room: "307",
      },

      {
        day: "Tuesday",
        time: "8:30 - 9:15",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "303",
      },
      {
        day: "Tuesday",
        time: "9:15 - 10:00",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "304",
      },
      {
        day: "Tuesday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "301",
      },
      {
        day: "Tuesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Tuesday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "302",
      },
      {
        day: "Tuesday",
        time: "11:45 - 12:30",
        subject: "Physical Education",
        teacher: "Mr. Hossain",
        room: "Ground",
      },

      {
        day: "Wednesday",
        time: "8:30 - 9:15",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "301",
      },
      {
        day: "Wednesday",
        time: "9:15 - 10:00",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "305",
      },
      {
        day: "Wednesday",
        time: "10:00 - 10:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "302",
      },
      {
        day: "Wednesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Wednesday",
        time: "11:00 - 11:45",
        subject: "Biology",
        teacher: "Mr. Islam",
        room: "306",
      },
      {
        day: "Wednesday",
        time: "11:45 - 12:30",
        subject: "Religion",
        teacher: "Mr. Karim",
        room: "308",
      },

      {
        day: "Thursday",
        time: "8:30 - 9:15",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "304",
      },
      {
        day: "Thursday",
        time: "9:15 - 10:00",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "303",
      },
      {
        day: "Thursday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "301",
      },
      {
        day: "Thursday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Thursday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "302",
      },
      {
        day: "Thursday",
        time: "11:45 - 12:30",
        subject: "Art & Craft",
        teacher: "Ms. Sultana",
        room: "309",
      },
    ],
    9: [
      {
        day: "Sunday",
        time: "8:30 - 9:15",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "401",
      },
      {
        day: "Sunday",
        time: "9:15 - 10:00",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "402",
      },
      {
        day: "Sunday",
        time: "10:00 - 10:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "403",
      },
      {
        day: "Sunday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Sunday",
        time: "11:00 - 11:45",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "404",
      },
      {
        day: "Sunday",
        time: "11:45 - 12:30",
        subject: "Biology",
        teacher: "Mr. Islam",
        room: "405",
      },

      {
        day: "Monday",
        time: "8:30 - 9:15",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "402",
      },
      {
        day: "Monday",
        time: "9:15 - 10:00",
        subject: "English",
        teacher: "Mr. Khan",
        room: "403",
      },
      {
        day: "Monday",
        time: "10:00 - 10:45",
        subject: "Higher Math",
        teacher: "Mr. Siddique",
        room: "406",
      },
      {
        day: "Monday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Monday",
        time: "11:00 - 11:45",
        subject: "ICT",
        teacher: "Mr. Hassan",
        room: "Lab-2",
      },
      {
        day: "Monday",
        time: "11:45 - 12:30",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "407",
      },

      {
        day: "Tuesday",
        time: "8:30 - 9:15",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "404",
      },
      {
        day: "Tuesday",
        time: "9:15 - 10:00",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "401",
      },
      {
        day: "Tuesday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "402",
      },
      {
        day: "Tuesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Tuesday",
        time: "11:00 - 11:45",
        subject: "Biology",
        teacher: "Mr. Islam",
        room: "405",
      },
      {
        day: "Tuesday",
        time: "11:45 - 12:30",
        subject: "English",
        teacher: "Mr. Khan",
        room: "403",
      },

      {
        day: "Wednesday",
        time: "8:30 - 9:15",
        subject: "English",
        teacher: "Mr. Khan",
        room: "403",
      },
      {
        day: "Wednesday",
        time: "9:15 - 10:00",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "402",
      },
      {
        day: "Wednesday",
        time: "10:00 - 10:45",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "401",
      },
      {
        day: "Wednesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Wednesday",
        time: "11:00 - 11:45",
        subject: "Higher Math",
        teacher: "Mr. Siddique",
        room: "406",
      },
      {
        day: "Wednesday",
        time: "11:45 - 12:30",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "407",
      },

      {
        day: "Thursday",
        time: "8:30 - 9:15",
        subject: "Biology",
        teacher: "Mr. Islam",
        room: "405",
      },
      {
        day: "Thursday",
        time: "9:15 - 10:00",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "404",
      },
      {
        day: "Thursday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "402",
      },
      {
        day: "Thursday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Thursday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "403",
      },
      {
        day: "Thursday",
        time: "11:45 - 12:30",
        subject: "Physical Education",
        teacher: "Mr. Hossain",
        room: "Ground",
      },
    ],
    10: [
      {
        day: "Sunday",
        time: "8:30 - 9:15",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "501",
      },
      {
        day: "Sunday",
        time: "9:15 - 10:00",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "502",
      },
      {
        day: "Sunday",
        time: "10:00 - 10:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "503",
      },
      {
        day: "Sunday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Sunday",
        time: "11:00 - 11:45",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "504",
      },
      {
        day: "Sunday",
        time: "11:45 - 12:30",
        subject: "Higher Math",
        teacher: "Mr. Siddique",
        room: "505",
      },

      {
        day: "Monday",
        time: "8:30 - 9:15",
        subject: "English",
        teacher: "Mr. Khan",
        room: "503",
      },
      {
        day: "Monday",
        time: "9:15 - 10:00",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "501",
      },
      {
        day: "Monday",
        time: "10:00 - 10:45",
        subject: "Biology",
        teacher: "Mr. Islam",
        room: "506",
      },
      {
        day: "Monday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Monday",
        time: "11:00 - 11:45",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "507",
      },
      {
        day: "Monday",
        time: "11:45 - 12:30",
        subject: "ICT",
        teacher: "Mr. Hassan",
        room: "Lab-3",
      },

      {
        day: "Tuesday",
        time: "8:30 - 9:15",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "502",
      },
      {
        day: "Tuesday",
        time: "9:15 - 10:00",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "504",
      },
      {
        day: "Tuesday",
        time: "10:00 - 10:45",
        subject: "Higher Math",
        teacher: "Mr. Siddique",
        room: "505",
      },
      {
        day: "Tuesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Tuesday",
        time: "11:00 - 11:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "501",
      },
      {
        day: "Tuesday",
        time: "11:45 - 12:30",
        subject: "English",
        teacher: "Mr. Khan",
        room: "503",
      },

      {
        day: "Wednesday",
        time: "8:30 - 9:15",
        subject: "Chemistry",
        teacher: "Mrs. Haque",
        room: "504",
      },
      {
        day: "Wednesday",
        time: "9:15 - 10:00",
        subject: "Biology",
        teacher: "Mr. Islam",
        room: "506",
      },
      {
        day: "Wednesday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "501",
      },
      {
        day: "Wednesday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Wednesday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "503",
      },
      {
        day: "Wednesday",
        time: "11:45 - 12:30",
        subject: "Bangla",
        teacher: "Mrs. Rahman",
        room: "507",
      },

      {
        day: "Thursday",
        time: "8:30 - 9:15",
        subject: "Higher Math",
        teacher: "Mr. Siddique",
        room: "505",
      },
      {
        day: "Thursday",
        time: "9:15 - 10:00",
        subject: "Physics",
        teacher: "Mr. Rahman",
        room: "502",
      },
      {
        day: "Thursday",
        time: "10:00 - 10:45",
        subject: "Math",
        teacher: "Mrs. Ahmed",
        room: "501",
      },
      {
        day: "Thursday",
        time: "10:45 - 11:00",
        subject: "Break",
        teacher: "",
        room: "",
      },
      {
        day: "Thursday",
        time: "11:00 - 11:45",
        subject: "English",
        teacher: "Mr. Khan",
        room: "503",
      },
      {
        day: "Thursday",
        time: "11:45 - 12:30",
        subject: "Physical Education",
        teacher: "Mr. Hossain",
        room: "Ground",
      },
    ],
  };

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const classes = ["6", "7", "8", "9", "10"];

  // Get unique teachers for the selected class
  const getTeachers = () => {
    const teachers = new Set();
    routineData[selectedClass]?.forEach((item) => {
      if (item.teacher) teachers.add(item.teacher);
    });
    return Array.from(teachers).sort();
  };

  // Filter routine by selected day
  const getDayRoutine = (day) => {
    return routineData[selectedClass]?.filter((item) => item.day === day) || [];
  };

  // Filter routine by selected teacher
  const getTeacherRoutine = () => {
    return (
      routineData[selectedClass]?.filter(
        (item) => item.teacher === selectedTeacher
      ) || []
    );
  };

  // Get unique time slots
  const getTimeSlots = () => {
    const times = new Set();
    routineData[selectedClass]?.forEach((item) => times.add(item.time));
    return Array.from(times);
  };

  return (
    <div className="routine-container">
      <div className="routine-header">
        <h1>Class Routine</h1>
        <p className="routine-subtitle">Academic Session 2025-2026</p>
      </div>

      <div className="routine-controls">
        {/* Class Selection */}
        <div className="control-group">
          <label>Select Class:</label>
          <div className="class-buttons">
            {classes.map((cls) => (
              <button
                key={cls}
                className={`class-btn ${selectedClass === cls ? "active" : ""}`}
                onClick={() => setSelectedClass(cls)}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode Selection */}
        <div className="control-group">
          <label>View By:</label>
          <div className="view-mode-buttons">
            <button
              className={`view-btn ${viewMode === "day" ? "active" : ""}`}
              onClick={() => setViewMode("day")}
            >
              Day-wise
            </button>
            <button
              className={`view-btn ${viewMode === "teacher" ? "active" : ""}`}
              onClick={() => setViewMode("teacher")}
            >
              Teacher-wise
            </button>
          </div>
        </div>

        {/* Day Selection (for day-wise view) */}
        {viewMode === "day" && (
          <div className="control-group">
            <label>Select Day:</label>
            <select
              className="day-select"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Teacher Selection (for teacher-wise view) */}
        {viewMode === "teacher" && (
          <div className="control-group">
            <label>Select Teacher:</label>
            <select
              className="teacher-select"
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
            >
              <option value="">Select a teacher</option>
              {getTeachers().map((teacher) => (
                <option key={teacher} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Routine Display - Day-wise View */}
      {viewMode === "day" && (
        <div className="routine-content">
          <h2 className="schedule-title">
            Class {selectedClass} - {selectedDay}
          </h2>
          <div className="routine-table-wrapper">
            <table className="routine-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Room</th>
                </tr>
              </thead>
              <tbody>
                {getDayRoutine(selectedDay).map((item, index) => (
                  <tr
                    key={index}
                    className={item.subject === "Break" ? "break-row" : ""}
                  >
                    <td className="time-cell">{item.time}</td>
                    <td className="subject-cell">{item.subject}</td>
                    <td className="teacher-cell">{item.teacher}</td>
                    <td className="room-cell">{item.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Routine Display - Teacher-wise View */}
      {viewMode === "teacher" && (
        <div className="routine-content">
          {selectedTeacher ? (
            <>
              <h2 className="schedule-title">
                Class {selectedClass} - {selectedTeacher}
              </h2>
              <div className="routine-table-wrapper">
                <table className="routine-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Subject</th>
                      <th>Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getTeacherRoutine().map((item, index) => (
                      <tr key={index}>
                        <td className="day-cell">{item.day}</td>
                        <td className="time-cell">{item.time}</td>
                        <td className="subject-cell">{item.subject}</td>
                        <td className="room-cell">{item.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <p>Please select a teacher to view their schedule</p>
            </div>
          )}
        </div>
      )}

      {/* Weekly Overview Grid (shown for all days) */}
      {viewMode === "day" && (
        <div className="weekly-overview">
          <h2 className="overview-title">
            Weekly Overview - Class {selectedClass}
          </h2>
          <div className="weekly-grid">
            <div className="time-column">
              <div className="grid-header">Time</div>
              {getTimeSlots().map((time) => (
                <div key={time} className="time-slot">
                  {time}
                </div>
              ))}
            </div>
            {days.map((day) => (
              <div key={day} className="day-column">
                <div className="grid-header">{day}</div>
                {getTimeSlots().map((time) => {
                  const item = routineData[selectedClass]?.find(
                    (r) => r.day === day && r.time === time
                  );
                  return (
                    <div
                      key={`${day}-${time}`}
                      className={`schedule-cell ${
                        item?.subject === "Break" ? "break-cell" : ""
                      }`}
                    >
                      {item && (
                        <>
                          <div className="cell-subject">{item.subject}</div>
                          {item.teacher && (
                            <div className="cell-teacher">{item.teacher}</div>
                          )}
                          {item.room && (
                            <div className="cell-room">{item.room}</div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Routine;
