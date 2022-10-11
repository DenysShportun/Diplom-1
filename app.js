let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
	mobileMenu.classList.toggle("active-menu");
	if (mobileMenu.classList.contains("active-menu")) {
		mainMenu.classList.add("active-menu");
	} else mainMenu.classList.remove("active-menu");
});

//slider
$(".slide").slick({
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true
});

let dotsFix = document.querySelectorAll("button[role='tab']");
dotsFix.forEach((item) => {
	item.classList.add("slider-button-fix");
});

let slickDotsFix = document.querySelector(".slick-dots");
slickDotsFix.classList.add("slick-dots-fix");
