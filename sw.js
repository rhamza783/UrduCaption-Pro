const CACHE_NAME = 'urdu-cap-pro-v2';

self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
    
    event.respondWith(
        fetch(event.request).then((response) => {
            if (response.status === 0) return response;
            const newHeaders = new Headers(response.headers);
            // Absolutely required for WebGPU and FFmpeg on GitHub Pages
            newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
            newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
            return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders,
            });
        }).catch(e => console.error(e))
    );
});
