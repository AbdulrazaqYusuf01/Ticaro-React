import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Router from "./utils/Router";

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
