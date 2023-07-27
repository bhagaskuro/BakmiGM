import { Link } from "react-router-dom";

export default function Example() {
  return (
    <div className="navbar bg-base-100 px-20 py-3 sticky top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <details>
                <summary>Menu</summary>
                <ul className="p-2">
                  <li>
                    <a>Rice</a>
                  </li>
                  <li>
                    <a>Noodle</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Promo</a>
            </li>
            <li>
              <a>Member</a>
            </li>
            <li>
              <a>Kids</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w102_h72_logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="menu">
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Promo</a>
          </li>
          <li>
            <a>Member</a>
          </li>
          <li>
            <a>Kids</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="store" href="#">
          Find a Store
        </a>
        <img
          className="pl-5"
          src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w64_h64_tw484_th484_x112_y10_logo-halal-indonesia.png"
          alt=""
        />
      </div>
    </div>
  );
}
