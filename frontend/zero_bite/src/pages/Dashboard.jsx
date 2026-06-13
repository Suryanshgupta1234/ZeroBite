import { useNavigate } from "react-router-dom";

function Dashboard({ darkMode }) {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

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

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bg,
        padding: "40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: darkMode
            ? "#171717"
            : "#111111",

          color: "#FFFFFF",
          padding: "40px",
          borderRadius: "24px",
          marginBottom: "30px",
          border: `1px solid ${borderColor}`,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "42px",
            fontWeight: "700",
          }}
        >
          Welcome, {user?.name}
        </h1>

        <p
          style={{
            marginTop: "10px",
            color: "#A3A3A3",
            fontSize: "16px",
          }}
        >
          {user?.role?.toUpperCase()} Dashboard
        </p>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <p
            style={{
              color: secondaryText,
              marginBottom: "10px",
            }}
          >
            Total Donations
          </p>

          <h1
            style={{
              margin: 0,
              color: textColor,
              fontSize: "42px",
            }}
          >
            12
          </h1>
        </div>

        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <p
            style={{
              color: secondaryText,
              marginBottom: "10px",
            }}
          >
            Food Claimed
          </p>

          <h1
            style={{
              margin: 0,
              color: textColor,
              fontSize: "42px",
            }}
          >
            8
          </h1>
        </div>

        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <p
            style={{
              color: secondaryText,
              marginBottom: "10px",
            }}
          >
            Available Food
          </p>

          <h1
            style={{
              margin: 0,
              color: textColor,
              fontSize: "42px",
            }}
          >
            15
          </h1>
        </div>
      </div>

      {/* Quick Actions */}
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h2
          style={{
            color: textColor,
            marginBottom: "20px",
          }}
        >
          Quick Actions
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() =>
              navigate("/create-food")
            }
          >
            Create Donation
          </button>

          <button
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() =>
              navigate("/food-feed")
            }
          >
            View Donations
          </button>

          <button
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            My Claims
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div
        style={{
          marginTop: "50px",
          backgroundColor: cardBg,
          padding: "30px",
          borderRadius: "20px",
          border: `1px solid ${borderColor}`,
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: textColor,
          }}
        >
          Recent Activity
        </h2>

        <p
          style={{
            color: secondaryText,
          }}
        >
          No recent activity available.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;