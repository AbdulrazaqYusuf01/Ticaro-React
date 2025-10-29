# Ticaro - Ticket Management App - React Version

A modern ticket management web application built with React, featuring authentication, dashboard analytics, and full CRUD operations for tickets.

## 🚀 Technologies Used

- **React** (v18+)
- **React Router** - Client-side routing
- **Tailwindcss** - Styling with responsive design
- **LocalStorage** - Session management and data persistence

## 📋 Features

- **Landing Page** with wavy hero section and decorative elements
- **Authentication** (Login/Signup) with form validation
- **Dashboard** with ticket statistics (Total, Open, Resolved)
- **Ticket Management** (Create, Read, Update, Delete)
- **Protected Routes** with session-based authorization
- **Responsive Design** (Mobile, Tablet, Desktop)
- **Toast Notifications** for user feedback

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository
```bash
git clone <your-repo-url>
cd ticket-app-react
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to
```
http://localhost:3000
```

## 👤 Test Credentials

Use these credentials to log in:

- **Email:** `demo@feMentor.com`
- **Password:** `!abdul.tsx`

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components (Landing, Auth, Dashboard, Tickets)
├── utils/           # Helper functions and validation
├── styles/          # CSS stylesheets
└── App.js           # Main application component
```

## 🎨 UI Components

### Layout Components
- **Hero Section** - Wavy SVG background with decorative circles
- **Navigation** - Responsive header with authentication state
- **Footer** - Consistent across all pages
- **Cards** - Box-styled components with shadows and rounded corners

### State Management
- Authentication state managed via localStorage (`ticketapp_session`)
- Tickets stored in localStorage for persistence
- React state hooks for component-level state

## ✅ Validation Rules

- **Title:** Required field
- **Status:** Must be one of: `open`, `in_progress`, `closed`
- **Description:** Optional, max 500 characters
- All forms include real-time validation with inline error messages

## 🎨 Status Color Coding

- **Open** - Green (#10B981)
- **In Progress** - Amber (#F59E0B)
- **Closed** - Gray (#6B7280)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus states on all interactive elements

## 🔒 Security Features

- Protected routes require valid session token
- Automatic redirect to login for unauthorized access
- Session cleared on logout
- Form validation to prevent XSS attacks

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (Stacked layout)
- **Tablet:** 768px - 1024px (2-column grid)
- **Desktop:** > 1024px (Multi-column grid, max-width 1440px)

## 🐛 Known Issues

- Session persists only in the current browser
- No backend integration (uses localStorage)

## 📝 License

This project is for educational purposes.

---

Built with ❤️ using React by AbdulrazaqYM
