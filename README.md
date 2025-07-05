# 🎸 Rochester Concerts

A modern, fast, and mobile-responsive web app for discovering upcoming concerts and live music events in Rochester, NY and surrounding venues including CMAC and Darien Lake. Honestly, just wanted to mess around and make a quick project with express on lightsail then realized I should actually publish this and lightsail is a bit much for something so basic. Shout out ticketmaster for the API! 5k a day tyvm... omw to partner HA!

Testing some SEO with astro as well, may or may not come back to this and add all of upstate NY.
ANYWAYS....

![Rochester Concerts](https://img.shields.io/badge/Live%20Music-Rochester%20NY-blue?style=for-the-badge)
![Performance](https://img.shields.io/badge/Performance-90%2B-green?style=for-the-badge)
![Mobile](https://img.shields.io/badge/Mobile-Responsive-purple?style=for-the-badge)

## ✨ Features

- **🎵 Live Concert Data** - Real-time events from Ticketmaster API
- **📱 Mobile-First Design** - Optimized for all screen sizes
- **🌙 Dark/Light Mode** - Automatic theme switching with system preference
- **🔍 Smart Filtering** - Filter by Rochester, CMAC, or Darien Lake venues
- **♾️ Infinite Scroll** - Smooth pagination for browsing events
- **📊 Auto-Refresh** - Concert data updates every 8 hours automatically
- **🚀 High Performance** - 90+ Lighthouse score with optimized loading
- **📈 Analytics Ready** - Google Analytics integration
- **🔗 Social Sharing** - Facebook, Twitter, and link copying
- **♿ Accessible** - WCAG compliant with ARIA labels and keyboard navigation

## 🛠 Tech Stack

### Frontend
- **[Astro](https://astro.build/)** - Static site generator for optimal performance
- **Pure CSS** - Custom responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript** - Lightweight, no framework bloat
- **Progressive Enhancement** - Works without JavaScript

### Backend
- **[Node.js](https://nodejs.org/)** - Runtime environment
- **[Express.js](https://expressjs.com/)** - Web server framework
- **[Ticketmaster API](https://developer.ticketmaster.com/)** - Live concert data source
- **Smart Caching** - In-memory cache with 8-hour refresh cycles

### Development
- **ESLint** - Code linting
- **Performance Monitoring** - Built-in metrics tracking
- **Error Handling** - Comprehensive error management
- **Logging** - Structured server logs

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Ticketmaster API key ([Get one here](https://developer.ticketmaster.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rochester-concerts.git
   cd rochester-concerts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Ticketmaster API key to `.env`:
   ```env
   TM_API_KEY=your_ticketmaster_api_key_here
   ```

4. **Start the development servers**
   ```bash
   # Terminal 1: Start the API server
   npm run start:server
   
   # Terminal 2: Start the frontend
   npm run dev
   ```

5. **Open your browser**
   - Frontend: `http://localhost:4321`
   - API: `http://localhost:4000/events`

## 📦 Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Recommended: Vercel (Free)
1. Push your code to GitHub
2. Connect your repo at [vercel.com](https://vercel.com)
3. Add your `TM_API_KEY` environment variable in Vercel dashboard
4. Deploy automatically with every push

### Alternative: Netlify
1. Build locally: `npm run build`
2. Upload `dist/` folder to [netlify.com](https://netlify.com)
3. Set up your API server separately

### Environment Variables
Make sure to set these in your deployment platform:
- `TM_API_KEY` - Your Ticketmaster API key
- `PORT` - Server port (default: 4000)

## 🔧 Configuration

### API Endpoints

- `GET /events` - Fetch all concerts (cached)
- `GET /health` - Server health and cache status
- `POST /refresh` - Force refresh concert data

### Cache Settings
- **Duration**: 8 hours
- **Auto-refresh**: Every 8 hours
- **Manual refresh**: Hit `/refresh` endpoint

### Venue Filtering
The app filters concerts by these categories:
- **All** - Every concert in the system
- **Rochester** - Local Rochester venues (excludes CMAC & Darien Lake)
- **CMAC** - Constellation Brands-Marvin Sands Performing Arts Center
- **Darien Lake** - Darien Lake Amphitheater events

## 📊 Performance Features

- **Critical CSS inlined** - Eliminates render-blocking stylesheets
- **Optimized JavaScript** - Minimal, efficient code with no frameworks
- **Image optimization** - Lazy loading and proper sizing
- **Caching strategy** - Smart API caching reduces external requests
- **Responsive design** - Mobile-first CSS Grid and Flexbox
- **Accessibility** - WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] **Email notifications** for new concerts
- [ ] **Favorite venues** - Save preferred venues
- [ ] **Calendar integration** - Add events to Google Calendar
- [ ] **Price tracking** - Monitor ticket price changes
- [ ] **Artist alerts** - Get notified when favorite artists announce shows
- [ ] **Venue reviews** - Community-driven venue information
- [ ] **Event recommendations** - Personalized concert suggestions

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/rochester-concerts/issues) page
2. Create a new issue with detailed information
3. Include browser version, device type, and steps to reproduce

## 🙏 Acknowledgments

- **[Ticketmaster](https://www.ticketmaster.com/)** - Concert data API
- **[Astro](https://astro.build/)** - Amazing static site generator
- **Rochester Music Community** - For inspiring this project

---

**Made with ❤️🎸 by Philip**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/rochester-concerts)
