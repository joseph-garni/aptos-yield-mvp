import { WalletSelector } from "./WalletSelector";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto w-full flex-wrap">
        <div className="flex items-center gap-2">
          {/* You can add your logo here */}
          <img 
            src="/icons/aptos-logo.png" 
            alt="Aptos Yield Logo" 
            className="w-10 h-10 rounded-full" 
          />
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Aptos Yield
          </h1>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#" className="hover:text-blue-400 transition-colors">Dashboard</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Invest</a>
        </nav>

        <div className="flex gap-4 items-center">
          {/* Wallet connection button */}
          <WalletSelector />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-1 bg-slate-900">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="py-2 px-3 hover:bg-slate-700 rounded">Dashboard</a>
            <a href="#" className="py-2 px-3 hover:bg-slate-700 rounded">Invest</a>
          </nav>
        </div>
      )}
    </header>
  );
}