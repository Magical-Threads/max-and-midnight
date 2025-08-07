import kickstarterLogo from '../assets/logo-kickstarter.svg';
import maxMidnightLogo from '../assets/logo-max-and-midnight.webp';
import screenOne from '../assets/screen-img-1.webp';
import screenTwo from '../assets/screen-img-2.webp';
import screenThree from '../assets/screen-img-3.webp';
import './KickstarterVip.css';

const KickstarterVip: React.FC = () => {
  return (
    <>
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

              <div>
                <span>VIP</span>
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

                <a href="#" className="button">Reserve for $1</a>
              </div>
            </div>
          </div>
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
        </div>

        <div className="mission-control"></div>
        <div className="bg-galaxy"></div>
      </main>
    </>
  );
};

export default KickstarterVip;