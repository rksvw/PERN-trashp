import { Link } from "react-router-dom";
import "./header.css";
import { RiAccountCircleFill} from "react-icons/ri"

function Header() {
  return (
    <>
      <div className="hd">
        <div className="head-left">
          <div className="logo">
            <Link className="a" href="#">
              <h1>SATURN GAMES</h1>
            </Link>
          </div>
        </div>
        <div className="head-center">
          <ul className="nav">
            <li className="nav-ab">
                <a href="#">ABOUT</a>
            </li>
            <li className="nav-gm">
                <a href="#">GAMES</a>
            </li>
            <li className="nav-bl">
                <a href="#">BLOG</a>
            </li>
            <li className="nav-sds">
                <a href="#">STUDIOS</a>
            </li>
          </ul>
        </div>
        <div className="head-right">
          <Link to={"/signup"} className="lk">
            <RiAccountCircleFill />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
