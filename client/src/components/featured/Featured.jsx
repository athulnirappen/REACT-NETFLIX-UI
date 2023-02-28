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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6iF2p4Ub7e5R1XqUsOsP6twJ6zQ5QupkMQ&usqp=CAU"
        alt=""
      />
      <div className="info">
        <img
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qYkEg4ZTjd0wwg0UPqZ2Q96uLgaId6d6xdSCDN64leAKSoZcQZxDlZNB2k3Pa122V6g&usqp=CAU"
          alt=""
        />
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
