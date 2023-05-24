import React from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <section className="background">
        <div className="card-container">
          <div className="card">
            <h1>Dashboard</h1>
            <p>This is the template dashboard just for an example</p>
            <button onClick={() => navigate("/")}>Back to login</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
