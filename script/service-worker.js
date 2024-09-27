const CACHE_NAME = 'my-pwa-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Service Worker install event: ক্যাশে ফাইল সংরক্ষণ করা
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: ক্যাশ থেকে ফাইল ফেরত দেওয়া
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
