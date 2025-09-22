import { Link } from "react-router-dom";
import "./Style/Home.css";
import HeroVideo from "../assets/hero.mp4"; // Video file

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* Video Background */}
        <video className="hero-video" autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Organize <span>Sports Events</span> Effortlessly
          </h1>
          <p className="hero-subtitle">
            From leagues to tournaments, manage everything in one platform.
          </p>
          <Link to="/create-event" className="btn-cta">
            🚀 Start Creating Events
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-card">
          <h2>120+</h2>
          <p>Events Managed</p>
        </div>
        <div className="stat-card">
          <h2>500+</h2>
          <p>Teams Registered</p>
        </div>
        <div className="stat-card">
          <h2>35+</h2>
          <p>Venues Covered</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Our Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚽ Event Creation</h3>
            <p>
              Create and customize sports events with flexible options for
              leagues, tournaments, or friendlies.
            </p>
          </div>
          <div className="feature-card">
            <h3>📋 Registrations</h3>
            <p>
              Open registration windows, manage fees, and track participants in
              real-time.
            </p>
          </div>
          <div className="feature-card">
            <h3>📍 Venue Management</h3>
            <p>
              Add venues with map integration, manage availability, and avoid
              conflicts.
            </p>
          </div>
          <div className="feature-card">
            <h3>📊 Analytics</h3>
            <p>
              Get insights into teams, players, and events with easy-to-read
              dashboards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
