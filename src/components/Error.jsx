import React from "react";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Oops! Something went wrong
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          We couldn't find the page you're looking for.
        </p>
        <img
          style={{
            maxWidth: "600px",
            height: "300px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
          src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1720656000&v=beta&t=ksg9XDDM3Hpxu0WPcmlCibp8IXJ8HGdSimGTJAd2BaU"
          alt="Error"
        />
      </div>
    </div>
  );
};

export default Error;
