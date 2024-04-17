import React, { useEffect, useState, useRef } from "react";
import QRCode from 'qrcode.react';
import "../styles/viewmybookings.css";
import axios from "axios";
import html2canvas from "html2canvas";
import download from "downloadjs";
import { useNavigate } from "react-router-dom";

const ViewmyBookings = () => {
  const [bookingData, setBookingData] = useState(null);
  const bookingCardRef = useRef(null);
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .post("http://localhost:3001/user/viewMybookings", {
        userId: sessionStorage.getItem("sessionId"),
      })
      .then((response) => {
        const responseData = response.data.data;
        const filteredData = {
          movie:sessionStorage.getItem("movieName"),
          logname: responseData.userId.logname,
          logemail: responseData.userId.logemail,
          date: responseData.date,
          time: responseData.time,
          groundFloor: responseData.groundFloor || "No ground seats booked",
          balcony: responseData.balcony || "No balcony seats booked"
          
        };
        setBookingData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDownload = () => {
    if (!bookingCardRef.current) return;

    html2canvas(bookingCardRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        download(blob, "booking_card.jpg", "image/jpeg");
      });
    });
  };

  const handleGoBack = () => {
    navigate("/userprofile");
  };

  return (
    <div className="view-my-bookings-container">
      {/* Render the booking card with the ref for capturing */}
      <div ref={bookingCardRef} className="booking-card">
        <h2>My Booked Seats</h2>
        {bookingData ? (
          <div>
            <p><strong>Movie:</strong> {sessionStorage.getItem("movieName")}</p>
            {bookingData.date && <p><strong>Date:</strong> {bookingData.date}</p>}
            {bookingData.time && <p><strong>Time:</strong> {bookingData.time}</p>}
            <p><strong>Ground Floor Seats:</strong> {bookingData.groundFloor}</p>
            <p><strong>Balcony Seats:</strong> {bookingData.balcony}</p>
          </div>
        ) : (
          <p>No bookings found</p>
        )}
        <div className="qr-code-container">
          {bookingData && <QRCode value={JSON.stringify(bookingData)} />}
        </div>
      </div>
      {/* Position the download button at the bottom center */}
      <button className="download-button" onClick={handleDownload}>
        Download Booking Card
      </button>
      {/* Position the "Go back" button at the top left */}
      <button className="back-button" onClick={handleGoBack}>
        Go back to My Profile
      </button>
    </div>
  );
}

export default ViewmyBookings;
