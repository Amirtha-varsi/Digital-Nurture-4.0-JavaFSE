import React, { useContext } from "react";
// ✅ Correct
import { AuthContext } from "./components/AuthContext";


import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";

function AppContent() {
  const { loggedIn, login, logout } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ticket Booking App</h1>
      {loggedIn ? (
        <>
          <button onClick={logout}>Logout</button>
          <UserPage />
        </>
      ) : (
        <>
          <button onClick={login}>Login</button>
          <GuestPage />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
