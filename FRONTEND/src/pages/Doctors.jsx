import React, { useMemo, useState } from "react";

import DoctorCard from "../components/dashboard/DoctorCard";
import { doctors } from "../data/doctorsData";
import Searchbar from "../components/Searchbar";

const Doctors = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  // ✅ Filtering logic
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchName = doctor.name.toLowerCase().includes(search.toLowerCase());

      const matchSpecialty =
        specialty === "" || doctor.specialty === specialty;

      const matchLocation =
        location === "" || doctor.location === location;

      return matchName && matchSpecialty && matchLocation;
    });
  }, [search, specialty, location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Searchbar
        search={search}
        setSearch={setSearch}
        specialty={specialty}
        setSpecialty={setSpecialty}
        location={location}
        setLocation={setLocation}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Heading */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Find Doctors
            </h2>
            <p className="text-gray-600 mt-1">
              Search and filter doctors easily.
            </p>
          </div>

          <p className="text-sm text-gray-700 font-semibold">
            Results: {filteredDoctors.length}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="mt-10 text-center text-gray-600">
            No doctors found ❌
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;