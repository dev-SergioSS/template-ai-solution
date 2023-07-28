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

// * WELCOME

gsap.from('.welcome .title-h2', {
	scrollTrigger: {
		trigger: '.welcome .titles',
		start: 'top 90%',
	},
	duration: 0.4,
	opacity: 0,
	x: -100,
})
gsap.from('.welcome .title-h3',
	{
		scrollTrigger: {
			trigger: '.welcome .titles',
			start: 'top 90%',
		},
		duration: 0.4,
		delay: 0.3,
		opacity: 0,
		x: -100,
	})
gsap.from('.welcome__text p', {
	scrollTrigger: {
		trigger: '.welcome__text',
		start: 'top 90%',
	},
	delay: 0.4,
	opacity: 0,
	y: 150,
	duration: 0.3,
	stagger: 0.2,
	rotateX: -90
})



// * ABOUT US

gsap.from('.about-us__titles', {
	scrollTrigger: {
		trigger: '.about-us__titles',
		start: 'top 90%',
		duration: 0.4,
	},
	opacity: 0,
	x: 150,
})
gsap.from('.about-us__button', {
	scrollTrigger: {
		trigger: '.about-us__titles',
		start: 'top 90%',
		duration: 0.4,
	},
	opacity: 0,
	x: 150,
	delay: 0.2
})
gsap.from('.about-us__items li', {
	scrollTrigger: {
		trigger: '.about-us__items',
		start: 'top 90%',
	},

	opacity: 0,
	scale: 0,
	y: 200,
	x: -100,
	stagger: 0.25,
	duration: 0.3,
	ease: 'power2.out',
	delay: 0.3
});


// * MISSION

gsap.from('.mission__title', {
	scrollTrigger: {
		trigger: '.mission__title',
		start: 'top 90%',
	},
	opacity: 0,
	y: -150,
	duration: 0.6,
})
gsap.from('.mission__content img', {
	scrollTrigger: {
		trigger: '.mission__content',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.3,
	scale: 2,
	delay: 0.8
})
gsap.from('.mission__content p', {
	scrollTrigger: {
		trigger: '.mission__content',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.5,
	delay: 1,
	x: function (i) {
		return i % 2 === 1 ? 200 : -200;
	}
})


// * VALUES

gsap.from('.values__title', {
	scrollTrigger: {
		trigger: '.values__title',
		start: 'top 90%',
	},
	opacity: 0,
	y: -100,
	duration: 0.4,
})
gsap.from('.values__img', {
	scrollTrigger: {
		trigger: '.values__title',
		start: 'top 90%',
	},
	opacity: 0,
	x: -300,
	scale: 0.8,
	duration: 0.6,
	delay: 0.4
})
gsap.from('.values__list li', {
	scrollTrigger: {
		trigger: '.values__title',
		start: 'top 90%',
	},
	opacity: 0,
	duration: 0.4,
	delay: 0.3,
	stagger: 0.3,
	x: 200,
	scale: 0.8,

})

// * TEAM

gsap.from('.team .title-h2', {
	scrollTrigger: {
		trigger: '.team .titles',
		start: 'top 90%',
		duration: 0.4,
	},
	opacity: 0,
	y: 50,
})
gsap.from('.team .title-h3', {
	scrollTrigger: {
		trigger: '.team .titles',
		start: 'top 90%',
		duration: 0.4,
	},
	delay: 0.2,
	opacity: 0,
	y: 50,
})
gsap.from('.team__text', {
	scrollTrigger: {
		trigger: '.team .titles',
		start: 'top 90%',
		duration: 0.8,
	},
	delay: 0.4,
	opacity: 0,
	y: 50,
})
gsap.from('.team__list li', {
	scrollTrigger: {
		trigger: '.team__list',
		start: 'top 90%',
	},
	opacity: 0,
	scale: 0,
	y: 200,
	duration: 0.55,
	delay: 0.6
})


// * WITH UKRAINE


gsap.from('.with-ukraine__flag', {
	scrollTrigger: {
		trigger: '.with-ukraine',
		start: 'top 90%',
	},
	opacity: 0,
	x: -200,
	duration: 0.7
})
gsap.from('.with-ukraine__flag .button', {
	scrollTrigger: {
		trigger: '.with-ukraine',
		start: 'top 90%',
	},
	opacity: 0,
	y: 20,
	duration: 0.5,
	delay: 1.4
})
gsap.from('.with-ukraine__title', {
	scrollTrigger: {
		trigger: '.with-ukraine',
		start: 'top 90%',
	},
	opacity: 0,
	x: 200,
	delay: 0.2
})
gsap.from('.with-ukraine__content p', {
	scrollTrigger: {
		trigger: '.with-ukraine',
		start: 'top 90%',
	},
	opacity: 0,
	y: 80,
	delay: 0.2,
	stagger: 0.2,
	delay: 0.6,
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