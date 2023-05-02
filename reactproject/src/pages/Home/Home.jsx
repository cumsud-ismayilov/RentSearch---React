import React from 'react'
import "../Home/home.scss";
import {MdOutlineCompareArrows} from "react-icons/md";
import { HiArrowSmDown } from "react-icons/hi";
const Home = () => {
  return (
   <main>
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
   <section className='inner'>
      <div className='container'>
         <div className='row'>
            <div className='col-xl-6 g-5'>
               <div className='bestmoment'>
                  <p>Be there the moment renters need you.</p>
                  <h2>Convert more leads by driving traffic from Google directly to your property website. </h2>
                  <button>Get RentSearch.</button>
               </div>
            </div>
            <div className='col-xl-6 g-5'>
               <div className='engines'>
               <div className='engine'>
                   <p>87%</p>
                   <h3>of renters start their search on a search engine.¹</h3>
                </div>
               <div className='engine'>
                   <p>350+</p>
                   <h3>monthly in-market renters directed to a property’s website. ²</h3>
                </div>
               <div className='engine'>
                   <p>3X</p>
                   <h3>higher click-through rates than the industry average.³</h3>
                </div>
               <div className='engine'>
                   <p>10%</p>
                   <h3>Lower cost-per-lead than the industry average.⁴</h3>
                </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className='marketplace'>
      <div className='container'>
         <div className='row'>
            <div className='col-xl-6 g-5'>
               <div className='marketbackground'>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/10/2-bedroom-apartment-in-Atlanta-2.png"/>
               <div className='services-indicator'>
                  <p>More page views when combined with RentMarketplace.⁵ </p>
                  <h4>95%</h4>
               </div>
               <div className='services-indicator2'>
                  <h2>Average clicks per property per month.⁶</h2>
                  <h5>402</h5>
               </div>
               </div>
            </div>
            <div className='col-xl-6 g-5'>
               <div className='award'>
                  <div className='reactword'>
                  <h1><MdOutlineCompareArrows  color='#fff' size={19} /></h1>
                  <h2>Rent<span>Search.<sup>TM</sup></span></h2>
                  </div>
                  <p>Award-winning Google search campaigns that keep occupancy rates high.</p>
                  <div className='target'>
                     <h3>Target Effectively</h3>
                     <h4>Unparalleled ad targeting thanks to our leading technology and proprietary first-party data from our marketplaces.</h4>
                  </div>
                  <h5>- <span>Boost Performance</span></h5>
                  <h6>- <span>Reduce Risk</span></h6>
                  <button>Get RentSearch.</button>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className='engage'>
      <div className='container'>
         <div className='row'>
            <div className='col-xl-12 g-5'>
               <div className='featuresword'>
               <h2><MdOutlineCompareArrows  color='#fff' size={19} /></h2>
               <h3>RentSearch. features </h3>
               </div>
            </div>
         </div>
      </div>
   </section>
   </main>
   
  )
}

export default Home