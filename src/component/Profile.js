import React from "react";
import "../component/Profile.scss";
import Navbar from "./Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </div>
      <div className="card__collection clear-fix">
        <div className="cards cards--two">
          {/* <img
            src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80"
            className="img-responsive"
            alt="Cards Image"
          /> */}
          <span className="cards--two__rect"></span>
          <span className="cards--two__tri"></span>
          <p>Lucy Grace</p>
          <ul className="cards__list">
            <li>
              <i class="bi bi-instagram"></i>
            </li>
            <li>
              <i class="bi bi-twitter-x"></i>
            </li>
            <li>
              <i class="bi bi-facebook"></i>
            </li>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default Profile;
