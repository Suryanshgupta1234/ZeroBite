import { useState } from "react";
import API from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await API.post(
        "/users/register",
        formData
      );

      alert(response.data.message);
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#F8F8F8",
      display: "flex",
    }}
  >
    {/* Left Side */}
    <div
      style={{
        flex: 1,
        backgroundColor: "#111111",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
          fontWeight: "700",
          lineHeight: "1.1",
        }}
      >
        ZeroBite
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#BDBDBD",
          maxWidth: "500px",
          lineHeight: "1.6",
        }}
      >
        Join the network of food donors and NGOs
        working together to reduce food waste and
        create meaningful impact.
      </p>
    </div>

    {/* Right Side */}
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "24px",
          border: "1px solid #E5E5E5",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "10px",
            color: "#111111",
          }}
        >
          Create Account
        </h2>

        <p
          style={{
            color: "#666666",
            marginBottom: "30px",
          }}
        >
          Get started with ZeroBite
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="role"
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="donor">
            Donor
          </option>

          <option value="ngo">
            NGO
          </option>
        </select>

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#111111",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "10px",
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  </div>
);
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "16px",
  borderRadius: "12px",
  border: "1px solid #E5E5E5",
  fontSize: "15px",
  boxSizing: "border-box",
  outline: "none",
};

export default Register;