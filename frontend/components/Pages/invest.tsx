import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const Invest = () => {
  const { account } = useWallet();
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [riskProfile, setRiskProfile] = useState("Balanced");
  const [investmentHorizon, setInvestmentHorizon] = useState("30 Days");

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8 pb-12">
      <h1 className="text-2xl font-bold mb-6">Invest Your Capital</h1>
      
      <div className="border border-gray-200 rounded-md p-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2 className="text-xl font-bold">Investment Preferences</h2>
        </div>
        <p className="text-gray-600 mb-6">Tell us how you'd like to invest, and we'll find the best opportunities.</p>
        
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 mb-2">Investment Amount (USD)</p>
            <input
              type="text"
              placeholder="e.g., 500"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-2">Risk Profile</p>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="riskProfile"
                  checked={riskProfile === "Conservative"}
                  onChange={() => setRiskProfile("Conservative")}
                  className="h-4 w-4"
                />
                <span>Conservative</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="riskProfile"
                  checked={riskProfile === "Balanced"}
                  onChange={() => setRiskProfile("Balanced")}
                  className="h-4 w-4"
                />
                <span>Balanced</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="riskProfile"
                  checked={riskProfile === "Aggressive"}
                  onChange={() => setRiskProfile("Aggressive")}
                  className="h-4 w-4"
                />
                <span>Aggressive</span>
              </label>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 mb-2">Investment Horizon</p>
            <div className="grid grid-cols-3 gap-6 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="horizon"
                  checked={investmentHorizon === "7 Days"}
                  onChange={() => setInvestmentHorizon("7 Days")}
                  className="h-4 w-4"
                />
                <span>7 Days</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="horizon"
                  checked={investmentHorizon === "30 Days"}
                  onChange={() => setInvestmentHorizon("30 Days")}
                  className="h-4 w-4"
                />
                <span>30 Days</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="horizon"
                  checked={investmentHorizon === "90 Days"}
                  onChange={() => setInvestmentHorizon("90 Days")}
                  className="h-4 w-4"
                />
                <span>90 Days</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="horizon"
                  checked={investmentHorizon === "1 Year"}
                  onChange={() => setInvestmentHorizon("1 Year")}
                  className="h-4 w-4"
                />
                <span>1 Year</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="horizon"
                  checked={investmentHorizon === "2 Years"}
                  onChange={() => setInvestmentHorizon("2 Years")}
                  className="h-4 w-4"
                />
                <span>2 Years</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="horizon"
                  checked={investmentHorizon === "Custom"}
                  onChange={() => setInvestmentHorizon("Custom")}
                  className="h-4 w-4"
                />
                <span>Custom</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Button 
            className="bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded"
          >
            Find Investment Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Invest;