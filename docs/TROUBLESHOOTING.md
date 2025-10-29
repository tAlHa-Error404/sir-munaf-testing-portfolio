# 🔧 Troubleshooting Guide
## Common Issues and Solutions

---

## 🎨 STYLING ISSUES

### Issue: Colors Not Changing After Editing CSS

**Problem:** You changed colors in styles.css but they don't appear on the website.

**Solutions:**
1. **Clear Browser Cache**
   - Chrome: Ctrl+Shift+Delete → Clear cache
   - Firefox: Ctrl+Shift+Delete → Clear cache
   - Safari: Cmd+Option+E

2. **Hard Refresh**
   - Windows: Ctrl+F5
   - Mac: Cmd+Shift+R

3. **Check File Save**
   - Make sure you saved the CSS file
   - Check file modification date

4. **Verify CSS Link**
   ```html
   <!-- Make sure this line exists in index.html <head> -->
   <link rel="stylesheet" href="styles.css">
   ```

---

### Issue: Website Looks Broken or Unstyled

**Problem:** Page displays with no styling, just plain text.

**Solutions:**
1. **Check Bootstrap CDN Link**
   ```html
   <!-- Verify this line in <head> -->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
   ```

2. **Check Internet Connection**
   - Bootstrap loads from CDN (requires internet)
   - Test by opening: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css

3. **Check File Structure**
   ```
   ✅ Correct:
   /portfolio
     ├── index.html
     └── styles.css
   
   ❌ Wrong:
   /portfolio
     ├── index.html
     └── /css
         └── styles.css
   ```

4. **Open Browser Console (F12)**
   - Look for error messages
   - Check if styles.css loaded successfully

---

### Issue: Layout Broken on Mobile

**Problem:** Website looks good on desktop but broken on phones.

**Solutions:**
1. **Check Viewport Meta Tag**
   ```html
   <!-- Must be in <head> section -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Verify Bootstrap Grid Classes**
   ```html
   ✅ Correct: <div class="col-md-6">
   ❌ Wrong: <div class="col-6">
   ```

3. **Test Responsive View**
   - Open DevTools (F12)
   - Click device toggle icon
   - Test different screen sizes

4. **Check for Fixed Widths**
   - Remove any `width: 1200px;` in custom CSS
   - Use `max-width` instead of `width`

---

## 🖼️ IMAGE ISSUES

### Issue: Images Not Showing

**Problem:** Broken image icons or blank spaces where images should be.

**Solutions:**
1. **Check Image Path**
   ```html
   ❌ Wrong: <img src="myimage.jpg">
   ✅ Correct: <img src="images/myimage.jpg">
   
   Or for external images:
   ✅ Correct: <img src="https://example.com/image.jpg">
   ```

2. **Verify File Names**
   - Check spelling (case-sensitive on servers)
   - Example: "Image.jpg" ≠ "image.jpg"
   - Avoid spaces in filenames

3. **Check Image Format**
   - Supported: .jpg, .jpeg, .png, .gif, .webp
   - Not supported: .bmp, .tiff, .psd

4. **Check File Location**
   ```
   /portfolio
     ├── index.html
     └── images/
         ├── profile.jpg
         ├── event1.jpg
         └── award.png
   ```

5. **Test Image URL**
   - Copy the src URL
   - Paste in browser address bar
   - Should show the image

---

### Issue: Images Loading Slowly

**Problem:** Images take too long to load, slowing down website.

**Solutions:**
1. **Compress Images**
   - Use: https://tinypng.com
   - Target: Under 500KB per image
   - Keep dimensions reasonable (1920px max width)

2. **Use Correct Format**
   - Photos: Use .jpg
   - Graphics/logos: Use .png
   - Animations: Use .gif or .webp

3. **Implement Lazy Loading** (Advanced)
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

---

## 🎬 VIDEO ISSUES

### Issue: Background Video Not Playing

**Problem:** Video section shows black screen or doesn't autoplay.

**Solutions:**
1. **Check Video Format**
   - Use: MP4 (H.264 codec)
   - Convert if needed: https://cloudconvert.com/mp4-converter

2. **Verify Video Attributes**
   ```html
   <video autoplay muted loop playsinline>
     <source src="video.mp4" type="video/mp4">
   </video>
   ```
   - `autoplay` - starts automatically
   - `muted` - required for autoplay
   - `loop` - repeats continuously
   - `playsinline` - needed for iOS

3. **Check File Size**
   - Recommended: Under 10MB
   - Compress: https://www.freeconvert.com/video-compressor

4. **Test Video Path**
   ```html
   ✅ Correct: <source src="videos/background.mp4">
   ❌ Wrong: <source src="background.mp4">
   ```

5. **Mobile Considerations**
   - Some mobile browsers block autoplay
   - Always include `muted` attribute
   - Consider image fallback for very slow connections

---

### Issue: Video Not Looping

**Problem:** Video plays once then stops.

**Solution:**
```html
<!-- Make sure loop attribute exists -->
<video autoplay muted loop playsinline>
                      ^^^^
```

---

## 🖱️ NAVIGATION ISSUES

### Issue: Menu Links Not Working

**Problem:** Clicking navigation links doesn't scroll to sections.

**Solutions:**
1. **Check ID Matches href**
   ```html
   <!-- Navigation -->
   <a href="#journey">Journey</a>
   
   <!-- Section -->
   <section id="journey">
            ^^^^^^^^^^
   ```

2. **Verify JavaScript Loaded**
   ```html
   <!-- Before closing </body> tag -->
   <script src="script.js"></script>
   ```

3. **Check for Typos**
   - `#jurney` ≠ `#journey`
   - Case-sensitive: `#Journey` ≠ `#journey`

4. **Console Check**
   - F12 → Console tab
   - Look for JavaScript errors

---

### Issue: Mobile Menu Not Opening

**Problem:** Hamburger icon doesn't expand menu on mobile.

**Solutions:**
1. **Check Bootstrap JS**
   ```html
   <!-- Must be before closing </body> -->
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```

2. **Verify Button Attributes**
   ```html
   <button class="navbar-toggler" 
           data-bs-toggle="collapse" 
           data-bs-target="#navbarNav">
   ```

3. **Check Collapse ID**
   ```html
   <!-- Button -->
   data-bs-target="#navbarNav"
   
   <!-- Collapse div -->
   <div id="navbarNav" class="collapse navbar-collapse">
   ```

---

### Issue: Smooth Scroll Not Working

**Problem:** Clicking links jumps instantly instead of smoothly scrolling.

**Solutions:**
1. **Check CSS**
   ```css
   /* Should be in styles.css */
   html {
       scroll-behavior: smooth;
   }
   ```

2. **Verify JavaScript**
   - Check script.js is loaded
   - Check for console errors

3. **Browser Support**
   - Works in modern browsers
   - May not work in very old browsers

---

## 🎭 FUNCTIONALITY ISSUES

### Issue: Gallery Lightbox Not Working

**Problem:** Clicking gallery images doesn't open modal.

**Solutions:**
1. **Check Modal HTML**
   ```html
   <!-- Modal must exist before </body> -->
   <div class="modal fade" id="galleryModal">
   ```

2. **Verify Bootstrap JS**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```

3. **Check JavaScript**
   - Ensure script.js is loaded
   - Check console for errors

4. **Test Modal Manually**
   - F12 → Console
   - Type: `new bootstrap.Modal(document.getElementById('galleryModal')).show()`

---

### Issue: Counter Statistics Not Animating

**Problem:** Numbers appear instantly without animation.

**Solutions:**
1. **Check JavaScript**
   - Verify script.js is loaded
   - Check for errors in console

2. **Scroll Into View**
   - Animation triggers on scroll
   - Scroll to "Work Done" section

3. **Check Intersection Observer Support**
   - Works in modern browsers
   - Won't work in Internet Explorer

---

## 📱 MOBILE-SPECIFIC ISSUES

### Issue: Text Too Small on Mobile

**Problem:** Text is unreadable on small screens.

**Solutions:**
1. **Check Viewport Meta Tag**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Add Mobile-Specific CSS**
   ```css
   @media (max-width: 576px) {
       body {
           font-size: 16px; /* Minimum for readability */
       }
       h1 {
           font-size: 1.5rem;
       }
   }
   ```

---

### Issue: Buttons Too Small to Tap

**Problem:** Hard to click buttons on mobile.

**Solutions:**
```css
/* Minimum tap target: 44x44px */
.btn {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
}
```

---

### Issue: Horizontal Scrolling on Mobile

**Problem:** Page scrolls left/right on mobile devices.

**Solutions:**
1. **Check for Fixed Widths**
   ```css
   /* Find and fix these */
   ❌ width: 1200px;
   ✅ max-width: 1200px;
   ```

2. **Add Overflow Control**
   ```css
   body {
       overflow-x: hidden;
   }
   ```

3. **Check Images**
   ```css
   img {
       max-width: 100%;
       height: auto;
   }
   ```

---

## 🌐 BROWSER COMPATIBILITY

### Issue: Website Works in Chrome but Not Safari

**Problem:** Features work in one browser but not another.

**Solutions:**
1. **Check Console in Problem Browser**
   - Safari: Develop → Show JavaScript Console
   - Look for specific errors

2. **Use Standard Features**
   - Avoid cutting-edge CSS/JS
   - Check compatibility: https://caniuse.com

3. **Test Vendor Prefixes**
   ```css
   .element {
       -webkit-transform: scale(1.1);
       transform: scale(1.1);
   }
   ```

---

## 🔍 DEBUGGING TECHNIQUES

### General Debugging Process

1. **Open Browser DevTools (F12)**
   ```
   - Elements tab: Check HTML/CSS
   - Console tab: Check JavaScript errors
   - Network tab: Check file loading
   ```

2. **Check Console First**
   - Red errors = critical issues
   - Yellow warnings = potential problems
   - Fix from top to bottom

3. **Use Element Inspector**
   - Right-click element → Inspect
   - Check if styles are applied
   - Look for crossed-out styles

4. **Test in Incognito/Private Mode**
   - Rules out extension conflicts
   - Fresh cache
   - Chrome: Ctrl+Shift+N
   - Firefox: Ctrl+Shift+P

5. **Validate HTML**
   - Use: https://validator.w3.org
   - Upload your HTML file
   - Fix any errors found

---

## 💾 FILE & HOSTING ISSUES

### Issue: Website Works Locally but Not on Server

**Problem:** Everything works on your computer but not after upload.

**Solutions:**
1. **Check File Paths**
   ```html
   <!-- Local might work -->
   <link href="C:/Users/You/styles.css">
   
   <!-- Server needs relative path -->
   <link href="styles.css">
   ```

2. **Check File Names (Case Sensitive)**
   ```
   ❌ index.HTML (wrong case)
   ✅ index.html (correct)
   
   ❌ Styles.css
   ✅ styles.css
   ```

3. **Verify All Files Uploaded**
   - index.html
   - styles.css
   - script.js
   - All images
   - All videos

4. **Check File Permissions**
   - Files: 644 (rw-r--r--)
   - Folders: 755 (rwxr-xr-x)

---

### Issue: Website Shows Wrong Content

**Problem:** Old version of website still showing.

**Solutions:**
1. **Clear Server Cache**
   - Check with hosting provider
   - May need to wait a few minutes

2. **Force Cache Refresh**
   ```html
   <!-- Add version number to links -->
   <link href="styles.css?v=2">
   <script src="script.js?v=2"></script>
   ```

3. **Clear CDN Cache**
   - If using Cloudflare or similar
   - Purge cache from control panel

---

## 🆘 STILL HAVING ISSUES?

### Diagnostic Checklist

Run through this list:

- [ ] Clear browser cache completely
- [ ] Test in different browser
- [ ] Test in incognito/private mode
- [ ] Check browser console for errors
- [ ] Validate HTML at validator.w3.org
- [ ] Verify all files are uploaded
- [ ] Check file names (case-sensitive)
- [ ] Confirm CDN links work
- [ ] Test on different device
- [ ] Check hosting server status

---

## 📞 Getting Help

### Information to Provide When Asking for Help

1. **Exact Error Message**
   - Screenshot of console
   - Copy full error text

2. **What You've Tried**
   - List troubleshooting steps taken

3. **Environment Details**
   - Browser and version
   - Operating system
   - Device type (mobile/desktop)
   - Hosting provider (if applicable)

4. **When It Started**
   - After specific change?
   - Always been an issue?

5. **Share Code Snippet**
   - Relevant HTML/CSS/JS
   - Not entire file

---

## 🔗 Useful Resources

- **W3C HTML Validator:** https://validator.w3.org
- **W3C CSS Validator:** https://jigsaw.w3.org/css-validator
- **Can I Use (Browser Support):** https://caniuse.com
- **Bootstrap Documentation:** https://getbootstrap.com/docs
- **Stack Overflow:** https://stackoverflow.com
- **MDN Web Docs:** https://developer.mozilla.org

---

## 💡 Prevention Tips

1. **Always Test Locally First**
   - Make changes
   - Test in browser
   - Then upload

2. **Keep Backups**
   - Save original files
   - Version control (Git)
   - Regular backups

3. **Test in Multiple Browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

4. **Validate Code Regularly**
   - Use HTML/CSS validators
   - Check console frequently

5. **Document Changes**
   - Keep notes of modifications
   - Makes troubleshooting easier

---

**Remember:** Most issues have simple solutions. Work through systematically and you'll find the answer! 🎯

---

*Troubleshooting Guide v1.0 - Sir Munaf Majeed Portfolio*
*Last Updated: October 16, 2025*
