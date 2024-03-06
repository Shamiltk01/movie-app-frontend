import React, { useEffect, useState } from "react";
import axios from "axios";

const Card2 = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieNames = ["Bramayugam", "Premalu", "Manjummel Boys"]; // Names of the movies you want to fetch
        const movies = [];

        for (const name of movieNames) {
          const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie",
            {
              params: {
                api_key: "775ffc67f20ef642f55ceb576824b014",
                language: "en-US",
                query: name,
              },
            }
          );
          if (response.data.results.length > 0) {
            movies.push(response.data.results[0]); // Add movie data to the array if found
          }
        }

        setMoviesData(movies); // Set the movie data array
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);
  const fetchTrailer = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
          params: {
            api_key: "775ffc67f20ef642f55ceb576824b014",
            language: "en-US",
          },
        }
      );
      if (response.data.results.length > 0) {
        const trailerKey = response.data.results[0].key;
        window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
      } else {
        console.log("No trailers found for this movie.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };
  return (
    <div>
      <style>{`
        .card1-group {
          display: flex;
          gap: 20px; /* Adjust the gap size as needed */
          justify-content: center;
          position: relative; /* Position the card1 group relative to its container */
        }
        body {
          background-color: black; /* Set the background color to black */
        }

        .card1{
          position: relative; /* Ensure proper stacking */
          border-radius: 15px; /* Rounded corners */
          overflow: hidden; /* Ensures rounded corners apply */
          box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5); /* Optional: Add shadow */
          flex: 1; /* Equal width for each card1 */
          max-width: 280px; /* Set max-width to prevent card1s from stretching too much */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
          background-color: black;
          display: flex; /* Use flexbox for positioning */
          flex-direction: column; /* Align children vertically */
          border: 2px solid rgba(255, 255, 255, 0.1); /* Add white border with reduced opacity */
          margin-bottom: 20px; /* Add margin to create space between card1s */
        }

        .card1:first-child,
        .card1:nth-child(2) {
          border-right: none; /* Remove right border for the first and second card1 */
        }

        .card1:hover {
          transform: scale(1.05); /* Scale the card1 on hover */
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
        }

        .card1-body {
          padding: 1.5rem;
          flex: 1; /* Fill remaining space */
          display: flex; /* Use flexbox for positioning */
          flex-direction: column; /* Align children vertically */
          justify-content: space-between; /* Space evenly between children */
          position: relative; /* Position the card1 body relative to its container */
        }

        .card1 img {
          width: 100%; /* Make the image fill its container */
          height: 350px; /* Set the desired height of the image */
          object-fit: cover; /* Ensure the image covers the entire space */
          border-top-left-radius: 15px; /* Match the top-left border radius */
          border-top-right-radius: 15px; /* Match the top-right border radius */
        }

        .card1-text-secondary {
          color: #6c757d; /* Adjust text color */
        }

        .btn-book-now {
          background-color: red;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          align-self: center; /* Center horizontally */
          z-index: 2; /* Ensure the button is above other elements */
          position: relative; /* Ensure proper stacking */
        }

        .btn-book-now:hover {
          background-color: #0056b3;
        }

        /* Layer styles */
        .card1::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
          border-radius: 15px; /* Ensure rounded corners */
          transition: opacity 0.3s ease;
        }

        .card1:hover::after {
          opacity: 0; /* Hide the layer on hover */
        }

        .layer-text {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 5px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 5px;
          font-size: 12px;
          font-weight: bold;
          z-index: 2; /* Ensure the layer text is above the blackish layer */
        }

        /* Remove blackish shade from the second card1 */
        .card1:nth-child(2)::after {
          opacity: 0; /* Hide the blackish layer for the second card1 */
        }

        /* card1 title and text color */
        .card1-title,
        .card1-text {
          color: white !important; /* Set text color to white */
        }
      `}</style>

      <div className="card1-group">
        {moviesData.map((movie, index) => (
          <div className="card1" key={movie.id}>
            <div className="layer-text">
              {index === 0
                ? "Previous Movie"
                : index === 1
                ? "Now Playing"
                : "Upcoming Movie"}
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="card1-img-top"
              alt={movie.title}
            />
            <div className="card1-body">
              <h5 className="card1-title">{movie.title}</h5>
              <p className="card1-text">Release Date: {movie.release_date}</p>
              <p className="card1-text">Vote Average: {movie.vote_average}</p>

              {index === 1 && (
                <button className="btn-book-now">Book Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
