window.addEventListener('DOMContentLoaded', () => {
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
	const banner = document.querySelector('.banner');
	function fixedMenu() {
		if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
			nav.classList.add('--scroll');
			banner.classList.add('--scroll');
		} else {
			nav.classList.remove('--scroll');
			banner.classList.remove('--scroll');
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

	//swiper
	const arrowList = document.querySelectorAll('.arrow i');
	arrowList.forEach((x) =>
		x.addEventListener('click', function () {
			// this
		})
	);
	const list = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		autoplay: {
			speed: 500,
		},
		speed: 800,
		autoHeight: false,
		loop: true,

		navigation: {
			prevEl: '.arrow .fa-angle-left',
			nextEl: '.arrow .fa-angle-right',
		},
	});
});

jQuery(document).ready(function ($) {
	//couter find
	$('.count').counterUp({
		delay: 5,
		time: 1000,
	});
});
