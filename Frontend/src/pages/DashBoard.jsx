import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const DashBoard = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username") == null) {
      navigate("/home");
    } else {
      setUsername(localStorage.getItem("username"));
      setUserEmail(localStorage.getItem("useremail"));
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          background: "linear-gradient(to right, #8e44ad, #3498db)",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>User Dashboard</h1>
        <p style={{ textAlign: "center" }}>
          Welcome: <strong>{username}</strong> | Email: <strong>{useremail}</strong>
        </p>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button
            onClick={logout}
            style={{
              padding: "10px 20px",
              background: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
        <hr size="3" color="yellow" />

        {/* Centering the content */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "50vh",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "400px",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#8e44ad" }}>Reset Password</h3>
            <Link to="repass" style={{ textDecoration: "none", color: "#3498db" }}>
              Go to Reset Password Form
            </Link>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
