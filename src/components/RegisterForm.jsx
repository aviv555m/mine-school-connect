import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [form, setForm] = useState({
    fullName: "",
    minecraft: "",
    email: "",
    grade: "",
    discord: "",
    reason: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registration", JSON.stringify(form));
    console.log("Form Submitted:", form);
    navigate("/thank-you");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Register for the Minecraft Server</h1>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required /><br />
        <input name="minecraft" placeholder="Minecraft Username" onChange={handleChange} required /><br />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
        <input name="grade" placeholder="Class/Grade" onChange={handleChange} /><br />
        <input name="discord" placeholder="Discord Username" onChange={handleChange} /><br />
        <textarea name="reason" placeholder="Why do you want to join?" onChange={handleChange}></textarea><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;