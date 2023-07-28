gsap.registerPlugin(ScrollTrigger)

const headerTl = gsap.timeline()
const heroTl = gsap.timeline()


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
		x: -30,
	}, {
		opacity: 1,
		x: 0,
		duration: 0.3,
		stagger: 0.2,
	}, 0.6)
	.from('.hero__title', {
		opacity: 0,
		y: 100,
		duration: 0.8
	}, 1)


// * ARTICLE

gsap.from('.article .author__photo', {
	scrollTrigger: {
		trigger: '.article__header',
		start: 'top 90%',
		duration: 0.4,
	},
	opacity: 0,
	x: -100,
	delay: 1,
})
gsap.from('.article .author__name', {
	scrollTrigger: {
		trigger: '.article__header',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	delay: 1.2,
	duration: 0.4,

})
gsap.from('.article .author__prof', {
	scrollTrigger: {
		trigger: '.article__header',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	delay: 1.3,
	duration: 0.4,
})
gsap.from('.article__time', {
	scrollTrigger: {
		trigger: '.article__header',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	delay: 1.4,
	duration: 0.3,
})
gsap.from('article', {
	scrollTrigger: {
		trigger: 'article',
		start: 'top 90%',
	},
	opacity: 0,
	y: 200,
	duration: 0.8,
})
gsap.from('.article__next', {
	scrollTrigger: {
		trigger: '.article__footer',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	duration: 0.4,
})
gsap.from('.article__share-label', {
	scrollTrigger: {
		trigger: '.article__footer',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	delay: 0.3,
	duration: 0.4,
})
gsap.from('.article__share-links > li', {
	scrollTrigger: {
		trigger: '.article__footer',
		start: 'top 90%',
	},
	opacity: 0,
	x: -10,
	delay: 0.6,
	duration: 0.3,
	stagger: 0.2,
	scale: 0,
})


// * APP

gsap.from('.app__info > *', {
	scrollTrigger: {
		trigger: '.app',
		start: 'top 90%',
	},
	opacity: 0,
	y: 100,
	stagger: 0.3,
	duration: 0.4,
})
gsap.from('.app__button', {
	scrollTrigger: {
		trigger: '.app',
		start: 'top 90%',
	},
	opacity: 0,
	x: 200,
	delay: 0.6,
	duration: 0.6,
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