# 🌟 LIMINAL - Next-Gen AI Infrastructure Platform

> **Revolutionizing AI Infrastructure with Quantum-Enhanced Performance**  
> Deploy AI models 10x faster with 99.9% uptime guarantee

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-00ffee?style=for-the-badge)](https://safal207.github.io/land_plf/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-ff59a5?style=for-the-badge)](LICENSE)

## ✨ Features

### 🎮 Interactive Elements
- 🚀 **Quantum Particle System** - 50 animated particles with physics-based movement
- ⏰ **Real-time Quantum Clock** - Live time display with milliseconds precision
- 💖 **Interactive Hearts** - Click to create floating heart animations
- 📧 **Smart Email Form** - Real-time validation with success/error states
- 🌧️ **Matrix Rain** - Cyberpunk-style falling characters
- 👁️ **Eyes Control** - Close/open eyes for immersive experience

### 🎯 User Experience
- Smooth scroll navigation between sections
- Responsive design for desktop, tablet, and mobile
- Intersection animations that fade in on scroll
- Performance optimization with animations pausing when the page is hidden
- Graceful error handling

### 🎨 Visual Design
- Cyberpunk aesthetic with neon colors
- Glassmorphism effects
- Animated gradients
- Rich hover interactions
- Beautiful loading states

## 🎮 Interactive Controls

| Hotkey | Action |
|--------|--------|
| `Ctrl + H` | 💖 Trigger heart rain animation |
| `Ctrl + P` | ✨ Toggle particle system |
| `Escape` | 👁️ Close eyes overlay |
| `Click ❤️` | 💕 Create floating hearts |
| `Click 🖤` | 💔 Broken heart effect |

## 🏗️ Architecture

### 📁 Project Structure
```
src/
├── types/              # TypeScript interfaces
│   └── index.ts        # All type definitions
├── utils/              # Utility functions
│   ├── constants.ts    # App constants & data
│   └── helpers.ts      # Helper functions
├── components/         # Modular components
│   ├── QuantumClock.ts      # Real-time clock
│   ├── ParticleSystem.ts    # Particle animations
│   ├── HeartControls.ts     # Heart interactions
│   └── EmailForm.ts         # Email validation
├── LiminalApp.ts       # Main app controller
└── main.ts             # Application entry point
```

### 🧩 Component System
Each component is self-contained with:
- TypeScript interfaces for type safety
- Lifecycle management (init, start, stop, destroy)
- Error handling and performance optimization

### 🛠️ Core Classes

#### `LiminalApp` - Main Controller
```typescript
const app = new LiminalApp();
app.getAppStats();  // Get performance metrics
app.restart();      // Restart entire app
```

#### `ParticleSystem` - Physics Engine
```typescript
const particles = new ParticleSystem('#container', 50);
particles.addParticle({ x: 100, y: 100 });
particles.setVelocityMultiplier(2.0);
```

#### `QuantumClock` - Time Display
```typescript
const clock = new QuantumClock();
clock.getCurrentData();  // Get current time data
clock.addBlinkEffect();  // Add visual effects
```

#### `HeartControls` - Animations
```typescript
const hearts = new HeartControls();
hearts.createHeartsAt({ x: 500, y: 300 }, 5);
hearts.startHeartRain(5000);
```

#### `EmailForm` - Validation
```typescript
const form = new EmailForm();
form.submitWithEmail('user@example.com');
form.isCurrentEmailValid();
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev   # Start development server
npm run lint  # Run ESLint
```

### Build and Serve
```bash
npm run build
npm run serve
```

## 🌟 Technologies
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [CSS3](https://developer.mozilla.org/docs/Web/CSS)

## 📈 Analytics & Insights
- Tracks email signups, heart clicks, feature hovers and device metrics
- Monitors component load times, animation frame rates and memory usage

## 🤝 Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards
- TypeScript strict mode
- ESLint (Airbnb configuration)
- Conventional Commits

## 📝 License
This project is released under the [MIT License](LICENSE).

## 🔗 Links
- 🌐 [Live Demo](https://safal207.github.io/land_plf/)
- 📧 [Contact](mailto:support@liminal.ai)
- 🐛 [Issues](https://github.com/safal207/land_plf/issues)
- 💡 [Feature Requests](https://github.com/safal207/land_plf/discussions)
