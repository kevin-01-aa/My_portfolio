# Kevin Johnson A A - Personal Portfolio

A modern, responsive, and animated personal portfolio website built with React and Vite.

## 🚀 Features

- **Modern UI**: Dark theme, Glassmorphism, and minimal design.
- **Animations**: Smooth scroll reveals using `framer-motion`.
- **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Content**: All personal data is stored in `src/data/content.js` for easy updates.
- **Fast**: Built on Vite for lightning-fast performance.

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Vanilla CSS (Modular, Variable-based)
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📂 Project Structure

```
src/
├── assets/          # Images (profile.png)
├── components/      # UI Components (Navbar, Hero, About, etc.)
├── data/            # content.js (Edit your details here!)
├── App.jsx          # Main Layout
├── index.css        # Global Styles & Variables
└── main.jsx         # Entry Point
```

## ⚡ Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Locally**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 How to Edit Content

You don't need to touch the code structure to update your details!
Open `src/data/content.js` and modify the text inside the objects.

- **Name/Tagline**: Edit `hero` object.
- **Education**: Edit `education` array.
- **Skills**: Edit `skills` object.
- **Experience**: Edit `experience` array.
- **Projects**: Edit `projects` array.

## 🖼 Updating images

- Replace `src/assets/profile.png` with your own photo (keep the name same or update import in `src/data/content.js`).

## 🌍 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for instructions on how to host this on GitHub Pages.
