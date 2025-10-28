import React from "react";

const StatBox = ({ number, label }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
    <div className="text-4xl font-bold text-indigo-600 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default StatBox;
