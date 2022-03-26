import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
      (
        <div className="WelcomeScreen">
          <h1>Welcome to the Meet App!</h1>
          <h3>
            Login to view upcoming events for web developers around the world!
          </h3>

          <button 
          className='login-button' 
          onClick={() => { props.getAccessToken() }} 
          rel='nofollow noopener'>
              Sign in with Google
          </button>
          </div>)
: null }

export default WelcomeScreen;