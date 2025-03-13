
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import DashboardPage from './pages/Dashboard';
import NotFoundPage from './pages/NotFound';
import TransactionsPage from './pages/Transactions';
import WalletPage from './pages/Wallet';
import NFTsPage from './pages/NFTs';
import AboutPage from './pages/About';
import LearnPage from './pages/Learn';
import DevelopersPage from './pages/Developers';
import SecurityPage from './pages/Security';
import SpeedPage from './pages/Speed';
import { Toaster } from "@/components/ui/toaster";
import { WalletProvider } from './providers/WalletProvider';
import EnhancedWalletInitializer from './components/EnhancedWalletInitializer';
import { ThemeProvider } from './providers/ThemeProvider';
import { AuthProvider } from './providers/AuthProvider';
import LoginPage from './pages/Auth/Login';
import SignupPage from './pages/Auth/Signup';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <WalletProvider>
        <AuthProvider>
          <EnhancedWalletInitializer />
          <Router>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="/nfts" element={<NFTsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/learn/:topic" element={<LearnPage />} />
              <Route path="/learn/security" element={<SecurityPage />} />
              <Route path="/learn/speed" element={<SpeedPage />} />
              <Route path="/developers" element={<DevelopersPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
          <Toaster />
        </AuthProvider>
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;
