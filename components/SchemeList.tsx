import React from 'react';
import { Scheme, Language } from '../types';
import { SchemeCard } from './SchemeCard';
import { CONTENT } from '../constants';
import { Filter } from 'lucide-react';

interface SchemeListProps {
  schemes: Scheme[];
  lang: Language;
}

export const SchemeList: React.FC<SchemeListProps> = ({ schemes, lang }) => {
  const [filter, setFilter] = React.useState<string>('All');
  const t = CONTENT[lang];
  
  const categories = ['All', ...Array.from(new Set(schemes.map(s => s.category)))];

  const filteredSchemes = filter === 'All' 
    ? schemes 
    : schemes.filter(s => s.category === filter);

  if (schemes.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="results">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
           <h2 className="text-3xl font-bold text-gray-900">{t.matchesTitle}</h2>
           <p className="text-gray-600 mt-1">{t.matchesDesc.replace('{n}', schemes.length.toString())}</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
           <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
             <span className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase flex items-center gap-1">
               <Filter className="h-3 w-3" /> {t.filter}
             </span>
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all whitespace-nowrap ${
                   filter === cat 
                     ? 'bg-india-orange text-white shadow-sm' 
                     : 'text-gray-600 hover:bg-gray-100'
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSchemes.map((scheme, index) => (
          <SchemeCard key={index} scheme={scheme} lang={lang} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <p className="text-sm text-gray-500 bg-yellow-50 inline-block px-4 py-2 rounded-lg border border-yellow-100">
           {t.disclaimer}
         </p>
      </div>
    </div>
  );
};