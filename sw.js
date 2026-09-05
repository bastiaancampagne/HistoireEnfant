const CACHE='histoiresenfant-pwa-v2-1';
const ASSETS=[
'./','./index.html','./styles.css','./app.js','./manifest.webmanifest',
'./icon-192.png','./icon-512.png',
'./assets/hero_home_super_e.png','./assets/hero_age5_audio.png',
'./assets/hero_age7_knight.png','./assets/hero_explorer.png',
'./assets/hero_teacher.png','./assets/hero_wizard.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
