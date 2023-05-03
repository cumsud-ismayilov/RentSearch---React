import React from 'react'
import { Link } from 'react-router-dom';
import './footer.scss'
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 g-5'>
             <div className='period'>
                 <img src="	https://solutions.rent.com/wp-content/themes/rent/assets/images/svg/Logo.svg"/>
                 <p>Solutions that work as hard as you do.Period</p>
             <div className='pageicon'>
                <h4><GrFacebookOption size={17} cursor={"pointer"}/></h4>
               <h4><FaTwitter size={17} cursor={"pointer"}/></h4>
               <h4><GrLinkedinOption size={17} cursor={"pointer"}/></h4>
               <h4><AiOutlineInstagram size={17} cursor={"pointer"}/></h4>
             </div>
             </div>
          </div>
          <div className='col-xl-3 g-5'>
             <div className='list'>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link>Solutions</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link>Contact</Link></li>
                  <li><Link>FAQ</Link></li>
                  <li><Link>Team</Link></li>
                  <li><Link>Careers</Link></li>
                </ul>
             </div>
          </div>
          <div className='col-xl-3 g-5'>
             <div className='list2'>
                <ul>
                  <li>Accessibility</li>
                  <li>Notice of Collection</li>
                  <li>Do Not Sell My Personal Information</li>
                  <li>IRS Form 8937</li>
                  <li>Sitemap</li>
                </ul>
             </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-6 g-4'>
              <div className='stayword'>
                 <p>Stay in touch.</p>
                 <div className='emailsearch'>
                    <form>
                       <input type="email" name="email" id="email" className='email' placeholder='Email Address *' />
                    </form>
                    <button>Subscribe</button>
                 </div>
                 <h3>This site is protected by reCAPTCHA and the Google<span> Privacy Policy</span> and<span> Terms of Service</span> apply.</h3>
              </div>
          </div>
          <div className='col-xl-6 g-4'>
            <div className='group'>
               <p>© 2023 Rent Group Inc. All photos, videos, text, and other content are the property of Rent Group Inc. APARTMENT GUIDE, RENT.COM and RENTALS.COM and the APARTMENT GUIDE, RENT.COM and RENTALS.COM Trade Dress are registered trademarks of Rent Group Inc. All rights reserved.
                <br />
                <br />
                <br />
                If you are using a screen reader, or are having difficulty reading this website, please email accessibilityfeedback@rent.com
               </p>
              
            </div>
            <div className='privacy'>
                 <div className='policy'>
                 <p>Privacy Policy</p>
                 <p>Terms of Service</p>
                 <h4>Patent Notice</h4>
                 </div>
                 <h5><AiFillHome color='#fff' size={51}/></h5>
                </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer