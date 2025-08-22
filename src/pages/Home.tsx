import MetaTags from '../components/MetaTags';
import ogImage from '../assets/max-and-midnight-kickstarter-facebook.jpg';
import twitterImage from '../assets/max-and-midnight-kickstarter-twitter.jpg';
import kickstarterLogo from '../assets/logo-kickstarter.svg';
import maxMidnightLogo from '../assets/logo-max-and-midnight.webp';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Max & Midnight Series: Early Access & Reserved Launch Deal"
        description="Join the Max & Midnight series squad for secret updates, launch-day deals, and exclusive Kickstarter campaign rewards. Secure your spot now!"
        url="https://maxandmidnight.com"
        ogImage={ogImage}
        twitterImage={twitterImage}
      />

      <main className="page-home">
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
            
              <h1>
                <span>Secret Agent Adventure</span>
                <span>Get Early Access to Max & Midnight</span>
              </h1>
            </div>
          </div>

          <div className="hero-bg--wrap">
            <div className="hero-bg--char">
              <div className="hero-char--max"></div>
              <div className="hero-char--midnight"></div>
            </div>
            <div className="hero-bg"></div> 
          </div>

          <div className="scroll-down">
            <span>Scroll</span>

             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10.6833L27.65 8.33331L20 15.9666L12.35 8.33331L10 10.6833L20 20.6833L30 10.6833Z" fill="white"/>
                <path d="M30 21.6667L27.65 19.3167L20 26.95L12.35 19.3167L10 21.6667L20 31.6667L30 21.6667Z" fill="white"/>
            </svg>

          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="text-block flex-column--center">
              <h2>Be the first to join secret missions and unlock the best Kickstarter launch deal.</h2>
              <ul>
                <li>Early access to exclusive rewards</li>
                <li>Special behind-the-scenes updates</li>
                <li>Limited-time discounts for fans</li>
              </ul>
              <p>Loved by 100,000+ fans worldwide - Nearly even split of kid & adult viewers - Season 1 funded by backers!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;