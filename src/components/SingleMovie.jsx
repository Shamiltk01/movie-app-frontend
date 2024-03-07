import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import tw from "../images/tw.png";
import share from "../images/share.png";
import info from "../images/info.png";
import bubble from "../images/bubble.png";
import "../styles/singlemovie.css"; // Adjust the path to your CSS file

const SingleMovie = () => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false); // New state to track trailer playing
  const [movieDetails, setMovieDetails] = useState(null); // New state to hold movie details

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/932420?api_key=775ffc67f20ef642f55ceb576824b014"
      );
      const data = await response.json();
      setMovieDetails(data);
      // Set background image when movie details are fetched
      document.querySelector(".hero").style.backgroundImage = `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`;
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchTrailer = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/932420?api_key=775ffc67f20ef642f55ceb576824b014&append_to_response=videos"
      );
      const data = await response.json();
      const trailer = data.videos.results.find(
        (video) => video.type === "Trailer"
      );
      if (trailer) {
        const trailerKey = trailer.key;
        const youtubeUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1`;
        setTrailerUrl(youtubeUrl);
        setIsTrailerPlaying(true); // Update state when trailer starts playing
      } else {
        console.log("Trailer not found");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  useEffect(() => {
    // Add event listener to close the trailer when clicking anywhere on the website
    const handleClickOutside = () => {
      setTrailerUrl("");
      setIsTrailerPlaying(false); // Update state when trailer is closed
    };

    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const renderOverview = (overview) => {
    const words = overview.split(" ");
    const chunks = [];
    let currentChunk = "";
    words.forEach((word, index) => {
      currentChunk += word + " ";
      if ((index + 1) % 20 === 0) {
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }
    });
    if (currentChunk !== "") {
      chunks.push(currentChunk.trim());
    }
    return chunks.map((chunk, index) => (
      <React.Fragment key={index}>
        {chunk}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div
      className={`hero ${isTrailerPlaying ? "trailer-playing" : ""}`}
    >
      <div className="navbar">
        <img src={logo} alt="" className="logo" />
        <button type="button" to="">
          Login / Register
        </button>
      </div>
      <div className="content">
        {movieDetails && !isTrailerPlaying && ( // Check if trailer is not playing
          <div className="movie-details">
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2>
                {movieDetails.title} ({movieDetails.release_date.split("-")[0]})
              </h2>
              <p>
                <b>Genres</b>:{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")} &nbsp;&nbsp;&nbsp;&nbsp;
              <b>Total Time</b>: {movieDetails.runtime} minutes</p>
              <h5>Overview</h5>
              <p> {renderOverview(movieDetails.overview)}</p>
              <button type="button">Get Tickets Now!</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" onClick={fetchTrailer}>
                Watch Trailer &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-play-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="slide-bar">
        <img src={menu} alt="" className="menu" />
        <div className="social-links">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={tw} alt="" />
        </div>

        <div className="useful-links">
          <img src={share} alt="" />
          <img src={info} alt="" />
        </div>
      </div>

      {/* <div className="bubbles">
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
      </div> */}

      {trailerUrl && (
        <div className="trailer-container">
          <iframe
            title="movie-trailer"
            width="85%" // Increase the width
            height="550px" // Increase the height
            src={trailerUrl}
            frameBorder="0"
            allowFullScreen
            style={{ margin: "0 auto", display: "block" }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
