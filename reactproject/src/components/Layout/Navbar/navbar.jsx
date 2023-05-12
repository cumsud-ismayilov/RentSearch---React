import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { BsHeadphones } from "react-icons/bs";
import { RxChevronDown } from "react-icons/rx";
import { RiArrowUpSLine } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";

const navbar = () => {
  return (
    <div>
      <nav className="desktopnav">
        <div className="navtop">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 g-2">
                <div className="navleft">
                  <div className="leftone">
                    <BsHeadphones
                      size={23}
                      cursor={"pointer"}
                      color="#7E93FB"
                    />
                    <p>678.421.3000</p>
                  </div>
                  <div className="lefttwo">
                    <h1>8am - 5pm EDT</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 g-2">
                <div className="navright">
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-navtop">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
        <div className="navbottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 g-3">
                <div className="pagelogo">
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" />
                </div>
              </div>
              <div className="col-xl-6 g-3">
                <div className="navmiddle">
                  <ul>
                    <li className="home">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="solution">
                      <Link>Solutions</Link>
                      <h3>
                        <RxChevronDown
                          size={17}
                          cursor={"pointer"}
                          color="#7E93FB"
                        />
                      </h3>
                      <h2>
                        <RiArrowUpSLine
                          size={17}
                          cursor={"pointer"}
                          color="#7E93FB"
                        />
                      </h2>
                      <div className="reseurcesdown">
                        <div className="container">
                          <div className="row">
                            <div className="col-xl-12 g-3">
                              <div className="reserword">
                                <p>Reseurces</p>
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword1">
                                <p>Webinars</p>
                                <h1>Checklists</h1>
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword2">
                                <p>Reports</p>
                                <h1>Assesments</h1>
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword3">
                                <img
                                  src="https://solutions.rent.com/wp-content/uploads/2023/03/Book-2023-Playbook-Copy.png"
                                  alt="reserimg"
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword4">
                                <div className="reserdate">
                                  <h4>Featured</h4>
                                  <h5>03/31/2023</h5>
                                </div>
                                <h6>
                                  Your 2023 Multifamily Marketing Playbook
                                </h6>
                                <h5>Explore →</h5>
                              </div>
                            </div>
                            <div className="col-xl-12">
                              <div className="reserword5">
                                <p>Explore All Reseurces →</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="company">
                      <Link>Company</Link>
                      <h3>
                        <RxChevronDown
                          size={17}
                          cursor={"pointer"}
                          color="#7E93FB"
                        />
                      </h3>
                      <h2>
                        <RiArrowUpSLine
                          size={17}
                          cursor={"pointer"}
                          color="#7E93FB"
                        />
                      </h2>
                      <div className="downmenu">
                        <div className="row">
                          <div className="col-xl-6 g-4">
                            <div className="downtext">
                              <p className="about">
                                <Link to="/about">About</Link>
                              </p>
                              <p>News</p>
                            </div>
                          </div>
                          <div className="col-xl-6 g-4">
                            <div className="downtext">
                              <p>Careers</p>
                              <p>FAQ</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="blog">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="reser">
                      <Link>Reseurces</Link>
                      <h3>
                        <RxChevronDown
                          size={17}
                          cursor={"pointer"}
                          color="#7E93FB"
                        />
                      </h3>
                      <h2>
                        <RiArrowUpSLine
                          size={17}
                          cursor={"pointer"}
                          color="#7E93FB"
                        />
                      </h2>
                      <div className="reseurcesdown">
                        <div className="container">
                          <div className="row">
                            <div className="col-xl-12 g-3">
                              <div className="reserword">
                                <p>Reseurces</p>
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword1">
                                <p>Webinars</p>
                                <h1>Checklists</h1>
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword2">
                                <p>Reports</p>
                                <h1>Assesments</h1>
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword3">
                                <img
                                  src="https://solutions.rent.com/wp-content/uploads/2023/03/Book-2023-Playbook-Copy.png"
                                  alt="reserimg"
                                />
                              </div>
                            </div>
                            <div className="col-xl-3 g-3">
                              <div className="reserword4">
                                <div className="reserdate">
                                  <h4>Featured</h4>
                                  <h5>03/31/2023</h5>
                                </div>
                                <h6>
                                  Your 2023 Multifamily Marketing Playbook
                                </h6>
                                <h5>Explore →</h5>
                              </div>
                            </div>
                            <div className="col-xl-12">
                              <div className="reserword5">
                                <p>Explore All Reseurces →</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 g-3">
                <div className="loginandtouch">
                  <p>Client login</p>
                  <button>Get in touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="mobilenav">
        <div className="nav-top">
          <div className="nav-left">
            <BsHeadphones size={18} cursor={"pointer"} color="#7E93FB" />
            <p>678.421.3000</p>
            <h4>8am - 5pm EDT</h4>
          </div>
          <div className="nav-right">
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="website-logo">
            <img
              src="	https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png"
              alt="website-logo"
            />
          </div>
         <div className="menu-icon">
         <nav className="navbar bg-body-tertiary fixed-top">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                  id="open-button"
                >
                  <span className="navbar-toggler-icon">
                    
                  </span>
                </button>
                <div
                  className="offcanvas offcanvas-end"
                   index="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div class="offcanvas-header">
                    <div className="pageimg">
                      <img src="	https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" alt="img" />
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      id="close-button"
                    ></button>
                  </div>
                  <div className="menu-content">
                     <p><span><Link to="/">Solutions</Link></span><BsArrowRightCircle color="#fff"/></p>
                     <p><span><Link to="/">Company</Link></span><BsArrowRightCircle color="#fff"/></p>
                     <p><span><Link to="/blog">Blog</Link></span><BsArrowRightCircle color="#fff"/></p>
                     <p><span><Link to="/">Reseurces</Link></span><BsArrowRightCircle color="#fff"/></p>
                     <button className="touch-in">Get in touch</button>
                     <button className="login">Client login</button>
                  </div>
                </div>
              </div>
            </nav>
         </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
