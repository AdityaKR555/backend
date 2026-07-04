import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/CreateUser";
import ViewUsers from "./pages/ViewUsers";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<ViewUsers />} />
      </Routes>
    </>
  );
}

export default App;