# ⚡ Anime Portfolio — Vivek Bhattacharya

A unique developer portfolio built as an **anime-inspired cyberpunk experience** — featuring glitch effects, sakura particles, dramatic scroll animations, and a dual light/dark theme that feels like switching between day and night in an anime world.

🔗 **Live Demo:** [anime-portfolio-mu.vercel.app](https://anime-portfolio-mu.vercel.app)

---

## 🎌 Preview

> *"Not your typical portfolio — this one feels like an anime opening."*

The portfolio is styled with:
- **Glitch text reveals** on name and headings
- **Sakura petal / energy particle** effects
- **Shōnen Day Mode** and **Seinen Night Mode** themes
- **Ink-wash wipe transition** between themes
- **Brush-stroke underline** animations on section headings

---

## ✨ Features

- 🌸 **Sakura Particle Effects** — floating petals drifting across all sections
- ⚡ **Glitch Text Animation** — cyberpunk-style name reveal on hero
- 🌗 **Dual Theme** — Shōnen Light Mode & Seinen Dark Mode
- 🖌️ **Ink-Wash Theme Toggle** — dramatic full-screen wipe transition
- 📜 **Typewriter Effect** — animated title with blinking cursor
- 🎴 **Anime Ability Cards** — skills displayed as RPG-style badges
- 📡 **GPS Timeline** — experience shown as anime quest waypoints
- 📻 **Transmission Contact Form** — Formspree-powered contact section
- 🖱️ **Custom Cursor** — glowing energy ring cursor on desktop
- 📱 **Fully Responsive** — mobile, tablet, and desktop optimized

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework |
| **React.js** | UI components |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **React Icons** | Icons |
| **Formspree** | Contact form |
| **Google Fonts** | Rajdhani, Orbitron, Share Tech Mono |

---

## 📁 Project Structure

```
anime-portfolio/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx         # Hero with glitch reveal
│   │   ├── AboutSection.tsx        # Driver profile + skills
│   │   ├── ProjectsSection.tsx     # Project cards grid
│   │   ├── ExperienceSection.tsx   # GPS timeline
│   │   ├── ContactSection.tsx      # Transmission console
│   │   ├── Navbar.tsx              # Sticky HUD navbar
│   │   └── Footer.tsx              # Footer
│   ├── context/                    # Theme context
│   ├── hooks/                      # Custom hooks
│   ├── styles/                     # Global styles
│   └── App.tsx                     # Root component
├── public/                         # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vivekbhattacharya01-gif/anime-portfolio.git
cd anime-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

---

## 🌐 Deployment

### Deploy on Vercel (Recommended for Next.js)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"Import Project"** → select repo
4. Vercel auto-detects Next.js — click **Deploy** ✅

### Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import from Git"**
3. Select your repository
4. Set build settings:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `.next` |

5. Click **Deploy** ✅

---

## 🎨 Customization

### Change Personal Info
Edit the following files with your details:
- `HeroSection.tsx` — Name, title, subtitle, social links, resume link
- `AboutSection.tsx` — Bio, skills, stat counters
- `ProjectsSection.tsx` — Project cards, links, tech stacks
- `ExperienceSection.tsx` — Timeline/waypoint entries
- `ContactSection.tsx` — Email, Formspree endpoint

### Change Theme Colors

**Dark Mode (Seinen):**
```js
// tailwind.config.js
'dark-bg': '#0A0A1A',        // Deep navy black
'dark-accent': '#00F5FF',    // Electric cyan
'dark-secondary': '#BF5FFF', // Neon violet
```

**Light Mode (Shōnen):**
```js
'light-bg': '#FAFAF5',       // Warm off-white
'light-accent': '#0066FF',   // Electric blue
'light-secondary': '#FFD700' // Golden yellow
```

### Update Contact Form
Replace the Formspree endpoint in `ContactSection.tsx`:
```jsx
action="https://formspree.io/f/YOUR_FORM_ID"
```

---

## 📜 Sections

| Section | Theme | Description |
|---------|-------|-------------|
| **Hero** | Engine Start | Glitch name reveal + typewriter title |
| **About** | Driver Profile | Skills as system specs + stat counters |
| **Projects** | Neon Billboards | Cards with tilt + glow effects |
| **Experience** | GPS Route Map | Animated waypoint timeline |
| **Contact** | Transmission Console | Mission brief contact form |
| **Footer** | Power Down | Gauges drop to zero animation |

---

## 🎌 Design Inspiration

| Element | Inspiration |
|---------|------------|
| Glitch effects | Cyberpunk anime openings |
| Sakura particles | Classic anime atmosphere |
| Dual theme naming | Shōnen vs Seinen manga genres |
| Ink-wash transition | Traditional Japanese art |
| Speed lines | Manga action sequences |
| GPS timeline | JDM racing video games |

---

## 👨‍💻 Author

**Vivek Bhattacharya**
- Anime Portfolio: [anime-portfolio-mu.vercel.app](https://anime-portfolio-mu.vercel.app)
- GitHub: [@vivekbhattacharya01-gif](https://github.com/vivekbhattacharya01-gif)
- LinkedIn: [vivek-bhattacharya-9a661528a](https://www.linkedin.com/in/vivek-bhattacharya-9a661528a)
- Email: vivekbhattacharya01@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with React & ❤️ — Every scroll should feel like acceleration ⚡
</p>
