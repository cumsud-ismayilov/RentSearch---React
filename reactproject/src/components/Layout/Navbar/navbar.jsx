import React from 'react';
import styled from './navbar.scss';
import { Link } from 'react-router-dom';
import { BsHeadphones } from "react-icons/bs";
const navbar = () => {
  return (
    <nav className='desktopnav'>
      <div className='navtop'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-4 g-2'>
                    <div className='navleft'>
                       <div className='leftone'>
                       <BsHeadphones size={23} cursor={"pointer"} color='#7E93FB'/>
                    <p>678.421.3000</p>
                       </div>
                       <div className='lefttwo'>
                          <h1>8am - 5pm EDT</h1>
                       </div>
                    </div>
                </div>
                <div className='col-xl-8 g-2'>
                    <div className='navright'>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='navbottom'>
         <div className='container'>
           <div className='row'>
             <div className='col-xl-2'>
               <div className='pagelogo'>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" />
               </div>
             </div>
             <div className='col-xl-6'>
               <div className='navbottom'>
                 <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link>Solutions</Link></li>
                  <li><Link>Company</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link>Reseurces</Link></li>
                  </ul>
               </div>
             </div>
           </div>
         </div>
      </div>
    </nav>
  )
}

export default navbar