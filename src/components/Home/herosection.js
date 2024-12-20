import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import postmark from 'postmark';
import {ServerClient} from 'postmark';
import "./herosection.css";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    year: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Postmark client setup
    const client = new ServerClient('7ffd85f0-695c-492b-b288-1079402a1568'); // Replace with your Postmark API key

    // Email data
    const emailData = {
      from: 'your-email@example.com',  // Sender's email address (must be verified in Postmark)
      to: 'recipient-email@example.com', // Recipient's email address
      subject: 'Help Request from ' + formData.name,
      htmlBody: `
        <h1>Help Request</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>ID:</strong> ${formData.id}</p>
        <p><strong>Year:</strong> ${formData.year}</p>
        <p><strong>Title:</strong> ${formData.title}</p>
        <p><strong>Description:</strong> ${formData.description}</p>
      `,
      textBody: `
        Help Request
        Name: ${formData.name}
        ID: ${formData.id}
        Year: ${formData.year}
        Title: ${formData.title}
        Description: ${formData.description}
      `,
    };

    // Send email via Postmark
    client.sendEmail(emailData)
      .then(() => {
        alert("Your request has been sent successfully!");
        setFormData({ name: "", id: "", year: "", title: "", description: "" });
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send your request. Please try again.");
      });
  };

  return (
    <div>
      <section className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">
            Welcome to <span className="span">HHO Family</span>
          </h1>
          <p className="banner-subtitle text-center">Help For The Needy</p>
          <div>
            <button
              className="btn about-button mt-md-5"
              onClick={() => setShowModal(true)}
            >
              Get Help
            </button>
            <button
              className="btn about-button mt-md-5"
              style={{ marginLeft: "20px" }}
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

      <div
        className={`container-fluid p-3 ${isVisible ? "animate" : ""}`}
        style={{ backgroundColor: "white" }}
        ref={sectionRef}
      >
        <div className="row" style={{ backgroundColor: "whitesmoke" }}>
          <div className="col-12">
            <h1 className="about-head text-center mt-5 banner-title">
              About <span className="span">HHO</span>
            </h1>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png"
              alt="pic"
              className="w-100"
            />
          </div>
          <div className="col-12 col-md-6">
            <p className="about-head-text text-center mt-md-5">
              HELPING HANDS ORGANISATION
            </p>
            <p className="about-text">
              At Helping Hands Organization, we believe in the power of community and
              compassion. Our mission is to uplift lives through meaningful service,
              empowering individuals to make a positive impact in their communities.
              Whether it's providing support during emergencies, organizing fundraising
              campaigns, or offering leadership and skill-building opportunities, HHO
              stands as a beacon of hope and generosity. Together, we foster a spirit
              of teamwork, empathy, and service, transforming lives and shaping a
              brighter future for all. Join us in making a difference—because with
              Helping Hands, every hand matters.
            </p>
            <div className="text-center">
              <Link to="/about">
                <button className="btn about-button mt-md-5">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Get Help</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ID:</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Year:</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="E1">E1</option>
                  <option value="E2">E2</option>
                  <option value="E3">E3</option>
                  <option value="E4">E4</option>
                </select>
              </div>
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn about-button">Submit</button>
              <button
                type="button"
                className="btn about-button"
                onClick={() => setShowModal(false)}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
