import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Navbar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
          color: "white",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          🍱 ZeroBite
        </h1>

        <div
          style={{
            display: "flex",
            gap: "25px",
          }}
        >
          <button
            onClick={() => navigate("/login")}
            style={navButton}
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            style={navButton}
          >
            Register
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "15px",
          }}
        >
          Save Food.
          <br />
          Feed Lives.
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "700px",
            marginBottom: "35px",
          }}
        >
          Connect restaurants, hotels, and
          households with NGOs to reduce
          food waste and help communities.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            style={primaryButton}
            onClick={() =>
              navigate("/create-food")
            }
          >
            Donate Food
          </button>

          <button
            style={secondaryButton}
            onClick={() =>
              navigate("/food")
            }
          >
            Claim Food
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          paddingBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        <div style={statCard}>
          <h2>1200+</h2>
          <p>Food Donations</p>
        </div>

        <div style={statCard}>
          <h2>500+</h2>
          <p>NGOs Connected</p>
        </div>

        <div style={statCard}>
          <h2>25,000kg</h2>
          <p>Food Saved</p>
        </div>
      </div>
    </div>
  );
}

const navButton = {
  background: "transparent",
  border: "1px solid white",
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

const primaryButton = {
  backgroundColor: "#22C55E",
  border: "none",
  color: "white",
  padding: "15px 35px",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};

const secondaryButton = {
  backgroundColor: "white",
  border: "none",
  color: "#111827",
  padding: "15px 35px",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
};

const statCard = {
  backgroundColor: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",
  color: "white",
  padding: "20px 40px",
  borderRadius: "15px",
  textAlign: "center",
};

export default Home;