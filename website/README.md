# Mule Digital Website

This repository contains the website for Mule Digital Group — a digital solutions company serving real communities.

## Project Overview

- **Framework**: Static HTML/CSS/JavaScript
- **Hosting**: Vercel
- **Build**: No build step required (static site)
- **Theme**: Dark/Light mode support

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/jnrns1/MuleDigital.git
cd MuleDigital
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

3. Visit `http://localhost:8000` to view the website.

### File Structure

```
├── index.html          # Main website file with HTML, CSS, and JavaScript
├── vercel.json         # Vercel deployment configuration
└── .vercelignore       # Files to ignore during Vercel deployment
```

## Deployment

### Deploy to Vercel

1. **Using Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import the GitHub repository
   - Click "Deploy"

2. **Using Vercel CLI**:
```bash
npm i -g vercel
vercel
```

### Environment & Configuration

- **Domain**: Configure custom domain in Vercel project settings
- **Analytics**: Enable Web Analytics in Vercel dashboard
- **Performance**: Uses aggressive caching for assets (1 year) and HTML (1 hour)
- **Security**: Includes security headers for XSS, clickjacking, and content sniffing protection

## Features

- 🌙 Dark/Light theme toggle
- 🎨 Smooth animations and transitions
- 📱 Fully responsive design
- ⚡ Fast performance (static site)
- 🔒 Security headers configured
- ♿ Semantic HTML structure
- 🎯 Custom cursor effects

## Performance Optimization

- Static HTML (no server processing needed)
- Optimized font loading with Google Fonts preconnect
- CSS-in-file approach (minimal HTTP requests)
- SVG animations for smooth performance
- Aggressive caching headers for assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

This project is licensed under the MIT License.
