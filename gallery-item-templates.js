function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'col-md-4 gallery-item';
    
    let content = '';
    
    switch(item.type) {
        case 'image':
            if (item.layout) {
                div.setAttribute('data-layout', item.layout);
                content = createSpeakerItem(item);
            } else {
                content = createEventItem(item);
            }
            break;
        case 'news-bar':
            content = createNewsBarItem(item);
            break;
        case 'conference':
            content = createConferenceItem(item);
            break;
        default:
            content = createEventItem(item);
    }
    
    div.innerHTML = content;
    return div;
}

function createSpeakerItem(item) {
    return `
        <div class="speaker-card">
            <img src="${item.image}" class="lazy-image" alt="${item.title}" loading="lazy">
            <div class="gallery-item-content">
                <h4 class="gallery-item-title">${item.title}</h4>
                <p class="gallery-item-desc">${item.description}</p>
            </div>
        </div>
    `;
}

function createEventItem(item) {
    return `
        <div class="event-card">
            <span class="event-label">${item.label || ''}</span>
            <img src="${item.image}" class="lazy-image" alt="${item.title}" loading="lazy">
            <div class="gallery-item-content">
                <h4 class="gallery-item-title">${item.title}</h4>
                <p class="gallery-item-desc">${item.description}</p>
            </div>
        </div>
    `;
}

function createNewsBarItem(item) {
    return `
        <div class="news-bar">
            <div class="news-content">
                <h5 class="news-title mb-1">${item.title}</h5>
                <p class="news-desc mb-0">${item.description}</p>
            </div>
            <span class="news-date">${formatDate(item.date)}</span>
        </div>
    `;
}

function createConferenceItem(item) {
    return `
        <div class="conference-card">
            <img src="${item.image}" class="lazy-image" alt="${item.title}" loading="lazy">
            <div class="conference-details">
                <h4 class="gallery-item-title">${item.title}</h4>
                <p class="gallery-item-desc">${item.description}</p>
                <div class="conference-date">
                    <i class="fas fa-calendar-alt me-2"></i>${formatDate(item.date)}
                </div>
                <div class="conference-venue">
                    <i class="fas fa-map-marker-alt me-2"></i>${item.venue}
                </div>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}