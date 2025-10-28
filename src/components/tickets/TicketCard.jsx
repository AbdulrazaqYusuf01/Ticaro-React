import React from "react";
import { Edit2, Trash2 } from "lucide-react";

const TicketCard = ({ ticket, onEdit, onDelete }) => {
  const statusColors = {
    open: "bg-green-100 text-green-800",
    in_progress: "bg-amber-100 text-amber-800",
    closed: "bg-gray-100 text-gray-800",
  };

  const statusLabels = {
    open: "Open",
    in_progress: "In Progress",
    closed: "Closed",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800 flex-1 mr-2">
          {ticket.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            statusColors[ticket.status]
          }`}
        >
          {statusLabels[ticket.status]}
        </span>
      </div>

      {ticket.description && (
        <p className="text-gray-600 mb-4 line-clamp-3">{ticket.description}</p>
      )}

      {ticket.priority && (
        <div className="mb-4">
          <span className="text-sm text-gray-500">Priority: </span>
          <span className="text-sm font-semibold text-gray-700 capitalize">
            {ticket.priority}
          </span>
        </div>
      )}

      <div className="text-xs text-gray-500 mb-4">
        Created: {new Date(ticket.createdAt).toLocaleDateString()}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(ticket)}
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
        >
          <Edit2 size={16} />
          Edit
        </button>
        <button
          onClick={() => onDelete(ticket.id)}
          className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
