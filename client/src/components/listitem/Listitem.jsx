import React, { useState } from "react";
import "./listitem.scss";
import { MdPlayArrow } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { BiLike, BiDislike } from "react-icons/bi";
const Listitem = ({index}) => {


  const [ishovered, setIshovered] = useState(false)
  let trailer =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";





  return (
    <div
      className="listitem"
      style={{ left: ishovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      <img
        src="https://c4.wallpaperflare.com/wallpaper/841/564/4/daenerys-targaryen-emilia-clarke-game-of-thrones-women-fantasy-girl-hd-wallpaper-preview.jpg
"
        alt=""
      />
      {ishovered && (
        <>
          <video src={trailer} autoPlay={true} loop />

          <div className="iteminfo">
            <div className="icons">
              <MdPlayArrow className="icon" />
              <IoAddSharp className="icon" />
              <BiLike className="icon" />
              <BiDislike className="icon" />
            </div>
            <div className="iteminfotop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Nulla eget erat quis mi posuere condimentum. In lacinia sapien
              vitae eros rhoncus commodo. Vestibulum condimentum vitae dui a
              ornare
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Listitem;
