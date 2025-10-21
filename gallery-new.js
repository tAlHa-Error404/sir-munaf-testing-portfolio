// Gallery Data
const galleryData = {
    speaker: [
        {
            id: 1,
            title: 'Educational About Threats',
            description: 'Understanding cybersecurity fundamentals',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
        },
        {
            id: 2,
            title: 'Process of Threats',
            description: 'Deep dive into cyber threats',
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800'
        },
        {
            id: 3,
            title: 'Prevention of Threats',
            description: 'Best practices for threat prevention',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800'
        },
        {
            id: 4,
            title: 'Awareness of Threats',
            description: 'Building cybersecurity awareness',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
        }
    ],
    events: [
        {
            id: 5,
            title: 'FLA Conference',
            description: 'Future Leadership Alliance Conference',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            venue: 'Karachi Convention Center'
        },
        {
            id: 6,
            title: 'CIO Summit',
            description: 'Chief Information Officers Meeting',
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
            venue: 'Pearl Continental Hotel'
        },
        {
            id: 7,
            title: 'CXO Conference',
            description: 'Executive Leadership Forum',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            venue: 'Marriott Hotel'
        },
        {
            id: 8,
            title: 'PASHA Summit',
            description: 'Annual IT Industry Event',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
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
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
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
            youtubeLink: 'https://www.youtube.com/watch?v=pk_sXb1qlEU',
            image: 'https://img.youtube.com/vi/pk_sXb1qlEU/maxresdefault.jpg',
            channel: 'Aaj News'
        },
        {
            id: 12,
            title: 'ITCN Asia 2023',
            description: 'IT Industry Situation! | Awaz | Aaj News',
            youtubeLink: 'https://www.youtube.com/watch?v=zObWTEw2M9Q',
            image: 'https://img.youtube.com/vi/zObWTEw2M9Q/maxresdefault.jpg',
            channel: 'Aaj News'
        }
    ],
    conferences: [
        {
            id: 13,
            title: 'Cybersecurity Summit',
            description: 'Annual Security Conference',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            date: 'December 15, 2025',
            venue: 'Karachi Convention Center'
        },
        {
            id: 14,
            title: 'Tech Innovation Forum',
            description: 'Future of Technology',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            date: 'December 20, 2025',
            venue: 'Pearl Continental Hotel'
        },
        {
            id: 15,
            title: 'Digital Summit',
            description: 'Digital Transformation Event',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            date: 'January 5, 2026',
            venue: 'Movenpick Hotel'
        },
        {
            id: 16,
            title: 'Industry Conference',
            description: 'Industrial Innovation',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            date: 'January 10, 2026',
            venue: 'Marriott Hotel'
        }
    ]
};

// Show gallery items based on category
function showGalleryItems(category) {
    const container = document.getElementById('galleryItems');
    const items = galleryData[category];
    
    // Clear existing content
    container.innerHTML = '';
    
    // Add new items
    items.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-6 mb-4';
        
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
    });
}

// Create Speaker Box
function createSpeakerBox(item) {
    return `
        <div class="gallery-box speaker-box">
            <div class="gallery-img">
                <img src="${item.image}" alt="${item.title}" class="img-fluid">
            </div>
            <div class="gallery-content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `;
}

// Create Event Box
function createEventBox(item) {
    return `
        <div class="gallery-box event-box">
            <div class="gallery-img">
                <img src="${item.image}" alt="${item.title}" class="img-fluid">
            </div>
            <div class="gallery-content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <div class="event-info">
                    <div><i class="fas fa-map-marker-alt"></i> ${item.venue}</div>
                </div>
            </div>
        </div>
    `;
}

// Create News Box
function createNewsBox(item) {
    if (item.youtubeLink) {
        return `
            <div class="gallery-box news-box video-news-box">
                <div class="gallery-img video-container">
                    <iframe src="https://www.youtube.com/embed/${item.youtubeLink.split('v=')[1]}" 
                            title="${item.title}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    <div class="channel-badge">${item.channel}</div>
                </div>
                <div class="gallery-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    } else {
        return `
            <div class="gallery-box news-box">
                <div class="gallery-img">
                    <img src="${item.image}" alt="${item.title}" class="img-fluid">
                    <div class="channel-badge">${item.channel}</div>
                </div>
                <div class="gallery-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    }
}

// Create Conference Box
function createConferenceBox(item) {
    return `
        <div class="gallery-box conference-box">
            <div class="gallery-img">
                <img src="${item.image}" alt="${item.title}" class="img-fluid">
            </div>
            <div class="gallery-content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <div class="conference-info">
                    <div><i class="fas fa-location-dot"></i> ${item.venue}</div>
                    <div><i class="fas fa-calendar-alt"></i> ${item.date}</div>
                </div>
            </div>
        </div>
    `;
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
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
});