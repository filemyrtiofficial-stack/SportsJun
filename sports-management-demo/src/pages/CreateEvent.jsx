import { useState } from "react";
import "./Style/CreateEvent.css";

function CreateEvent() {
  const [formData, setFormData] = useState({
    sport: "",
    type: "",
    registrationStart: "",
    registrationEnd: "",
    fee: "",
    venue: "",
    teams: "",
    ageGroup: ""
  });

  const [step, setStep] = useState(0); // 0,1,2

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event Created! (Demo only)");
  };

  return (
    <section className="form-page">
      <h2>Create a Sports Event</h2>

      {/* Step Indicators */}
      <div className="step-indicator">
        <div className={`step ${step >= 0 ? "active" : ""}`}>1</div>
        <div className={`step ${step >= 1 ? "active" : ""}`}>2</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>3</div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Steps Container */}
        <div className="steps-container" style={{ transform: `translateX(-${step * 100}%)` }}>
          {/* Step 1 */}
          <div className="form-step">
            <label>Sport Type:</label>
            <select name="sport" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Football</option>
              <option>Cricket</option>
              <option>Basketball</option>
              <option>Track & Field</option>
            </select>

            <label>Event Type:</label>
            <select name="type" onChange={handleChange} required>
              <option value="">Select</option>
              <option>League</option>
              <option>Tournament</option>
              <option>Friendly Match</option>
            </select>
          </div>

          {/* Step 2 */}
          <div className="form-step">
            <label>Registration Start:</label>
            <input type="date" name="registrationStart" onChange={handleChange} />

            <label>Registration End:</label>
            <input type="date" name="registrationEnd" onChange={handleChange} />

            <label>Fees (₹):</label>
            <input type="number" name="fee" onChange={handleChange} />
          </div>

          {/* Step 3 */}
          <div className="form-step">
            <label>Venue:</label>
            <input type="text" name="venue" onChange={handleChange} />

            <label>Number of Teams:</label>
            <input type="number" name="teams" onChange={handleChange} />

            <label>Age Group:</label>
            <input type="text" name="ageGroup" placeholder="e.g. U-16, Open" onChange={handleChange} />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="form-navigation">
          {step > 0 && <button type="button" className="btn" onClick={prevStep}>Previous</button>}
          {step < 2 && <button type="button" className="btn" onClick={nextStep}>Next</button>}
          {step === 2 && <button type="submit" className="btn submit-btn">Create Event</button>}
        </div>
      </form>
    </section>
  );
}

export default CreateEvent;
