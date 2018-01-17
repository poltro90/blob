var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/app.js',
  '/icon.png',
  '/index.html',
  '/style.css'
];

self.addEventListener('install', function(e vent) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});