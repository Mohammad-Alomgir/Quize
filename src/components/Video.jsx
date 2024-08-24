import React from "react";
import classes from '../styles/Video.module.css';
import videoImage from '../assets/images/3.jpg'
import { Link } from "react-router-dom";
const Video = () => {
  return (
    <Link to="/quize">
      <div className={classes.video}>
        <img src={videoImage} alt="video" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
