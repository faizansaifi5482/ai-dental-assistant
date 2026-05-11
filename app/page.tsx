"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import VoiceChat from "./components/VoiceChat";
import VoiceBooking from "./components/VoiceBooking";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  const [form, setForm,] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    problem: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();   

  const res = await fetch("/api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.success) {
    alert("Appointment saved!");
  }
};
  return ( 
    <>
      <>
  <Navbar />
</>
      {/* HERO SECTION */}
     <section id="home" className="hero">

  <div className="hero-overlay"></div>

  <div className="hero-content">
    <div className="hero-text">

      <span className="hero-badge">
  ✨ AI Powered Dental Care
</span>

<h1>Your Smart Dental Assistant</h1>

      <p>
        Chat with our AI dental assistant for instant advice, book smart appointments,
        and get personalized care recommendations. Available 24/7, no waiting required.
      </p>

      <div className="hero-buttons">
        
        <button className="cta secondary"
        onClick={() => setChatOpen(true)}
>
          Try Voice Chat
        </button>
        
        <a href="#book" className="cta">
          Book Appointment
        </a>

      </div>
    </div>
  </div>
</section>

      {/* HOW IT WORKS SECTION */}
      <section id="how" className="how-section">
        <div className="how-container">
          <span className="how-badge">Simple Process</span>

          <h2 className="how-title">
            Three steps to better dental health
          </h2>

          <p className="how-subtitle">
            Our streamlined process makes dental care accessible, convenient,
            and stress-free for everyone.
          </p>

          <div className="how-cards">
            <div className="how-card">
              <div className="step-number">1</div>
              <h3>Ask Questions</h3>
              <p>
                Chat with our AI assistant about any dental concerns. Get
                instant answers about symptoms, treatments, and oral health tips.
              </p>
              <div className="card-tags">
                <span>24/7 Available</span>
                <span>Instant Response</span>
              </div>
            </div>

            <div className="how-card">
              <div className="step-number">2</div>
              <h3>Get Expert Advice</h3>
              <p>
                Receive personalized recommendations based on thousands of
                dental cases. Our AI provides professional-grade insights.
              </p>
              <div className="card-tags">
                <span>AI-Powered</span>
                <span>Personalized</span>
              </div>
            </div>

            <div className="how-card">
              <div className="step-number">3</div>
              <h3>Book & Get Care</h3>
              <p>
                Schedule with verified dentists and receive comprehensive
                follow-up care. Track your progress seamlessly.
              </p>
              <div className="card-tags">
                <span>Verified Doctors</span>
                <span>Follow-up Care</span>
              </div>
            </div>
          </div>

          <a href="#home" className="how-cta">
            Get started now →
          </a>
        </div>
      </section>

      {/* ASK ABOUT ANYTHING SECTION */}
      <section className="ask-section">
        <div className="ask-container">

          <div className="ask-right">
            <img
              src="/images/ai.png"
              alt="AI Dental Assistant"
              className="ask-image"
            />
          </div>

          <div className="ask-left">
            <span className="ask-badge">AI-Powered Conversations</span>

            <h2 className="ask-title">
              Ask about anything dental
            </h2>

            <p className="ask-subtitle">
              From simple questions to complex concerns, our AI delivers
              expert-level guidance trained on thousands of real dental cases.
            </p>

            <h4 className="ask-heading">
              Common questions our AI answers:
            </h4>

            <div className="ask-card">
              <h3>“My tooth hurts when I bite down”</h3>
              <p>
                Get immediate advice on pain management, possible causes, and
                when to see a dentist urgently.
              </p>
              <div className="ask-tags">
                <span>Instant Response</span>
                <span>Pain Relief</span>
              </div>
            </div>

            <div className="ask-card">
              <h3>“How much does teeth whitening cost?”</h3>
              <p>
                Compare treatment options, pricing ranges, and find the best
                whitening solution for your budget.
              </p>
              <div className="ask-tags">
                <span>Cost Analysis</span>
                <span>Treatment Options</span>
              </div>
            </div>

            <div className="ask-card">
              <h3>“When should I replace my filling?”</h3>
              <p>
                Learn about filling lifespan, warning signs of wear, and
                replacement timing guidance.
              </p>
              <div className="ask-tags">
                <span>Preventive Care</span>
                <span>Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ABOUT SECTION */}
<section id="about" className="about-section">

  <div className="about-container">

    {/* LEFT IMAGE */}
    <div className="about-image">
      <img 
        src="/images/about.png"
        alt="DentAssist AI"
      />
    </div>


    {/* RIGHT CONTENT */}
    <div className="about-content">

      <span className="about-badge">About DentAssist</span>

      <h2>
        Your AI companion for smarter dental care
      </h2>

      <p className="about-description">
        DentAssist is an AI-powered dental assistant designed to make oral
        healthcare easier, faster, and more accessible for everyone.
        Ask dental questions, receive instant guidance, and book appointments
        with trusted professionals — all in one place.
      </p>


      {/* FEATURES */}
      <div className="about-features">

        <div className="feature">
          ✔ AI-powered dental guidance
        </div>

        <div className="feature">
          ✔ Instant voice & chat assistance
        </div>

        <div className="feature">
          ✔ Smart appointment booking
        </div>

        <div className="feature">
          ✔ Personalized dental insights
        </div>

      </div>

      <a href="#home" className="about-btn">
        Explore Voice Assistant →
      </a>

    </div>

  </div>

</section>


      {/* BOOK SECTION */}
      <section id="book" className="book-section">
        <div className="book-card">
          <h2>Book Dental Appointment</h2>
          <div className="voice-book-box">

<h3>Book with Voice Assistant</h3>
<VoiceBooking setForm={setForm} />
<p>Or fill the form below</p>

</div>

<form className="book-form" onSubmit={handleSubmit}>

  <input
    type="text"
    name="name"
    placeholder="Full Name"
    value={form.name}
    onChange={handleChange}
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={form.email}
    onChange={handleChange}
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    value={form.phone}
    onChange={handleChange}
  />

  <input
    type="date"
    name="date"
    value={form.date}
    onChange={handleChange}
  />

  <input
    type="time"
    name="time"
    value={form.time}
    onChange={handleChange}
  />

  <textarea
    name="problem"
    placeholder="Describe your dental problem"
    value={form.problem}
    onChange={handleChange}
  ></textarea>

  <button type="submit">
    Confirm Appointment
  </button>

</form>
        </div>
      </section>


      {/* VOICE CHAT POPUP */}
      <VoiceChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />
    </>
  );
}

