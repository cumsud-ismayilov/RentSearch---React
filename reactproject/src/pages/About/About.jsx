import React from 'react'
import '../About/About.scss'
import { MdOutlineCompareArrows } from "react-icons/md";
const About = () => {
  return (
    <main>
      <section className='aboutus'>
         <div className='container'>
           <div className='row'>
              <div className='col-xl-12 g-4'>
                  <div className='about-us-text'>
                      <div className='text1'>
                      <h2><MdOutlineCompareArrows  color='#fff' size={19} /></h2>
                      <p>About Us.</p>
                      </div>
                      <h3>Our mission is to simplify the experience of connecting people & properties. </h3>
                      <h4>We do this by delivering integrated solutions that bring together the right renter, with the right property, at the right time, eliminating friction and driving efficiency.</h4>
                  </div>
              </div>
           </div>
         </div>
      </section>
      <section className='reseurces'>
        <div className='container'>
           <div className='row'>
             <div className='col-xl-6'>
             <div className='col-xl-6'>
                    <div className='stoked'>
                  <img src="https://solutions.rent.com/wp-content/uploads/2022/06/still_1-610x391.jpg" alt="stokedimg" />
                   </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='images'>
                           <img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-2.png" alt="img1" />
                           <img src="	https://solutions.rent.com/wp-content/uploads/2022/05/1-2.png" alt="img1" />
                           <img src="	https://solutions.rent.com/wp-content/uploads/2022/05/3-2.png" alt="img1" />
                           <img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-2-1.png" alt="img1" />
                        </div>
                    </div>
             </div>
             <div className='col-xl-6'>
               <div className='stoked2'>
                   <img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111508-610x714.jpg" alt="stokedimg2" />
               </div>
             </div>
           </div>
        </div>
      </section>
      <section className='ourvalues'>
         <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
               <div className='valuestext'>
                  <div className='text4'>
                  <h2><MdOutlineCompareArrows  color='#fff' size={19} /></h2>
                  <p>Our Core Values</p>
                  </div>
                  <h4>At Rent. our mission is driven by eight values that guide every decision we make.</h4>
               </div>
            </div>
          </div>
          <div className='row'>
             <div className=''></div>
          </div>
         </div>
      </section>
    </main>
  )
}

export default About