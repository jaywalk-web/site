# Jaywalk Blog - GitHub CMS

## 🚀 Quick Start

1. **Create all folders** as shown in the structure
2. **Copy all files** with the exact content provided
3. **Upload to GitHub**
4. **Enable GitHub Pages** (Settings > Pages > main branch)
5. **Your blog is live!**

## 📝 How to Add New Posts
### Step 1: Add Post Data
Edit `js/blog-data.js` and add a new object:
# Jaywalk Blog - GitHub CMS

## 🚀 Quick Start

1. **Create all folders** as shown in the structure
2. **Copy all files** with the exact content provided
3. **Upload to GitHub**
4. **Enable GitHub Pages** (Settings > Pages > main branch)
5. **Your blog is live!**

## 📝 How to Add New Posts

## Step 1: Add Post Data
Edit `js/blog-data.js` and add a new object:
```javascript
{
    id: "your-unique-slug",
    title: "Your Article Title",
    excerpt: "Brief description...",
    date: "June 1, 2024",
    pillar: "community", // "action", "community", or "education"
    readTime: "5 min read",
    author: "Jaywalk Team",
    authorImage: "images/authors/jaywalk-team.jpg",
    contentFile: "articles/your-slug.html",
    image: "images/posts/your-image.jpg"
}
```javascript

## Step 2: Create Article File
Copy article-template.html to articles/your-slug.html

Edit the content inside <div class="article-body">

Keep the structure and JavaScript links

Step 3: Add Image
Add your image to images/posts/your-image.jpg

Step 4: Push to GitHub
Commit and push - your post appears automatically!

🔧 No Command Line Needed
Edit files directly in GitHub web interface

No CSS/JS changes needed for new posts

Automatic filtering and sorting

All posts use "Jaywalk Team" as author

text

---

## 🎯 **Key Points:**

1. **All CSS is complete** - No missing `.article-body` or other components
2. **All sample articles exist** - You have 6 complete articles
3. **All JavaScript works** - Automatic filtering, navigation, recommendations
4. **"Jaywalk Team" as author** - Consistent across all posts
5. **GitHub as CMS** - Just edit `blog-data.js` to add posts
6. **No terminal needed** - Everything works through GitHub web interface

## 🚀 **To Deploy:**

1. **Create all folders** exactly as shown
2. **Add all files** with the exact content provided
3. **Upload images** - Use any professional team photo and blog post images
4. **Push to GitHub** and enable Pages

Your blog will work exactly like the original design, but now with GitHub as your CMS!
