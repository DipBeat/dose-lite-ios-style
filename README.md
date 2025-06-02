# Dose Lite (iOS Style) - Web App

This is a lightweight React-based web application that mimics the iOS version of Dose (https://doseapp.io), with core features from the Android version (https://github.com/waseefakhtar/dose-android).

## Features

- iOS-style layout with bottom navigation
- Add/Edit/Delete Medications (stored locally)
- Calendar view using `react-calendar`
- JSON data import/export
- Simple animations

## How to Upload to GitHub

1. **Unzip the downloaded folder**:
   ```
   dose-lite-ios-style.zip
   ```

2. **Open a terminal and navigate to the folder**:
   ```bash
   cd dose-lite-ios-style
   ```

3. **Initialize a Git repository**:
   ```bash
   git init
   ```

4. **Add all files and commit**:
   ```bash
   git add .
   git commit -m "Initial commit of Dose Lite iOS-style web app"
   ```

5. **Create a new repo on GitHub** (via the website or GitHub CLI)

6. **Link your local repo to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

7. **Push your code to GitHub**:
   ```bash
   git push -u origin main
   ```

## Run Locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

For any improvements or to expand functionality, feel free to customize further!
