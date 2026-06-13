import { useState } from "react";
import API from "../services/api";

function CreateFood({ darkMode }) {
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    expiryTime: "",
    pickupAddress: "",
    foodImage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log("Sending Data:", formData);

      const token = localStorage.getItem("token");

      const response = await API.post(
        "/food",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response.data);

      alert("Food Donation Created Successfully");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to Create Donation"
      );
    }
  };

  const bg = darkMode
    ? "#0F0F0F"
    : "#F8F8F8";

  const cardBg = darkMode
    ? "#171717"
    : "#FFFFFF";

  const textColor = darkMode
    ? "#FFFFFF"
    : "#111111";

  const borderColor = darkMode
    ? "#2A2A2A"
    : "#E5E5E5";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "650px",
          backgroundColor: cardBg,
          padding: "40px",
          borderRadius: "24px",
          border: `1px solid ${borderColor}`,
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            marginTop: 0,
            marginBottom: "10px",
            color: textColor,
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          Create Donation
        </h1>

        <p
          style={{
            color: "#888",
            marginBottom: "30px",
          }}
        >
          Share surplus food with NGOs and communities.
        </p>

        <input
          name="foodName"
          placeholder="Food Name"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="datetime-local"
          name="expiryTime"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="pickupAddress"
          placeholder="Pickup Address"
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="foodImage"
          placeholder="Food Image URL"
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: darkMode
              ? "#FFFFFF"
              : "#111111",
            color: darkMode
              ? "#111111"
              : "#FFFFFF",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "10px",
          }}
        >
          Create Donation
        </button>
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

export default CreateFood;