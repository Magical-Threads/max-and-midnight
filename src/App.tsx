import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import KickstarterVip from './pages/KickstarterVip';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/kickstarter-vip">Kickstarter VIP</Link>
        <Link to="/thank-you">Thank you</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kickstarter-vip" element={<KickstarterVip />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  )
}

export default App
