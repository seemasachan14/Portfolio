import React from "react";
import "../CSS/Homepage.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Home from "../Resources/Homepage/Sidebar/Home.png";
import Education from "../Resources/Homepage/Sidebar/Education.png";
import Work from "../Resources/Homepage/Sidebar/Work.png";
import Contact from "../Resources/Homepage/Sidebar/Contact.png";
import Project from "../Resources/Homepage/Sidebar/Project.png";
import Resume from "../Resources/Homepage/Sidebar/ResumeLogo.png";


export default function HomepageSidebar() {
  
  // this data is for sidebar 
  const sideBarData = [
    {
      title: "Home",
      image: Home,
      positionY: 0,
    },
    {
      title: "Education",
      image: Education,
      positionY: 690,
    },
    {
      title: "Work",
      image: Work,
      positionY: 1520,
    },
    {
      title: "Project",
      image: Project,
      positionY: 1910,
    },
    {
      title: "Contact",
      image: Contact,
      positionY: 2700,
    },
  ];
  
  // this data is for bottombar
  const bottomBarData = [
    {
      title: "Home",
      image: Home,
      positionY: 0,
    },
    {
      title: "Education",
      image: Education,
      positionY: 500,
    },
    {
      title: "Work",
      image: Work,
      positionY: 2560,
    },
    {
      title: "Project",
      image: Project,
      positionY: 3120,
    },
    {
      title: "Contact",
      image: Contact,
      positionY: 4000,
    },
  ];

  // to handle the sidebar click

  const sideBarClick = (y) => {
    window.scroll(0, y);
  };

  const renderTooltip = (title, props) => (
    <Tooltip id="button-tooltip" {...props}>
      {title}
    </Tooltip>
  );

  return (
    <>
      {/* // sidebar */}
      <div className="sidebar text-center">
        <div>
          {sideBarData.map((element) => {
            return (
              <span>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip(element.title)}
                >
                  {/* style = {{borderBottom:"0.2vw solid black"}} */}

                  <img
                    src={element.image}
                    alt="."
                    onClick={() => {
                      sideBarClick(element.positionY);
                    }}
                  />
                </OverlayTrigger>
              </span>
            );
          })}
        </div>

        <span>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip("My Resume")}
          >
            <a
              href="https://drive.google.com/file/d/1lF3aaysPM1QK8cXcKvJkMrp7l_QqKdWi/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img variant="success" src={Resume} alt=".." />
            </a>
          </OverlayTrigger>
        </span>
      </div>

      {/* bottom bar  */}

      <div className="bottomBar fixed-bottom">
        {bottomBarData.map((element) => {
          return (
            <div className="text-center">
            <img
              src={element.image}
              alt="."
              onClick={() => {
                sideBarClick(element.positionY);
              }}
            />
            <p>{element.title}</p>
            </div>
          );
        })}

          <div className="text-center">
            <a
              href="https://drive.google.com/file/d/1lF3aaysPM1QK8cXcKvJkMrp7l_QqKdWi/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img variant="success" src={Resume} alt=".." />
            </a>
            <p>Resume</p>
            </div>
            
      </div>
    </>
  );
}
