import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Who am I?",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Yusuf Uzun" },
    { id: 2, title: "Email:", text: "yusufuzn19@gmail.com" },
    { id: 3, title: "Github:", text: <a href='https://github.com/uzunyusuf' target="_blank">/uzunyusuf</a> },
    { id: 4, title: "Linkedin:", text: <a href='https://www.linkedin.com/in/uzunyusuf/' target="_blank">/uzunyusuf</a> },
  ]);

  return (
    <div id='about' className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-650 alignCenter">
          <div className="col-6 left">
            <div className="about__img">
              <img src="https://i.ibb.co/Ns3NWZj/1605524339435.jpg" alt="" />
            </div>
          </div>
          <div className="col-6 right">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p">
                I am a full stack developer, lived in Istanbul, Turkey. I am hard working and passionate towards my work.
                My favorite thing is to improve myself everyday.
              </div>
              <div className="about__info-p2">
                I like to read history, economy and novel books.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p> {info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
