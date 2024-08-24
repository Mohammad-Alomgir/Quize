import React from "react";
import Answers from "../components/Answers";
import Proggesbar from "../components/Proggesbar";
import MiniPlayer from "../components/MiniPlayer";
const Quize = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <Proggesbar />
      <MiniPlayer />
    </>
  );
};

export default Quize;
