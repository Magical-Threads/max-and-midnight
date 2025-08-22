import MetaTags from '../components/MetaTags';
import ogImage from '../assets/max-and-midnight-kickstarter-facebook.jpg';
import twitterImage from '../assets/max-and-midnight-kickstarter-twitter.jpg';
import kickstarterLogo from '../assets/logo-kickstarter.svg';
import maxMidnightLogo from '../assets/logo-max-and-midnight.webp';

const ThankYou: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Max & Midnight Series: Early Access & Reserved Launch Deal"
        description="Join the Max & Midnight series squad for secret updates, launch-day deals, and exclusive Kickstarter campaign rewards. Secure your spot now!"
        url="https://maxandmidnight.com"
        ogImage={ogImage}
        twitterImage={twitterImage}
      />

      <main className="page-thank-you">
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

              <h1>Mission Upgrade Complete</h1>
            
              <p className="fs-h1">VIP Access Secured!</p>

              <div className="content">
                <p>You’ve officially joined the elite circle of backers leading the way into Max & Midnight Season 2. Your spot is locked in—you’ll receive early insights, priority rewards, and insider exclusives before anyone else.</p>          
                <p>You’re not just watching the story—you’re shaping it. Thousands of fans are rallying to make this season a reality, and as a VIP, you’re front and center.</p>
                <p>Share your VIP status with friends and invite them to join the mission.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-galaxy"></div>
      </main>

    </>
  );
};

export default ThankYou;