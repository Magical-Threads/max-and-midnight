import kickstarterLogo from '../assets/logo-kickstarter.svg';
import maxMidnightLogo from '../assets/logo-max-and-midnight.webp';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
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