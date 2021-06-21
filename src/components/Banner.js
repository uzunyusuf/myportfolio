import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title: "I am Yusuf Uzun",
    text:
      " i am Yusuf, professional web developer with +1 years experience in this field",
  });
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <a href="https://github.com/uzunyusuf" target="_blank"><FaGithub/></a>
                  </li>
                  <li>
                   <a href="www.linkedin.com/in/uzunyusuf" target="_blank"><FaLinkedinIn/></a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="#portfolio" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
