
const AGE5="https://www.meshistoiresdusoir.fr/audio/g/histoires-de-science-fiction/super-heros/?age_id=5";
const AGE7="https://www.meshistoiresdusoir.fr/audio/g/histoires-de-science-fiction/super-heros/?age_id=7";

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

function show(id){
  $$('.screen').forEach(x=>x.classList.remove('active'));
  $('#'+id).classList.add('active');
  window.scrollTo(0,0);
}
function openStories(age){
  const url=age===5?AGE5:AGE7;
  // External opening is more reliable on iPhone/iPad than embedding a third-party site.
  const w=window.open(url,'_blank','noopener,noreferrer');
  if(!w) location.href=url;
}
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js');
}
