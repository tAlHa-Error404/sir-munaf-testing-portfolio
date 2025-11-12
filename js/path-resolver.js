/**
 * Path Resolver - Robust URL normalization for hosted and local environments
 *
 * Root cause fixed: previously, paths were built using window.location.origin,
 * which broke when hosting under a subdirectory (e.g., /Claude-profile/).
 * This revision resolves URLs relative to the current document base (document.baseURI)
 * using the URL API, correctly handling ../, ./, and nested directories.
 */

(function() {
    const isFileProtocol = window.location.protocol === 'file:';

    // Derive the current document directory as the base (always ends with /)
    const baseDir = new URL('.', document.baseURI).href;

    window.siteConfig = {
        basePath: baseDir,
        isFileProtocol: isFileProtocol,

        // Resolve any relative path against the current document base using URL API
        resolvePath: function(relativePath) {
            if (!relativePath) return relativePath;

            // Leave absolute/external and special schemes untouched
            const lower = relativePath.toLowerCase();
            if (lower.startsWith('http://') ||
                lower.startsWith('https://') ||
                lower.startsWith('file://') ||
                lower.startsWith('//') ||
                lower.startsWith('data:') ||
                lower.startsWith('mailto:') ||
                lower.startsWith('tel:') ||
                lower.startsWith('#')) {
                return relativePath;
            }

            try {
                return new URL(relativePath, this.basePath).href;
            } catch (e) {
                console.warn('Path resolver: failed to resolve', relativePath, e);
                return relativePath; // fallback: return as-is
            }
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        // Normalize <img src>
        document.querySelectorAll('img[src]').forEach(img => {
            const originalSrc = img.getAttribute('src');
            const resolved = window.siteConfig.resolvePath(originalSrc);
            if (resolved && resolved !== originalSrc) {
                img.setAttribute('src', resolved);
            }
        });

        // Normalize inline background-image URLs
        document.querySelectorAll('[style*="background-image"]').forEach(el => {
            const style = el.getAttribute('style');
            if (!style) return;
            const match = style.match(/url\(['"]?(.*?)['"]?\)/);
            if (match && match[1]) {
                const resolved = window.siteConfig.resolvePath(match[1]);
                if (resolved && resolved !== match[1]) {
                    const newStyle = style.replace(/url\(['"]?(.*?)['"]?\)/, `url("${resolved}")`);
                    el.setAttribute('style', newStyle);
                }
            }
        });

        // Normalize <video><source src>
        document.querySelectorAll('video > source[src]').forEach(source => {
            const originalSrc = source.getAttribute('src');
            const resolved = window.siteConfig.resolvePath(originalSrc);
            if (resolved && resolved !== originalSrc) {
                source.setAttribute('src', resolved);
            }
        });

        // Fix anchors that were authored with local file paths (e.g., file:///C:/.../Claude-profile/...) 
        // so they work when hosted under a subdirectory.
        document.querySelectorAll('a[href]').forEach(a => {
            const href = a.getAttribute('href');
            if (!href) return;

            const lower = href.toLowerCase();
            if (lower.startsWith('file:///')) {
                // Attempt to extract project-relative portion after the "Claude-profile" directory
                const idx = lower.indexOf('/claude-profile/');
                if (idx !== -1) {
                    const subPath = href.substring(idx + '/claude-profile/'.length);
                    try {
                        const resolved = new URL(subPath, window.siteConfig.basePath).href;
                        a.setAttribute('href', resolved);
                    } catch (e) {
                        console.warn('Path resolver: failed to rewrite file href', href, e);
                    }
                } else {
                    // If we cannot reliably map it, leave as-is to avoid incorrect links
                    console.warn('Path resolver: leaving file href unchanged (no project match):', href);
                }
            }
        });

        console.log('Path resolver applied using baseDir:', baseDir);
    });
})();
