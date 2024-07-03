import { Link } from "react-router-dom";
import "./test.css";

function Alumini_Eventpage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/eventimage.jpg" alt="Header" className="header-image" />
        <h1>
          UNITE & PROSPER: ALUMNI <span className="highlight">NETWORKING</span>{" "}
          & MENTORSHIP
        </h1>
        <p>
          Explore a vibrant network of alumni connections, mentorship
          opportunities, and career pathways for ongoing professional growth and
          success.
        </p>
      </header>
      <main>
        <section className="events-section">
          <button className="events-button">Events and Reunions</button>
          <div className="events-container">
            <div className="event-card">
              <img src="/photo2.jpg" alt="Event" className="event-image" />
              <h3>Annual Alumni Reunion</h3>
              <p>Date: July 20, 2024</p>
              <p>Location: College Campus</p>
              <Link
                to="/Networking_Opportunities/RegisterPage"
                className="register-button"
              >
                Register Now
              </Link>
            </div>
            <div className="event-card">
              <img src="/photo2.jpg" alt="Event" className="event-image" />
              <h3>Annual Alumni Reunion</h3>
              <p>Date: July 20, 2024</p>
              <p>Location: College Campus</p>
              <Link
                to="/Networking_Opportunities/RegisterPage"
                className="register-button"
              >
                Register Now
              </Link>
            </div>
            <div className="event-card">
              <img src="/photo2.jpg" alt="Event" className="event-image" />
              <h3>Annual Alumni Reunion</h3>
              <p>Date: July 20, 2024</p>
              <p>Location: College Campus</p>
              <Link
                to="/Networking_Opportunities/RegisterPage"
                className="register-button"
              >
                Register Now
              </Link>
            </div>

            <div className="event-card">
              <img src="/photo2.jpg" alt="Event" className="event-image" />
              <h3>Annual Alumni Reunion</h3>
              <p>Date: July 20, 2024</p>
              <p>Location: College Campus</p>
              <Link
                to="/Networking_Opportunities/RegisterPage"
                className="register-button"
              >
                Register Now
              </Link>
            </div>
          </div>
          <button className="view-more-button p-4">View More</button>
        </section>
      </main>
    </div>
  );
}

export default Alumini_Eventpage;
