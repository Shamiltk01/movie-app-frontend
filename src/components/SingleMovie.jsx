import React, { useState, useEffect } from "react";
import logo from "../images/logo2.png";
import "../styles/singlemovie.css"; // Adjust the path to your CSS file
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";

const SingleMovie = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async () => {
    console.log(sessionStorage.getItem("selectedMovieId"));
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${sessionStorage.getItem(
          "selectedMovieId"
        )}?api_key=775ffc67f20ef642f55ceb576824b014`
      );
      const data = await response.json();
      setMovieDetails(data);
      document.querySelector(".hero").style.cssText = `
      background:
      /* top, transparent black, faked with gradient */ 
      linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.6)
      ),
      /* bottom, image */
      url(https://image.tmdb.org/t/p/original${data.backdrop_path}) center;
      background-size: auto;
      `;
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };
  const fetchTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${sessionStorage.getItem(
          "selectedMovieId"
        )}?api_key=775ffc67f20ef642f55ceb576824b014&append_to_response=videos`
      );
      const data = await response.json();
      const trailer = data.videos.results.find(
        (video) => video.type === "Trailer"
      );
      if (trailer) {
        const trailerKey = trailer.key;
        const youtubeUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1`;
        setTrailerUrl(youtubeUrl);
        setIsTrailerPlaying(true);
      } else {
        // Trailer not found, fetch YouTube search results for the movie title
        const movieTitle = movieDetails.title.replaceAll(" ", "+");
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${movieTitle}`;
        window.location.href = youtubeSearchUrl;
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setTrailerUrl("");
      setIsTrailerPlaying(false);
    };

    window.addEventListener("click", handleClickOutside);

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
  const sessionId = sessionStorage.getItem("sessionId");
  useEffect(() => {
    if (sessionId) {
      setLoggedIn(true);
    }
  }, [sessionId]);


  const navigate = useNavigate();
  const getTicket = () => {
    navigate("/ticketbooking");
  };
  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const [input,setInput]=useState({
    date:"",
    time:"",
  })

  const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }

  const handleSubmit=()=>{
    axios
      .post("http://localhost:3001/booking/viewSeats", input)
      .then((response) => {
        if (response.data.status === "success") {
          sessionStorage.setItem("movieDate",input.date)
          sessionStorage.setItem("movieTime",input.time)
          getTicket();
        } else {
          alert(response.data.status);
        }
      });
  }
  return (
    <div className={`hero ${isTrailerPlaying ? "trailer-playing" : ""}`}>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        {loggedIn && sessionId ? (
          <button
            type="button"
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </button>
        ) : (
          <Link to="/signin">
            <button type="button">Login / Register</button>
          </Link>
        )}
      </div>
      <div className="content">
        {movieDetails && !isTrailerPlaying && (
          <div className="movie-details">
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movie-poster"
            />

            <div className="movie-info">
              <div
                className="dateandtime"
                style={{ paddingBottom: "40px", display: "flex" }}
              >
                <input
                  type="date"
                  name="date"
                  value={input.value}
                  id=""
                  onChange={handleChange}
                  className="form-control"
                  style={{
                    width: "140px",
                    height: "60px",
                    backgroundColor: "#f0f0f0" /* light gray */,
                    border: " 1px solid #ccc" /* gray border */,
                    borderRadius: "5px" /* rounded corners */,
                    padding: " 5px 10px" /* adjust padding as needed */,
                    marginBottom: "20px",
                  }}
                />
                <select
                  name="time"
                  value={input.time}
                  onChange={handleChange}
                  id=""
                  className="form-control"
                  style={{
                    width: "140px",
                    height: "60px",
                    marginLeft: "40px",
                    marginBottom: "20px",
                  }}
                >
                  <option value="">Select Time</option>
                  <option value="10 AM">10 AM</option>
                  <option value="1 PM">1 PM</option>
                  <option value="4 PM">4 PM</option>
                  <option value="7 PM">7 PM</option>
                </select>
              </div>

              <h1>
                {movieDetails.title} ({movieDetails.release_date.split("-")[0]})
              </h1>
              <p>
                <b>Genres</b>:{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <b>Total Time</b>: {movieDetails.runtime} minutes
              </p>
              <h5>Overview : </h5>
              <p>{renderOverview(movieDetails.overview)}</p>
            </div>
            {/* date and time selector */}

            <div className="video-player" style={{ paddingTop: "40px" }}>
              <button
                type="button"
                onClick={() => {
                  loggedIn ? handleSubmit() : navigate("/signin");
                }}
              >
                Get Tickets Now!
              </button>

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
