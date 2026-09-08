import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../app/page';
import PrivacyPage from '../app/privacidad/page';
import TermsPage from '../app/terminos/page';
import '../app/globals.css';

const path = window.location.pathname.replace(/\/$/, '') || '/';
const Page = path === '/privacidad' ? PrivacyPage : path === '/terminos' ? TermsPage : Home;

createRoot(document.getElementById('root')!).render(<StrictMode><Page /></StrictMode>);
