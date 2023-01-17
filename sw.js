self.addEventListener("install", e => {
    console.log("Service worker installed");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./"])
        })
    )
});
self.addEventListener("fetch", e => {
    console.log("Fetching");
    e.respondsWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
 });