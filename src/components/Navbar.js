import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const getToken = cookies.get("token");
const LogoutHandler = () => {
  cookies.remove("token");
  window.location.href = "/";
};
let userDetails = JSON.parse(localStorage.getItem("user"));
let AccountText = "Account";
if (userDetails) {
  AccountText = userDetails.firstName;
}
function Navbar() {
  return (
    <div>
      <header className="header-static navbar-sticky navbar-light shadow">
        <div className="navbar-top d-none d-lg-block">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <a
                  href="/#"
                  role="button"
                  id="dropdownLanguage"
                  data-toggle="dropdown"
                  /* aria-haspopup="true" */
                  aria-expanded="false"
                >
                  {" "}
                  <img
                    className="dropdown-item-icon"
                    src="assets/images/flag/in.svg"
                    alt=""
                  />{" "}
                  India{" "}
                </a>

                <ul className="nav list-unstyled ml-3">
                  <li className="nav-item mr-3">
                    {" "}
                    <a className="navbar-link" href="tel:+919898393221">
                      <strong>Phone:</strong>{" "}
                      {process.env.REACT_APP_PHONE_NUMBER}
                    </a>{" "}
                  </li>
                  <li className="nav-item mr-3">
                    {" "}
                    <a
                      className="navbar-link"
                      href="mailto:jktravelworld@gmail.com "
                    >
                      <strong>Email:</strong> {process.env.REACT_APP_EMAIL}
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="d-flex align-items-center">
                {getToken ? (
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="/#"
                      role="button"
                      id="dropdownAccount"
                      data-toggle="dropdown"
                      /* aria-haspopup="true" */
                      aria-expanded="false"
                    >
                      <i className="far fa-user mr-2"></i>
                      {AccountText}{" "}
                    </a>
                    <div
                      className="dropdown-menu mt-2 shadow"
                      aria-labelledby="dropdownAccount"
                    >
                      <Link className="dropdown-item" to="/setting">
                        My Booking
                      </Link>
                      <Link className="dropdown-item" to="/profile">
                        My Profile
                      </Link>
                      <Link className="dropdown-item" to="/privacy">
                        Settings
                      </Link>
                      <button className="dropdown-item" onClick={LogoutHandler}>
                        Logout
                      </button>
                    </div>
                  </div>
                ) : null}

                <ul className="social-icons">
                  <li className="social-icons-item social-facebook m-0">
                    {" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="social-icons-link w-auto px-2"
                      href="https://www.facebook.com/JKtravelWORLDahmedabad/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>{" "}
                  </li>
                  <li className="social-icons-item social-instagram m-0">
                    {" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="social-icons-link w-auto px-2"
                      href="https://twitter.com/jktravelworld"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>{" "}
                  </li>
                  <li className="social-icons-item social-twitter m-0">
                    {" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="social-icons-link w-auto pl-2"
                      href="https://www.instagram.com/jktravelworld/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a
              className="navbar-brand"
              href="/white-rann-of-kachchh#kachh-booking"
            >
              <div className="jk-text">𝐉𝐊 𝐓𝐑𝐀𝐕𝐄𝐋 𝐖𝐎𝐑𝐋𝐃</div>
              {/* <img
                src="http://localhost:4000/assets/images/logo-header.png"
                alt="travelgo"
              /> */}{" "}
            </a>
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"> </span>{" "}
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a id="demosMenu1" className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="demosMenu1"
                    className="nav-link"
                    href="/white-rann-of-kachchh"
                  >
                    White Rann Of Kachchh (Rann Utsav)
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="demosMenu1"
                    className="nav-link"
                    href="/chardham-yatra"
                  >
                    Chardham Yatra
                  </a>
                </li>


                {/* <li className="nav-item dropdown megamenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="elementsMenu"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Packages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="elementsMenu">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6 col-lg-4">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                id="demosMenu1"
                                className="dropdown-item"
                                to="/white-rann-of-kachchh"
                              >
                                White Rann Of Kachchh (Rann Utsav)
                              </Link>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                International Tour Packages
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/# ">
                                Domestic Tour Packages
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Pocket Friendly
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Weekend Friendly
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          <ul className="list-unstyled">
                            <li>
                              <a className="dropdown-item" href="/#">
                                Winter Mountains
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Summer Vacation Special
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Couple Tour
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Honeymoon Special
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                          <ul className="list-unstyled">
                            <li>
                              <a className="dropdown-item" href="/#">
                                Splo Trip
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Best of India
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Hilly Adventure
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="/#">
                                Religous Places
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> */}
                {/* <li className="nav-item ">
                  <Link id="demosMenu2" className="nav-link" to="/#">
                    About
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="navbar-nav">
              <div
                className="nav-item search border-0 pl-3 pr-0 px-lg-2"
                id="search"
              >
                {" "}
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#search-open"
                >
                  <i className="fas fa-search"></i>
                </a>{" "}
              </div>
              <div className="nav-item border-0 d-none d-lg-inline-block align-self-center">
                {" "}
                <a
                  href="/white-rann-of-kachchh#kachh-booking"
                  className=" btn btn-sm btn-grad text-white mb-0"
                >
                  Online Booking
                </a>{" "}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
