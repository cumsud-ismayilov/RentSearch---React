import React from 'react'
import '../About/About.scss'
import Cards from '../../components/AboutCards/Cards'
import { MdOutlineCompareArrows } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
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
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/1-Core-Values_Experience-SM.png" alt="img2" />
                   <p>Obsessed with Experience</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/2-Core-Values_Integrity-SM.png" alt="img2" />
                   <p>Act with Integrity</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="https://solutions.rent.com/wp-content/uploads/2023/01/3-Core-Values_Grit-SM-2.png" alt="img2" />
                   <p>Obsessed with Experience</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/4-Core-Values_We-SM.png" alt="img2" />
                   <p>Obsessed with Experience</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/5-Core-Values_Matter-SM.png" alt="img2" />
                   <p>Obsessed with Experience</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="https://solutions.rent.com/wp-content/uploads/2023/01/6-Core-Values_Forward-SM.png" alt="img2" />
                   <p>Obsessed with Experience</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/7-Core-Values_Why-SM.png" alt="img2" />
                   <p>Obsessed with Experience</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
             <div className='col-xl-3 g-3'>
                <div className='core-item'>
                   <img src="	https://solutions.rent.com/wp-content/uploads/2023/01/8-Core-Values_Support-SM.png" alt="img2" />
                   <p>Obsessed with Experience</p>
                   <div className='corehover'>
                     <h4>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h4>
                   </div>
                </div>
             </div>
          </div>
         </div>
      </section>
      <section className='leaders'>
         <div className='container'>
            <div className='row'>
               <div className='col-xl-12'>
                  <div className='leaderword'>
                     <div className='word1'>
                     <h2><MdOutlineCompareArrows  color='#fff' size={19} /></h2>
                     <p>Our Leaders</p>
                     </div>
                     <h3>Meet our leadership team</h3>
                  </div>
               </div>
               <Cards/>
               <div className='col-xl-6 g-4'>
                  <div className='rent'>
                     <div className='rent1'>
                     <h2><MdOutlineCompareArrows  color='#fff' size={19} /></h2>
                     <p>Join the Rent. team </p>
                     </div>
                     <h4>Feel at home in your career. Our offices are a place where people and performance take precedence. We thrive in a welcoming, collaborative environment where individuals are inspired to do their best work day in and day out.</h4>
                     <h3>Join us in our mission to make finding an ideal place to live intuitive and stress-free for all.</h3>
                     <button>Explore Careers</button>
                  </div>
               </div>
               <div className='col-xl-6 g-4'>
                  <div className='renttwo'>
                     <div className='manager'>
                       <div className='mangerleft'>
                       <div className='managerword'>
                        <h2><MdOutlineCompareArrows  color='#fff' size={19} /></h2>
                        <p>Technical Program Manager</p>
                        </div>
                        <div className='location'>
                           <h3><TiLocation color='#fff' size={19}/></h3>
                           <h4>Remote</h4>
                        </div>
                       </div>
                       <button>Show Details</button>
                     </div>
                    
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className='browse'>
      <div className='container'>
         <div className='row'>
            <div className='col-xl-12 g-4'>
               <div className='browseword'>
                  <p>Discover your next resident on our network</p>
                  <div className='browseimgs'>
                     <div className='img1'>
                        <img src="https://solutions.rent.com/wp-content/uploads/2022/06/BrandRent-TypePrimary-Logo-Saturation1-Color-ColorBlack-1-3.png" alt='img'/>
                        <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-12.png" alt='img'/>
                     </div>
                     <div className='img2'>
                        <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-13.png" alt='img'/>
                        <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-14.png" alt='img'/>
                     </div>
                  </div>
               </div>
            </div>
         
         </div>
      </div>
   </section>
    </main>
  )
}

export default About