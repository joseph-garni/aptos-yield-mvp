import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";
// Internal Components
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { Button } from "@/components/ui/button";
import { TransferAPT } from "@/components/TransferAPT";
import { MessageBoard } from "@/components/MessageBoard";

function App() {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState("dashboard");

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
      
      <Button 
        className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-6 rounded-md flex items-center gap-2 mb-20"
        onClick={() => {}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        Get Started
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {featureCards.map((card, index) => (
          <Card key={index} className="shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Dashboard content when connected
  const Dashboard = () => (
    <div className="max-w-5xl mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Total Value Locked</h3>
            <p className="text-3xl font-bold">0.00 APT</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Current Yield</h3>
            <p className="text-3xl font-bold">0.00%</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-2">Portfolio Balance</h3>
            <p className="text-3xl font-bold">0.00 APT</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="shadow-md mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Your Wallet</h2>
          <WalletDetails />
        </CardContent>
      </Card>
      
      {/* Preserving the original TransferAPT and MessageBoard functionality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Transfer APT</h2>
            <TransferAPT />
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Message Board</h2>
            <MessageBoard />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Invest page (placeholder for now)
  const InvestPage = () => (
    <div className="max-w-5xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold mb-6">Investment Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Liquidity Pool</h2>
            <p className="text-gray-600 mb-4">Provide liquidity to DEXs and earn fees</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">APY: 4.5%</span>
              <Button className="bg-purple-600 hover:bg-purple-700">Invest</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Staking</h2>
            <p className="text-gray-600 mb-4">Stake your APT for network security</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">APY: 3.8%</span>
              <Button className="bg-purple-600 hover:bg-purple-700">Invest</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Navigation handler
  const renderContent = () => {
    if (!connected) {
      return <LandingPage />;
    }
    
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "invest":
        return <InvestPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveTab("dashboard")}
              className={`${activeTab === "dashboard" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600"} font-medium`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab("invest")}
              className={`${activeTab === "invest" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600"} font-medium`}
            >
              Invest
            </button>
          </div>
        </div>
      </nav>
      
      {renderContent()}
    </div>
  );
}

export default App;
