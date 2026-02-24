import React, { useState } from "react";
import "../Styles/home.css";

export default function RequirementForm() {
  const [formData, setFormData] = useState({
    role: "",
    company_name: "",
    min_experience: "",
    max_experience: "",
    skills: "",
    location: "",
    positions: "",
    candidate_type: "",
    min_salary: "",
    max_salary: "",
    source_website: "", // ⭐ NEW FIELD
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:8000/generate-and-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      alert("Requirement submitted successfully 🚀");
    } catch (err) {
      alert("Error submitting requirement");
    }
  };

  return (
    <div className="form-container">
      <h2>AI Hiring Requirement</h2>

      <form onSubmit={handleSubmit}>
        <input name="role" placeholder="Role" onChange={handleChange} />
        <input name="company_name" placeholder="Company Name" onChange={handleChange} />
        <input name="min_experience" placeholder="Min Experience" onChange={handleChange} />
        <input name="max_experience" placeholder="Max Experience" onChange={handleChange} />
        <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input name="positions" placeholder="Number of Positions" onChange={handleChange} />
        <input name="candidate_type" placeholder="Candidate Type" onChange={handleChange} />
        <input name="min_salary" placeholder="Min Salary" onChange={handleChange} />
        <input name="max_salary" placeholder="Max Salary" onChange={handleChange} />

        {/* ⭐ SOURCE WEBSITE DROPDOWN */}
        <select name="source_website" onChange={handleChange} required>
          <option value="">Select Hiring Platform</option>
          <option value="naukri">Naukri</option>
          <option value="linkedin">LinkedIn</option>
          <option value="indeed">Indeed</option>
          <option value="foundit">Foundit</option>
        </select>

        <button type="submit">Submit to AI Agent</button>
      </form>
    </div>
  );
}