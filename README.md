# FRAME THEORY — Creative Studio starter

A responsive React + Vite portfolio website starter with a dark editorial look, lime accent, animated morphing orb, project video gallery, services, process, pricing and contact sections.

## 1. Requirements
- Node.js LTS installed
- VS Code

## 2. Run locally
Open this folder in VS Code, then open Terminal > New Terminal and run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## 3. Add your own editing videos
Copy optimized MP4 exports into `public/videos/` and name them:
- `reel-01.mp4`
- `reel-02.mp4`
- `motion-01.mp4`

Or edit `src/data/projects.js` to use your own filenames and titles.

Recommended web export: MP4 / H.264, 1080x1920 for vertical reels, moderate bitrate, and keep each file reasonably compressed. The starter references poster images too; if you don't have posters yet, remove the `poster` values or add matching images to `public/images/`.

## 4. Before publishing
Search the project for these placeholders:
- `91YOURNUMBER` in `src/App.jsx` — replace with your WhatsApp number including country code, digits only.
- `FRAME THEORY` — change if you choose another studio name.
- Sample project titles/descriptions — replace with your real work.
- Sample prices — confirm your actual packages before publishing.

Do not present the sample portfolio projects or demo analytics as paid client work or real client results. Label self-initiated work as concept projects.

## 5. Build for deployment
```bash
npm run build
```
The production site is generated in `dist/`. You can deploy the project through Vercel by importing its GitHub repository, or use Vercel's CLI.

## Notes
- The orb is a CSS morphing shape with Framer Motion pointer response (not a heavy WebGL scene).
- Video previews play on hover on desktop; click a project card to open its video modal.
- The layout includes responsive navigation and reduced-motion support.
