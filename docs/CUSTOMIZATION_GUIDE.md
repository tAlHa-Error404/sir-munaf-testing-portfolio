# Quick Customization Guide
## Common Modifications Made Easy

---

## 🎨 1. CHANGING COLORS

### Primary Color (Currently: #C21E25)

**Location:** `styles.css` (Lines 6-10)

```css
:root {
    --primary-color: #C21E25;  /* ← Change this */
    --primary-dark: #9a1820;   /* ← Darker shade */
    --primary-light: #d63842;  /* ← Lighter shade */
}
```

**How to pick colors:**
1. Use a color picker tool (Google "color picker")
2. Copy the hex code (e.g., #4A90E2)
3. Replace #C21E25 with your color
4. For dark shade: reduce brightness by 20%
5. For light shade: increase brightness by 20%

---

## 👤 2. CHANGING PERSONAL INFORMATION

### Name/Brand (3 locations to update)

**Location 1:** Top Navigation
```html
File: index.html (Line ~34)
<a class="navbar-brand">Sir Munaf Majeed</a>
                       ^^^^^^^^^^^^^^^^^ Change this
```

**Location 2:** Hero Section
```html
File: index.html (Line ~60)
<h1>Welcome to the World of Muhammad Munaf Mujeed</h1>
                            ^^^^^^^^^^^^^^^^^^^^^^ Change this
```

**Location 3:** Footer
```html
File: index.html (Line ~450)
<h5>Sir Munaf Majeed</h5>
    ^^^^^^^^^^^^^^^^ Change this
```

### Contact Information

**Email (2 locations):**

Location 1 - Top Banner:
```html
File: index.html (Line ~23)
contact at munaf@example.com
           ^^^^^^^^^^^^^^^^^ Change this
```

Location 2 - Footer:
```html
File: index.html (Line ~485)
munaf.majeed@example.com
^^^^^^^^^^^^^^^^^^^^^^^^ Change this
```

**Phone Number:**
```html
File: index.html (Line ~488)
+92 300 1234567
^^^^^^^^^^^^^^^ Change this
```

**Address:**
```html
File: index.html (Line ~482)
Karachi, Sindh, Pakistan
^^^^^^^^^^^^^^^^^^^^^^^^ Change this
```

---

## 📸 3. REPLACING IMAGES

### Where Images Are Used

| Section | Purpose | Current URL Pattern | Line # |
|---------|---------|-------------------|--------|
| PASHA | Section image | unsplash.com/photo-1560179707... | ~70 |
| Journey | Profile photo | unsplash.com/photo-1519085360... | ~92 |
| Industry | Corporate image | unsplash.com/photo-1552664730... | ~114 |
| Achievements (6x) | Award images | unsplash.com/photo-various... | ~170-250 |
| Gallery (9x) | Event photos | unsplash.com/photo-various... | ~280-350 |

### How to Replace:

**Option 1: Use Your Own Images**
```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-123456789">

<!-- After -->
<img src="images/my-photo.jpg">
```

**Option 2: Use Different Stock Photos**
- Visit: unsplash.com, pexels.com, or pixabay.com
- Download image
- Copy the image URL
- Replace in the src="" attribute

**Recommended Image Sizes:**
- Hero/Section images: 1920x1080px or larger
- Achievement cards: 800x600px
- Gallery: 1200x900px minimum
- Keep file sizes under 500KB each

---

## 🎬 4. CHANGING BACKGROUND VIDEO

### Current Video
```html
File: index.html (Line ~56)
<source src="https://cdn.coverr.co/videos/coverr-business...">
```

### Replace With Your Video

**Step 1:** Get Your Video
- Film your own (30-60 seconds)
- Download from coverr.co or pexels.com/videos
- Format: MP4, Size: Under 10MB

**Step 2:** Upload Video
- Create a folder: `/videos/`
- Place your video: `/videos/background.mp4`

**Step 3:** Update HTML
```html
<source src="videos/background.mp4" type="video/mp4">
                ^^^^^^^^^^^^^^^^^^^^ Your video path
```

**Video Tips:**
- ✅ Keep it short (20-60 seconds, it loops)
- ✅ Subtle motion (not too distracting)
- ✅ No audio needed (video is muted)
- ✅ 1080p resolution recommended
- ❌ Avoid large file sizes (compress if needed)

---

## 📝 5. UPDATING TEXT CONTENT

### Top Banner Text
```html
File: index.html (Line ~23)
<p>For training sessions, engagement & business related contact...</p>
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   Write your message here (keep it brief - displays on one line)
```

### Hero Section
```html
File: index.html (Lines 60-61)
<h1>Welcome to the World of Muhammad Munaf Mujeed</h1>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Your main headline

<p>Inspiring growth, fostering leadership...</p>
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Your tagline/subtitle
```

### Journey Section
```html
File: index.html (Lines 94-103)
<h2>Journey of Muhammad Munaf Mujeed</h2>
<p>Your story starts here...</p>
   ^^^^^^^^^^^^^^^^^^^^^^^^^ Replace with your actual journey
```

---

## 🏆 6. MODIFYING ACHIEVEMENTS

Each achievement card has:
- Image
- Title
- Description

### Example Card Structure:
```html
<div class="card achievement-card">
    <img src="image-url.jpg" alt="Description">
    <div class="card-body">
        <h5 class="card-title">Award Title</h5>
        <p class="card-text">Award description goes here...</p>
    </div>
</div>
```

### To Add/Remove Cards:

**Add:** Copy entire card div and paste it
**Remove:** Delete the entire card div
**Edit:** Change src, title, and text

---

## 🎪 7. UPDATING EVENTS

### Event Card Structure:
```html
<div class="card event-card">
    <div class="row g-0">
        <div class="col-md-4 bg-primary">
            <h2>25</h2>     ← Day
            <p>OCT</p>       ← Month
        </div>
        <div class="col-md-8">
            <h5>Leadership Workshop</h5>        ← Event Name
            <p>
                <i class="bi bi-clock"></i>10:00 AM - 4:00 PM  ← Time
                <i class="bi bi-geo-alt"></i>Location Name      ← Place
            </p>
        </div>
    </div>
</div>
```

### Modify Each:
1. Date and month
2. Event name
3. Time
4. Location

---

## 🔗 8. SOCIAL MEDIA LINKS

### Location: Footer Section
```html
File: index.html (Lines 463-467)

<a href="https://facebook.com/yourprofile">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Add your Facebook URL
    <i class="bi bi-facebook"></i>
</a>

<a href="https://twitter.com/yourhandle">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Add your Twitter
    <i class="bi bi-twitter"></i>
</a>

<a href="https://linkedin.com/in/yourprofile">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Add your LinkedIn
    <i class="bi bi-linkedin"></i>
</a>

<a href="https://instagram.com/yourhandle">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Add your Instagram
    <i class="bi bi-instagram"></i>
</a>

<a href="https://youtube.com/yourchannel">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Add your YouTube
    <i class="bi bi-youtube"></i>
</a>
```

---

## 🖼️ 9. GALLERY CUSTOMIZATION

### Current Setup: 9 Images in 3x3 Grid

### To Change Number of Images:

**For 2 columns per row:**
```html
<div class="col-md-6">  <!-- Change from col-md-4 to col-md-6 -->
```

**For 4 columns per row:**
```html
<div class="col-md-3">  <!-- Change from col-md-4 to col-md-3 -->
```

### To Add More Images:
Copy this block and paste:
```html
<div class="col-md-4">
    <div class="gallery-item">
        <img src="your-image.jpg" alt="Description">
        <div class="gallery-overlay">
            <i class="bi bi-zoom-in"></i>
        </div>
    </div>
</div>
```

---

## 📱 10. NAVIGATION MENU ITEMS

### Current Menu Items:
1. PASHA
2. Journey
3. Muhammad Munaf Mujeed
4. Gallery
5. Event

### To Add New Item:

**Step 1:** Add to navigation (index.html, Line ~40)
```html
<li class="nav-item">
    <a class="nav-link" href="#newsection">New Section</a>
</li>
```

**Step 2:** Create matching section
```html
<section id="newsection">
    <!-- Your content here -->
</section>
```

**Important:** The `href="#newsection"` must match `id="newsection"`

### To Remove Item:
Simply delete the `<li>` block from navigation

---

## 🎭 11. CHANGING FONTS

### To Use Different Fonts:

**Step 1:** Add Google Font in `<head>` of index.html
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

**Step 2:** Update font in styles.css
```css
body {
    font-family: 'Roboto', sans-serif;  /* Replace with your font */
}
```

**Popular Fonts:**
- Roboto (Modern, clean)
- Open Sans (Professional)
- Montserrat (Bold, stylish)
- Lato (Elegant)
- Poppins (Contemporary)

---

## 🔢 12. STATISTICS/COUNTER NUMBERS

### Location: Work Done Section

```html
File: index.html (Lines ~130-155)

<h3>150+</h3>              ← Change number
<p>Projects Completed</p>   ← Change label

<h3>50+</h3>               ← Change number
<p>Organizations Helped</p> ← Change label

<h3>1000+</h3>             ← Change number
<p>People Trained</p>      ← Change label

<h3>15+</h3>               ← Change number
<p>Years Experience</p>    ← Change label
```

**Note:** JavaScript automatically animates these numbers on scroll

---

## 💡 QUICK TIPS

### Testing Your Changes:
1. Save the file
2. Refresh browser (Ctrl+F5 or Cmd+Shift+R)
3. Check mobile view (F12 → Toggle device toolbar)

### Common Mistakes:
- ❌ Forgetting closing tags `</div>`
- ❌ Mismatched quotation marks `"` vs `'`
- ❌ Wrong image paths
- ❌ Not matching href and id values

### Best Practices:
- ✅ Make one change at a time
- ✅ Keep backup of original file
- ✅ Test on different screen sizes
- ✅ Compress images before uploading
- ✅ Use descriptive alt text for images

---

## 🆘 TROUBLESHOOTING

### Problem: Colors not changing
**Solution:** Clear browser cache (Ctrl+Shift+Delete)

### Problem: Images not showing
**Solution:** Check file path and image format (use .jpg or .png)

### Problem: Video not playing
**Solution:** Ensure video is in MP4 format and path is correct

### Problem: Layout broken on mobile
**Solution:** Check that all Bootstrap classes are correct (col-md-4, etc.)

### Problem: Smooth scroll not working
**Solution:** Verify script.js is loaded and id matches href in navigation

---

## 📚 RESOURCES

- **Bootstrap Documentation:** https://getbootstrap.com/docs/5.3
- **Bootstrap Icons:** https://icons.getbootstrap.com
- **Color Picker:** https://www.google.com/search?q=color+picker
- **Free Images:** https://unsplash.com, https://pexels.com
- **Free Videos:** https://coverr.co, https://pexels.com/videos
- **Image Compression:** https://tinypng.com
- **Video Compression:** https://www.freeconvert.com/video-compressor

---

**Need More Help?**

Refer to the full README.md file or contact for support.

*Last Updated: October 16, 2025*
