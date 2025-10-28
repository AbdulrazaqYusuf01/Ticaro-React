import React, { useState, useEffect } from "react";
import { Plus, Ticket } from "lucide-react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Toast from "../components/common/Toast";
import TicketCard from "../components/tickets/TicketCard";
import TicketForm from "../components/tickets/TicketForm";

import { loadTickets, saveTickets } from "../data/initialTickets";

const TicketManagement = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = () => {
    try {
      const data = loadTickets();
      setTickets(data);
    } catch (error) {
      console.log(error);
      setToast({
        message: "Failed to load tickets. Please retry.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) return;

    try {
      const updatedTickets = tickets.filter((t) => t.id !== id);
      setTickets(updatedTickets);
      saveTickets(updatedTickets);
      setToast({ message: "Ticket deleted successfully!", type: "success" });
    } catch (error) {
      console.log(error);
      setToast({
        message: "Failed to delete ticket. Please try again.",
        type: "error",
      });
    }
  };

  const handleSave = (ticketData) => {
    try {
      if (editingTicket) {
        // Update existing ticket
        const updatedTickets = tickets.map((t) =>
          t.id === editingTicket.id
            ? {
                ...ticketData,
                id: editingTicket.id,
                createdAt: editingTicket.createdAt,
              }
            : t
        );
        setTickets(updatedTickets);
        saveTickets(updatedTickets);
        setToast({ message: "Ticket updated successfully!", type: "success" });
      } else {
        // Create new ticket
        const newTicket = {
          ...ticketData,
          id: Math.max(0, ...tickets.map((t) => t.id)) + 1,
          createdAt: new Date().toISOString(),
        };
        const updatedTickets = [...tickets, newTicket];
        setTickets(updatedTickets);
        saveTickets(updatedTickets);
        setToast({ message: "Ticket created successfully!", type: "success" });
      }

      setShowForm(false);
      setEditingTicket(null);
    } catch (error) {
      console.log(error);
      setToast({
        message: "Failed to save ticket. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <Header />
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Ticket Management
            </h1>
            <p className="text-gray-600">
              Create, view, and manage support tickets
            </p>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingTicket(null);
            }}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus size={20} />
            New Ticket
          </button>
        </div>

        {showForm && (
          <TicketForm
            ticket={editingTicket}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingTicket(null);
            }}
          />
        )}

        {loading ? (
          <div className="text-center py-12">Loading tickets...</div>
        ) : tickets.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Ticket className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No tickets yet
            </h3>
            <p className="text-gray-600 mb-6">
              Create your first ticket to get started
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
            >
              Create First Ticket
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onEdit={(t) => {
                  setEditingTicket(t);
                  setShowForm(true);
                }}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TicketManagement;
