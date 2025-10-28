import React, { useState, useEffect } from "react";
import { Ticket, Plus } from "lucide-react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import DashboardCard from "../components/dashboard/DashboardCard";
import { useAuth } from "../context/AuthContext";
import { loadTickets } from "../data/initialTickets";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    in_progress: 0,
    closed: 0,
  });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = () => {
    try {
      const tickets = loadTickets();

      setStats({
        total: tickets.length,
        open: tickets.filter((t) => t.status === "open").length,
        in_progress: tickets.filter((t) => t.status === "in_progress").length,
        closed: tickets.filter((t) => t.status === "closed").length,
      });
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      <Header />

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}!</p>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading statistics...</div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <DashboardCard
              title="Total Tickets"
              value={stats.total}
              color="indigo"
            />
            <DashboardCard title="Open" value={stats.open} color="green" />
            <DashboardCard
              title="In Progress"
              value={stats.in_progress}
              color="amber"
            />
            <DashboardCard title="Closed" value={stats.closed} color="gray" />
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="#/tickets"
              className="flex items-center gap-4 p-6 bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow"
            >
              <Ticket className="text-indigo-600" size={32} />
              <div>
                <div className="font-semibold text-gray-800">
                  Manage Tickets
                </div>
                <div className="text-sm text-gray-600">
                  View and manage all tickets
                </div>
              </div>
            </a>
            <a
              href="#/tickets"
              className="flex items-center gap-4 p-6 bg-linear-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-shadow"
            >
              <Plus className="text-green-600" size={32} />
              <div>
                <div className="font-semibold text-gray-800">
                  Create New Ticket
                </div>
                <div className="text-sm text-gray-600">
                  Add a new support ticket
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
