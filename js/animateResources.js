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
	}, 0.8)
	.from('.hero__labels', {
		opacity: 0,
		y: 100,
		duration: 0.6
	}, 1)
	.from('.hero__title', {
		opacity: 0,
		y: 100,
		duration: 0.6
	}, 1.2)
	.from('.hero__text', {
		opacity: 0,
		y: 100,
		duration: 0.6
	}, 1.4)
	.fromTo('.hero__buttons .button', {
		opacity: 0,
		y: 100
	}, {
		opacity: 1,
		y: 0,
		duration: 0.8,
		stagger: -0.2,
		ease: 'power2.out'
	}, 1.6)
	.from('.hero__bg-circles', {
		opacity: 0.4,
		duration: 4,
		ease: 'back.out',
		scale: 0.8,
		y: 200,
	}, 0)


//  * ARTICLES

gsap.from('.articles__item', {
	scrollTrigger: {
		trigger: '.articles__item',
		start: 'top 95%',
		end: 'top 90%',

	},

	stagger: 0.3,
	duration: 0.6,
	ease: 'power2.out',
	y: 200,
	opacity: 0,
	// x: function (i) {
	// 	return i % 2 === 1 ? moveX : -moveX;
	// }
},
)


// * CONTACTS

gsap.from('.contacts__info', {
	scrollTrigger: {
		trigger: '.contacts__info',
		start: 'top 80%',
	},
	opacity: 0,
	x: -300,
	duration: 0.7
})
gsap.from('.form', {
	scrollTrigger: {
		trigger: '.contacts__info',
		start: 'top 80%',
	},
	opacity: 0,
	x: 300,
	duration: 0.7
})


// * SUPPORT UKRAINE

gsap.from('.support-ukraine__title', {
	scrollTrigger: {
		trigger: '.support-ukraine',
		start: 'top 80%',
	},
	opacity: 0,
	y: 100,
})
gsap.from('.support-ukraine .button', {
	scrollTrigger: {
		trigger: '.support-ukraine',
		start: 'top 80%',
	},
	opacity: 0,
	y: 100,
	delay: 0.2
})


// * FOOTER

gsap.from('.footer__about-us', {
	scrollTrigger: {
		trigger: '.footer__about-us',
		start: 'top 80%',
	},
	opacity: 0,
	y: 100,
})
gsap.from('.footer__nav-column', {
	scrollTrigger: {
		trigger: '.footer__nav',
		start: 'top 80%',
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