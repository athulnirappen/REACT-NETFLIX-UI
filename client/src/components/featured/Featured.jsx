import React from "react";
import "./featured.scss";
import { MdPlayArrow } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="hostory">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="animation">Animation</option>
          </select>
        </div>
      )}
      <img
        className="img"
        src="https://i.pinimg.com/originals/27/7e/b1/277eb1d795931a400e9f31956d3d788b.jpg"
        alt=""
      />
      <div className="info">
        {/* <img
          src=""
          alt=""
        /> */}
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          eleifend semper. Morbi imperdiet consectetur volutpat. In hac
          habitasse platea dictumst. Suspendisse vestibulum odio sed risus
          scelerisque fermentum. Pellentesque leo urna, hendrerit ut libero a,
          laoreet aliquam ligula.
        </span>
        <div className="buttons">
          <button className="play">
            <MdPlayArrow />
            <span>play</span>
          </button>
          <button className="more">
            <HiOutlineInformationCircle />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
// https://i.pinimg.com/originals/27/7e/b1/277eb1d795931a400e9f31956d3d788b.jpg

// https://images.pexels.com/photos/3816395/pexels-photo-3816395.jpeg?auto=compress&cs=tinysrgb&w=600
