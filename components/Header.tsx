import React from 'react';
import { Landmark, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface HeaderProps {
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = CONTENT[lang];

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
              <div className="bg-india-orange p-2 rounded-lg">
                <Landmark className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Scheme<span className="text-india-orange">Setu</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button onClick={scrollToHowItWorks} className="text-gray-500 hover:text-india-orange px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {t.howItWorks}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-india-orange"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <button onClick={scrollToHowItWorks} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {t.howItWorks}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};