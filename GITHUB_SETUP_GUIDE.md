# 🚀 How to Create and Set Up the GitHub Repository

Follow these step-by-step instructions to create, configure, and push **`ScrizaEmailtemplate`** to GitHub.

---

## Step 1: Create a `.gitignore` File

Ensure temporary files, `node_modules`, and build outputs aren't pushed to GitHub.

Make sure `.gitignore` exists in `ScrizaEmailtemplate/` containing:
```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Production build output
dist/
dist-ssr/

# Local env & logs
*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store

# IDE / Editor files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

## Step 2: Initialize Git & Commit Local Files

Open your terminal in `/Users/ritiksoni/Documents/mysigmail/mysigmail/ScrizaEmailtemplate` and run:

```bash
# 1. Initialize local Git repository
git init

# 2. Set default branch to main
git branch -M main

# 3. Add all project files
git add .

# 4. Create your initial commit
git commit -m "feat: initial commit for Scriza Email Template Builder under AGPL-3.0"
```

---

## Step 3: Create the Repository on GitHub

1. Go to **[GitHub New Repository](https://github.com/new)**.
2. Fill out the fields as follows:

| Setting | Recommended Value | Notes |
|---------|-------------------|-------|
| **Repository Name** | `scriza-emailtemplate` (or `ScrizaEmailtemplate`) | Matches package name |
| **Description** | `Modern, customizable email signature builder with live preview built using Vue 3, Vite, TypeScript & Tailwind CSS.` | Short description for GitHub |
| **Visibility** | **Public** (recommended for open-source AGPL-3.0) or **Private** | Choose based on your needs |
| **Initialize with README** | ❌ **UNCHECK** | We already created `README.md` locally |
| **Add .gitignore** | ❌ **None** | We already created `.gitignore` locally |
| **Choose a License** | ❌ **None** | We already created `LICENSE` (AGPL-3.0) locally |

3. Click **Create repository**.

---

## Step 4: Link Remote & Push Code

Copy the commands provided by GitHub after creation and run them in your project terminal:

```bash
# Add your GitHub repository remote
git remote add origin https://github.com/H3RI3R/scriza-emailtemplate.git

# Push your code to GitHub
git push -u origin main
```

---

## Step 5: Recommended GitHub Repository Settings

Once pushed, go to **Settings** on your GitHub repository page:

### 1. General Settings
- **About / Topics**:
  Click the ⚙️ gear icon under **About** on your main repo page and add topics:
  `vue3`, `typescript`, `vite`, `tailwindcss`, `email-signature`, `email-template`, `signature-generator`, `agpl-3`
- **Website URL**: Add your deployed live demo link (e.g., Vercel / Netlify URL).

### 2. General -> Features
- ✅ **Issues**: Enabled (allows users to report bugs or request templates).
- ✅ **Discussions**: (Optional) Enabled if you want community feedback.
- ❌ **Wiki**: Uncheck (unless you plan to write extra docs outside README).

### 3. Branch Protection Rules (Settings -> Branches)
If working with a team:
- Add rule for `main` branch.
- Check **Require a pull request before merging**.
- Check **Require status checks to pass before merging**.

### 4. License Recognition
Because we created an [`AGPL-3.0 LICENSE`](./LICENSE) file, GitHub will automatically display **GNU AGPLv3** with a badge on your repository header.

---

## Step 6: Deploy Live Demo (Optional but Recommended)

To display a live demo link on your GitHub repository:
1. Connect your repo to **Vercel** (`vercel.com`) or **Netlify** (`netlify.com`).
2. Build Settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Paste the live deployment URL into the **Website** field under GitHub's **About** section!
