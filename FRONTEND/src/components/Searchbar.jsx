import React from "react";

const Searchbar = ({ search, setSearch, specialty, setSpecialty, location, setLocation }) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">MediBook</h1>

        {/* Search */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search doctor name..."
          className="w-full md:w-[260px] px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Specialty Filter */}
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="w-full md:w-[220px] px-4 py-2 border rounded-xl outline-none"
        >
          <option value="">All Specialties</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
        </select>

        {/* Location Filter */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-[200px] px-4 py-2 border rounded-xl outline-none"
        >
          <option value="">All Locations</option>
          <option value="Mumbai, India">Mumbai</option>
          <option value="Delhi, India">Delhi</option>
          <option value="Bengaluru, India">Bengaluru</option>
          <option value="Kolkata, India">Kolkata</option>
        </select>
      </div>
    </div>
  );
};

export default Searchbar;