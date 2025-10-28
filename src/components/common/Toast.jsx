import React, { useEffect } from "react";
import { AlertCircle, CheckCircle, X } from "lucide-react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white min-w-80`}
      >
        {type === "success" ? (
          <CheckCircle size={20} />
        ) : (
          <AlertCircle size={20} />
        )}
        <span className="flex-1">{message}</span>
        <button onClick={onClose} className="hover:opacity-80">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
