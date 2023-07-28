gsap.registerPlugin(ScrollTrigger)

const headerTl = gsap.timeline()
const heroTl = gsap.timeline()
let moveX = 200;


// * HEADER

headerTl
	.from('.header__logo', {
		opacity: 0,
		x: -200,
		duration: 0.6
	}, 0)
	.from('.header__btn-contacts', {
		opacity: 0,
		x: 200,
		duration: 0.6
	}, 0)
	.from('.menu__list>li', {
		opacity: 0,
		y: -20,
		duration: 0.6,
		stagger: 0.2,
		ease: 'power2.out'
	}, 0.3)


// * HERO

heroTl
	.fromTo('.hero .breadcrumbs > *', {
		opacity: 0,
		x: -20,
	}, {
		opacity: 1,
		x: 0,
		duration: 0.35,
		stagger: 0.35,
	}, 0.6)
	.from('.hero__labels', {
		opacity: 0,
		y: 100,
		duration: 0.6
	}, 1.1)
	.from('.hero__title', {
		opacity: 0,
		y: 100,
		duration: 0.6
	}, 1.3)
	.from('.hero__text', {
		opacity: 0,
		x: -100,
		duration: 0.6
	}, 1.7)
	.fromTo('.hero__buttons .button', {
		opacity: 0,
		x: -50,
	}, {
		opacity: 1,
		x: 0,
		duration: 0.8,
		stagger: -0.2,
		ease: 'power2.out'
	}, 1.9)
	.from('.hero__bg-img', {
		opacity: 0,
		y: 500,
		x: 500,
		duration: 1.4,
		ease: 'circ.out'
	}, 0.8)





// * BENEFITS

gsap.from('.benefits .title-h2', {
	scrollTrigger: {
		trigger: '.benefits__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
})
gsap.from('.benefits .title-h3', {
	scrollTrigger: {
		trigger: '.benefits__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
	delay: 0.4
})
gsap.from('.benefits__text', {
	scrollTrigger: {
		trigger: '.benefits__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
	delay: 0.6
})
gsap.from('.benefits__slider', {
	scrollTrigger: {
		trigger: '.benefits__titles',
		start: 'top 90%',
	},
	opacity: 0,
	scale: 0,
	y: 200,
	duration: 0.5,
	delay: 0.6
})


// * OFFERS

gsap.from('.offers .title-h2', {
	scrollTrigger: {
		trigger: '.offers__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
})
gsap.from('.offers .title-h3', {
	scrollTrigger: {
		trigger: '.offers__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
	delay: 0.4
})

gsap.from('.offer_1 .offer__head-img', {
	scrollTrigger: {
		trigger: '.offer_1',
		start: 'top 90%',
	},
	opacity: 0,
	x: -300,
	scale: 0,
	duration: 0.8,
	delay: 0.2,
})
gsap.from('.offer_1 .offer__head-content', {
	scrollTrigger: {
		trigger: '.offer_1',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.6,
})
gsap.from('.offer_1 .offer__body', {
	scrollTrigger: {
		trigger: '.offer_1',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.7,
})
// * 2
gsap.from('.offer_2 .offer__head-img', {
	scrollTrigger: {
		trigger: '.offer_2',
		start: 'top 90%',
	},
	opacity: 0,
	x: -300,
	scale: 0,
	duration: 0.8,
	delay: 0.2,
})
gsap.from('.offer_2 .offer__head-content', {
	scrollTrigger: {
		trigger: '.offer_2',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.6,
})
gsap.from('.offer_2 .offer__body', {
	scrollTrigger: {
		trigger: '.offer_2',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.7,
})
// * 3
gsap.from('.offer_3 .offer__head-img', {
	scrollTrigger: {
		trigger: '.offer_3',
		start: 'top 90%',
	},
	opacity: 0,
	x: -300,
	scale: 0,
	duration: 0.8,
	delay: 0.2,
})
gsap.from('.offer_3 .offer__head-content', {
	scrollTrigger: {
		trigger: '.offer_3',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.6,
})
gsap.from('.offer_3 .offer__body', {
	scrollTrigger: {
		trigger: '.offer_3',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.7,
})
// * 4
gsap.from('.offer_4 .offer__head-img', {
	scrollTrigger: {
		trigger: '.offer_4',
		start: 'top 90%',
	},
	opacity: 0,
	x: -300,
	scale: 0,
	duration: 0.8,
	delay: 0.2,
})
gsap.from('.offer_4 .offer__head-content', {
	scrollTrigger: {
		trigger: '.offer_4',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.6,
})
gsap.from('.offer_4 .offer__body', {
	scrollTrigger: {
		trigger: '.offer_4',
		start: 'top 90%',
	},
	opacity: 0,
	y: 300,
	duration: 0.6,
	delay: 0.7,
})


// * WORK STEPS

gsap.from('.work-steps__titles', {
	scrollTrigger: {
		trigger: '.work-steps__titles',
		start: 'top 90%',
	},
	duration: 0.4,
	opacity: 0,
	x: -200,
})
gsap.from('.work-steps__button', {
	scrollTrigger: {
		trigger: '.work-steps__titles',
		start: 'top 90%',
	},
	duration: 0.4,
	opacity: 0,
	x: 200,
})
gsap.from('.work-steps__items li', {
	scrollTrigger: {
		trigger: '.work-steps__items',
		start: 'top 90%',
	},
	opacity: 0,
	scale: 0,
	stagger: 0.3,
	duration: 0.43,
	ease: 'power2.out',
	delay: 0.4
});


// * WE CAN HELP

gsap.from('.we-can-help__content > *', {
	scrollTrigger: {
		trigger: '.we-can-help',
		start: 'top 90%',
	},
	opacity: 0,
	y: 100,
	stagger: 0.3,
	duration: 0.5,
})
gsap.from('.we-can-help__button', {
	scrollTrigger: {
		trigger: '.we-can-help',
		start: 'top 90%',
	},
	opacity: 0,
	x: 200,
	delay: 0.8,
	duration: 0.6,
})


// * PROJECTS

gsap.from('.projects .title-h2', {
	scrollTrigger: {
		trigger: '.projects .titles',
		start: 'top 90%',
		duration: 0.4,
	},
	opacity: 0,
	y: 50,
})
gsap.from('.projects .title-h3', {
	scrollTrigger: {
		trigger: '.projects .titles',
		start: 'top 90%',
		duration: 0.4,
	},
	delay: 0.4,
	opacity: 0,
	y: 50,
})
gsap.from('.projects__slider', {
	scrollTrigger: {
		trigger: '.projects__slider',
		start: '-=200px 100%',
	},

	opacity: 0,
	scale: 0,
	y: 200,
	duration: 0.5,
})


// * TECHMOLOGIES

gsap.from('.technologies__head', {
	scrollTrigger: {
		trigger: '.technologies__head',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.6,
})
gsap.from('.technologies__slider_1 .swiper-slide', {
	scrollTrigger: {
		trigger: '.technologies__items',
		start: '80% 90%',
	},
	opacity: 0,
	scale: 0,
	stagger: -0.015,
	x: -100,
})
gsap.from('.technologies__slider_2 .swiper-slide', {
	scrollTrigger: {
		trigger: '.technologies__items',
		start: '80% 90%',
	},
	opacity: 0,
	scale: 0,
	stagger: 0.02,
	x: 100,
	delay: 0.6
})


// * TESTIMONTIALS

gsap.from('.testimonials .title-h2', {
	scrollTrigger: {
		trigger: '.testimonials__info',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
})
gsap.from('.testimonials .title-h3', {
	scrollTrigger: {
		trigger: '.testimonials__info',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
	delay: 0.2
})
gsap.from('.testimonials__text', {
	scrollTrigger: {
		trigger: '.testimonials__info',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
	delay: 0.3
})
gsap.from('.testimonials .swiper-nav', {
	scrollTrigger: {
		trigger: '.testimonials__info',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.4,
	delay: 0.6
})
gsap.from('.testimonials__slider .swiper-slide', {
	scrollTrigger: {
		trigger: '.testimonials__info',
		start: 'top 90%',
	},
	opacity: 0,
	x: 100,
	duration: 0.6,
	delay: 0.8,
	stagger: 0.15,
})


// * KNOWLEDGE

gsap.from('.knowledge .title-h2', {
	scrollTrigger: {
		trigger: '.knowledge__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.6,
})
gsap.from('.knowledge .title-h3', {
	scrollTrigger: {
		trigger: '.knowledge__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.6,
	delay: 0.4
})
gsap.from('.knowledge__text', {
	scrollTrigger: {
		trigger: '.knowledge__titles',
		start: 'top 90%',
	},
	opacity: 0,
	y: 50,
	duration: 0.6,
	delay: 0.6
})
gsap.from('.knowledge__slider', {
	scrollTrigger: {
		trigger: '.knowledge__text',
		start: 'bottom 80%',
	},
	opacity: 0,
	scale: 0,
	y: 200,
	duration: 0.6,
	delay: 0.6
})



// * CONTACTS

gsap.from('.contacts__info', {
	scrollTrigger: {
		trigger: '.contacts__info',
		start: 'top 90%',
	},
	opacity: 0,
	x: -300,
	duration: 0.7
})
gsap.from('.form', {
	scrollTrigger: {
		trigger: '.contacts__info',
		start: 'top 90%',
	},
	opacity: 0,
	x: 300,
	duration: 0.7
})


// * SUPPORT UKRAINE

gsap.from('.support-ukraine__title', {
	scrollTrigger: {
		trigger: '.support-ukraine',
		start: 'top 90%',
	},
	opacity: 0,
	y: 100,
})
gsap.from('.support-ukraine .button', {
	scrollTrigger: {
		trigger: '.support-ukraine',
		start: 'top 90%',
	},
	opacity: 0,
	y: 100,
	delay: 0.2
})


// * FOOTER

gsap.from('.footer__about-us', {
	scrollTrigger: {
		trigger: '.footer__about-us',
		start: 'top 90%',
	},
	opacity: 0,
	y: 100,
})
gsap.from('.footer__nav-column', {
	scrollTrigger: {
		trigger: '.footer__nav',
		start: 'top 90%',
	},
	opacity: 0,
	y: 100,
	stagger: 0.2,
	delay: 0.3
})
gsap.from('.footer__bottom', {
	scrollTrigger: {
		trigger: '.footer__bottom',
		start: 'top 100%',
	},
	opacity: 0,
	y: 100,
	delay: 0.35
})