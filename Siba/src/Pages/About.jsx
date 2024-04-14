import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../Components/utils";

const About = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      lastName: lastName,
      phone: phone,
      order: order,
      email: email,
      message: message,
    };

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/messages`,
        formData
      );
      console.log(res);

      setName("");
      setLastName("");
      setPhone("");
      setOrder("");
      setEmail("");
      setMessage("");
      setConfirmation("Tack för ditt meddelande! Vi återkommer så snart vi kan.");
      setError("");
    } catch (error) {
      console.error("Error sending message:", error);
      setConfirmation("");
      setError("Du måste logga in för att kunna skicka meddelande!");
    }
  };

  const handleCloseError = () => {
    setError("");
  };

  return (
    <div>
      <h1 className="form-title">Kontakta oss</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Namn:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Efternamn:
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label>
          Telefon:
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label>
          Ordernummer:
          <input
            type="text"         
            onChange={(e) => setOrder(e.target.value)}
            required
          />
        </label>

        <label>
          E-post:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Meddelande:
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button className="send-btn" type="submit">Skicka</button>
      </form>
      {confirmation && <p>{confirmation}</p>}
      {error && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseError}>&times;</span>
            <p>{error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
