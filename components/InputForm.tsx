import React, { useState } from 'react';
import { UserProfile, Language } from '../types';
import { INDIAN_STATES, CASTES, OCCUPATIONS, GENDERS, CONTENT } from '../constants';
import { Search, MapPin, Briefcase, User, Users, Wallet } from 'lucide-react';

interface InputFormProps {
  onSubmit: (profile: UserProfile) => void;
  isLoading: boolean;
  lang: Language;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading, lang }) => {
  const [profile, setProfile] = useState<UserProfile>({
    age: '',
    gender: 'Male',
    income: '',
    caste: 'General',
    state: '',
    occupation: 'Student',
    disability: false,
    student: false,
  });

  const t = CONTENT[lang];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setProfile(prev => ({ ...prev, [name]: checked }));
    } else {
        setProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.age && profile.income && profile.state) {
      onSubmit(profile);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-india-blue to-blue-800 px-6 py-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <User className="h-5 w-5" />
          {t.formTitle}
        </h2>
        <p className="text-blue-100 text-sm mt-1">{t.formDesc}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Age & Gender */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.age}</label>
              <div className="relative">
                <input
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  placeholder="e.g. 24"
                  className="block w-full bg-white rounded-lg border-gray-300 pl-3 pr-3 py-2.5 border focus:ring-india-orange focus:border-india-orange sm:text-sm shadow-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.gender}</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="block w-full bg-white rounded-lg border-gray-300 py-2.5 px-3 border focus:ring-india-orange focus:border-india-orange sm:text-sm shadow-sm"
              >
                {GENDERS.map(g => (
                    <option key={g.value} value={g.value}>{g.label[lang]}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Income & Caste */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Wallet className="h-4 w-4 text-gray-400" /> {t.income}
              </label>
              <input
                type="number"
                name="income"
                value={profile.income}
                onChange={handleChange}
                placeholder="e.g. 150000"
                className="block w-full bg-white rounded-lg border-gray-300 pl-3 pr-3 py-2.5 border focus:ring-india-orange focus:border-india-orange sm:text-sm shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Users className="h-4 w-4 text-gray-400" /> {t.caste}
              </label>
              <select
                name="caste"
                value={profile.caste}
                onChange={handleChange}
                className="block w-full bg-white rounded-lg border-gray-300 py-2.5 px-3 border focus:ring-india-orange focus:border-india-orange sm:text-sm shadow-sm"
              >
                {CASTES.map(c => <option key={c.value} value={c.value}>{c.label[lang]}</option>)}
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <MapPin className="h-4 w-4 text-gray-400" /> {t.state}
            </label>
            <select
              name="state"
              value={profile.state}
              onChange={handleChange}
              className="block w-full bg-white rounded-lg border-gray-300 py-2.5 px-3 border focus:ring-india-orange focus:border-india-orange sm:text-sm shadow-sm"
              required
            >
              <option value="">{t.selectState}</option>
              {INDIAN_STATES.map(s => <option key={s.value} value={s.value}>{s.label[lang]}</option>)}
            </select>
          </div>

          {/* Occupation */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              <Briefcase className="h-4 w-4 text-gray-400" /> {t.occupation}
            </label>
            <select
              name="occupation"
              value={profile.occupation}
              onChange={handleChange}
              className="block w-full bg-white rounded-lg border-gray-300 py-2.5 px-3 border focus:ring-india-orange focus:border-india-orange sm:text-sm shadow-sm"
            >
              {OCCUPATIONS.map(o => <option key={o.value} value={o.value}>{o.label[lang]}</option>)}
            </select>
          </div>

          {/* Toggles */}
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-6 pt-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="disability"
                checked={profile.disability}
                onChange={handleChange}
                className="h-5 w-5 text-india-orange focus:ring-india-orange border-gray-300 rounded"
              />
              <span className="text-gray-700 text-sm font-medium">{t.disability}</span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white transition-all duration-200 
              ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-india-orange hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-0.5'}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.analyzing}
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                {t.searchButton}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};