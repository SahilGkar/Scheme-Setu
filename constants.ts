import { Language } from './types';

export const INDIAN_STATES = [
  { value: "Andhra Pradesh", label: { en: "Andhra Pradesh", hi: "आंध्र प्रदेश" } },
  { value: "Arunachal Pradesh", label: { en: "Arunachal Pradesh", hi: "अरुणाचल प्रदेश" } },
  { value: "Assam", label: { en: "Assam", hi: "असम" } },
  { value: "Bihar", label: { en: "Bihar", hi: "बिहार" } },
  { value: "Chhattisgarh", label: { en: "Chhattisgarh", hi: "छत्तीसगढ़" } },
  { value: "Goa", label: { en: "Goa", hi: "गोवा" } },
  { value: "Gujarat", label: { en: "Gujarat", hi: "गुजरात" } },
  { value: "Haryana", label: { en: "Haryana", hi: "हरियाणा" } },
  { value: "Himachal Pradesh", label: { en: "Himachal Pradesh", hi: "हिमाचल प्रदेश" } },
  { value: "Jharkhand", label: { en: "Jharkhand", hi: "झारखंड" } },
  { value: "Karnataka", label: { en: "Karnataka", hi: "कर्नाटक" } },
  { value: "Kerala", label: { en: "Kerala", hi: "केरल" } },
  { value: "Madhya Pradesh", label: { en: "Madhya Pradesh", hi: "मध्य प्रदेश" } },
  { value: "Maharashtra", label: { en: "Maharashtra", hi: "महाराष्ट्र" } },
  { value: "Manipur", label: { en: "Manipur", hi: "मणिपुर" } },
  { value: "Meghalaya", label: { en: "Meghalaya", hi: "मेघालय" } },
  { value: "Mizoram", label: { en: "Mizoram", hi: "मिजोरम" } },
  { value: "Nagaland", label: { en: "Nagaland", hi: "नागालैंड" } },
  { value: "Odisha", label: { en: "Odisha", hi: "ओडिशा" } },
  { value: "Punjab", label: { en: "Punjab", hi: "पंजाब" } },
  { value: "Rajasthan", label: { en: "Rajasthan", hi: "राजस्थान" } },
  { value: "Sikkim", label: { en: "Sikkim", hi: "सिक्किम" } },
  { value: "Tamil Nadu", label: { en: "Tamil Nadu", hi: "तमिलनाडु" } },
  { value: "Telangana", label: { en: "Telangana", hi: "तेलंगाना" } },
  { value: "Tripura", label: { en: "Tripura", hi: "त्रिपुरा" } },
  { value: "Uttar Pradesh", label: { en: "Uttar Pradesh", hi: "उत्तर प्रदेश" } },
  { value: "Uttarakhand", label: { en: "Uttarakhand", hi: "उत्तराखंड" } },
  { value: "West Bengal", label: { en: "West Bengal", hi: "पश्चिम बंगाल" } },
  { value: "Delhi", label: { en: "Delhi", hi: "दिल्ली" } },
  { value: "Jammu and Kashmir", label: { en: "Jammu and Kashmir", hi: "जम्मू और कश्मीर" } },
  { value: "Ladakh", label: { en: "Ladakh", hi: "लद्दाख" } },
  { value: "Puducherry", label: { en: "Puducherry", hi: "पुदुचेरी" } }
];

export const CASTES = [
  { value: "General", label: { en: "General", hi: "सामान्य (General)" } },
  { value: "OBC (Other Backward Class)", label: { en: "OBC (Other Backward Class)", hi: "अन्य पिछड़ा वर्ग (OBC)" } },
  { value: "SC (Scheduled Caste)", label: { en: "SC (Scheduled Caste)", hi: "अनुसूचित जाति (SC)" } },
  { value: "ST (Scheduled Tribe)", label: { en: "ST (Scheduled Tribe)", hi: "अनुसूचित जनजाति (ST)" } },
  { value: "EWS (Economically Weaker Section)", label: { en: "EWS (Economically Weaker Section)", hi: "आर्थिक रूप से कमजोर वर्ग (EWS)" } }
];

export const OCCUPATIONS = [
  { value: "Student", label: { en: "Student", hi: "छात्र" } },
  { value: "Farmer", label: { en: "Farmer", hi: "किसान" } },
  { value: "Daily Wage Worker", label: { en: "Daily Wage Worker", hi: "दिहाड़ी मजदूर" } },
  { value: "Small Business Owner", label: { en: "Small Business Owner", hi: "छोटा व्यापारी" } },
  { value: "Unemployed", label: { en: "Unemployed", hi: "बेरोजगार" } },
  { value: "Private Sector Employee", label: { en: "Private Sector Employee", hi: "निजी क्षेत्र कर्मचारी" } },
  { value: "Government Employee", label: { en: "Government Employee", hi: "सरकारी कर्मचारी" } },
  { value: "Retired", label: { en: "Retired", hi: "सेवानिवृत्त" } },
  { value: "Homemaker", label: { en: "Homemaker", hi: "गृहिणी" } },
  { value: "Artisan/Craftsman", label: { en: "Artisan/Craftsman", hi: "कारीगर/शिल्पकार" } }
];

export const GENDERS = [
  { value: "Male", label: { en: "Male", hi: "पुरुष" } },
  { value: "Female", label: { en: "Female", hi: "महिला" } },
  { value: "Other", label: { en: "Other", hi: "अन्य" } }
];

export const SCHEME_CATEGORIES = [
  'Education', 'Health', 'Agriculture', 'Business', 'Housing', 'Pension', 'Other'
];

export const CONTENT = {
  en: {
    heroTitle: "Unlock the Benefits",
    heroSubtitle: "You Are Entitled To",
    heroDesc: "Billions in government aid go unclaimed. Enter your details to instantly find every subsidy, scholarship, and pension you qualify for.",
    formTitle: "Tell us about yourself",
    formDesc: "We don't save this data. It's only used to find your schemes.",
    age: "Age",
    gender: "Gender",
    income: "Annual Family Income (₹)",
    caste: "Category / Caste",
    state: "State / Union Territory",
    occupation: "Occupation",
    disability: "Person with Disability",
    searchButton: "Find My Schemes",
    analyzing: "Analysing Eligibility...",
    matchesTitle: "Your Matches",
    matchesDesc: "We found {n} schemes you are likely eligible for.",
    filter: "Filter",
    disclaimer: "⚠️ Disclaimer: Scheme-Setu uses AI to find information. Always verify details on the official government website before applying.",
    viewDetails: "View Details & Apply",
    benefits: "Benefits",
    eligibility: "Eligibility Snapshot",
    match: "Match",
    howItWorks: "How it Works",
    switchLang: "हिंदी",
    step1: "Enter Details",
    step1Desc: "Provide basic demographics like age, income, and location.",
    step2: "AI Analysis",
    step2Desc: "Our AI scans thousands of government schemes instantly.",
    step3: "Get Matched",
    step3Desc: "Get a personalized list of benefits you can apply for.",
    loading1: "Analyzing your demographic profile...",
    loading2: "Scanning central and state government databases...",
    loading3: "Compiling eligibility criteria...",
    selectState: "Select State"
  },
  hi: {
    heroTitle: "सरकारी लाभ प्राप्त करें",
    heroSubtitle: "जिसके आप हकदार हैं",
    heroDesc: "अरबों की सरकारी सहायता बिना दावे के रह जाती है। अपनी सब्सिडी, छात्रवृत्ति और पेंशन खोजने के लिए अपना विवरण दर्ज करें।",
    formTitle: "अपने बारे में बताएं",
    formDesc: "हम यह डेटा सुरक्षित नहीं रखते। इसका उपयोग केवल आपकी योजनाएं खोजने के लिए किया जाता है।",
    age: "आयु (Age)",
    gender: "लिंग (Gender)",
    income: "वार्षिक पारिवारिक आय (₹)",
    caste: "श्रेणी / जाति (Caste)",
    state: "राज्य (State)",
    occupation: "व्यवसाय (Occupation)",
    disability: "दिव्यांगजन (Person with Disability)",
    searchButton: "मेरी योजनाएं खोजें",
    analyzing: "पात्रता की जांच हो रही है...",
    matchesTitle: "आपकी योजनाएं",
    matchesDesc: "हमें {n} योजनाएं मिली हैं जिनके लिए आप पात्र हो सकते हैं।",
    filter: "फ़िल्टर",
    disclaimer: "⚠️ अस्वीकरण: स्कीम-सेतु जानकारी खोजने के लिए AI का उपयोग करता है। आवेदन करने से पहले हमेशा आधिकारिक सरकारी वेबसाइट पर विवरण सत्यापित करें।",
    viewDetails: "विवरण देखें और आवेदन करें",
    benefits: "लाभ",
    eligibility: "पात्रता मानदंड",
    match: "मैच",
    howItWorks: "यह कैसे काम करता है",
    switchLang: "English",
    step1: "विवरण दर्ज करें",
    step1Desc: "आयु, आय और स्थान जैसे बुनियादी विवरण प्रदान करें।",
    step2: "AI विश्लेषण",
    step2Desc: "हमारा AI तुरंत हजारों सरकारी योजनाओं को स्कैन करता है।",
    step3: "योजनाएं प्राप्त करें",
    step3Desc: "उन लाभों की सूची प्राप्त करें जिनके लिए आप आवेदन कर सकते हैं।",
    loading1: "आपकी प्रोफ़ाइल का विश्लेषण किया जा रहा है...",
    loading2: "केंद्र और राज्य सरकार के डेटाबेस को स्कैन कर रहा है...",
    loading3: "पात्रता मानदंड संकलित कर रहा है...",
    selectState: "राज्य चुनें"
  }
};