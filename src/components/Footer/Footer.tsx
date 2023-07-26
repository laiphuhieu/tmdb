import React from "react";

import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../assets/images/logo-footer.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`${styles["footer"]}`}>
      <nav>
        <div className={`${styles["join"]}`}>
          <Logo className="w-[134px] height-[90px]" />
          <Link
            to="/"
            className={`${styles["rounded"]} ${styles["logged in"]}`}
          >
            Hi laiphuhieu!
          </Link>
        </div>
        <div className="mr-[40px]">
          <h3>THE BASICS</h3>
          <ul>
            <li>
              <Link to="/about">Giới thiệu về TMDB</Link>
            </li>
            <li>
              <Link to="/about/staying-in-touch">Contact Us</Link>
            </li>
            <li>
              <Link to="/talk">Support Forums</Link>
            </li>
            <li>
              <Link to="/about">API</Link>
            </li>
            <li>
              <Link to="/status.themoviedb.org">System Status</Link>
            </li>
          </ul>
        </div>
        <div className="mr-[40px]">
          <h3>GET INVOLVED </h3>
          <ul>
            <li>
              <Link to="/bible">Contribution Bible</Link>
            </li>
            <li>
              <Link to="/movie/new">Add New Movie</Link>
            </li>
            <li>
              <Link to="/tv/new">Add New TV Show</Link>
            </li>
          </ul>
        </div>
        <div className="mr-[40px]">
          <h3>COMMUNITY</h3>
          <ul>
            <li>
              <Link to="/about">Guidelines</Link>
            </li>
            <li>
              <Link to="/discuss">Discussions</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/https://twitter.com/themoviedb">Twitter</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>LEGAL</h3>
          <ul>
            <li>
              <Link to="/about">Terms of Use</Link>
            </li>
            <li>
              <Link to="/about">API Terms of Use</Link>
            </li>
            <li>
              <Link to="/privacy-polity">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/dmca-takedown">DMCA Takedown Request</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="flex justify-center w-[100%] text-[white] opacity-10 text-[11.2px]">
        Build dd7cafe (5685)
      </section>
    </footer>
  );
};

export default Footer;
