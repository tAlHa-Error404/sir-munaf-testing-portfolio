// Gallery Data
const galleryData = {
    speaker: [
        {
            id: 1,
            name: 'Sir Munaf & Infosec Team  ',
            title: 'Awareness About Threats',
            description: 'Understanding cybersecurity fundamentals',
            image: '../images/Infosec_3.jpeg'
        },
        {
            id: 2,
            name: 'PKCERT',
            title: 'Process of Threats',
            description: 'Deep dive into cyber threats',
            image: '../images/NCERT)1.png'
        },
        {
            id: 3,
            name: 'CXO Summit',
            title: 'Prevention of Threats',
            description: 'Best practices for threat prevention',
            image: '../images/CXO image.png'
        },
        {
            id: 4,
            name: 'Ground zero',
            title: 'Awareness of Threats',
            description: 'Building cybersecurity awareness',
            image: '../images/365 news.jpg',
            link: 'https://www.youtube.com/watch?v=6XZyf_5W7pY&list=PLBbheVW4CPTKyaDBY8v4RBUfylWkNKdZa'
        }
    ],
    events: [
        {
            id: 5,
            title: 'FLA Conference',
            description: 'Future Leadership Alliance Conference',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            venue: 'Karachi Expo Center'
        },
        {
            id: 6,
            title: 'CIO Summit',
            description: 'Chief Information Officers Meeting',
            image: '../images/CXO image.png',
            venue: 'Pearl Continental Hotel'
        },
        {
            id: 7,
            title: 'CXO Conference',
            description: 'Executive Leadership Forum',
            image: '../images/CXO Talk .png',
            venue: 'Marriott Hotel'
        },
        {
            id: 8,
            title: 'PASHA Summit',
            description: 'Annual IT Industry Event',
            image: '../images/Hostel Hostel.png',
            venue: 'Movenpick Hotel'
        }
    ],
    'news-channel': [
        {
            id: 9,
            title: 'Internet Service Slowdown in Pakistan',
            description: 'پاکستان میں انٹرنیٹ سروس سست روی کی وجہ؟ شارک نے ایک بار پھر تار خالی یا اصل معاملہ کچھ اور؟',
            date: '14 Oct, 2025',
            facebookLink: 'https://www.facebook.com/reel/793549040107437',
            image: '../images/ITCN AAJ News.png',
            channel: 'News Analysis'
        },
        {
            id: 10,
            title: 'Social Media Users Beware',
            description: 'Data of Millions Stolen! Cybersecurity Expert Exclusive! | Ground Zero',
            date: '28 May, 2025',
            youtubeLink: 'https://www.youtube.com/watch?v=6XZyf_5W7pY',
            image: 'https://img.youtube.com/vi/6XZyf_5W7pY/maxresdefault.jpg',
            channel: 'Ground Zero'
        },
        {
            id: 11,
            title: 'Türkiye backs Pakistan',
            description: 'India reacts angrily | Dus | Aaj News',
            date: '17 May, 2025',
            youtubeLink: 'https://www.youtube.com/watch?v=pk_sXb1qlEU&list=PLtHlCNg4H8xmzs4X8wYx48HS25yT-C1HB&index=22',
            image: '../images/Aaj News.png',
            channel: 'Aaj News'
        },
        {
            id: 12,
            title: 'ITCN Asia 2023',
            description: 'IT Industry Situation! | Awaz | Aaj News',
            youtubeLink: 'https://www.youtube.com/watch?v=zObWTEw2M9Q',
            image: '../images/ITCN AAJ News.png',
            channel: 'Aaj News'
        }
    ],
    conferences: [
        {
            id: 13,
            title: 'Cybersecurity Summit',
            description: 'Annual Security Conference',
            image: '../images/cyber session.jpg',
            date: 'December 15, 2025',
            venue: 'Karachi Convention Center'
        },
        {
            id: 14,
            title: 'Tech Innovation Forum',
            description: 'Future of Technology',
            link: 'https://www.youtube.com/watch?v=CPZmZVhT6GM',
            image: '../images/CXO Talk .png',
            date: 'December 20, 2025',
            venue: 'Pearl Continental Hotel'
        },
        {
            id: 15,
            title: 'Digital Summit',
            description: 'Digital Transformation Event',
            image: '../images/Honey trap.jpg',
            date: 'January 5, 2026',
            venue: 'Movenpick Hotel'
        },
        {
            id: 16,
            title: 'Industry Conference',
            description: 'Industrial Innovation',
            image: '../images/SMEC 3.png',
            date: 'January 10, 2026',
            venue: 'Marriott Hotel'
        }
    ]
};

// Show gallery items based on category
const itemsPerPage = 4; // Number of items to show initially
let currentCategory = '';
let displayedItems = 0;

function showGalleryItems(category) {
    currentCategory = category;
    const container = document.getElementById('galleryItems');
    const items = galleryData[category];
    const seeMoreBtn = document.getElementById('seeMoreBtn');

    // Clear existing content
    container.innerHTML = '';
    displayedItems = 0;

    // Add initial items
    items.slice(0, itemsPerPage).forEach(item => {
        appendGalleryItem(container, item, category);
        displayedItems++;
    });

    // Show/hide "See More" button
    if (items.length > itemsPerPage) {
        seeMoreBtn.classList.remove('d-none');
    } else {
        seeMoreBtn.classList.add('d-none');
    }
}

function appendGalleryItem(container, item, category) {
    const col = document.createElement('div');
    col.className = 'col-lg-6 col-md-6 mb-4'; // Changed to col-lg-6 for two cards per row

    let content = '';
    switch(category) {
        case 'speaker':
            content = createSpeakerBox(item);
            break;
        case 'events':
            content = createEventBox(item);
            break;
        case 'news-channel':
            content = createNewsBox(item);
            break;
        case 'conferences':
            content = createConferenceBox(item);
            break;
    }

    col.innerHTML = content;
    container.appendChild(col);

    // Initialize YouTube player interactions for news-channel video items
    if (category === 'news-channel' && item.youtubeLink) {
        const vid = extractYouTubeId(item.youtubeLink);
        const wrap = col.querySelector(`#yt-${vid}`);
        if (wrap) {
            setupYtThumbInteraction(wrap, vid, item.title || 'YouTube video');
        }
    }

    // Make entire news card clickable to open the external video/link
    if (category === 'news-channel') {
        const card = col.querySelector('.unified-card');
        if (card) {
            const playerWrap = card.querySelector('.yt-player-wrap');
            const externalLink = item.youtubeLink || item.facebookLink || '';
            if (externalLink) {
                card.style.cursor = 'pointer';
                card.setAttribute('role','link');
                card.setAttribute('aria-label', (item.title ? `Open ${item.title}` : 'Open video'));
                card.setAttribute('tabindex','0');
                card.addEventListener('click', (e) => {
                    // If clicking inside the inline player, let the player handle it
                    if (playerWrap && playerWrap.contains(e.target)) return;
                    window.open(externalLink, '_blank', 'noopener');
                });
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        // Avoid interfering with player keyboard events
                        if (playerWrap && playerWrap.contains(e.target)) return;
                        e.preventDefault();
                        window.open(externalLink, '_blank', 'noopener');
                    }
                });
            }
        }
    }
}

// Create Speaker Box
function createSpeakerBox(item) {
    return `
        <a href="${item.link ? item.link : item.image}" target="_blank" rel="noopener noreferrer" class="unified-card-link" aria-label="Open ${item.title}">
            <div class="unified-card speaker-box">
                <div class="card-arrow"></div>
                <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" decoding="async">
                <div class="card-content-wrapper">
                    <div class="text-muted small">${item.name}</div>
                    <h4 class="card-heading">${item.title}</h4>
                    <p class="card-description">${item.description}</p>
                </div>
            </div>
        </a>
    `;
}

// Create Event Box
function createEventBox(item) {
    return `
        <a href="${item.image}" target="_blank" rel="noopener noreferrer" class="unified-card-link">
            <div class="unified-card event-box">
                <div class="card-arrow"></div>
                <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" decoding="async">
                <div class="card-content-wrapper">
                    <h4 class="card-heading">${item.title}</h4>
                    <p class="card-description">${item.description}</p>
                    <div class="event-info">
                        <div><i class="fas fa-map-marker-alt"></i> ${item.venue}</div>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Create News Box
function createNewsBox(item) {
    if (item.youtubeLink) {
        const vid = extractYouTubeId(item.youtubeLink);
        const thumb = item.image || `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;
        return `
            <div class="unified-card news-box video-news-box">
                <div class="card-arrow"></div>
                <div id="yt-${vid}" class="yt-player-wrap" role="group" aria-label="${item.title} video player">
                  <div class="yt-thumb-layer" role="button" tabindex="0" aria-label="Play ${item.title} video">
                    <img
                      class="yt-thumb-img"
                      src="${thumb}"
                      alt="${item.title} thumbnail"
                      loading="lazy" decoding="async">
                    <span class="yt-play-overlay" aria-hidden="true" title="Play">
                      <i class="fas fa-play"></i>
                    </span>
                  </div>
                  <div class="yt-spinner visually-hidden" aria-hidden="true" aria-live="polite" title="Loading"></div>
                  <div class="yt-error visually-hidden" role="alert" aria-live="assertive"></div>
                </div>
                <div class="card-content-wrapper">
                    <h4 class="card-heading">${item.title}</h4>
                    <p class="card-description">${item.description}</p>
                    <div class="channel-badge-content">${item.channel}</div>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="unified-card news-box">
                <div class="card-arrow"></div>
                <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" decoding="async">
                <div class="card-content-wrapper">
                    <h4 class="card-heading">${item.title}</h4>
                    <p class="card-description">${item.description}</p>
                    <div class="channel-badge-content">${item.channel}</div>
                </div>
            </div>
        `;
    }
}

// Create Conference Box
function createConferenceBox(item) {
    return `
        <a href="${item.link ? item.link : item.image}" target="_blank" rel="noopener noreferrer" class="unified-card-link" aria-label="Open ${item.title}">
            <div class="unified-card conference-box">
                <div class="card-arrow"></div>
                <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy" decoding="async">
                <div class="card-content-wrapper">
                    <h4 class="card-heading">${item.title}</h4>
                    <p class="card-description">${item.description}</p>
                    <div class="conference-info">
                        <div><i class="fas fa-location-dot"></i> ${item.venue}</div>
                        <div><i class="fas fa-calendar-alt"></i> ${item.date}</div>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    // Inject minimal styles for vision-style YouTube player if not present
    (function injectYtStyles(){
        if (document.querySelector('style[data-yt-player-styles]')) return;
        const style = document.createElement('style');
        style.setAttribute('data-yt-player-styles','true');
        style.textContent = `
          .yt-player-wrap { position: relative; width: 100%; padding-bottom: 50%; height: 0; background: #000; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
          .yt-player-wrap > * { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
          .yt-thumb-layer { display: flex; align-items: center; justify-content: center; cursor: pointer; outline: none; }
          .yt-thumb-img { width: 100%; height: 100%; object-fit: cover; transform-origin: center; transition: transform 0.3s ease, opacity 0.3s ease; }
          .yt-play-overlay { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 56px; height: 56px; border-radius: 50%; background: rgba(0,0,0,0.55); color: #fff; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(0,0,0,0.25); transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease; }
          .yt-play-overlay i { font-size: 22px; }
          .yt-thumb-layer:hover .yt-thumb-img, .yt-thumb-layer:focus .yt-thumb-img, .yt-thumb-layer:focus-visible .yt-thumb-img { transform: scale(1.03); opacity: 0.95; }
          .yt-thumb-layer:hover .yt-play-overlay, .yt-thumb-layer:focus .yt-play-overlay, .yt-thumb-layer:focus-visible .yt-play-overlay { transform: translate(-50%, -50%) scale(1.06); background: rgba(220,53,69,0.85); }
          .yt-thumb-layer:focus-visible { box-shadow: 0 0 0 4px rgba(220,53,69,0.4); }
          .yt-spinner::after { content: ""; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 32px; height: 32px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.4); border-top-color: #fff; animation: yt-spin 0.9s linear infinite; }
          @keyframes yt-spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
          .yt-error { position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); background: rgba(220,53,69,0.9); color: #fff; padding: 6px 10px; border-radius: 6px; font-size: 0.9rem; box-shadow: 0 6px 16px rgba(0,0,0,0.25); }
        `;
        document.head.appendChild(style);
    })();

    // Show speaker content by default
    showGalleryItems('speaker');

    // Add click handlers to buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding items
            const category = button.dataset.category;
            showGalleryItems(category);
        });
    });

    // Add click handler for "See More" button
    document.getElementById('seeMoreBtn').addEventListener('click', () => {
        const container = document.getElementById('galleryItems');
        const items = galleryData[currentCategory];
        const seeMoreBtn = document.getElementById('seeMoreBtn');

        // Append remaining items
        for (let i = displayedItems; i < items.length; i++) {
            appendGalleryItem(container, items[i], currentCategory);
        }
        displayedItems = items.length;

        // Hide "See More" button
        seeMoreBtn.classList.add('d-none');
    });
});

// ----- YouTube player helpers (vision-style) -----
function extractYouTubeId(link) {
    try {
        // Supports standard and shortened URLs
        const url = new URL(link);
        if (url.hostname.includes('youtube.com')) {
            return url.searchParams.get('v') || '';
        }
        if (url.hostname.includes('youtu.be')) {
            return url.pathname.slice(1);
        }
        return '';
    } catch {
        const m = link.match(/[?&]v=([\w-]+)/);
        return m ? m[1] : '';
    }
}

function ensureYTApi() {
    return new Promise((resolve, reject) => {
        if (window.YT && window.YT.Player) return resolve();
        const existing = document.querySelector('script[src*="youtube.com/iframe_api"]');
        if (existing) {
            const check = () => (window.YT && window.YT.Player) ? resolve() : setTimeout(check, 100);
            check();
            return;
        }
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        tag.defer = true;
        tag.onerror = () => reject(new Error('YouTube API failed to load'));
        document.head.appendChild(tag);
        const prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function(){
            try { if (typeof prev === 'function') prev(); } catch(e){ /* noop */ }
            resolve();
        };
    });
}

function setupYtThumbInteraction(containerEl, videoId, title) {
    const thumbLayer = containerEl.querySelector('.yt-thumb-layer');
    const spinner = containerEl.querySelector('.yt-spinner');
    const errorEl = containerEl.querySelector('.yt-error');

    function initPlayer(){
        try {
            if (spinner) spinner.classList.remove('visually-hidden');
            new YT.Player(containerEl, {
                videoId: videoId,
                playerVars: { autoplay: 1, playsinline: 1, rel: 0, modestbranding: 1 },
                events: {
                    onReady: function(e){
                        try {
                            const iframe = e.target.getIframe();
                            iframe.setAttribute('title', title);
                            iframe.setAttribute('loading','lazy');
                            iframe.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
                            iframe.setAttribute('sandbox','allow-scripts allow-same-origin allow-presentation');
                            iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
                        } catch(err){ /* noop */ }
                        if (spinner) spinner.classList.add('visually-hidden');
                    },
                    onError: function(){
                        if (spinner) spinner.classList.add('visually-hidden');
                        if (errorEl){
                            errorEl.textContent = 'Video unavailable. Please try again later.';
                            errorEl.classList.remove('visually-hidden');
                        }
                    }
                }
            });
        } catch (e) {
            if (spinner) spinner.classList.add('visually-hidden');
            if (errorEl){
                errorEl.textContent = 'Video failed to load. Using fallback.';
                errorEl.classList.remove('visually-hidden');
            }
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
            iframe.title = title;
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            iframe.setAttribute('sandbox','allow-scripts allow-same-origin allow-presentation');
            iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.style.border = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            containerEl.innerHTML = '';
            containerEl.appendChild(iframe);
        }
    }

    async function play(){
        try {
            if (spinner) spinner.classList.remove('visually-hidden');
            await ensureYTApi();
            initPlayer();
        } catch {
            initPlayer();
        }
    }

    function onKey(e){
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); play(); }
    }

    if (thumbLayer) {
        thumbLayer.addEventListener('click', play);
        thumbLayer.addEventListener('touchstart', function(e){ e.preventDefault(); play(); }, { passive: false });
        thumbLayer.addEventListener('keydown', onKey);
    }
}
