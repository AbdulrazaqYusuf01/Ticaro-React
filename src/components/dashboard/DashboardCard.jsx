import React from "react";
import { LayoutDashboard } from "lucide-react";

const DashboardCard = ({ title, value, color }) => {
  const colors = {
    indigo: "from-indigo-500 to-purple-500",
    green: "from-green-500 to-emerald-500",
    amber: "from-amber-500 to-orange-500",
    gray: "from-gray-500 to-slate-500",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div
        className={`w-12 h-12 rounded-xl bg-linear-to-br ${colors[color]} mb-4 flex items-center justify-center`}
      >
        <LayoutDashboard className="text-white" size={24} />
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-gray-600">{title}</div>
    </div>
  );
};

export default DashboardCard;
