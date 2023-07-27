import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-8 columns-1">
        <Outlet />
      </div>
    </>
  );
}

export default App;
