// import React from "react";

// const DoctorCard = ({ doctor }) => {
//   const isAvailableToday = doctor.availability.toLowerCase().includes("today");

//   return (
//     <div className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-4">
//       {/* Top */}
//       <div className="flex items-start justify-between gap-3">
//         <div className="flex items-center gap-3">
//           {/* Photo */}
//           <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border">
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 e.target.src =
//                   "https://via.placeholder.com/200?text=Doctor";
//               }}
//             />
//           </div>

//           {/* Name + Specialty */}
//           <div>
//             <h3 className="font-bold text-gray-900 text-lg leading-tight">
//               {doctor.name}
//             </h3>
//             <p className="text-gray-600 text-sm">{doctor.specialty}</p>
//           </div>
//         </div>

//         {/* Fee */}
//         <div className="text-right">
//           <p className="text-xs text-gray-500">Consultation</p>
//           <p className="font-bold text-gray-900">₹ {doctor.fee}</p>
//         </div>
//       </div>

//       {/* Info */}
//       <div className="mt-4 space-y-2 text-sm text-gray-700">
//         <p>
//           <span className="font-semibold">Experience:</span> {doctor.experience}+
//           years
//         </p>
//         <p>
//           <span className="font-semibold">Location:</span> {doctor.location}
//         </p>
//       </div>

//       {/* Availability */}
//       <div
//         className={`mt-4 px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2
//         ${isAvailableToday ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
//       >
//         <span className="text-base">●</span>
//         {doctor.availability}
//       </div>

//       {/* Rating */}
//       <p className="mt-3 text-sm text-gray-600">
//         ⭐ {doctor.rating} ({doctor.reviews})
//       </p>

//       {/* Button */}
//       <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition">
//         Book Appointment
//       </button>
//     </div>
//   );
// };

// export default DoctorCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/doctor/${doctor.id}`)}
      className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-4 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border">
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

          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">
              {doctor.name}
            </h3>
            <p className="text-gray-600 text-sm">{doctor.specialty}</p>
          </div>
        </div>

        <p className="font-bold text-gray-900">₹ {doctor.fee}</p>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        ⭐ {doctor.rating} ({doctor.reviews})
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;