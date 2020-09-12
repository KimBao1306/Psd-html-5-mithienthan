//show menu for mobile
const headerBtn = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');
const overlay = document.querySelector('.overlay-mobile');

const showMenu = () => {
	headerList.classList.add('--show');
	overlay.classList.add('--show');
	headerBtn.classList.add('--close');
};
headerBtn.addEventListener('click', showMenu);

//overlay for menu user
const showOverlay = () => {
	overlay.classList.remove('--show');
	headerList.classList.remove('--show');
	headerBtn.classList.remove('--close');
};
overlay.addEventListener('click', showOverlay);

//fixed menu
const nav = document.querySelector('.header');

function fixedMenu() {
	if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
		nav.classList.add('--scroll');
	} else {
		nav.classList.remove('--scroll');
	}
}
window.addEventListener('scroll', fixedMenu);

//scroll button
const scrollButton = document.querySelector('#scroll-to-top');

const scrollToTop = () => {
	const t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t >= 10) {
		window.scrollTo(0, t - t);
	}
};
scrollButton.addEventListener('click', scrollToTop);

//wow.js
new WOW().init();

//couter find
jQuery(document).ready(function ($) {
	$('.count').counterUp({
		delay: 5,
		time: 2000,
	});
});

//swiper
const arrowList = document.querySelectorAll('.arrow i');
arrowList.forEach((x) =>
	x.addEventListener('click', function () {
		// this
	})
);
const list = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	// spaceBetween: 30,

	autoplay: 1000,
	speed: 600,
	// autoplayDisableOnInteraction: false,
	// breakpoints: {
	// 	768: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	},
	// 	1200: {
	// 		slidesPerView: 4,
	// 	},
	// 	1600: {
	// 		slidesPerView: 5,
	// 	},
	// },

	navigation: {
		prevEl: '.arrow .fa-angle-left',
		nextEl: '.arrow .fa-angle-right',
	},
});
//swiper - end
