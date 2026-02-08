# Scheme-Setu

An AI-powered web application that helps Indian citizens discover government schemes and benefits they are eligible for. Built with React, TypeScript, and Google Gemini AI.

## About

Scheme-Setu ("Bridge to Schemes" in Hindi) is a smart government aid matcher that simplifies the process of finding relevant welfare programs. Users provide their demographic and socioeconomic details, and the AI analyzes this information to recommend suitable central and state government schemes.

### Key Features

- **AI-Powered Matching**: Uses Google Gemini to intelligently match user profiles with relevant schemes
- **User-Friendly Interface**: Clean, intuitive form to capture user information
- **Detailed Results**: Displays scheme names, descriptions, eligibility criteria, and benefits
- **Privacy-Focused**: No personal data is stored; all processing happens in real-time
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | Frontend UI framework |
| TypeScript | Type-safe JavaScript |
| Vite | Build tool and dev server |
| Google Gemini AI | Scheme matching and recommendations |
| Lucide React | UI icons |

## Project Structure

```
scheme-setu/
├── App.tsx              # Main application component
├── index.tsx            # React entry point
├── index.html           # HTML template
├── types.ts             # TypeScript type definitions
├── constants.ts         # App constants and content
├── vite.config.ts       # Vite configuration
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── InputForm.tsx    # User profile input form
│   ├── SchemeCard.tsx   # Individual scheme display card
│   └── SchemeList.tsx   # List of matched schemes
└── services/
    └── gemini.ts        # Gemini AI integration
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/scheme-setu.git
   cd scheme-setu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory (or edit the existing one):
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

## Running the Application

### Development Mode

Start the development server with hot-reload:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## How It Works

1. **Enter Your Details**: Fill in the form with your demographic information (age, income, occupation, state, etc.)
2. **AI Analysis**: The app sends your profile to Google Gemini AI for intelligent analysis
3. **Get Recommendations**: Receive a personalized list of government schemes you may be eligible for

## Environment Variables

| Variable         | Description                | Required           |
|------------------|----------------------------|--------------------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes                |

## Contributing

- Sahil Golatgaonkar
- Khushi Gojanur (@Khushi1-1011)

## Disclaimer

This application provides information about government schemes for educational purposes. Always verify eligibility and application procedures through official government portals.

## License

This project is open source and available under the [MIT License](LICENSE).
