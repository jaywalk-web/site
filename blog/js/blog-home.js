// blog-home.js - Homepage functionality

// DOM Elements
const postsGrid = document.getElementById('postsGrid');
const loadMoreBtn = document.getElementById('loadMore');
const pillarsFilter = document.getElementById('pillarsFilter');
let visiblePosts = 6;
let currentPillar = 'all';

// Initialize homepage
function initHomepage() {
    // Load blog data
    if (typeof blogPosts === 'undefined') {
        console.error('Blog posts data not loaded');
        return;
    }
    
    // Render filter buttons
    pillarsFilter.innerHTML = getAllPillars();
    
    // Add event listeners to filter buttons
    document.querySelectorAll('.pillar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const pillar = btn.getAttribute('data-pillar');
            filterPosts(pillar);
        });
    });
    
    // Initial render
    filterPosts('all');
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePosts);
    }
}

// Filter posts by pillar
function filterPosts(pillar) {
    currentPillar = pillar;
    
    // Update active filter button
    document.querySelectorAll('.pillar-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.pillar-btn[data-pillar="${pillar}"]`).classList.add('active');
    
    // Reset visible posts count
    visiblePosts = 6;
    
    // Render posts
    renderFilteredPosts();
}

// Render filtered posts
function renderFilteredPosts() {
    const postsToShow = currentPillar === 'all' 
        ? blogPosts.slice(0, visiblePosts)
        : blogPosts.filter(post => post.pillar === currentPillar).slice(0, visiblePosts);
    
    // Clear grid
    postsGrid.innerHTML = '';
    
    // Add posts with fade-in animation
    postsToShow.forEach((post, index) => {
        const postElement = document.createElement('article');
        postElement.className = 'post fade-in';
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <div class="post-meta">
                    <span>${post.date}</span>
                    <span class="post-pillar pillar-${post.pillar}">${post.pillar}</span>
                </div>
                <h2><a href="articles/${post.contentFile}">${post.title}</a></h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="articles/${post.contentFile}" class="read-more">Read more →</a>
            </div>
        `;
        postsGrid.appendChild(postElement);
        
        // Stagger animation
        setTimeout(() => {
            postElement.classList.remove('fade-in');
        }, index * 100);
    });

    // Show/hide load more button
    const totalFilteredPosts = currentPillar === 'all' 
        ? blogPosts.length 
        : blogPosts.filter(post => post.pillar === currentPillar).length;
    
    if (loadMoreBtn) {
        loadMoreBtn.style.display = visiblePosts >= totalFilteredPosts ? 'none' : 'block';
    }
}

// Load more posts
function loadMorePosts() {
    visiblePosts += 3;
    renderFilteredPosts();
    
    // Smooth scroll to newly loaded posts
    setTimeout(() => {
        const newPosts = document.querySelectorAll('.post');
        if (newPosts.length > 0) {
            const lastPost = newPosts[newPosts.length - 1];
            lastPost.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initHomepage);
