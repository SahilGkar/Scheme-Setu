import React from 'react';
import { Scheme, Language } from '../types';
import { CONTENT } from '../constants';
import { ExternalLink, CheckCircle2, Building2, GraduationCap, HeartPulse, Home, Banknote, Briefcase } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  lang: Language;
}

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Education': return <GraduationCap className="h-5 w-5 text-blue-600" />;
    case 'Health': return <HeartPulse className="h-5 w-5 text-red-500" />;
    case 'Housing': return <Home className="h-5 w-5 text-orange-600" />;
    case 'Pension': return <Banknote className="h-5 w-5 text-green-600" />;
    case 'Business': return <Briefcase className="h-5 w-5 text-purple-600" />;
    default: return <Building2 className="h-5 w-5 text-gray-600" />;
  }
};

export const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, lang }) => {
  const t = CONTENT[lang];
  
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200`}>
              {scheme.provider}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
               {scheme.probability}% {t.match}
            </span>
          </div>
          <CategoryIcon category={scheme.category} />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{scheme.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{scheme.description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t.benefits}</h4>
          <p className="text-sm font-semibold text-india-blue bg-blue-50 p-2 rounded-md border border-blue-100">
            {scheme.benefits}
          </p>
        </div>

        <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t.eligibility}</h4>
            <ul className="space-y-1">
                {scheme.eligibility.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 mt-auto">
        <a 
          href={scheme.applicationLink || `https://www.google.com/search?q=${encodeURIComponent(scheme.name + " apply online")}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-india-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
        >
          {t.viewDetails} <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};