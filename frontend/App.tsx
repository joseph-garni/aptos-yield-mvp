import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// Internal Components
import { Header } from "@/components/Header";
// Page Components
import Dashboard from "@/components/Pages/dashboard";
import Invest from "@/components/Pages/invest";

function App() {
  const { connected } = useWallet();

  // Feature cards data
  const featureCards = [
    {
      title: "Connect Seamlessly",
      description: "Integrate your Aptos wallet in seconds and start your investment journey."
    },
    {
      title: "Smart Allocation",
      description: "Our AI-powered engine matches your capital to high-yield Aptos protocols based on your risk appetite."
    },
    {
      title: "NFT Ownership",
      description: "Receive an NFT representing your investment, ensuring transparent and secure ownership."
    }
  ];

  // Landing page content when not connected
  const LandingPage = () => (
    <div className="flex flex-col items-center max-w-5xl mx-auto px-4 mt-16 mb-24">
      <h1 className="text-5xl font-bold text-center text-purple-500 mb-6">
        Welcome to Aptos Yield
      </h1>
      
      <p className="text-xl text-gray-600 text-center max-w-3xl mb-12">
        Maximize your returns on the Aptos blockchain. Connect your
        wallet, choose your risk profile, and let our smart engine allocate
        your capital for optimal yield.
      </p>
      
      <button 
        className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-6 rounded-md flex items-center gap-2 mb-20"
        onClick={() => {}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        Get Started
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {featureCards.map((card, index) => (
          <div key={index} className="shadow-lg border border-gray-200 hover:shadow-xl transition-shadow p-6">
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  console.log("Wallet connected status:", connected);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Modified these routes to test without protection first */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invest" element={<Invest />} />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;