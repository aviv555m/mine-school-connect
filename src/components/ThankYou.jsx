import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Thank you for registering!</h2>
      <p>Redirecting you to the home page...</p>
    </div>
  );
}

export default ThankYou;