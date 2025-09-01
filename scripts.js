// Kids Gaming Site - Dynamic Content Loading
// TODO: student exercise - Add error handling for fetch requests

// Global variables to store loaded data
let brandingData = {};
let themeData = {};
let gamesData = {};

// Initialize the site when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kids Gaming Site is loading...');
    loadAllData();
});

// TODO: student exercise - Add loading spinner while data loads
async function loadAllData() {
    try {
        // Load all JSON data files
        brandingData = await fetchJSON('./data/branding.json');
        themeData = await fetchJSON('./data/theme.json');
        gamesData = await fetchJSON('./data/games.json');
        
        // Apply loaded data to the page
        applyTheme();
        populateBranding();
        populateGames();
        setupCountdown();
        
        console.log('All data loaded successfully!');
    } catch (error) {
        console.error('Error loading data:', error);
        showErrorMessage('Failed to load site data. Please refresh the page.');
    }
}

// Helper function to fetch JSON data
async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    return await response.json();
}

// TODO: student exercise - Add dynamic theme switching
function applyTheme() {
    if (!themeData.colors) return;
    
    const root = document.documentElement;
    
    // Apply CSS custom properties from theme data
    if (themeData.colors.primary) {
        root.style.setProperty('--primary', themeData.colors.primary);
    }
    if (themeData.colors.accent) {
        root.style.setProperty('--accent', themeData.colors.accent);
    }
    if (themeData.colors.background) {
        root.style.setProperty('--bg', themeData.colors.background);
    }
    if (themeData.colors.text) {
        root.style.setProperty('--text', themeData.colors.text);
    }
    
    // Apply font family if specified
    if (themeData.font) {
        document.body.style.fontFamily = themeData.font;
    }
    
    console.log('Theme applied:', themeData);
}

// TODO: student exercise - Add logo animation on load
function populateBranding() {
    if (!brandingData.brand) return;
    
    const brand = brandingData.brand;
    
    // Update brand section
    const brandElement = document.getElementById('brand');
    if (brandElement && brand.logo) {
        brandElement.innerHTML = `
            <img src="${brand.logo.title}" alt="${brand.organizationName}" class="brand-logo">
            <span class="brand-name">${brand.organizationName}</span>
        `;
    }
    
    // Update favicon
    if (brand.logo && brand.logo.favicon) {
        updateFavicon(brand.logo.favicon);
    }
    
    // Update page title
    if (brand.organizationName) {
        document.title = `${brand.organizationName} - Kids Gaming Site`;
    }
    
    // Update hero tagline with slogan
    const taglineElement = document.getElementById('hero-tagline');
    if (taglineElement && brand.slogan) {
        taglineElement.textContent = brand.slogan;
    }
    
    // Populate footer with contact and social media
    populateFooter(brand);
    
    console.log('Branding populated:', brand);
}

// TODO: student exercise - Add social media icons
function populateFooter(brand) {
    const footerElement = document.getElementById('footer-content');
    if (!footerElement) return;
    
    let footerHTML = '';
    
    // Add contact information
    if (brand.email || brand.mobile) {
        footerHTML += '<div class="contact-info">';
        if (brand.email) {
            footerHTML += `<p>Email: <a href="mailto:${brand.email}">${brand.email}</a></p>`;
        }
        if (brand.mobile) {
            footerHTML += `<p>Phone: <a href="tel:${brand.mobile}">${brand.mobile}</a></p>`;
        }
        footerHTML += '</div>';
    }
    
    // Add social media links
    if (brand.socialMedia) {
        footerHTML += '<div class="social-links">';
        const socialMedia = brand.socialMedia;
        
        Object.keys(socialMedia).forEach(platform => {
            const url = socialMedia[platform];
            if (url) {
                footerHTML += `
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${platform}">
                        ${getSocialIcon(platform)}
                    </a>
                `;
            }
        });
        
        footerHTML += '</div>';
    }
    
    // Add copyright
    footerHTML += `<p>&copy; ${new Date().getFullYear()} ${brand.organizationName || 'Kids Gaming Site'}. All rights reserved.</p>`;
    
    footerElement.innerHTML = footerHTML;
}

// Helper function to get social media icons (using text for now)
function getSocialIcon(platform) {
    const icons = {
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        github: 'GitHub',
        x: 'X',
        youtube: 'YouTube',
        blog: 'Blog'
    };
    return icons[platform] || platform;
}

// Update favicon dynamically
function updateFavicon(faviconUrl) {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
}

// TODO: student exercise - Add game filtering and search
function populateGames() {
    if (!gamesData.games || !Array.isArray(gamesData.games)) return;
    
    const gamesGrid = document.getElementById('games-grid');
    if (!gamesGrid) return;
    
    // Update page title if available
    if (gamesData.title) {
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) {
            heroTitle.textContent = gamesData.title;
        }
    }
    
    // Update tagline if available
    if (gamesData.tagline) {
        const taglineElement = document.getElementById('hero-tagline');
        if (taglineElement) {
            taglineElement.textContent = gamesData.tagline;
        }
    }
    
    // Generate game cards
    const gameCards = gamesData.games.map(game => createGameCard(game)).join('');
    gamesGrid.innerHTML = gameCards;
    
    console.log(`${gamesData.games.length} games loaded`);
}

// TODO: student exercise - Add game card animations
function createGameCard(game) {
    const defaultThumbnail = 'https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Game';
    
    return `
        <div class="game-card" role="listitem" tabindex="0" onclick="playGame('${game.url || '#'}')">
            <img src="${game.thumbnail || defaultThumbnail}" alt="${game.name}" class="game-thumbnail" loading="lazy">
            <h3 class="game-title">${game.name}</h3>
            <p class="game-description">${game.description}</p>
            <span class="game-difficulty difficulty-${(game.difficulty || 'easy').toLowerCase()}">${game.difficulty || 'Easy'}</span>
        </div>
    `;
}

// TODO: student exercise - Add game launch functionality
function playGame(gameUrl) {
    if (gameUrl && gameUrl !== '#') {
        window.open(gameUrl, '_blank', 'noopener,noreferrer');
    } else {
        alert('Game coming soon! Stay tuned for more exciting games.');
    }
}

// TODO: student exercise - Add pause/resume countdown functionality
function setupCountdown() {
    if (!gamesData.countdown || !gamesData.countdown.target) return;
    
    const targetDate = new Date(gamesData.countdown.target);
    const countdownElement = createCountdownElement();
    
    if (!countdownElement) return;
    
    // Update countdown every second
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = '<h3>🎉 New Games Available Now! 🎉</h3>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `
            <h3>${gamesData.countdown.title || 'Next Game Release'}</h3>
            <div class="countdown-timer">
                <div class="time-unit">
                    <span class="time-number">${days}</span>
                    <span class="time-label">Days</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">${hours}</span>
                    <span class="time-label">Hours</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">${minutes}</span>
                    <span class="time-label">Minutes</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">${seconds}</span>
                    <span class="time-label">Seconds</span>
                </div>
            </div>
        `;
    }, 1000);
}

// Create countdown element and insert it into the page
function createCountdownElement() {
    const gamesSection = document.getElementById('games');
    if (!gamesSection) return null;
    
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown-section';
    countdownElement.innerHTML = '<div class="container"><div id="countdown-timer"></div></div>';
    
    gamesSection.insertBefore(countdownElement, gamesSection.firstChild);
    
    // Add countdown styles
    const style = document.createElement('style');
    style.textContent = `
        .countdown-section {
            background: linear-gradient(135deg, var(--accent), var(--primary));
            color: white;
            padding: 2rem 0;
            text-align: center;
            margin-bottom: 2rem;
        }
        .countdown-timer {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
        }
        .time-unit {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .time-number {
            font-size: 2rem;
            font-weight: bold;
            display: block;
        }
        .time-label {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        @media (max-width: 767px) {
            .countdown-timer { gap: 1rem; }
            .time-number { font-size: 1.5rem; }
        }
    `;
    document.head.appendChild(style);
    
    return document.getElementById('countdown-timer');
}

// Error handling helper
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background-color: #ff4757;
        color: white;
        padding: 1rem;
        margin: 1rem;
        border-radius: 8px;
        text-align: center;
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    // Remove error message after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

// TODO: student exercise - Add keyboard navigation for games
// TODO: student exercise - Add local storage for user preferences
// TODO: student exercise - Add game favorites functionality
