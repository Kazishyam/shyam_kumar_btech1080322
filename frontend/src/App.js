import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return <Dashboard />;
}

export default App;
