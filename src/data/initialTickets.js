export const initialTickets = [
  {
    id: 1,
    title: "Login page not loading",
    description:
      "Users are reporting that the login page is not loading properly on mobile devices.",
    status: "open",
    priority: "high",
    createdAt: "2025-10-20T10:30:00.000Z",
  },
  {
    id: 2,
    title: "Dashboard shows incorrect statistics",
    description:
      "The ticket count on the dashboard doesn't match the actual number of tickets.",
    status: "in_progress",
    priority: "medium",
    createdAt: "2025-10-22T14:15:00.000Z",
  },
  {
    id: 3,
    title: "Email notifications not working",
    description:
      "Users are not receiving email notifications when tickets are updated.",
    status: "closed",
    priority: "high",
    createdAt: "2025-10-18T09:00:00.000Z",
  },
  {
    id: 4,
    title: "Add dark mode feature",
    description:
      "Request to add a dark mode toggle for better user experience during night time.",
    status: "open",
    priority: "low",
    createdAt: "2025-10-25T16:45:00.000Z",
  },
];

// Storage keys
export const STORAGE_KEY = "ticketflow_tickets";

// Load tickets from localStorage or use initial data
export const loadTickets = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialTickets;
  } catch (e) {
    console.error("Error loading tickets:", e);
    return initialTickets;
  }
};

// Save tickets to localStorage
export const saveTickets = (tickets) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  } catch (e) {
    console.error("Error saving tickets:", e);
  }
};
