import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";
import axios from "axios";
const cookies = new Cookies();
//cookies.remove('token');
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

const Navbar = () => {
  let finalCat = [];

  const [newCategory, SetCategory] = useState([]);
  let Categories = [];
  var url = "http://localhost:3000/api/v1/categories/get";
  //let newCategory = [];
  axios
    .post(url, "")
    .then((response) => {
      if (response.data) {
        if (response.data.data.length > 0) {
          Categories = response.data.data;
          let ceel = Math.ceil(Categories.length / 5);
          for (let i = 0; i < ceel; i++) {
            finalCat.push(Categories.splice(0, ceel + 1));
          }
          SetCategory((e) => finalCat)
        }
      }
    })
    .catch((error) => {
      if (error.response) {
        //setErrors(error?.response?.data?.data);
      }
    });

  return (
    <div>
      <header className="header-static navbar-sticky navbar-light shadow">
        <div
          className="top-search collapse bg-light"
          id="search-open"
          data-parent="#search"
        >
          <div className="container">
            <div className="row position-relative">
              <div className="col-md-8 mx-auto py-5">
                <form>
                  <div className="input-group">
                    <input
                      className="form-control border-radius-right-0 border-right-0"
                      type="text"
                      name="search"
                      /* autofocus */ placeholder="What are you looking for?"
                    />
                    <button
                      type="button"
                      className="btn btn-grad border-radius-left-0 mb-0"
                    >
                      Search
                    </button>
                  </div>
                </form>
                <p className="small mt-2 mb-0">
                  <strong>e.g.</strong>Template, TravelGo, WordPress{" "}
                </p>
              </div>
              <a
                className="position-absolute top-0 right-0 mt-3 mr-3"
                data-toggle="collapse"
                href="#search-open"
              >
                <i className="fas fa-window-close"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-top d-none d-lg-block">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
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
                  <div
                    className="dropdown-menu mt-2 shadow"
                    aria-labelledby="dropdownLanguage"
                  >
                    <span className="dropdown-item-text">Select country</span>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/#">
                      <img
                        className="dropdown-item-icon"
                        src="assets/images/flag/ae.svg"
                        alt=""
                      />{" "}
                      United Arab Emirates
                    </a>
                    <a className="dropdown-item" href="/#">
                      <img
                        className="dropdown-item-icon"
                        src="assets/images/flag/uk.svg"
                        alt=""
                      />
                      United Kingdom
                    </a>
                    <a className="dropdown-item" href="/#">
                      <img
                        className="dropdown-item-icon"
                        src="assets/images/flag/fr.svg"
                        alt=""
                      />{" "}
                      France
                    </a>
                  </div>
                </div>
                <ul className="nav list-unstyled ml-3">
                  <li className="nav-item mr-3">
                    {" "}
                    <a className="navbar-link" href="/#">
                      <strong>Phone:</strong>{" "}
                      {process.env.REACT_APP_PHONE_NUMBER}
                    </a>{" "}
                  </li>
                  <li className="nav-item mr-3">
                    {" "}
                    <a className="navbar-link" href="/#">
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
                <ul className="nav">
                  {!getToken ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Log In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">
                          Register
                        </Link>
                      </li>
                    </>
                  ) : null}
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="/#">
                      Contact
                    </a>{" "}
                  </li>
                </ul>
                <ul className="social-icons">
                  <li className="social-icons-item social-facebook m-0">
                    {" "}
                    <a className="social-icons-link w-auto px-2" href="/#">
                      <i className="fab fa-facebook-f"></i>
                    </a>{" "}
                  </li>
                  <li className="social-icons-item social-instagram m-0">
                    {" "}
                    <a className="social-icons-link w-auto px-2" href="/#">
                      <i className="fab fa-twitter"></i>
                    </a>{" "}
                  </li>
                  <li className="social-icons-item social-twitter m-0">
                    {" "}
                    <a className="social-icons-link w-auto pl-2" href="/#">
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
            <Link className="navbar-brand" to="/">
              <img
                src="http://localhost:4000/assets/images/logo-header.png"
                alt="travelgo"
              />{" "}
            </Link>
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
                  <Link id="demosMenu1" className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link id="demosMenu2" className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                {/* 
                           <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="!#" id="demosMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Navbar 1</a>
                              <ul className="dropdown-menu" aria-labelledby="homeMenu">
                                 <li><a className="dropdown-item" href="assets/index.html">Home Layout 1</a></li>
                                 <li><a className="dropdown-item" href="assets/homepage2.html">Home Layout 2</a></li>
                                 <li><a className="dropdown-item" href="assets/homepage3.html">Home Layout 3</a></li>
                                 <li><a className="dropdown-item" href="assets/homepage4.html">Home Layout 4</a></li>
                                 <li><a className="dropdown-item" href="assets/homepage5.html">Home Layout 5</a></li>
                                 <li><a className="dropdown-item" href="assets/homepage6.html">Home Layout 6</a></li>
                                 <li className="dropdown-header">Header Style</li>
                                 <li><a className="dropdown-item" href="assets/header-1.html">Header Style 1</a></li>
                                 <li><a className="dropdown-item" href="assets/header-2.html">Header Style 2</a></li>
                                 <li><a className="dropdown-item" href="assets/header-3.html">Header Style 3</a></li>
                              </ul>
                           </li>
                           */}
                <li className="nav-item dropdown megamenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="elementsMenu"
                    data-toggle="dropdown"
                    /* aria-haspopup="true" */
                    aria-expanded="false"
                  >
                    Packages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="elementsMenu">
                    <div className="container">
                      <div className="row">
                        {!newCategory
                          ? null
                          : newCategory.map(function (arr, i) {
                            return (
                              <div className="col-sm-6 col-lg-3">
                                <ul key={i} className="list-unstyled">
                                  {arr.map(function (ele) {
                                    return (
                                      <li key={ele._id}><Link key={ele._id} className="dropdown-item" to={ele._id}>{ele.category_name}</Link></li>
                                    )
                                  })}
                                  {/* <p>{(a)}</p> */}
                                </ul>
                              </div>
                            );
                          })}

                        {/* <div className="col-sm-6 col-lg-3">
                                          <ul className="list-unstyled">
                                             <li><a className="dropdown-item" href="assets/pages-aboutus1.html">About Us</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-services1.html">Services</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-photogallery-4column.html">Gallery 4 Column</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-photogallery-3column.html">Gallery 3 Column</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-photogallery-2column.html">Gallery 2 Column</a></li>
                                          </ul>
                                       </div>
                                       <div className="col-sm-6 col-lg-3">
                                          <ul className="list-unstyled">
                                             <li><a className="dropdown-item" href="assets/pages-faq1.html">Faq 1</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-404-1.html">404 Page</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-coming-soon1.html">Coming Soon</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-login1.html">Login </a></li>
                                             <li><a className="dropdown-item" href="">Registration </a></li>
                                          </ul>
                                       </div>
                                       <div className="col-sm-6 col-lg-3">
                                          <ul className="list-unstyled">
                                             <li><a className="dropdown-item" href="assets/pages-layouts-twosidebar.html">Layouts Two Sidebar</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-layouts-fullwidth.html">Layouts Full Width</a></li>
                                             <li><a className="dropdown-item" href="!#">Contact Us</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-travelo-policies.html">Policies</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-sitemap.html">Site Map</a></li>
                                          </ul>
                                       </div>
                                       <div className="col-sm-6 col-lg-3">
                                          <ul className="list-unstyled">
                                             <li><a className="dropdown-item" href="assets/pages-blog-rightsidebar.html">Blog Right Sidebar</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-blog-leftsidebar.html">Blog Left Sidebar</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-blog-fullwidth.html">Blog Full Width</a></li>
                                             <li><a className="dropdown-item" href="assets/pages-blog-read.html">Blog Details</a></li>
                                          </ul>
                                       </div> */}
                      </div>
                    </div>
                  </div>
                </li>
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
                <a href="!#" className=" btn btn-sm btn-grad text-white mb-0">
                  Online Booking
                </a>{" "}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
