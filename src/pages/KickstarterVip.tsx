import React, { useEffect } from 'react';
import MetaTags from '../components/MetaTags';
import ogImage from '../assets/max-and-midnight-kickstarter-facebook.jpg';
import twitterImage from '../assets/max-and-midnight-kickstarter-twitter.jpg';
import kickstarterLogo from '../assets/logo-kickstarter.svg';
import maxMidnightLogo from '../assets/logo-max-and-midnight.webp';
import screenOne from '../assets/screen-img-1.webp';
import screenTwo from '../assets/screen-img-2.webp';
import screenThree from '../assets/screen-img-3.webp';
import './KickstarterVip.css';

const KickstarterVip: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <MetaTags
        title="Max & Midnight | Kickstarter VIP - Secret Agent Adventure"
        description="Lock in the best day-one deal for just $1. Access exclusive VIP discounts, get early sneak peeks, score a collector's digital pack at launch, and join the Max & Midnight VIP community."
        url="https://maxandmidnight.com/kickstarter-vip"
        ogImage={ogImage}
        twitterImage={twitterImage}
      />

      <main className="page-kickstarter-vip">
        <div className="hero">
          <div className="container">
            <div className="text-block flex-column--center">
              <div className="logo-wrap">
                <img
                  src={kickstarterLogo}
                  className="logo-kickstarter"
                  alt="Kickstarter logo"
                />

                <a href="/">
                  <img
                    src={maxMidnightLogo}
                    className="logo"
                    alt="Max and Midnight logo"
                  />
                </a>
              </div>

              <div className="badge-vip">
                <svg width="186" height="57" viewBox="0 0 186 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M117.136 21.5194H162.683L164.425 16.2927H121.616L120.123 14.0527H119.625L124.188 0.0319824H178.114C179.386 0.0319824 180.52 0.502107 181.516 1.44235C182.511 2.3826 183.203 3.48877 183.59 4.76087L184.171 5.50754C184.724 6.28186 185.083 7.13914 185.249 8.07939C185.47 9.01964 185.443 9.93223 185.166 10.8172L179.856 27.2438C179.248 29.1796 178.418 30.8389 177.368 32.2216C176.372 33.549 175.266 34.6552 174.049 35.5401C172.832 36.3698 171.532 36.9782 170.15 37.3653C168.822 37.7525 167.495 37.9461 166.168 37.9461H130.825L124.935 56.032H108.674L107.181 53.792H106.683L117.136 21.5194ZM162.185 22.6809H117.966L108.259 52.6305H122.695L128.502 34.5446H164.757C165.919 34.5446 167.108 34.3787 168.325 34.0468C169.597 33.6596 170.786 33.0789 171.892 32.3046C172.998 31.5303 174.021 30.5347 174.962 29.3179C175.902 28.0458 176.676 26.5248 177.285 24.7549L182.594 8.41124C182.815 7.63692 182.843 6.83495 182.677 6.00532C182.511 5.12038 182.179 4.34606 181.682 3.68235C181.239 2.96334 180.658 2.3826 179.939 1.94013C179.276 1.44235 178.529 1.19346 177.699 1.19346H124.935L121.119 12.8912H165.338C165.614 12.8912 165.863 13.0295 166.085 13.3061C166.361 13.5273 166.444 13.7485 166.333 13.9698L163.845 21.6024C163.623 22.3214 163.07 22.6809 162.185 22.6809Z" fill="#C9FF00"/>
                  <path d="M60.0977 53.792L64.6606 39.6883H75.8606L83.4932 16.2927H75.031L73.5377 14.0527H73.0399L77.6028 0.0319824H116.761L116.595 0.529756L118.089 2.76976L113.692 16.2927H102.409L94.7762 39.6883H103.819L103.653 40.1861L105.23 42.4261L100.75 56.032H62.0888L60.5954 53.792H60.0977ZM76.6902 40.8498H65.4903L61.6739 52.6305H98.5095L102.326 40.8498H91.1258L100.169 12.8912H111.369L115.185 1.19346H78.3495L74.5332 12.8912H85.7332L76.6902 40.8498Z" fill="#C9FF00"/>
                  <path d="M16.8415 1.19346H1.49333L12.1126 52.6305H26.6311L70.6015 1.19346H55.3363L24.3911 37.1164L16.8415 1.19346ZM18.1689 1.02754V0.944577L19.2474 2.6868L25.8844 33.8809L55.1704 0.0319824H73.0074L72.5096 0.529756L74.0859 2.76976L28.4563 56.032H12.9422L11.4489 53.792H11.117L0 0.0319824H17.92L18.1689 1.02754Z" fill="#C9FF00"/>
                </svg>
              </div>

              <h1>Gratitude + Next Mission</h1>
            
              <p className="fs-h1">Thanks for Joining the Mission</p>

              <p className="fs-h3">Ready for your next secret agent assignment?</p>
            </div>
          </div>

          <div className="screen-img">
            <div className="shape-trapezoid">
              <img src={screenOne} alt=""/>
            </div>
            <div className="shape-trapezoid">
              <img src={screenTwo} alt=""/>
            </div>
            <div className="shape-trapezoid">
              <img src={screenThree} alt=""/>
            </div>  
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="col-span-2">

              <div>
                <h2>Lock in the Best Day‑One Deal for $1.</h2>
              </div>

              <div>
                <h3 className="fs-h4">Benefits:</h3>
                <ul>
                  <li>Access our steepest VIP-only discount</li>
                  <li>Get a first-look sneak peek before anyone else</li>
                  <li>Score a collector's digital pack at launch</li>
                  <li>Join the Max & Midnight VIP community</li>
                </ul>

                <h3 className="fs-h4">Guarantees:</h3>
                <ul>
                  <li>100% Refund if you change your mind—no questions asked</li>
                  <li>Full transparency—every stage, every update</li>
                  <li>Secure payment: your $1 is ultra-safe with us</li>
                </ul>

                <p>VIPs are 30× more likely to back than regular fans!</p>

                <stripe-buy-button
                  buy-button-id="buy_btn_1RttUfFh5MQPh4GYPVc1ihr8"
                  publishable-key="pk_test_51RtskiFh5MQPh4GYzS3CWkVWY3Oz3NjnfvtQ8vgEYQWk2Qr9s2IvtBwW1WhiTx6LCplfbN8ZpRQF26t9WsGVlm6n002GHPpGjJ"
                >
                </stripe-buy-button>

              </div>
            </div>
          </div>

          <div className="rocket-chase"></div>
        </div>

        <div className="faqs">
          <div className="container">
            <div className="col-span-2">
              <div>
                <h2>Frequently Asked Questions</h2>

                <div className="faqs-list">
                  <div className="faqs-item">
                    <h3 className="fs-h4">Why $1?</h3>
                    <p>Your $1 guarantees your VIP spot, unlocking the best deal, exclusive sneak peeks, and special rewards at launch.</p>
                  </div>
                  <div className="faqs-item">
                    <h3 className="fs-h4">Is my $1 refundable?</h3>
                    <p>Absolutely—instant 100% refund anytime. No risk, ever.</p>
                  </div>
                  <div className="faqs-item">
                    <h3 className="fs-h4">When does Max & Midnight launch?</h3>
                    <p>We’ll reveal the launch date first to VIPs! Stay tuned for mission details in your inbox.</p>
                  </div>
                </div>

                <a href="#" className="button">I’ll wait for launch emails</a>
              </div>
            </div>
          </div>

          <div className="bg-earth"></div>
        </div>

        <div className="mission-control"></div>
        <div className="bg-galaxy"></div>
      </main>
    </>
  );
};

export default KickstarterVip;