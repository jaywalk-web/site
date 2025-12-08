// blog-article.js - Article page functionality

// Initialize article page
function initArticlePage() {
    // Get current article ID from URL
    const currentPath = window.location.pathname;
    const articleFile = currentPath.split('/').pop();
    const articleId = articleFile.replace('.html', '');
    
    // Find current article in blogPosts
    const currentArticle = blogPosts.find(post => post.contentFile === `articles/${articleFile}`);
    
    if (!currentArticle) {
        console.error('Article not found in blog data');
        return;
    }
    
    // Update page title
    document.title = `${currentArticle.title} - Jaywalk Blog`;
    
    // Update article meta in header
    const articleMeta = document.querySelector('.article-meta');
    if (articleMeta) {
        articleMeta.innerHTML = `
            <span>${currentArticle.date}</span>
            <span class="post-pillar pillar-${currentArticle.pillar}">${currentArticle.pillar}</span>
            <span>${currentArticle.readTime}</span>
        `;
    }
    
    // Update article title
    const articleTitle = document.querySelector('.article-title');
    if (articleTitle) {
        articleTitle.textContent = currentArticle.title;
    }
    
    // Update article image
    const articleImage = document.querySelector('.article-image');
    if (articleImage) {
        articleImage.src = currentArticle.image;
        articleImage.alt = currentArticle.title;
    }
    
    // Update article navigation
    updateArticleNavigation(currentArticle.id);
    
    // Update recommended articles
    updateRecommendedArticles(currentArticle.id);
}

// Update article navigation (previous/next)
function updateArticleNavigation(currentArticleId) {
    const { prevArticle, nextArticle } = getAdjacentArticles(currentArticleId);
    const articleNav = document.getElementById('articleNav');
    
    if (!articleNav) return;
    
    let navHTML = '';
    
    if (prevArticle) {
        navHTML += `
            <a href="${prevArticle.contentFile}" class="nav-article prev">
                <span class="nav-arrow">←</span>
                <div class="nav-content">
                    <span class="nav-label">Previous Article</span>
                    <div class="nav-title">${prevArticle.title}</div>
                </div>
            </a>
        `;
    } else {
        navHTML += `<div class="nav-article prev" style="visibility: hidden;"></div>`;
    }
    
    if (nextArticle) {
        navHTML += `
            <a href="${nextArticle.contentFile}" class="nav-article next">
                <span class="nav-arrow">→</span>
                <div class="nav-content">
                    <span class="nav-label">Next Article</span>
                    <div class="nav-title">${nextArticle.title}</div>
                </div>
            </a>
        `;
    } else {
        navHTML += `<div class="nav-article next" style="visibility: hidden;"></div>`;
    }
    
    articleNav.innerHTML = navHTML;
}

// Update recommended articles
function updateRecommendedArticles(currentArticleId) {
    const recommendedContainer = document.getElementById('recommendedArticles');
    
    if (!recommendedContainer) return;
    
    recommendedContainer.innerHTML = getRecommendedArticles(currentArticleId);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initArticlePage);