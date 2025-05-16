import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { account } = useWallet();

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8 pb-12">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>
      
      <div className="border border-gray-200 rounded-md p-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-bold">Portfolio Overview</h2>
        </div>
        <p className="text-gray-600 mb-6">Summary of your investments and earnings.</p>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">NFT ID (Proof of Investment)</p>
            <p className="text-lg font-semibold">AY-NFT-007</p>
          </div>
          
          <div>
            <p className="text-gray-600">Total Invested (USD)</p>
            <p className="text-lg font-semibold">$5,000</p>
          </div>
          
          <div>
            <p className="text-gray-600">Current Portfolio Value (USD)</p>
            <p className="text-lg font-semibold">$5,250</p>
          </div>
          
          <div>
            <p className="text-gray-600">Estimated APY</p>
            <p className="text-lg font-semibold text-green-500">12.5%</p>
          </div>
          
          <div>
            <p className="text-gray-600">Active Investment Strategies</p>
            <p className="text-lg font-semibold">3</p>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button 
            className="bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Invest More Capital
          </Button>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-md p-6">
        <h2 className="text-xl font-bold mb-2">Active Investments</h2>
        <p className="text-gray-600 mb-6">Details about your ongoing investment strategies.</p>
        
        <p className="text-gray-600">
          Your active investments will be displayed here. (e.g., Strategy A: $2000 in Protocol X, Strategy B: $3000 in Protocol Y)
        </p>
      </div>
    </div>
  );
};

export default Dashboard;