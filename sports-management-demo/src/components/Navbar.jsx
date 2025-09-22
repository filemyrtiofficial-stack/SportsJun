import { Link } from "react-router-dom";
import { useState } from "react";
import "./Style/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🏆 Sports Manager</div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/events">Events</Link>
        <Link to="/coming-soon">More</Link>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
