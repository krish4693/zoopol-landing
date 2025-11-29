import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="refund-policy" element={<RefundPolicyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}