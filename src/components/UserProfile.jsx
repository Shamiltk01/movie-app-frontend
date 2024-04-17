import React, { useEffect, useState } from "react";
import "../styles/userprofile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const getdata = () => {
    axios
      .post("http://localhost:3001/user/viewMybookings", {
        userId: sessionStorage.getItem("sessionId"),
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleLogout = () => {
    // Perform logout actions (e.g., clear session storage, navigate to login page)
    sessionStorage.removeItem("sessionId"); // Clear session storage
    navigate("/smovie"); // Redirect to login page after logout
  };

  const viewBookings = () => {
    navigate("/viewmytickets");
  };

  return (
    <div className="wrapper">
      <div className="profile">
        <div className="overlay">
          <div className="about">
            {data && data.userId && (
              <>
                <h4>Name: {data.userId.logname}</h4>
                <span>Email: {data.userId.logemail}</span>
              </>
            )}
          </div>
          <ul className="social-icons">
            <button className="btn-success" onClick={viewBookings}>
              My Bookings
            </button>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
