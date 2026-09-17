const CACHE_NAME = 'mipan-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/images/logo.svg',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png'
];

// Instalación del Service Worker y guardado en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activación y limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Estrategia: Red primero, si falla recurre al caché (para estar siempre actualizado offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
