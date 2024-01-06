import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faFolderOpen,
  faBriefcase,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import "../../styles/styles.scss";

const Sidebar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="fixed w-full top-0 left-0 bg-zinc-900 h-24 z-50 lg:flex lg:flex-col lg:h-full justify-between lg:w-32">
      <Link to="/">
        <img
          className="h-20 mt-4 ml-4 lg:h-39 lg:ml-2 lg:h-28"
          src={LogoSubtitle}
          alt="Victor"
        />
      </Link>
      <nav className={`nav ${showNav ? "mobile-show" : ""}`}>
        <NavLink end to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" data-text="HOME" />
        </NavLink>
        <NavLink end className="about-link" to="/sobre">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" data-text="SOBRE" />
        </NavLink>
        <NavLink end className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon
            icon={faFolderOpen}
            color="#4d4d4e"
            data-text="PORTFOLIO"
            className="portfolio-link"
          />
        </NavLink>
        <NavLink end className="folder-link" to="/curriculum">
          <FontAwesomeIcon
            icon={faBriefcase}
            color="#4d4d4e"
            data-text="CURRICULUM"
          />
        </NavLink>
        <NavLink end className="contact-link" to="/contato">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            data-text="CONTATO"
          />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/victorhumelo/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vihumelo"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(!showNav)}
        icon={faBars}
        color="#ffd700"
        style={{ fontSize: "2.7em" }}
        className="absolute top-6 right-9 block lg:hidden"
      />
    </div>
  );
};

export default Sidebar;
