// SingleMovie.jsx

import React from 'react';
import logo from '../images/logo.png';
import menu from '../images/menu.png';
import fb from '../images/fb.png';
import ig from '../images/ig.png';
import tw from '../images/tw.png';
import share from '../images/share.png';
import info from '../images/info.png';
import bubble from '../images/bubble.png';
import '../styles/singlemovie.css'; // Adjust the path to your CSS file

const SingleMovie = () => {
    return (
        <div className="hero" style={{backgroundImage:`URL(https://images.hdqwalls.com/download/the-batman-2020-movie-poster-5k-gg-2560x1600.jpg)`}}>
            <div className="navbar">
                <img src={logo} alt="" className="logo" />
                <button type="button">Login / Register</button>
            </div>
            <div className="content">
                <small>Welcome to our</small>
                <h1>Sakarika Theater</h1>
                
                <button type="button">Get Tickets Now!</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button">
                    Watch Trailer &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                    </svg>

                </button>
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

            <div className="bubbles">
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />


            </div>
        </div>
    );
};

export default SingleMovie;
