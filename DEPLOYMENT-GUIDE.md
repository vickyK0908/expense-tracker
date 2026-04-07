# 🚀 GitHub Pages Deployment Guide - Expense Tracker

## 📋 MICROSCOPIC STEP-BY-STEP DEPLOYMENT

### ✅ STEP 1: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: **expense-tracker** (exactly this name)
4. Description: *"A React expense tracker app"*
5. Keep it **Public**
6. **DO NOT** check "Add README" or any files
7. Click **"Create repository"**
8. **KEEP THIS PAGE OPEN** - you'll need the commands shown

---

### ✅ STEP 2: Install Git (if not installed)

1. Go to https://git-scm.com/download/win
2. Download and install Git for Windows
3. Use default settings during installation
4. Close and reopen Command Prompt after installation

---

### ✅ STEP 3: Update package.json with Your Username

1. Open `package.json` in Notepad or VS Code
2. Find this line (line 4):
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/expense-tracker",
   ```
3. Replace **YOUR_GITHUB_USERNAME** with your actual GitHub username
   - Example: If your username is "john123", it becomes:
   ```json
   "homepage": "https://john123.github.io/expense-tracker",
   ```
4. **Save the file** (Ctrl + S)

---

### ✅ STEP 4: Install gh-pages Package

1. Double-click **`install-ghpages.bat`** in your expense-tracker folder
2. Wait for installation to complete (may take 1-2 minutes)
3. Press any key to close the window
4. **You'll see a new `node_modules` folder and `package-lock.json` updated**

---

### ✅ STEP 5: Initialize Git and Push to GitHub

1. Open **Command Prompt** (not PowerShell):
   - Press `Win + R`
   - Type `cmd`
   - Press Enter

2. Navigate to your project:
   ```cmd
   cd c:\Users\vicky\Downloads\expense-tracker
   ```

3. Run these commands **ONE BY ONE** (copy-paste each line):

   ```cmd
   git init
   ```
   *(Creates a new Git repository)*

   ```cmd
   git add .
   ```
   *(Stages all files for commit)*

   ```cmd
   git commit -m "Initial commit with React expense tracker"
   ```
   *(Creates first commit)*

   ```cmd
   git branch -M main
   ```
   *(Renames branch to main)*

4. **NOW LOOK AT YOUR GITHUB PAGE** - copy the remote URL shown
   - It looks like: `https://github.com/YOUR_USERNAME/expense-tracker.git`

5. Run this command (replace with YOUR repository URL):
   ```cmd
   git remote add origin https://github.com/YOUR_USERNAME/expense-tracker.git
   ```
   *(Links your local folder to GitHub)*

6. Push to GitHub:
   ```cmd
   git push -u origin main
   ```
   *(Uploads your code to GitHub)*

   **If asked for credentials:**
   - Username: Your GitHub username
   - Password: Use a **Personal Access Token** (not your password)
     - Get token at: https://github.com/settings/tokens
     - Click "Generate new token (classic)"
     - Check "repo" scope
     - Copy the token and paste as password

---

### ✅ STEP 6: Deploy to GitHub Pages

1. **STILL IN COMMAND PROMPT**, run:
   ```cmd
   npm run deploy
   ```
   *(This builds and deploys your app)*

2. Wait 2-3 minutes for deployment to complete
3. You'll see messages like:
   - `Creating an optimized production build...`
   - `Published`

---

### ✅ STEP 7: Enable GitHub Pages (One-Time Setup)

1. Go to your GitHub repository page
2. Click **"Settings"** tab (top menu)
3. Scroll down and click **"Pages"** (left sidebar)
4. Under "Source", you should see:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. If not set, select **gh-pages** branch and click **Save**
6. Wait 1-2 minutes

---

### ✅ STEP 8: Access Your Live App! 🎉

Your app is now live at:
```
https://YOUR_USERNAME.github.io/expense-tracker
```

Example: https://john123.github.io/expense-tracker

---

## 🔄 HOW TO UPDATE YOUR APP (After Making Changes)

1. Make your code changes
2. Open Command Prompt:
   ```cmd
   cd c:\Users\vicky\Downloads\expense-tracker
   ```
3. Run:
   ```cmd
   git add .
   git commit -m "Updated UI design"
   git push
   npm run deploy
   ```
4. Wait 2-3 minutes → Changes are live!

---

## 🆘 TROUBLESHOOTING

**Problem: "git is not recognized"**
- Solution: Install Git from https://git-scm.com/download/win

**Problem: Deploy failed**
- Solution: Make sure you installed gh-pages: Run `install-ghpages.bat`

**Problem: Page shows 404**
- Solution: Wait 5 minutes, then hard refresh (Ctrl + F5)
- Check GitHub repo → Settings → Pages is set to "gh-pages" branch

**Problem: Blank page after deployment**
- Solution: Check your package.json homepage matches your GitHub username

---

## 📝 QUICK REFERENCE BATCH FILES

- **`start-app.bat`** → Start development server locally
- **`install-ghpages.bat`** → Install gh-pages package
- **`deploy.bat`** → Deploy to GitHub Pages (after git push)
- **`cleanup.bat`** → Remove old .js files

---

🎊 **Your expense tracker is now live on the internet!** Share the link with your teacher!
