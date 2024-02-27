import { Routes, Route, Navigate } from "react-router-dom";

import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
