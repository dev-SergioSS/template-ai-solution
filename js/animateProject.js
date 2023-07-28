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
	.from('.hero__bg-circles', {
		opacity: 0.4,
		duration: 4,
		ease: 'back.out',
		scale: 0.8,
		y: 200,
	}, 0)
	.from('.hero__bg-img', {
		opacity: 0,
		y: 500,
		duration: 2,
		ease: 'circ.out'
	}, 0)


// * OVERWIEW

gsap.from('.overview .title-h2', {
	scrollTrigger: {
		trigger: '.overview',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	duration: 0.5,
})
gsap.from('.overview .title-h3', {
	scrollTrigger: {
		trigger: '.overview',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	duration: 0.5,
	delay: 0.3
})
gsap.from('.overview__text', {
	scrollTrigger: {
		trigger: '.overview .title-h3',
		start: 'bottom 70%',
	},
	opacity: 0,
	duration: 0.8,
	rotateX: -90,
	delay: 0.2

})
gsap.from('.overview__text > *', {
	scrollTrigger: {
		trigger: '.overview .title-h3',
		start: 'bottom 70%',
	},
	opacity: 0,
	y: 50,
	duration: 0.3,
	delay: 1,
	stagger: 0.15,
})
gsap.from('.overview__img', {
	scrollTrigger: {
		trigger: '.overview__img',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.6,
	y: 200,
})


// * PROMLEM

gsap.from('.problem', {
	scrollTrigger: {
		trigger: '.problem',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.6,
	y: 300,
})
gsap.from('.problem__wrap', {
	scrollTrigger: {
		trigger: '.problem',
		start: 'top 90%',
	},
	opacity: 0,
	x: 200,
	duration: 0.6,
	delay: 0.4,
})



// * SOLUTION

gsap.from('.solution', {
	scrollTrigger: {
		trigger: '.solution',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.6,
	y: 300,
})
gsap.from('.solution__wrap', {
	scrollTrigger: {
		trigger: '.solution',
		start: 'top 90%',
	},
	opacity: 0,
	x: -200,
	duration: 0.6,
	delay: 0.4,
})


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


// * FEATURES

gsap.from('.features .title-h2', {
	scrollTrigger: {
		trigger: '.features__wrap',
		start: 'top 90%',
	},
	opacity: 0,
	y: 60,
	duration: 0.4,
})
gsap.from('.features .title-h3', {
	scrollTrigger: {
		trigger: '.features__wrap',
		start: 'top 90%',
	},
	opacity: 0,
	y: 60,
	duration: 0.4,
	delay: 0.4
})
gsap.from('.features__slider .swiper-slide', {
	scrollTrigger: {
		trigger: '.features__wrap',
		start: 'top 90%',
	},
	opacity: 0,
	rotateY: -90,
	stagger: 0.2,
	x: 500,
	duration: 0.5,
	delay: 0.4
})
gsap.from('.features__slider-nav', {
	scrollTrigger: {
		trigger: '.features__wrap',
		start: 'top 90%',
	},
	opacity: 0,
	delay: 1.4,
	duration: 0.4
})


// * TECH STACK

gsap.from('.tech-stack', {
	scrollTrigger: {
		trigger: '.tech-stack',
		start: 'top 100%',
	},
	opacity: 0,
	duration: 0.5,
	y: 300,
})
gsap.from('.tech-stack__titles', {
	scrollTrigger: {
		trigger: '.tech-stack',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.5,
	x: -300,
	delay: 0.6,
})
gsap.from('.tech-stack__btn', {
	scrollTrigger: {
		trigger: '.tech-stack',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.5,
	x: 300,
	delay: 0.6,
})
gsap.from('.tech-stack__item', {
	scrollTrigger: {
		trigger: '.tech-stack',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.6,
	y: 300,
	stagger: 0.2,
	delay: 0.8,
})


// * RESULT

gsap.from('.result .title-h2', {
	scrollTrigger: {
		trigger: '.result',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	duration: 0.4,
})
gsap.from('.result .title-h3', {
	scrollTrigger: {
		trigger: '.result',
		start: 'top 90%',
	},
	opacity: 0,
	x: -100,
	duration: 0.4,
	delay: 0.4
})
gsap.from('.result__text', {
	scrollTrigger: {
		trigger: '.result .title-h3',
		start: 'bottom 70%',
	},
	opacity: 0,
	duration: 0.8,
	rotateX: -90,
	delay: 0.2
})
gsap.from('.result__text > *', {
	scrollTrigger: {
		trigger: '.result .title-h3',
		start: 'bottom 70%',
	},
	opacity: 0,
	y: 50,
	duration: 0.3,
	delay: 1,
	stagger: 0.15,
})


gsap.from('.result__feedback', {
	scrollTrigger: {
		trigger: '.result__feedback',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.6,
	x: -200,
})
gsap.from('.result__feedback-text', {
	scrollTrigger: {
		trigger: '.result__feedback',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.4,
	y: 100,
	delay: 0.6
})
gsap.from('.result__feedback-author', {
	scrollTrigger: {
		trigger: '.result__feedback',
		start: 'top 90%',

	},
	opacity: 0,
	duration: 0.4,
	y: 100,
	delay: 0.8
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