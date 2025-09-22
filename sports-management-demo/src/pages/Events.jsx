import './Style/Events.css'
function Events() {
  const demoEvents = [
    { id: 1, sport: "Football", type: "League", venue: "City Stadium", date: "2025-10-05" },
    { id: 2, sport: "Cricket", type: "Tournament", venue: "National Ground", date: "2025-11-12" },
    { id: 3, sport: "Basketball", type: "Friendly Match", venue: "Sports Arena", date: "2025-09-30" },
    { id: 4, sport: "Track & Field", type: "Tournament", venue: "City Track", date: "2025-12-15" }
  ];

  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {demoEvents.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-header">
              <span className="event-sport">{event.sport}</span>
              <span className="event-type">{event.type}</span>
            </div>
            <p className="event-venue">{event.venue}</p>
            <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
            <button className="btn-event">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
