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
        contentFile: "articles/march-smart-a-friendly-guide-to-staying-safe-while-making-change.html", // This is CORRECT
        image: "articles/images/March-Smart-A-Friendly-Guide-to-Staying-Safe-While-Making-Change.jpg"
    },
    {
        id: "ai-crosswalk-detection",
        title: "How AI is Revolutionizing Crosswalk Detection",
        excerpt: "A deep dive into the machine learning models that power modern pedestrian safety systems.",
        date: "May 10, 2024",
        pillar: "action",
        readTime: "6 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "articles/ai-crosswalk-detection.html",
        image: "images/posts/ai-crosswalk-detection.jpg"
    },
    {
        id: "portland-success-story",
        title: "Reducing Pedestrian Accidents by 40%: Portland's Success Story",
        excerpt: "How one city combined technology and public awareness to improve pedestrian safety.",
        date: "May 5, 2024",
        pillar: "action",
        readTime: "7 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "articles/portland-success-story.html",
        image: "images/posts/portland-success-story.jpg"
    },
    {
        id: "community-engagement",
        title: "Building Safer Neighborhoods Through Community Engagement",
        excerpt: "Community-driven approaches to pedestrian safety that empower local residents.",
        date: "April 28, 2024",
        pillar: "community",
        readTime: "5 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "articles/community-engagement.html",
        image: "images/posts/community-engagement.jpg"
    },
    {
        id: "safety-tech-urban-mobility",
        title: "Next-Gen Safety Tech for Urban Mobility",
        excerpt: "Emerging technologies shaping the future of pedestrian safety and urban mobility.",
        date: "April 20, 2024",
        pillar: "action",
        readTime: "9 min read",
        author: "Jaywalk Team",
        authorImage: "images/authors/jaywalk-team.jpg",
        contentFile: "articles/safety-tech-urban-mobility.html",
        image: "images/posts/safety-tech-urban-mobility.jpg"
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
        contentFile: "articles/urban-walking-behavior.html",
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
