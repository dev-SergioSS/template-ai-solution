let testimonialsSlider = new Swiper('.testimonials__slider', {

	slidesPerView: 1,
	spaceBetween: 20,
	speed: 900,

	navigation: {
		nextEl: '.testimonials__slider .swiper-button_next',
		prevEl: '.testimonials__slider .swiper-button_prew',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},

	freemode: true,
	mousewheel: {
		forceToAxis: true,
	}
});

let projectsSlider = new Swiper('.projects__slider', {

	speed: 800,
	slidesPerGroup: 1,
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		disableOnInteraction: false,
	},
	centeredSlides: true,
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 30, // Rotate value for the slides
		stretch: 0, // Stretch value (0 - no stretch, 1 - full stretch)
		depth: 50, // Depth of the stack
		modifier: 1, // Effect multiplier
		slideShadows: false // Enable slide shadows
	},


	pagination: {
		el: '.projects__slider .swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		1200: {
			slidesPerView: 1.4,
			spaceBetween: 100,
		},
		1700: {
			slidesPerView: 1.55,
			spaceBetween: 200,
		},
	},

	freemode: true,
	mousewheel: {
		forceToAxis: true,
	}
});

let technologiesSlider1 = new Swiper('.technologies__slider_1', {

	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 15,
	speed: 4800,
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 1,
		disableOnInteraction: true,
		// pauseOnMouseEnter: true,
		reverseDirection: true,
	},

	breakpoints: {
		576: {
			spaceBetween: 30,
		},
	},

	freemode: true,
	mousewheel: {
		forceToAxis: true,
	}
});

let technologiesSlider2 = new Swiper('.technologies__slider_2', {

	slidesPerView: "auto",
	centeredSlides: true,
	spaceBetween: 15,
	speed: 4800,
	loop: true,
	autoplay: {
		delay: 1,
		disableOnInteraction: true,
		// pauseOnMouseEnter: true
	},
	grabCursor: true,
	freemode: true,
	mousewheel: {
		forceToAxis: true,
	},

	breakpoints: {
		576: {
			spaceBetween: 30,
		},
	},
});

let benefitsSlider = new Swiper('.benefits__slider', {

	speed: 800,
	slidesPerGroup: 1,
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,

	pagination: {
		el: '.benefits__slider .swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		576: {
			slidesPerView: 'auto',
			spaceBetween: -70,
		},
	},

	autoplay: {
		disableOnInteraction: false,
	},
	freemode: true,
	mousewheel: {
		forceToAxis: true,
	}
});

let knowledgeSlider = new Swiper('.knowledge__slider', {

	speed: 800,
	slidesPerGroup: 1,
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: true,
	centeredSlides: true,
	updateOnWindowResize: true,


	pagination: {
		el: '.knowledge__slider .swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		1200: {
			slidesPerView: 'auto',
			spaceBetween: 100,
		},
	},

	freemode: true,
	mousewheel: {
		forceToAxis: true,
	},
	autoplay: {
		disableOnInteraction: false,
	},
});

let featuresSlider = new Swiper('.features__slider', {

	slidesPerView: 1,
	spaceBetween: 30,
	speed: 700,


	navigation: {
		nextEl: '.features__slider .swiper-button_next',
		prevEl: '.features__slider .swiper-button_prew',
	},

	pagination: {
		el: '.features__slider .swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		576: {
			slidesPerView: 'auto'
		},
	},

	freemode: true,
	mousewheel: {
		forceToAxis: true,
	}
});