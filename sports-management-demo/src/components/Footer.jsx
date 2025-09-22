import './Style/Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>SportsJun</h3>
          <p>Manage sports events effortlessly.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/create-event">Create Event</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@sportsmanage.com</p>
          <p>Phone: +91 123 456 7890</p>
          <div className="footer-social">
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SportsManage. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
