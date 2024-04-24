import { Fragment } from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./nl.css";

function NewsLater() {
  return (
    <Fragment>
      <div className="news-panel">
        <div className="panel-image">
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/upcoming-xbox-games.jpg"
            width={900}
            height={350}
          />
        </div>
        <form className="sd-el">
          <h1>GET NEWS & UPDATES</h1>
          <p>
            Champions at the ready! Sign up for the latest product information,
            flash sale remainders, and upcoming event announcements.
          </p>
          <div className="snd">
            <input
              type="email"
              placeholder="Enter your email"
              className="email"
            />
            <button type="submit">
              <MdEmail className="ic-email" />
              <p>SIGN UP</p>
            </button>
          </div>
          <div className="terms">
            <input type="checkbox" className="box" />
            <p>
              YES! Saturn may send me promotional emails and offers about
              Saturn&apos;s events, games, and services. By clicking
              &quot;SEND&quot; you agree to abide by our{" "}
              <Link className="a" to="/">Terms and Conditions, Code of Conduct</Link>, and our{" "}
              <Link className="a" to="/">Privacy Policy.</Link>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default NewsLater;
