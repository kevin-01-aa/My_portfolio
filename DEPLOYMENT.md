# Deploying to GitHub Pages

This project is ready to be hosted on GitHub Pages. Follow these steps:

### 1. Create a GitHub Repository
- Go to GitHub and create a new repository (e.g., `my-portfolio`).
- Do not initialize with README (you already have one).

### 2. Configure `vite.config.js`
Open `vite.config.js` and add the `base` property with your repository name:

```javascript
/* vite.config.js */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // REPLACE 'my-portfolio' with your repository name!
})
```
> **Note**: If you are using a custom domain or a user site (e.g., `username.github.io`), you might not need the `base` property or should set it to `'/'`.

### 3. Install `gh-pages`
Run the following command to install the deployment tool:
```bash
npm install gh-pages --save-dev
```

### 4. Update `package.json`
Add these two scripts to your `package.json` inside the `"scripts"` object:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 5. Initialize Git and Push
Run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main
```

### 6. Deploy!
Now just run:
```bash
npm run deploy
```

Wait a minute, then visit your site at `https://YOUR_USERNAME.github.io/my-portfolio/`.

### Future Updates
Whenever you make changes:
1. `git add .`
2. `git commit -m "Update content"`
3. `git push` (to save code)
4. `npm run deploy` (to update the live site)
