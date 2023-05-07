import React from "react";
import "../Home/home.scss";
import   İmages from "../../images/rentserch-img.png";
import { MdOutlineCompareArrows } from "react-icons/md";
import { HiArrowSmDown } from "react-icons/hi";
import { HiOutlineDownload } from "react-icons/hi";
const Home = () => {
  return (
    <main>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 g-5">
              <div className="marketplace1">
                <div className="reactword">
                  <h2>
                    <MdOutlineCompareArrows color="#fff" size={19} />
                  </h2>
                  <p>
                    Rent<span>Search.</span>
                  </p>
                </div>
                <h1>
                  Award-winning Google search campaigns that keep occupancy
                  rates high.
                </h1>
                <div className="banner-button">
                  <button className="gettouch">Get in touch</button>
                  <button className="explore">
                    Explore
                    <HiArrowSmDown />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 g-5">
              <div className="bannerround">
                <img src={İmages} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 g-5">
              <div className="bestmoment">
                <p>Be there the moment renters need you.</p>
                <h2>
                  Convert more leads by driving traffic from Google directly to
                  your property website.{" "}
                </h2>
                <button>Get RentSearch.</button>
              </div>
            </div>
            <div className="col-xl-6 g-5">
              <div className="engines">
                <div className="engine">
                  <p>87%</p>
                  <h3>of renters start their search on a search engine.¹</h3>
                </div>
                <div className="engine">
                  <p>350+</p>
                  <h3>
                    monthly in-market renters directed to a property’s website.
                    ²
                  </h3>
                </div>
                <div className="engine">
                  <p>3X</p>
                  <h3>
                    higher click-through rates than the industry average.³
                  </h3>
                </div>
                <div className="engine">
                  <p>10%</p>
                  <h3>Lower cost-per-lead than the industry average.⁴</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marketplace">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 g-5">
              <div className="marketbackground">
                <img src="https://solutions.rent.com/wp-content/uploads/2022/10/2-bedroom-apartment-in-Atlanta-2.png" />
                <div className="services-indicator">
                  <p>More page views when combined with RentMarketplace.⁵ </p>
                  <h4>95%</h4>
                </div>
                <div className="services-indicator2">
                  <h2>Average clicks per property per month.⁶</h2>
                  <h5>402</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-6 g-5">
              <div className="award">
                <div className="reactword">
                  <h1>
                    <MdOutlineCompareArrows color="#fff" size={19} />
                  </h1>
                  <h2>
                    Rent
                    <span>
                      Search.<sup>TM</sup>
                    </span>
                  </h2>
                </div>
                <p>
                  Award-winning Google search campaigns that keep occupancy
                  rates high.
                </p>
                <div className="target">
                  <h3>Target Effectively</h3>
                  <h4>
                    Unparalleled ad targeting thanks to our leading technology
                    and proprietary first-party data from our marketplaces.
                  </h4>
                </div>
                <h5>
                  - <span>Boost Performance</span>
                </h5>
                <h6>
                  - <span>Reduce Risk</span>
                </h6>
                <button>Get RentSearch.</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="engage">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 g-5">
              <div className="featuresword">
                <h2>
                  <MdOutlineCompareArrows color="#fff" size={19} />
                </h2>
                <h3>RentSearch. features </h3>
              </div>
            </div>
            <div className="col-xl-4 g-5">
              <div className="launchtittle">
                <p>Launch quickly</p>
                <h4>
                  We build and publish your ads within one week to save you
                  time.
                </h4>
              </div>
            </div>
            <div className="col-xl-4 g-5">
              <div className="launchtittle">
                <p>Launch quickly</p>
                <h4>
                  We build and publish your ads within one week to save you
                  time.
                </h4>
              </div>
            </div>
            <div className="col-xl-4 g-5">
              <div className="launchtittle">
                <p>Launch quickly</p>
                <h4>
                  We build and publish your ads within one week to save you
                  time.
                </h4>
              </div>
            </div>
            <div className="col-xl-4 g-5">
              <div className="launchtittle">
                <p>Launch quickly</p>
                <h4>
                  We build and publish your ads within one week to save you
                  time.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="study">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 g-4">
              <div className="driveword">
                <p>RentSearch. drives results</p>
                <h3>
                  Serena Y. from WestCorp went from ineffective ads to more
                  conversions and higher traffic with RentSearch.
                </h3>
              </div>
            </div>
            <div className="col-xl-6 g-4">
              <div className="boosted">
                <div className="west">
                  <h2>
                    <MdOutlineCompareArrows color="#fff" size={19} />
                  </h2>
                  <p>
                    See how RentSearch. boosted conversions and occupancy for
                    WestCorp
                  </p>
                </div>
                <ul>
                  <li>• 34% higher conversion rates</li>
                  <li>• 15-20% higher click-through rate</li>
                  <li>• 98-99% occupancy rates</li>
                </ul>
                <button>
                  Download Now <HiOutlineDownload />
                </button>
                <img src="https://solutions.rent.com/wp-content/uploads/2022/10/serena-yang-transparent.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plans">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 g-3">
              <div className="plans-text">
                <p>RentSearch. Plans</p>
                <h2>Find the perfect-fit option for your property. </h2>
              </div>
            </div>
            <div className="col-xl-6 g-3">
              <div className="built-plans">
                <p>RentSearch.</p>
                <h3>Features</h3>
                <h4 className="live">
                  •<span>Built and live in 1 week</span>
                </h4>
                <h4 className="live">
                  •<span>Ad content synced with Marketplace listing</span>
                </h4>
                <h4 className="live">
                  •<span>FHA-compliant</span>
                </h4>
                <h4 className="live">
                  •<span>Reporting</span>
                </h4>
                <h4 className="campaign">
                  •<span>Custom Campaign Strategy</span>
                </h4>
                <h4 className="campaign">
                  •<span>Dedicated Account Analyst</span>
                </h4>
                <h5>Get RentSearch.</h5>
              </div>
            </div>
            <div className="col-xl-6 g-3">
              <div className="built-plans">
                <p>RentSearch.</p>
                <h3>Features</h3>
                <h4 className="live">
                  •<span>Built and live in 1 week</span>
                </h4>
                <h4 className="live">
                  •<span>Ad content synced with Marketplace listing</span>
                </h4>
                <h4 className="live">
                  •<span>FHA-compliant</span>
                </h4>
                <h4 className="live">
                  •<span>Reporting</span>
                </h4>
                <h4 className="campaign">
                  •<span>Custom Campaign Strategy</span>
                </h4>
                <h4 className="campaign">
                  •<span>Dedicated Account Analyst</span>
                </h4>
                <h5>Get RentSearch.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 g-3">
              <div className="clients-text">
                <p>Related insights</p>
              </div>
            </div>
            <div className="col-xl-6 g-3">
               <div className="news-card">
                  <img src="	https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg" alt="newsimg" />
                <div className="sourcedate">
                   <h3>Business Wire </h3>
                   <h3>Apr 6, 2023</h3>
                   <h3>Onsite Effectiveness </h3>
                </div>
                <h5> BusinessWire: Rent. Announces Strategic Agreement to Expand Content Listings to Realtor.com®</h5>
               </div>
            </div>
            <div className="col-xl-6 g-3">
               <div className="news-card">
                  <img src="	https://solutions.rent.com/wp-content/uploads/2022/07/search-ads-not-showing.webp" alt="newsimg" />
                <div className="sourcedate">
                   <h3>Business Wire </h3>
                   <h3>Apr 6, 2023</h3>
                   <h3>Onsite Effectiveness </h3>
                </div>
                <h5> YouShouldTalkTo podcast interview with Rent. CMO Kathy Neumann</h5>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="browse">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 g-4">
              <div className="browseword">
                <p>Discover your next resident on our network</p>
                <div className="browseimgs">
                  <div className="img1">
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/BrandRent-TypePrimary-Logo-Saturation1-Color-ColorBlack-1-3.png" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-12.png" />
                  </div>
                  <div className="img2">
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-13.png" />
                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-14.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 g-4">
              <div className="browsenotes">
                <p>¹ Rent. Renter Survey 2021.</p>
                <p>² Rent. Internal Data, December 2021 – April 2022. </p>
                <p>
                  ⁴ Rent. Internal Data, January 2020 – March 2022 (as compared
                  to Wordstream Real Estate Advertising Benchmark, January
                  2022).
                </p>
                <p>
                  ³ Rent. Internal Data, December 2021 – April 2022 (as compared
                  to Wordstream Google Adwords Industry Benchmarks, February
                  2022).{" "}
                </p>
                <p>⁵ Rent. Internal Data, 2021.</p>
                <p>⁶ Rent. Internal Data, January – April 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
