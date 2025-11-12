/**
 * YouTube Thumbnail Loader
 * - Loads highest available thumbnail with graceful fallback
 * - Caches successful URLs in localStorage to reduce latency
 * - Lazy-loads thumbnails using IntersectionObserver
 * - Maintains aspect ratio and uses placeholders when unavailable
 */
(function () {
  const LS_PREFIX = 'ytThumb:';
  const placeholderSvg =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' width='160' height='90'><rect fill='#e9ecef' width='16' height='9'/><path fill='#c4c9ce' d='M6.4 2.8l4 2.2-4 2.2z'/></svg>"
    );

  const candidatesFor = (id) => [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/default.jpg`,
  ];

  const parseVideoId = (el) => {
    // Prefer explicit data attribute
    const dataId = el.getAttribute('data-video-id');
    if (dataId) return dataId.trim();

    // Try to parse from nearest link href
    const link = el.closest('a');
    const href = link ? link.getAttribute('href') || '' : '';
    // Patterns: watch?v=ID, youtu.be/ID, /embed/ID
    const patterns = [
      /[?&]v=([\w-]{11})/,
      /youtu\.be\/([\w-]{11})/,
      /\/embed\/([\w-]{11})/,
    ];
    for (const re of patterns) {
      const m = href.match(re);
      if (m && m[1]) return m[1];
    }
    return null;
  };

  const loadFirstAvailable = (id) =>
    new Promise((resolve) => {
      const cached = safeGetLS(LS_PREFIX + id);
      const list = cached ? [cached, ...candidatesFor(id)] : candidatesFor(id);

      let idx = 0;
      const tryNext = () => {
        if (idx >= list.length) return resolve(null);
        const url = list[idx++];
        const img = new Image();
        let settled = false;
        const cleanup = () => {
          img.onload = null;
          img.onerror = null;
        };
        img.onload = () => {
          if (settled) return;
          settled = true;
          cleanup();
          safeSetLS(LS_PREFIX + id, url);
          resolve(url);
        };
        img.onerror = () => {
          if (settled) return;
          cleanup();
          tryNext();
        };
        // Some providers 403 on HEAD; use actual load
        img.src = url;
        // Safety timeout to avoid hanging
        setTimeout(() => {
          if (!settled) {
            cleanup();
            tryNext();
          }
        }, 4000);
      };
      tryNext();
    });

  function safeGetLS(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }
  function safeSetLS(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {
      // ignore
    }
  }

  const applyThumb = async (img) => {
    const id = parseVideoId(img);
    if (!id) return; // nothing to do

    // Start with placeholder to avoid layout shift
    if (!img.getAttribute('src')) img.setAttribute('src', placeholderSvg);

    const best = await loadFirstAvailable(id);
    if (best) {
      img.src = best;
      img.classList.add('yt-thumb-loaded');
      // Provide srcset for responsive contexts
      img.setAttribute(
        'srcset',
        [
          `https://i.ytimg.com/vi/${id}/default.jpg 120w`,
          `https://i.ytimg.com/vi/${id}/mqdefault.jpg 320w`,
          `https://i.ytimg.com/vi/${id}/hqdefault.jpg 480w`,
          `https://i.ytimg.com/vi/${id}/maxresdefault.jpg 1280w`,
        ].join(', ')
      );
      img.setAttribute('sizes', '(max-width: 480px) 100vw, 180px');
    } else {
      // Fallback: keep placeholder, add a hint class
      img.src = placeholderSvg;
      img.classList.add('yt-thumb-fallback');
      img.alt = img.alt || 'Thumbnail unavailable';
    }
  };

  const init = () => {
    const els = document.querySelectorAll('img.yt-thumb, img[data-video-id]');
    if (!els.length) return;

    // Lazy load via IntersectionObserver
    const io = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                const img = e.target;
                obs.unobserve(img);
                applyThumb(img);
              }
            });
          },
          { rootMargin: '200px 0px' }
        )
      : null;

    els.forEach((img) => {
      // Ensure responsive behavior and lazy hints
      img.loading = img.loading || 'lazy';
      img.decoding = img.decoding || 'async';
      img.fetchPriority = img.fetchPriority || 'low';
      img.classList.add('yt-thumb');
      if (!img.getAttribute('src')) img.setAttribute('src', placeholderSvg);

      if (io) io.observe(img);
      else applyThumb(img);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

