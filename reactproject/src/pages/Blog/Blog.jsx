import React from "react";
import Isotops from "../../components/Filter/Filter";
import { MdOutlineCompareArrows } from "react-icons/md";
import './blog.scss'

const Blog = () => {
  return (
    <div>
      <section className="wrap-articles">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="articles">
                <div className="articles-text1">
                  <h2>
                    <MdOutlineCompareArrows color="#fff" size={19} />
                  </h2>
                  <p>Rent<span>Insights.</span></p>
                </div>
                <h3>Get the latest multifamily marketing insights, guides, trends and tips here.</h3>
                <button className="explore">Explore</button>
                 <h4>Stay in touch!</h4>
                 <form>
                   <input type="email" name="emails" id="emails"  className="emails" placeholder="Email Address *"/>
                 </form>
                 <h5>This site is protected by reCAPTCHA and the Google<span> Privacy Policy</span> and<span> Terms of Service</span> apply.</h5>
                 <button className="submit">Submit</button>
              </div>
            </div>
            <div className="col-xl-6">
               <div className="articles-card">
                  <div className="artic-img">
                     <img src="	https://solutions.rent.com/wp-content/uploads/2023/04/audience-targeting-blog-cover.jpg" alt="cardimg" />
                  </div>
                  <div className='articles-text'>
                 <div className='articlesone'>
                    <p>05/02/2023 • in</p>
                    <h4>Social Media Marketing</h4>
                 </div>
                 <h3>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h3>
                 <div className='articlesthree'>
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
      </section>
      {/* <Isotops /> */}
    </div>
  );
};

export default Blog;
