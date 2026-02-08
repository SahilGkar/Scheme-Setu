import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { SchemeList } from './components/SchemeList';
import { fetchSchemes } from './services/gemini';
import { UserProfile, Scheme, LoadingState, Language } from './types';
import { CONTENT } from './constants';
import { Sparkles, ClipboardCheck, BrainCircuit, Gift } from 'lucide-react';

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lang] = useState<Language>('en');
  
  const t = CONTENT[lang];

  const handleFormSubmit = async (profile: UserProfile) => {
    setLoadingState('analyzing');
    setError(null);
    setSchemes([]); // Clear previous

    try {
      // Simulate steps for better UX perception (and slight delay for API)
      setTimeout(() => setLoadingState('searching'), 1500);
      
      const results = await fetchSchemes(profile, lang);
      
      setLoadingState('compiling');
      setTimeout(() => {
        setSchemes(results);
        setLoadingState('complete');
        // Scroll to results
        setTimeout(() => {
            document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }, 800);

    } catch (err) {
      console.error(err);
      setError("We encountered an issue connecting to the AI service. Please try again.");
      setLoadingState('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Header lang={lang} />

      <main className="flex-grow flex flex-col items-center justify-start bg-slate-50 relative">
        {/* Hero Section Background Pattern */}
        <div className="absolute top-0 w-full h-96 bg-[#000080] overflow-hidden z-0">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          
          {/* Hero Content */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-100 text-sm font-medium mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                AI-Powered Government Aid Matcher
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {t.heroTitle} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
                {t.heroSubtitle}
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              {t.heroDesc}
            </p>
          </div>

          {/* Form Section */}
          <div className="transform transition-all">
             <InputForm onSubmit={handleFormSubmit} isLoading={loadingState !== 'idle' && loadingState !== 'complete' && loadingState !== 'error'} lang={lang} />
          </div>

          {/* Loading States / Progress */}
          {loadingState !== 'idle' && loadingState !== 'complete' && loadingState !== 'error' && (
            <div className="mt-8 text-center animate-pulse">
                <p className="text-india-blue font-medium text-lg">
                    {loadingState === 'analyzing' && t.loading1}
                    {loadingState === 'searching' && t.loading2}
                    {loadingState === 'compiling' && t.loading3}
                </p>
            </div>
          )}
          
           {/* Error Message */}
           {loadingState === 'error' && (
            <div className="mt-8 mx-auto max-w-md bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-sm">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-700">
                            {error}
                        </p>
                    </div>
                </div>
            </div>
           )}

        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">{t.howItWorks}</h2>
              <div className="w-20 h-1 bg-india-orange mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="h-8 w-8 text-india-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.step1}</h3>
                <p className="text-gray-600">{t.step1Desc}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BrainCircuit className="h-8 w-8 text-india-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.step2}</h3>
                <p className="text-gray-600">{t.step2Desc}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-india-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.step3}</h3>
                <p className="text-gray-600">{t.step3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {schemes.length > 0 && (
            <div className="w-full bg-white border-t border-gray-200 min-h-[500px]">
                <SchemeList schemes={schemes} lang={lang} />
            </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-xl font-bold text-white mb-4">Scheme-Setu</h3>
                <p className="text-gray-400 text-sm">
                    Connecting citizens to the aid they deserve. Built with Google Gemini.
                </p>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-white mb-4">Important Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white">National Portal of India</a></li>
                    <li><a href="#" className="hover:text-white">DBT Bharat</a></li>
                    <li><a href="#" className="hover:text-white">Startup India</a></li>
                </ul>
            </div>
            <div>
                 <h4 className="text-lg font-semibold text-white mb-4">Privacy</h4>
                 <p className="text-gray-400 text-sm">
                     We do not store your personal data. All processing is done in real-time.
                 </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;