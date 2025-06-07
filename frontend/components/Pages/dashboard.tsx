import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { account: _account } = useWallet();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample data for the portfolio performance chart
  const performanceData = [
    { month: "Jan", value: 5000 },
    { month: "Feb", value: 5120 },
    { month: "Mar", value: 5050 },
    { month: "Apr", value: 5200 },
    { month: "May", value: 5180 },
    { month: "Jun", value: 5250 }
  ];
  
  // Sample data for active investments
  const activeInvestments = [
    {
      id: "ST-001",
      name: "Lending",
      protocol: "Ares Market",
      amount: 2000,
      apy: 4.5,
      startDate: "2025-04-15",
      endDate: "2025-05-15",
      status: "Active"
    },
    {
      id: "ST-002",
      name: "DEX",
      protocol: "Thala Labs",
      amount: 1500,
      apy: 3.8,
      startDate: "2025-04-10",
      endDate: "2025-07-10",
      status: "Active"
    },
    {
      id: "ST-003",
      name: "Yield Farming",
      protocol: "Pancake Swap",
      amount: 1500,
      apy: 5.2,
      startDate: "2025-04-20",
      endDate: "2025-05-20",
      status: "Active"
    }
  ];
  
  // Function to calculate days remaining
  const calculateDaysRemaining = (endDate: string | Date) => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };
  
  // Calculate total earnings 
  const calculateTotalEarnings = () => {
    return activeInvestments.reduce((total, investment) => {
      const investmentDuration = calculateDaysRemaining(investment.endDate);
      const dailyReturn = (investment.amount * (investment.apy / 100)) / 365;
      return total + (dailyReturn * investmentDuration);
    }, 0);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8 pb-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Dashboard</h1>
        <Link to="/invest">
          <Button className="bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Investment
          </Button>
        </Link>
      </div>
      
      {/* Dashboard tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'investments' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('investments')}
        >
          Investments
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'nfts' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('nfts')}
        >
          NFTs
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <>
          {/* Portfolio Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Invested</p>
                  <p className="text-2xl font-bold">$5,000</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Last investment: <span className="text-gray-700">2 days ago</span></p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Value</p>
                  <p className="text-2xl font-bold">$5,250</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Growth: <span className="text-green-600">+$250 (5%)</span></p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Est. Annual Yield</p>
                  <p className="text-2xl font-bold">12.5%</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Projected earnings: <span className="text-purple-600">+$625/year</span></p>
              </div>
            </div>
          </div>
          
          {/* Portfolio Overview */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Portfolio Overview</h2>
              <div className="text-sm text-gray-500">NFT ID: <span className="font-mono text-gray-700">AY-NFT-007</span></div>
            </div>
            
            {/* Chart visualization */}
            <div className="h-64 mb-6">
              <div className="h-full w-full relative">
                <div className="absolute inset-0 flex items-end">
                  {performanceData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full max-w-[30px] bg-indigo-500 rounded-t"
                        style={{ 
                          height: `${((data.value - 5000) / 250) * 100}%`,
                          opacity: 0.7 + (index / (performanceData.length * 2))
                        }}
                      ></div>
                      <p className="text-xs text-gray-500 mt-2">{data.month}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 flex flex-col justify-between py-4">
                  <p className="text-xs text-gray-500">$5,250</p>
                  <p className="text-xs text-gray-500">$5,125</p>
                  <p className="text-xs text-gray-500">$5,000</p>
                </div>
              </div>
            </div>
            
            {/* Portfolio allocation */}
            <h3 className="text-lg font-semibold mb-4">Asset Allocation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center p-4 border border-gray-100 rounded-md">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Liquidity Pools</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <p className="text-sm font-medium ml-4">40%</p>
              </div>
              <div className="flex items-center p-4 border border-gray-100 rounded-md">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Staking</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <p className="text-sm font-medium ml-4">30%</p>
              </div>
              <div className="flex items-center p-4 border border-gray-100 rounded-md">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Yield Farming</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <p className="text-sm font-medium ml-4">30%</p>
              </div>
            </div>
          </div>
          
          {/* Active Strategies Preview */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Active Strategies</h2>
              <button 
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                onClick={() => setActiveTab('investments')}
              >
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APY</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Left</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activeInvestments.slice(0, 2).map((investment) => (
                    <tr key={investment.id}>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-1">
                            <div className="text-sm font-medium text-gray-900">{investment.name}</div>
                            <div className="text-sm text-gray-500">{investment.protocol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">${investment.amount.toLocaleString()}</div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="text-sm text-green-600">{investment.apy}%</div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-700">
                        {calculateDaysRemaining(investment.endDate)} days
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      
      {activeTab === 'investments' && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Active Investments</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protocol</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APY</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeInvestments.map((investment) => (
                  <tr key={investment.id}>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{investment.name}</div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{investment.protocol}</div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${investment.amount.toLocaleString()}</div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm text-green-600">{investment.apy}%</div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{investment.startDate}</div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{investment.endDate}</div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {investment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {activeTab === 'nfts' && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Your Investment NFTs</h2>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 mb-6 max-w-md mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-5 border border-white border-opacity-20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-semibold">APT Yield NFT</span>
                <span className="text-white font-mono">AY-NFT-007</span>
              </div>
              
              <div className="flex flex-col gap-2 text-white mb-4">
                <div className="flex justify-between">
                  <span>Total Value:</span>
                  <span className="font-semibold">$5,250</span>
                </div>
                <div className="flex justify-between">
                  <span>Yield Rate:</span>
                  <span className="font-semibold">12.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Strategies:</span>
                  <span className="font-semibold">3 Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Created:</span>
                  <span className="font-semibold">Apr 15, 2025</span>
                </div>
              </div>
              
              <div className="text-xs text-white text-opacity-70 text-center">
                This NFT represents your ownership of this investment portfolio on the Aptos blockchain
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500">
            <p>This NFT is your proof of investment and represents your entire portfolio.</p>
            <p className="mt-2">You can transfer or trade this NFT while maintaining your investment position.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;