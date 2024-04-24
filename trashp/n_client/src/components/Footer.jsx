import { Fragment } from "react";
import "./footer.css";

function Footer() {
  return (
    <Fragment>
      <div className="ft">
        <div className="ft-top-container">
          <h1>Entertainment Legacy In Technology and Experience</h1>
        </div>
        <div className="ft-bottom-container">
          <div className="bottom-left">
            <strong>&copy; 2024 ELITE GAMES LLC</strong>
            <span>play@elitegames.com</span>
          </div>
          <div className="none"></div>
          <div className="bottom-right">
            <ul>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
