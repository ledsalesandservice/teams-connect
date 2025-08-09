# TeamMate Setup Guide - You Need LED

A comprehensive web-based guide for setting up TeamMate with YouNeedLED Connect. This professional website provides step-by-step instructions, video tutorials, and visual guides for enterprise communications setup.

## 🌐 Live Website

Visit the live website: [https://yourusername.github.io/teammate-setup-guide/](https://yourusername.github.io/teammate-setup-guide/)

## ✨ Features

- **Complete Setup Guide** - 5 comprehensive sections covering the entire TeamMate setup process
- **Visual Instructions** - All original PDF screenshots and diagrams included
- **Video Tutorials** - Integrated video links for each major section
- **Professional Branding** - You Need LED branding throughout
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Interactive Navigation** - Easy-to-use sidebar navigation between sections

## 📋 Sections Covered

1. **Enterprise Provisioning** - Set up new enterprises and configure Microsoft Teams integration
2. **Direct Routing** - Configure Direct Routing for Microsoft Teams integration  
3. **PBX Setup** - Configure PBX settings for SIP registration
4. **Adding Users** - Provision new users and configure their settings
5. **Redundancy** - Implement redundancy for maximum reliability

## 🚀 Quick Start

### Prerequisites
- Node.js 20 or higher
- pnpm (recommended) or npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/teammate-setup-guide.git
   cd teammate-setup-guide
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:5173`

### Build for Production

```bash
pnpm run build
# or
npm run build
```

## 🔧 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Push to GitHub** - Any push to the `main` branch triggers automatic deployment
2. **GitHub Actions** - Builds and deploys the site automatically
3. **Live URL** - Your site will be available at `https://yourusername.github.io/teammate-setup-guide/`

### Manual Deployment

If you prefer manual deployment:

1. Build the project: `pnpm run build`
2. The `dist/` folder contains all files needed for deployment
3. Upload to any static hosting service

## 📁 Project Structure

```
teammate-setup-guide/
├── .github/workflows/     # GitHub Actions for deployment
├── src/
│   ├── App.jsx           # Main application component
│   ├── assets/           # Images and static files
│   │   ├── youneedled_logo.png
│   │   └── [PDF screenshots]/
│   ├── components/ui/    # UI components
│   └── lib/              # Utility functions
├── public/               # Public static files
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Free hosting and deployment

## 📱 Responsive Design

The website is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎥 Video Integration

Each major section includes links to video tutorials:
- Enterprise Setup Tutorial
- Direct Routing Tutorial
- PBX Setup Tutorial
- Adding Users Tutorial

## 📞 Contact Information

**You Need LED**
- **Phone**: (609) 335-0123
- **Email**: support@youneedled.com
- **Website**: www.youneedled.com
- **Licensed & Insured**: NJ DCA #34BF00056900

## 🗺️ Service Area

South Jersey (Camden, Burlington, Gloucester, Atlantic Counties)

## 🤝 Contributing

This is a private project for You Need LED clients. For updates or modifications, please contact the development team.

## 📄 License

© 2025 You Need LED. All rights reserved.

## 🔄 Updates

The website is automatically updated when changes are pushed to the main branch. The GitHub Actions workflow handles building and deployment.

---

*Professional Enterprise Communications Solutions by You Need LED*

