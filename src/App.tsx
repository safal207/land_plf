import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Documentation from './pages/Documentation';
import Support from './pages/Support';
import SystemStatus from './pages/SystemStatus';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/support" element={<Support />} />
        <Route path="/status" element={<SystemStatus />} />

      </Routes>
    </Layout>
  );
}

export default App;
