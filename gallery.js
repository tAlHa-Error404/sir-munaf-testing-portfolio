// Gallery Data
const galleryData = {
    speaker: [
        {
            id: 1,
            title: 'Educational About Threats',
            description: 'Understanding the fundamentals of cyber threats and their impact on modern organizations',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            date: 'October 15, 2025'
        },
        {
            id: 2,
            title: 'Process of Threats',
            description: 'Deep dive into cyber threat mechanisms and attack vectors',
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
            date: 'October 20, 2025'
        },
        {
            id: 3,
            title: 'Prevention of Threats',
            description: 'Strategic approaches to cybersecurity threat prevention and mitigation',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            date: 'October 25, 2025'
        },
        {
            id: 4,
            title: 'Awareness of Threats',
            description: 'Building comprehensive cybersecurity awareness programs',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            date: 'October 30, 2025'
        }
    ],
    events: [
        {
            id: 5,
            title: 'FLA Conference',
            description: 'Future Leadership Alliance Annual Conference',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            type: 'image',
            label: 'FLA'
        },
        {
            id: 6,
            title: 'CIO Summit',
            description: 'Chief Information Officers Strategic Meeting',
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
            type: 'image',
            label: 'CIO'
        },
        {
            id: 7,
            title: 'CXO Conference',
            description: 'Executive Leadership Forum',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            type: 'image',
            label: 'CXO'
        },
        {
            id: 8,
            title: 'PASHA Summit',
            description: 'Pakistan Software Houses Association Annual Event',
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
            type: 'image',
            label: 'PASHA'
        },
        {
            id: 9,
            title: 'ITC Conference',
            description: 'Information Technology Conference',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            type: 'image',
            label: 'ITC'
        }
    ],
    "news-channel": [
        {
            id: 10,
            title: 'Thin Bar News',
            description: 'Cybersecurity Expert Analysis',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            type: 'news-bar',
            date: '2025-10-15'
        },
        {
            id: 11,
            title: 'AAJ News',
            description: 'Digital Transformation Insights',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            type: 'news-bar',
            date: '2025-10-14'
        },
        {
            id: 12,
            title: 'Ground Zero',
            description: 'Industry Analysis and Trends',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            type: 'news-bar',
            date: '2025-10-13'
        },
        {
            id: 13,
            title: 'CXO Talk',
            description: 'Leadership Perspectives',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            type: 'news-bar',
            date: '2025-10-12'
        }
        {
            id: 5,
            title: 'Cybersecurity Alert Update',
            description: 'Latest developments in digital security',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
            type: 'image'
        },
        {
            id: 6,
            title: 'Tech Industry Growth Report',
            description: 'Analysis of Pakistan\'s IT sector expansion',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            type: 'image'
        }
    ],
    conferences: [
        {
            id: 14,
            title: 'Cybersecurity Summit 2025',
            description: 'Annual cybersecurity conference focusing on emerging threats and solutions',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
            type: 'conference',
            date: '2025-12-15',
            venue: 'Karachi Convention Center'
        },
        {
            id: 15,
            title: 'Digital Innovation Forum',
            description: 'Exploring the future of digital transformation in Pakistan',
            image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
            type: 'conference',
            date: '2025-11-20',
            venue: 'Pearl Continental Hotel'
        },
        {
            id: 16,
            title: 'Tech Leaders Summit',
            description: 'Bringing together industry leaders to shape the future of technology',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            type: 'conference',
            date: '2025-12-05',
            venue: 'Marriott Hotel'
        }
        {
            id: 8,
            title: 'Leadership Development',
            description: 'Executive training programs',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
            type: 'image'
        },
        {
            id: 9,
            title: 'Digital Innovation',
            description: 'Emerging technology workshops',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/your-video-id2'
        }
    ],
    featured: [
        {
            id: 10,
            title: 'Industry Leadership',
            description: 'Shaping the future of Pakistani tech',
            image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800',
            type: 'image'
        },
        {
            id: 11,
            title: 'Global Tech Partnership',
            description: 'International collaboration initiative',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/your-video-id3'
        },
        {
            id: 12,
            title: 'Innovation Hub Launch',
            description: 'New center for technological advancement',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
            type: 'image'
        }
    ]
};

// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryContainer = document.getElementById('galleryItems');
const loadingSpinner = document.getElementById('loadingSpinner');

// Initialize Gallery
document.addEventListener('DOMContentLoaded', () => {
    showGalleryItems('events'); // Show events by default
    initializeFilterButtons();
    initializeLazyLoading();
});

// Initialize Filter Buttons
function initializeFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Show corresponding gallery items
            const category = button.dataset.category;
            showGalleryItems(category);
        });
    });
}

// Show Gallery Items
function showGalleryItems(category) {
    // Show loading spinner
    loadingSpinner.classList.remove('d-none');
    galleryContainer.innerHTML = '';

    // Simulate loading delay
    setTimeout(() => {
        const items = galleryData[category] || [];
        
        items.forEach(item => {
            const itemElement = createGalleryItem(item);
            galleryContainer.appendChild(itemElement);
        });

        // Hide loading spinner
        loadingSpinner.classList.add('d-none');

        // Animate items
        animateGalleryItems();
    }, 500);
}

// Create Gallery Item
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'col-md-4 gallery-item';
    
    const content = item.type === 'video' 
        ? createVideoItem(item)
        : createImageItem(item);
        
    div.innerHTML = content;
    return div;
}

// Create Image Item
function createImageItem(item) {
    return `
        <img src="${item.image}" class="lazy-image" alt="${item.title}" loading="lazy">
        <div class="gallery-item-content">
            <h4 class="gallery-item-title">${item.title}</h4>
            <p class="gallery-item-desc">${item.description}</p>
        </div>
    `;
}

// Create Video Item
function createVideoItem(item) {
    return `
        <div class="video-thumbnail" data-video-url="${item.videoUrl}">
            <img src="${item.image}" class="lazy-image" alt="${item.title}" loading="lazy">
            <div class="play-button">
                <i class="fas fa-play"></i>
            </div>
            <div class="gallery-item-content">
                <h4 class="gallery-item-title">${item.title}</h4>
                <p class="gallery-item-desc">${item.description}</p>
            </div>
        </div>
    `;
}

// Animate Gallery Items
function animateGalleryItems() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 100);
    });
}

// Initialize Lazy Loading
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// Initialize Video Modal
document.addEventListener('click', (e) => {
    const videoThumbnail = e.target.closest('.video-thumbnail');
    if (videoThumbnail) {
        const videoUrl = videoThumbnail.dataset.videoUrl;
        openVideoModal(videoUrl);
    }
});

// Open Video Modal
function openVideoModal(videoUrl) {
    const modal = document.createElement('div');
    modal.className = 'modal fade video-modal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <iframe src="${videoUrl}" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    new bootstrap.Modal(modal).show();
    
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}