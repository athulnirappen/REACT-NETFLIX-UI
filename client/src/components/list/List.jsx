import React, { useRef, useState } from "react";
import "./list.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Listitem from "../listitem/Listitem";

const List = () => {
    const [ismoved,setIsmoved]=useState(false)
    const [slidenumber, setSlidenumber] = useState(0);

    const listRef = useRef();


    const handleclick = (direction) => {
        setIsmoved(true)
        let distance=listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slidenumber > 0) {
            setSlidenumber(slidenumber-1)
          listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slidenumber < 5) {
            setSlidenumber(slidenumber + 1);
          listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
        
        
    }




  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <MdArrowBackIosNew
          className="sliderarrow left"
          onClick={() => handleclick("left")}
          style={{ display: !ismoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <Listitem index={0} />
          <Listitem index={1} />
          <Listitem index={2} />
          <Listitem index={3} />
          <Listitem index={4} />
          <Listitem index={5} />
          <Listitem index={6} />
          <Listitem index={7} />
          <Listitem index={8} />
          <Listitem index={9} />
        </div>
        <MdArrowForwardIos
          className="sliderarrow right"
          onClick={() => handleclick("right")}
        />
      </div>
    </div>
  );
};

export default List;
