import React ,{useEffect,useRef} from 'react';
import './Filter.scss';
import Isotope from "isotope-layout";
import { Link } from 'react-router-dom';
import { MdOutlineCompareArrows } from "react-icons/md";

const Filter = () => {
     // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("a");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  return (
    <section id="filter">
    <div className="container">
      <div className="row py-3">
         <div className='col-xl-12 g-3'>
            <div className='changebutton'>
                <p className='btns' onClick={handleFilterKeyChange("a")}>All</p>
                <p className='btns' onClick={handleFilterKeyChange("b")}>Articles</p>
                <p className='btns' onClick={handleFilterKeyChange("c")}>Videos</p>
                <p className='btns' onClick={handleFilterKeyChange("d")}>Resources</p>
            </div>
         </div>
      </div>
    </div>
    <div className="categorys">
      <div className="container ">
        <div className="row filter-container">
          {/* class A */}
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2023/05/Copy-of-LinkedIn-AIM-Speaker-Panel-2.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/04/audience-targeting-blog-cover.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/03/diversify-channels-blog.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2023/03/shutterstock_1233205321-625.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/12/shutterstock_1186831723.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/12/2085720871-Edited-4star.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1697959045.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/01/shutterstock_2171273857-resized.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/Google-Business-Profiles-Blog-Header.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/geofencing.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege a'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/social-advertising-tips.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>

          {/* Class B */}
        <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/01/shutterstock_2171273857-resized.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/Google-Business-Profiles-Blog-Header.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/geofencing.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/social-advertising-tips.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/03/diversify-channels-blog.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2023/03/shutterstock_1233205321-625.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/12/shutterstock_1186831723.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/12/2085720871-Edited-4star.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege b'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1697959045.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
          {/* Class C */}
          <div className='col-xl-12 g-3 filter-item vege c'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/Google-Business-Profiles-Blog-Header.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
       <div className='col-xl-12 g-3 filter-item vege c'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/geofencing.webp" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
          {/* class D */}
          <div className='col-xl-12 g-3 filter-item vege d'>
          <div className='listing-post'>
              <div className='post-img'>
                 <Link to="/detail">
                 <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg" alt="postimg" />
                 </Link>
              </div>
              <div className='post-text'>
                 <div className='tittleone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='tittlethree'>
                 <span>#Social Media Advertising</span>
                        <span>#facebook marketplace</span>
                        <span>#paid ads</span>
                        <span>#facebook</span>
                 </div>
              </div>
          </div>
       </div>
        </div>
       
      </div>
    </div>

    {/* <ul className="filter-container">
        <div className="filter-item vege ac">
          cucumber
        </div>
        <div className="filter-item fruit ac">
          <span>Apple</span>  
        </div>
        <div className="filter-item fruit">
          <span>Orange</span>
        </div>
        <div className="filter-item fruit vege">
          <span>Tomato</span>
        </div>
      </ul> */}
  </section>
);

}

export default Filter