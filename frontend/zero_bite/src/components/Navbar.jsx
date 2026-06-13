import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      style={{
        backgroundColor: darkMode
          ? "#111111"
          : "#FFFFFF",

        borderBottom: darkMode
          ? "1px solid #2A2A2A"
          : "1px solid #E5E5E5",

        padding: "18px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          margin: 0,
          color: darkMode
            ? "#FFFFFF"
            : "#111111",

          fontWeight: "700",
          fontSize: "28px",
          letterSpacing: "-1px",
        }}
      >
        ZeroBite
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            ...linkStyle,
            color: darkMode
              ? "#FFFFFF"
              : "#111111",
          }}
        >
          Home
        </Link>

        <Link
          to="/food-feed"
          style={{
            ...linkStyle,
            color: darkMode
              ? "#FFFFFF"
              : "#111111",
          }}
        >
          Food Feed
        </Link>

        <Link
          to="/create-food"
          style={{
            ...linkStyle,
            color: darkMode
              ? "#FFFFFF"
              : "#111111",
          }}
        >
          Donate Food
        </Link>

        <Link
          to="/dashboard"
          style={{
            ...linkStyle,
            color: darkMode
              ? "#FFFFFF"
              : "#111111",
          }}
        >
          Dashboard
        </Link>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          style={{
            border: "none",
            padding: "10px 16px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",

            backgroundColor: darkMode
              ? "#FFFFFF"
              : "#111111",

            color: darkMode
              ? "#111111"
              : "#FFFFFF",
          }}
        >
          {darkMode
            ? "Light Mode"
            : "Dark Mode"}
        </button>

        <Link
          to="/login"
          style={{
            ...buttonStyle,
            backgroundColor: darkMode
              ? "#FFFFFF"
              : "#111111",

            color: darkMode
              ? "#111111"
              : "#FFFFFF",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "15px",
};

const buttonStyle = {
  textDecoration: "none",
  padding: "10px 18px",
  borderRadius: "10px",
  fontWeight: "600",
  fontSize: "14px",
};

export default Navbar;