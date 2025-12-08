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