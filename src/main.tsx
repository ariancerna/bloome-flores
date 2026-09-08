import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';
import './styles/global.css';

const path = window.location.pathname.replace(/\/$/, '') || '/';
const Page = path === '/privacidad' ? PrivacyPage : path === '/terminos' ? TermsPage : Home;

createRoot(document.getElementById('root')!).render(<StrictMode><Page /></StrictMode>);
