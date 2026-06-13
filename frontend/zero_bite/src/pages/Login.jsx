import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "/users/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
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
        Reduce food waste by connecting food
        donors with NGOs and communities that
        need support.
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
          width: "420px",
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
          Welcome Back
        </h2>

        <p
          style={{
            color: "#666666",
            marginBottom: "30px",
          }}
        >
          Sign in to continue
        </p>

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
          Sign In
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

export default Login;