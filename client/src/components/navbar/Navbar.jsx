import "./navbar.scss";
import { FaSearch } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKjG1TLr8l9pfA0XCRJbM6el4XrvuNqjDSg&usqp=CAU"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FaSearch className="icon" />
          <span>KID</span>
          <IoMdNotifications className="icon" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6iF2p4Ub7e5R1XqUsOsP6twJ6zQ5QupkMQ&usqp=CAU"
            alt=""
          />
          <div className="profile">
            <IoMdArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
