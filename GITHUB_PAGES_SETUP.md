# GitHub Pages Setup Guide

## Problem: "File not found" Error

Agar aapko GitHub Pages par "File not found" error aa raha hai, to yeh steps follow karein:

## Step 1: GitHub Repository Check

1. **Repository Public hai?**
   - Free GitHub account ke liye repository **PUBLIC** honi chahiye
   - Repository settings → General → Danger Zone → Change visibility → Make public

2. **Files Root Directory Mein Hain?**
   - `index.html` repository ke **root** directory mein hona chahiye
   - Files structure aise honi chahiye:
     ```
     firedclay/
     ├── index.html
     ├── styles.css
     ├── script.js
     ├── navbar.html
     ├── footer.html
     ├── .nojekyll
     └── ...
     ```

## Step 2: GitHub Pages Enable Karein

1. GitHub repository mein jao
2. **Settings** tab click karein
3. Left sidebar mein **Pages** option click karein
4. **Source** section mein:
   - Branch: **main** (ya **master**) select karein
   - Folder: **/ (root)** select karein
5. **Save** button click karein

## Step 3: Wait for Deployment

- GitHub Pages enable hone ke baad 1-2 minutes wait karein
- Aapko yeh URL mil jayega: `https://yourusername.github.io/repository-name/`
- Example: `https://username.github.io/firedclay/`

## Step 4: Verify Files

1. Repository mein check karein:
   - ✅ `index.html` root mein hai
   - ✅ `styles.css` root mein hai
   - ✅ `script.js` root mein hai
   - ✅ `.nojekyll` file hai (yeh file maine banayi hai)

2. **Case Sensitivity Check:**
   - File names exactly match karein
   - `index.html` (lowercase 'i')
   - `styles.css` (lowercase 's')
   - `script.js` (lowercase 's')

## Step 5: Clear Browser Cache

- Hard refresh: `Ctrl + F5` (Windows) ya `Cmd + Shift + R` (Mac)
- Ya incognito/private window mein check karein

## Common Issues & Solutions

### Issue 1: "File not found" still showing
**Solution:** 
- Repository Settings → Pages → Source ko check karein
- Branch `main` ya `master` select karein
- Root folder select karein

### Issue 2: CSS/JS files load nahi ho rahe
**Solution:**
- Browser console check karein (F12)
- File paths verify karein (relative paths use kiye gaye hain)

### Issue 3: Repository private hai
**Solution:**
- Free account: Repository ko public karein
- Paid account: Private repository bhi chalegi

## Files Fixed:

✅ `script.js` - navbar.html path fix kiya
✅ `.nojekyll` - GitHub Pages ke liye create kiya
✅ `index.html` - CSS path verify kiya

## Test Karne Ke Liye:

1. Local mein test karein:
   - Simple HTTP server run karein
   - Ya directly browser mein `index.html` open karein

2. GitHub Pages URL check karein:
   - `https://yourusername.github.io/firedclay/`
   - Ya `https://yourusername.github.io/firedclay/index.html`

## Still Not Working?

1. GitHub repository ka **Actions** tab check karein
2. Koi build errors hain to unhe fix karein
3. Browser console mein errors check karein (F12)

---

**Note:** Agar aapka repository name `firedclay` nahi hai, to URL mein apna repository name use karein.

