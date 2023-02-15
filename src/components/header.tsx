import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href={`/`} className="brand-logo">
            Hobby Chat
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to={`/profile/`}>Profile</Link>
            </li>
            <li>
              <Link to={`/login/`}>Sign in</Link>
            </li>
            <li>
              <Link to={`/register/`}>Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
