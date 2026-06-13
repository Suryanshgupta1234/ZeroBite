import { useEffect, useState } from "react";
import API from "../services/api";
<button
  onClick={() => {
    console.log(
      "Current User:",
      JSON.parse(
        localStorage.getItem("user")
      )
    );

    console.log(
      "Token:",
      localStorage.getItem("token")
    );
  }}
>
  Debug User
</button>
function FoodFeed({ darkMode }) {
  const [foods, setFoods] = useState([]);

  const bg = darkMode
    ? "#0F0F0F"
    : "#F8F8F8";

  const cardBg = darkMode
    ? "#171717"
    : "#FFFFFF";

  const textColor = darkMode
    ? "#FFFFFF"
    : "#111111";

  const secondaryText = darkMode
    ? "#A3A3A3"
    : "#666666";

  const borderColor = darkMode
    ? "#2A2A2A"
    : "#E5E5E5";

  const buttonBg = darkMode
    ? "#FFFFFF"
    : "#111111";

  const buttonText = darkMode
    ? "#111111"
    : "#FFFFFF";

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await API.get("/food");
      setFoods(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClaim = async (foodId) => {
  try {
    const token = localStorage.getItem("token");

    console.log("========== CLAIM DEBUG ==========");
    console.log("Food ID:", foodId);
    console.log("Token:", token);

    const response = await API.post(
      "/claims",
      { foodId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Claim Success:", response.data);

    alert("Food Claimed Successfully");

    fetchFoods();
  } catch (error) {
    console.log("========== CLAIM ERROR ==========");
    console.log(error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);

      alert(
        error.response.data.message ||
        "Failed to Claim Food"
      );
    } else {
      alert("Server Error");
    }
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bg,
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "700",
          color: textColor,
          marginBottom: "10px",
        }}
      >
        Available Donations
      </h1>

      <p
        style={{
          color: secondaryText,
          marginBottom: "40px",
        }}
      >
        Browse food donations available near you.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {foods.map((food) => (
          <div
            key={food._id}
            style={{
              backgroundColor: cardBg,
              borderRadius: "20px",
              overflow: "hidden",
              border: `1px solid ${borderColor}`,
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            {food.foodImage ? (
              <img
                src={food.foodImage}
                alt={food.foodName}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  height: "220px",
                  backgroundColor:
                    darkMode
                      ? "#0F0F0F"
                      : "#E5E5E5",
                }}
              />
            )}

            <div
              style={{
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: textColor,
                  }}
                >
                  {food.foodName}
                </h2>

                <span
                  style={{
                    backgroundColor:
                      food.status ===
                      "available"
                        ? buttonBg
                        : "#555555",

                    color:
                      food.status ===
                      "available"
                        ? buttonText
                        : "#FFFFFF",

                    padding:
                      "6px 12px",

                    borderRadius:
                      "20px",

                    fontSize: "12px",

                    fontWeight:
                      "600",
                  }}
                >
                  {food.status}
                </span>
              </div>

              <p
                style={{
                  color:
                    secondaryText,
                  marginTop: "15px",
                }}
              >
                Quantity:{" "}
                {food.quantity}
              </p>

              <p
                style={{
                  color:
                    secondaryText,
                }}
              >
                Location:{" "}
                {
                  food.pickupAddress
                }
              </p>

              <p
                style={{
                  color:
                    secondaryText,
                }}
              >
                Donor:{" "}
                {
                  food.donor?.name
                }
              </p>

              <button
                onClick={() =>
                  handleClaim(
                    food._id
                  )
                }
                disabled={
                  food.status !==
                  "available"
                }
                style={{
                  width: "100%",
                  marginTop: "15px",
                  padding: "14px",
                  borderRadius:
                    "12px",
                  border: "none",

                  cursor:
                    food.status ===
                    "available"
                      ? "pointer"
                      : "not-allowed",

                  backgroundColor:
                    food.status ===
                    "available"
                      ? buttonBg
                      : "#444444",

                  color:
                    food.status ===
                    "available"
                      ? buttonText
                      : "#CCCCCC",

                  fontWeight:
                    "600",
                }}
              >
                {food.status ===
                "available"
                  ? "Claim Donation"
                  : "Already Claimed"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodFeed;