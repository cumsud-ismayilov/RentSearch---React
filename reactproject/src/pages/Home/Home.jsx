import React from 'react'
import "../Home/home.scss";
import {MdOutlineCompareArrows} from "react-icons/md";
import { HiArrowSmDown } from "react-icons/hi";
const Home = () => {
  return (
   <section className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 g-5'>
              <div className='marketplace'>
                  <div className='reactword' >
                     <h2><MdOutlineCompareArrows  color='#fff' size={19} /></h2>
                     <p>Rent<span>Search.</span></p>
                  </div>
                  <h1>Award-winning Google search campaigns that keep occupancy rates high.</h1>
               <div className='banner-button'>
                 <button className='gettouch'>Get in touch</button>
                 <button className='explore'>Explore<HiArrowSmDown/></button>
               </div>
              </div>
          </div>
          <div className='col-xl-6 g-5'>
             <div className='bannerround'>
                <img src="https://solutions.rent.com/wp-content/uploads/2022/10/Rent-Search-Mockups-4-1.png"/>
             </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Home