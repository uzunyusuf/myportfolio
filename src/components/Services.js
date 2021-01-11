import React, { useState } from "react";
import {
  FaGithub,
  FaCode,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaCss3,
  FaSass,
  FaAngular,
  FaVuejs,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiJquery,
  SiPostgresql,
  SiSemanticweb,
  SiElasticsearch,
  SiApachesolr,
  SiGraphql,
  SiMinetest,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { ImStack } from "react-icons/im";
import { AiFillApi } from "react-icons/ai";

const Services = () => {
  const [header] = React.useState({
    subHeading: "Skills",
    text: "My services and skills",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaCode className="commonIcons" />,
      heading: "Front-end Developer",
      description:
        "The creation of user-friendly web pages, God of screen visuals and functionally, able to creatively solve user-centered issues. ",
      text:
        "“Great web design without functionality is like a sports car with no engine.” – Paul Cookson",
      headingtwo: "Languages:",
      language: (
        <ul>
          <li>
            <SiHtml5 /> HTML
          </li>
          <li>
            <FaCss3 /> CSS
          </li>
          <li>
            <FaSass /> SASS
          </li>
        </ul>
      ),
      headingthree: "Dev Tools:",
      devtools: (
        <ul>
          <li>
            <FaBootstrap /> Bootstrap
          </li>
          <li>
            <SiSemanticweb /> Semantic UI
          </li>
          <li>
            <FaReact /> React
          </li>
          <li>
            <FaAngular /> Angular
          </li>
          <li>
            <FaVuejs /> Vue
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      icon: <FaDatabase className="commonIcons" />,
      heading: "Back-end Developer",
      description:
        "The building and maintaining of the web server, application and database, ensuring frontend operations are smooth.",
      text: "“Talk is cheap. Show me the code.” – Linus Torvalds",
      headingtwo: (
        <p>
          <br />
          Languages:
        </p>
      ),
      language: (
        <ul>
          <li>
            <SiJavascript /> Javascript
          </li>
          <li>
            <SiJavascript /> ES6
          </li>
        </ul>
      ),
      headingthree: "Dev Tools:",
      devtools: (
        <ul>
          <li>
            <FaNodeJs /> Node.js, NPM
          </li>
          <li>
            <SiMongodb /> MongoDB
          </li>
          <li>
            <SiPostgresql /> PostgreSQL
          </li>
          <li>
            <SiGraphql /> GraphQl
          </li>
          <li>
            <AiFillApi /> RestAPI
          </li>
          <li>
            <SiJquery /> Ajax, Jquery
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      icon: <ImStack className="commonIcons" />,
      heading: "Full-Stack Developer",
      description:
        "Mostly backend work, but are also adept at frontend languages to manipulate how the site looks on the user's end.",
      text: "“If you think math is hard, try web design.” – Trish Parr",
      headingtwo: (
        <p>
          <br />
          Languages:
        </p>
      ),
      language: <p>All of the languages for both fronted and backend.</p>,
      headingthree: "Dev Tools:",
      devtools: (
        <ul>
          <li>
            <SiElasticsearch /> Elasticsearch
          </li>
          <li>
            <SiApachesolr /> Apache Solr
          </li>
          <li>
            <FaDocker /> Docker
          </li>
          <li>
            <FaGithub /> Git, Github
          </li>
          <li>
            <DiScrum /> Scrum, Agile, Kanban
          </li>
          <li>
            <SiMinetest /> TDD
          </li>
        </ul>
      ),
    },
  ]);

  return (
    <div id="services" className="services">
      <div className="container ">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <hr />
                  <br />
                  <div className="services__box-p">{info.description}</div>
                  <br />
                  <div className="services__box-p">{info.text}</div>

                  <div className="services__box-header">{info.headingtwo}</div>
                  <div className="services__box-p">{info.language}</div>
                  <div className="services__box-header">
                    {info.headingthree}
                  </div>
                  <div className="services__box-p">{info.devtools}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
