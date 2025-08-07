import { Routes, Route, Link } from 'react-router-dom';
import KickstarterVip from './pages/KickstarterVip';
import Home from './pages/Home';

function App() {
  return (
    <>
      <nav style={{ display: 'none' }}>
        <Link to="/">Home</Link> | <Link to="/kickstarter-vip">Kickstarter VIP</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kickstarter-vip" element={<KickstarterVip />} />
      </Routes>
    </>
  )
}

export default App
