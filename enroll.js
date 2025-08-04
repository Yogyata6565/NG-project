function showSection(id, btn) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');

  // Show the selected section
  const target = document.getElementById(id);
  if (target) target.style.display = 'block';

  // Remove 'active' from all buttons and set it to clicked one
  const allButtons = document.querySelectorAll('.btn-group button');
  allButtons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');
}

// Show the first section on page load
window.onload = () => {
  const defaultBtn = document.querySelector('.btn-group button');
  defaultBtn.click();
};
