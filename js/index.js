const menuBars = document.querySelector("#menu-bar");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu div a");

menuBars.addEventListener("click", () => {
	navMenu.classList.toggle("active");
});

links.forEach(link => {
	link.addEventListener("click", () => {
		navMenu.classList.remove("active");
	});
});
