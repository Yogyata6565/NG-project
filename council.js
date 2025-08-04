
document.querySelectorAll('.member').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function togglePhotos() {
  document.querySelectorAll('.member img').forEach(img => {
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
  });
}

function toggleLayout() {
  const members = document.querySelector('.members');
  members.classList.toggle('list-view');
  members.classList.toggle('grid-view');
}
function toggleAnimation() {
  document.body.classList.toggle('no-animation');
}
function searchMembers() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.member').forEach(member => {
    const text = member.innerText.toLowerCase();
    member.style.display = text.includes(input) ? 'block' : 'none';
  });
}