import React from "react";
const Footer = () => {
  return (
    <footer className="footer footer-dark pt-6 position-relative">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 order-sm-1">
              <div className="widget address">
                <div className="text-uppercase font-weight-bold">
                  From j k travel wOrld - Best Tour Operator
                </div>
                <p>
                  Searching for the
                  top 10 tour operator in Ahmedabad? Welcome to J K TRAVEL
                  WORLD, your trusted Ahmedabad travel agency. Recognized as the
                  best travel agency and Tour Operator in Ahmedabad, we are at
                  your service since 2007, offering complete travel solutions –
                  Flight booking, railway tickets, tourist visa assistance,
                  travel insurance, cab rentals, and tempo traveller services.
                  Our expert travel agents in Ahmedabad design tailor-made
                  domestic & international packages for family holidays,
                  honeymoons, pilgrimages, or corporate tours. If you’re looking
                  for a reliable travel agency in Ahmedabad, We ensures
                  hassle-free services with the best deals. Click Whatsapp Icon
                  to Get in touch to chat with us
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 order-sm-3">
              <div className="widget">
                <h6>Quick LInks</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="assets/index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 order-sm-4">
              <div className="widget">
                <h6>Company</h6>
                <ul className="nav flex-column primary-hover">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="assets/index.html">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Privacy & Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 order-sm-5">
              <div className="widget">
                <h6>Support</h6>
                <ul className="nav flex-column primary-hover">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Documentation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Knowledge Base
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="assets/index.html">
                      Forum
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 order-sm-2">
              <div className="widget address">
                <ul className="list-unstyled">
                  <li className="media mb-3">
                    <i className="fas fa-map-marked-alt mr-3 display-8"></i>5
                    Ashwamegh Complex, Nr.Mithakhali Underbidge,Navrangupura,
                    Ahmedabad, India.{" "}
                  </li>
                  <li className="media mb-3">
                    <i className="mr-3 display-8 fas fa-phone"></i>{" "}
                    {process.env.REACT_APP_PHONE_NUMBER}
                  </li>
                  <li className="media mb-3">
                    <i className="mr-3 display-8 far fa-envelope"></i>{" "}
                    {process.env.REACT_APP_EMAIL}
                  </li>
                  <li className="media mb-3">
                    <i className="mr-3 display-8 far fa-clock"></i>
                    <p>
                      <strong>24/7</strong> Service Available
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider mt-3"></div>
      <div className="footer-copyright py-3">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
            <div className="copyright-text">
              ©2024-2025 All Rights Reserved by{" "}
              <a href="#!"> JK TRAVEL WORLD.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
