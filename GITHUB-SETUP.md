# GitHub Setup Guide

## 📋 Prerequisites

- Git installed on your system ✅ (Already done)
- GitHub account
- Project committed locally ✅ (Already done)

---

## 🚀 Option 1: Create New Repository on GitHub

### Step 1: Create Repository on GitHub

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in details:
   - **Repository name:** `jalvira-landing` (or your preferred name)
   - **Description:** "Interactive landing page for Jalvira ITOps & Cyber Intelligence platform"
   - **Visibility:** 
     - ✅ Public (recommended for portfolio)
     - ❌ Private (if you want to keep it private)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 2: Connect Local Repository to GitHub

GitHub will show you commands. Use these in your terminal:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/jalvira-landing.git

# Rename branch to main (optional, if you prefer 'main' over 'master')
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

---

## 🔗 Option 2: Push to Existing Repository

If you already have a repository:

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git push -u origin master
```

---

## 📝 Commands to Run Now

### If Creating New Repository:

**Run these commands in PowerShell (in D:\Jalvira):**

```powershell
# Add your GitHub repository as remote
# REPLACE 'YOUR_USERNAME' with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/jalvira-landing.git

# Optional: Rename branch to 'main'
git branch -M main

# Push to GitHub
git push -u origin main
```

### If Repository Already Exists:

```powershell
# Add remote with your existing repo URL
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git push -u origin master
```

---

## 🔐 Authentication

GitHub may ask for authentication:

### Option 1: Personal Access Token (Recommended)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select scopes: `repo` (all)
4. Copy the token
5. Use token as password when pushing

### Option 2: SSH Key

1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add to GitHub: Settings → SSH and GPG keys → New SSH key
3. Use SSH URL:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/jalvira-landing.git
   ```

### Option 3: GitHub CLI (Easiest)

```powershell
# Install GitHub CLI
winget install GitHub.cli

# Authenticate
gh auth login

# Push
git push -u origin main
```

---

## ✅ Verify Upload

After pushing, check GitHub:

1. Go to your repository: `https://github.com/YOUR_USERNAME/jalvira-landing`
2. You should see:
   - 51 files
   - All components
   - Documentation files
   - README.md displayed on homepage

---

## 📂 What Gets Pushed

✅ **Included:**
- All source code (`src/`)
- Components
- Documentation (*.md files)
- Configuration files
- Public assets

❌ **Excluded (via .gitignore):**
- `node_modules/`
- `dist/`
- `.env` files
- `.vercel/`
- IDE files

---

## 🌿 Branch Strategy (Optional)

### Create Development Branch

```bash
# Create and switch to dev branch
git checkout -b development

# Push dev branch
git push -u origin development
```

### Recommended Branches:
- `main` or `master` - Production
- `development` - Active development
- `feature/*` - Feature branches
- `hotfix/*` - Urgent fixes

---

## 📊 Repository Settings

### After Pushing, Configure:

1. **About Section** (right sidebar):
   - Description: "Interactive landing page for Jalvira"
   - Website: Your Vercel deployment URL
   - Topics: `react`, `vite`, `landing-page`, `itops`, `cybersecurity`

2. **GitHub Pages** (optional):
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `docs` (if you want)

3. **Branch Protection**:
   - Settings → Branches
   - Add rule for `main`
   - Require pull request reviews

---

## 🔄 Future Updates

### To Push Changes:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Your update message"

# Push to GitHub
git push
```

### Create Pull Request:

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes, commit
git add .
git commit -m "Add new feature"

# Push branch
git push -u origin feature/new-feature

# Go to GitHub and create PR
```

---

## 🚀 Automatic Deployment with Vercel

### Connect Vercel to GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite
5. Click "Deploy"

### Result:
- Every push to `main` → auto-deploy
- Pull requests → preview deployments
- Instant rollback if needed

---

## 📱 Repository Badges (Optional)

Add badges to README.md:

```markdown
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/jalvira-landing)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/jalvira-landing)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/jalvira-landing)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)
```

---

## 🆘 Troubleshooting

### Error: "remote origin already exists"

```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin YOUR_GITHUB_URL
```

### Error: "failed to push some refs"

```bash
# Pull first (if repo has commits)
git pull origin main --allow-unrelated-histories

# Then push
git push -u origin main
```

### Error: "Authentication failed"

- Use Personal Access Token instead of password
- Or set up SSH key
- Or use GitHub CLI (`gh auth login`)

### Error: "Large files detected"

```bash
# Check file sizes
git ls-files -z | xargs -0 du -h | sort -h

# Remove large file from git
git rm --cached large-file.zip
git commit --amend
```

---

## 📋 Next Steps After Push

1. ✅ Verify files on GitHub
2. ✅ Update README with deployment URL
3. ✅ Add repository description and topics
4. ✅ Connect to Vercel for auto-deploy
5. ✅ Share repository link
6. ✅ Star your own repo 😉

---

## 🎯 Quick Reference

```bash
# Common commands
git status              # Check status
git add .              # Stage all changes
git commit -m "msg"    # Commit changes
git push               # Push to GitHub
git pull               # Pull from GitHub
git log --oneline      # View commits
git branch            # List branches
git checkout -b name  # Create branch
```

---

## 📞 Need Help?

- GitHub Docs: https://docs.github.com
- Git Docs: https://git-scm.com/doc
- Vercel Docs: https://vercel.com/docs

---

**Ready to push? Run the commands above! 🚀**
