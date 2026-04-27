function showPage(id, link) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // show target
  document.getElementById('page-' + id).classList.add('active');
  if (link) link.classList.add('active');

  // scroll to top
  window.scrollTo(0, 0);
  closeSidebar();
}

function toggleFaq(el) {
  const answer = el.nextElementSibling;
  el.classList.toggle('open');
  answer.classList.toggle('open');
}

function openVideo(url) {
  window.open(url, '_blank');
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("open");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}
