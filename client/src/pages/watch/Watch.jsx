import React from "react";
import "./watch.scss";
import { IoMdArrowRoundBack } from "react-icons/io";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <IoMdArrowRoundBack />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      />
    </div>
  );
};

export default Watch;
