function filterBlogs(category, button) {
  const cards = document.querySelectorAll('.blog-card');
  const buttons = document.querySelectorAll('.filters button');

  // Show/hide cards
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Remove 'active' from all buttons
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add 'active' to the clicked button
  button.classList.add('active');
}
