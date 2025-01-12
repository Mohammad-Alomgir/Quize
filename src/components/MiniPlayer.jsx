import React from "react";
import classes from "../styles/MiniPlayer.module.css";
import image from '../assets/images/3.jpg'
const MiniPlayer = () => {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
      <span class={`material-icons-outlined ${classes.close}`}> close </span>
      <img src={image} alt="watch" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
