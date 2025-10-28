import React from "react";
import { Ticket } from "lucide-react";

const FeatureCard = ({ title, description, gradient }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div
      className={`w-16 h-16 rounded-xl bg-linear-to-br ${gradient} mb-6 flex items-center justify-center`}
    >
      <Ticket className="text-white" size={32} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
