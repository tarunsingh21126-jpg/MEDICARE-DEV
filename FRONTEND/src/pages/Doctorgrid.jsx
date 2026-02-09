import React from "react";
import DoctorCard from "../components/dashboard/DoctorCard";
import { doctors } from "../data/doctorsData";

const Doctorgrid = () => {
  // ✅ Home page pe sirf kuch selected doctors (ID se)
  const showDoctorIds = [1, 2, 3, 4];

  const homeDoctors = showDoctorIds
    .map((id) => doctors.find((d) => d.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Heading */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Top Doctors Near You
            </h1>
            <p className="text-gray-600 mt-1">
              Book an appointment with experienced doctors 👨‍⚕️👩‍⚕️
            </p>
          </div>

          <button className="text-sm font-semibold text-blue-600 hover:underline">
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {homeDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctorgrid;
