// blog-data.js - Blog posts database (Add new posts here!)

const blogPosts = [
    {
        id: "march-friendly-guide",
        title: "March Smart a Friendly Guide to Staying Safe While Making Change",
        excerpt: "Exploring how technology and data can work together to create safer walking environments in our increasingly connected urban landscapes.",
        date: "December 13, 2025",
        pillar: "education",
        readTime: "8 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "march-smart-a-friendly-guide-to-staying-safe-while-making-change.html", // This is CORRECT
        image: "https://jaywalk-web.github.io/site/blog/articles/images/March-Smart-A-Friendly-Guide-to-Staying-Safe-While-Making-Change.jpg"
    },
    {
        id: "you-dont-need-a-megaphone",
        title: "You Don't Need A Megaphone To Make A Noise",
        excerpt: "When we think about activism, it’s easy to imagine huge rallies, megaphones, or massive online campaigns that trend for days",
        date: "December 21, 2025",
        pillar: "community",
        readTime: "6 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "you-don't-need-a-megaphone-to-make-noise.html",
        image: "https://ik.imagekit.io/jaywalkapp/you-dont-need-a-megaphone-to-make-noise.jpg"
    },
    {
        id: "social-media-as-a-site-of-resistance-reclaiming-our-digital-power",
        title: "Social Media as a Site of Resistance: Reclaiming Our Digital Power",
        excerpt: "In a world where protest is met with surveillance, social media has become both a battleground and a lifeline. For many.",
        date: "December 25, 2025",
        pillar: "action",
        readTime: "7 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "social-media-as-a-site-of-resistance-reclaiming-our-digital-power.html",
        image: "https://ik.imagekit.io/jaywalkapp/social-media-as-a-site-of-resistance-reclaiming-our-digital-power"
    },
    {
        id: "why-stepping-back-from-meta-helps-us-reclaim-our-attention",
        title: "Why Stepping Back From Meta Helps us Reclaim Our Attention",
        excerpt: "Every scroll feels harmless — a few seconds of curiosity, a quick check-in, a break between tasks. But behind that gesture lies an entire infrastructure designed to hold your gaze.",
        date: "December 25, 2025",
        pillar: "education",
        readTime: "5 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "why-stepping-back-from-meta-helps-us-reclaim-our-attention.html",
        image: "https://ik.imagekit.io/jaywalkapp/why-stepping-back-from-meta-helps-us-reclaim-our-attention.jpg"
    },
    { 
        id: "escape-the-noise-enter-upscrolled",
        title: "Escape the Noise, Enter UpScrolled",
        excerpt: "If the first step to digital wellbeing is recognizing how our attention is being taken, the second step is finding online spaces where it can breathe again",
        date: "December 25, 2025",
        pillar: "community",
        readTime: "5 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "escape-the-noise-enter-uposcrolled.html",
        image: "https://ik.imagekit.io/jaywalkapp/upscrolld.PNG"
     
    },
    {
        id: "urban-walking-behavior",
        title: "The Psychology of Urban Walking Behavior",
        excerpt: "Understanding how pedestrians make decisions in complex urban environments.",
        date: "April 15, 2024",
        pillar: "education",
        readTime: "6 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "urban-walking-behavior.html",
        image: "images/posts/urban-walking-behavior.jpg"
    }
];

// Get pillar color class
function getPillarClass(pillar) {
    return `pillar-${pillar}`;
}

// Get all unique pillars for filter buttons
function getAllPillars() {
    const pillars = ['all', ...new Set(blogPosts.map(post => post.pillar))];
    return pillars.map(pillar => `
        <button class="pillar-btn ${pillar === 'all' ? 'active' : ''}" 
                data-pillar="${pillar}">
            ${pillar.charAt(0).toUpperCase() + pillar.slice(1)}
        </button>
    `).join('');
}

// Get recommended articles (excluding current article)
function getRecommendedArticles(currentArticleId, limit = 2) {
    return blogPosts
        .filter(post => post.id !== currentArticleId)
        .slice(0, limit)
        .map(post => `
            <div class="recommended-article">
                <img src="${post.image}" alt="${post.title}" class="recommended-image">
                <div class="recommended-content">
                    <h3 class="recommended-title"><a href="${post.contentFile}">${post.title}</a></h3>
                    <div class="recommended-meta">
                        <span>${post.date}</span>
                        <span class="post-pillar ${getPillarClass(post.pillar)}">${post.pillar}</span>
                    </div>
                    <a href="${post.contentFile}" class="read-more">Read more →</a>
                </div>
            </div>
        `).join('');
}

// Get previous/next articles
function getAdjacentArticles(currentArticleId) {
    const currentIndex = blogPosts.findIndex(post => post.id === currentArticleId);
    
    const prevArticle = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextArticle = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
    
    return { prevArticle, nextArticle };
}
