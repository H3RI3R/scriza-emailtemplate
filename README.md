# 📧 Scriza Email Template Builder

An open-source, modern, and highly customizable email signature generator built with **Vue 3**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

Create professional, email-client compliant HTML email signatures with live preview, custom styling, social media badges, and dynamic layout templates.

---

## ✨ Features

- 🎨 **10 Premium Layout Templates**:
  - `Modern Left Accent`
  - `Header Card`
  - `Clean Minimal`
  - `Side-by-Side Split`
  - `Top Featured Image Card`
  - `Right Portrait Card`
  - `Double Image & Logo Split`
  - `Floating Portrait Badge`
  - `Circle Photo Hero Header`
  - `Executive Badge`
- 🖼️ **Image & Media Controls**: Custom avatar pictures, shapes (round, rounded, square), dynamic sizing, and company logo support.
- 🔤 **Typography & Styling**: Font size adjustment, font family selection, and custom hex color picker + curated swatches.
- 🌐 **Company Social Media Library**: Integrated brand logos with automatic hyperlinking (`href`).
- 🧩 **Layout-Aware Add-ons**: Legal disclaimers, promotional banners, secondary company logos, and Google Meet/video call action buttons customized per layout capability.
- 📋 **One-Click HTML Copying**: Formatted clipboard export ready to paste into Gmail, Outlook, Apple Mail, and Thunderbird.

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/H3RI3R/scriza-emailtemplate.git
   cd scriza-emailtemplate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:5173` (or the port indicated in your console output).

---

## 📦 Production Deployment

### Building for Production

To compile the application into static HTML/JS/CSS assets for deployment:

```bash
npm run build
```

This will run TypeScript checks (`vue-tsc`) and bundle the optimized static output into the `dist/` directory.

### Previewing Production Build Locally

To test the production build locally before hosting:

```bash
npm run preview
```

### Deploying to Hosting Services

Since the build produces static assets in the `dist/` folder, you can deploy it to any static web hosting platform:

- **Vercel**: Import the GitHub repository and keep default build settings (`npm run build`, output directory: `dist`).
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Build the project and deploy the contents of the `dist/` folder using `gh-pages` or GitHub Actions.

---

## 🛠️ Project Structure

```
ScrizaEmailtemplate/
├── src/
│   ├── components/
│   │   ├── SidebarNav.vue        # Left navigation tab menu
│   │   ├── TabPanels.vue         # Form controls & miniature layout picker
│   │   └── SignaturePreview.vue   # HTML-compliant email signature table renderer
│   ├── types.ts                  # TypeScript interfaces & brand logo library
│   ├── App.vue                   # Root reactive state manager
│   ├── main.ts                   # Vue app initialization
│   └── style.css                 # Global CSS & Tailwind imports
├── public/                       # Static public assets
├── LICENSE                       # AGPL-3.0 License
├── package.json                  # Dependencies & scripts
├── vite.config.ts                # Vite configuration
└── README.md                     # Project documentation
```

---

## 📄 License

Distributed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See [`LICENSE`](./LICENSE) for more information.

---

## 👤 Author & Ownership

Created by **Ritik Soni** / **Scriza**
- GitHub: [@H3RI3R](https://github.com/H3RI3R)
