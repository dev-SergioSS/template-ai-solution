//^ mobileMenu

const btnMenu = document.querySelector('.header__burger');
const menuContent = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');

if (btnMenu != null) {
	btnMenu.addEventListener('click', function () {
		btnMenu.classList.toggle('open');
		menuContent.classList.toggle('open');
		lockBody('lock');
	});
}

for (link of menuLink) {
	link.addEventListener('click', () => {
		btnMenu.classList.remove('open');
		menuContent.classList.remove('open');
		lockBody('unlock');
	});
}

function lockBody(action) {
	const body = document.querySelector('body');

	if (action == 'lock') {
		body.classList.toggle('lock');
	} else if (action == 'unlock') {
		body.classList.remove('lock');
	}
}

// * submenu

const menuSubItem = document.querySelector('.menu__subitem');

document.body.clientWidth > 998 ? addHoverHahdler() : addClickHahdler()

function addHoverHahdler() {
	menuSubItem.addEventListener('mouseenter', (e) => e.currentTarget.classList.add('open'))
	menuSubItem.addEventListener('mouseleave', (e) => e.currentTarget.classList.remove('open'))
}
function addClickHahdler() {
	menuSubItem.addEventListener('click', (e) => e.currentTarget.classList.toggle('open'))
}

// * btnContact

const btnContact = document.querySelector('.header__btn-mob-contacts')
btnContact.addEventListener('click', () => {
	btnMenu.classList.remove('open');
	menuContent.classList.remove('open');
	lockBody('unlock');
})


// -- faq spoilers

let spoilers = document.querySelectorAll('.spoiler');
let spoilersName = document.querySelectorAll('.spoiler__head');


if (spoilers.length) {

	spoilersName.forEach(el => el.addEventListener('click', (e) => {

		let thisSpoiler = e.target.parentElement;

		if (thisSpoiler.classList.contains('open')) {
			thisSpoiler.classList.remove('open')
		} else {
			spoilers.forEach((el) => el.classList.remove('open'))
			thisSpoiler.classList.add('open')
		}
	}))
}

// -- list of articles

let articles = document.querySelectorAll('.articles__item')

if (articles.length) {
	let count = 1

	articles.forEach(el => {
		el.classList.add(`articles__item_v${count}`)

		if (count === 4) count = 1
		else count = ++count
	})
}

// -- servises offer

let btnShowMore = document.querySelectorAll('.offer__btn-more')
let btnShowLess = document.querySelectorAll('.offer__btn-less')

btnShowMore.forEach(btn => btn.addEventListener('click', (e) => {
	document.querySelectorAll('.offer').forEach(el => el.classList.remove('open'))
	e.target.closest('.offer').classList.add('open')
}))

btnShowLess.forEach(btn => btn.addEventListener('click', (e) => {
	e.target.closest('.offer').classList.remove('open')
}))