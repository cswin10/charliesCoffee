const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('show');
});
