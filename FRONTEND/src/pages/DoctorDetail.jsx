import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../data/doctorsData";

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((d) => d.id === Number(id));

  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"];

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white border p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold">Doctor not found ❌</h2>
          <button
            className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mt-4 bg-white border rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 border">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/200?text=Doctor";
                }}
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{doctor.name}</h1>
              <p className="text-gray-600 mt-1">
                {doctor.specialty} • {doctor.experience}+ years • {doctor.location}
              </p>

              <p className="text-sm text-gray-600 mt-2">
                ⭐ {doctor.rating} ({doctor.reviews} reviews)
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-gray-500 text-sm">Consultation Fee</p>
              <p className="text-2xl font-bold text-gray-900">₹ {doctor.fee}</p>
              <p className="text-sm mt-1 text-green-700 font-semibold">
                {doctor.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">About Doctor</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {doctor.name} is a highly experienced {doctor.specialty} with{" "}
                {doctor.experience}+ years of experience. Book an appointment for
                consultation and diagnosis.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Clinic Location</h2>
              <p className="text-gray-600 mt-2">{doctor.location}</p>
            </div>
          </div>

          {/* Right: Booking */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Book Appointment
            </h2>

            {/* Date */}
            <p className="mt-4 text-sm font-semibold text-gray-700">
              Select Date
            </p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {["Today", "Tomorrow", "This Week"].map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded-xl border text-sm font-semibold transition
                    ${
                      selectedDate === date
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-800 hover:bg-gray-50"
                    }`}
                >
                  {date}
                </button>
              ))}
            </div>

            {/* Time */}
            <p className="mt-5 text-sm font-semibold text-gray-700">
              Select Time
            </p>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 py-2 rounded-xl border text-sm font-semibold transition
                    ${
                      selectedTime === time
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-800 hover:bg-gray-50"
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Confirm */}
            <button
              disabled={!selectedTime}
              className={`mt-6 w-full py-3 rounded-xl font-bold transition
                ${
                  selectedTime
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              onClick={() =>
                alert(
                  `Appointment Confirmed ✅\n\nDoctor: ${doctor.name}\nDate: ${selectedDate}\nTime: ${selectedTime}`
                )
              }
            >
              Confirm Appointment
            </button>

            <p className="text-xs text-gray-500 mt-3">
              You will receive booking confirmation via SMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;