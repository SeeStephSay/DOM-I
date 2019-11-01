const siteContent = {
	'nav': {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	'cta': {
		'h1': 'DOM Is Awesome',
		'button': 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	'contact': {
		'contact-h4': 'Contact',
		'address': '123 Way 456 Street Somewhere, USA',
		'phone': '1 (888) 888-8888',
		'email': 'sales@greatidea.io',
	},
	'footer': {
		'copyright': 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
// let logo = document.getElementById('logo-img');
// logo.setAttribute('src', siteContent['nav']['img-src']);

// My Variables
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('a');
const navArray = Array.from(navLinks);

const logo = document.querySelector('#logo-img');

const home = document.createElement('a');
const store = document.createElement('a');

// const cta = document.querySelector('.cta'); // May not need.
//returning null
const ctaText = document.querySelector('.cta-text h1'); //childNodes?
const button = document.querySelector('button');
// console.log(ctaText);

const ctaImg = document.querySelector('#cta-img');
// const ctaTextArray = Array.from(ctaText);
// console.log(ctaTextArray);

// ----------------------------------------------------------------
// const topContent = document.querySelector('.top-content'); //childNodes?
// const topContentFeatures = topContent[1]; //childNodes?
// const topContentAbout = topContent[3]; //childNodes?
const h4 = document.querySelectorAll("h4");
const h4Array = Array.from(h4);

const middleImg = document.querySelector('#middle-img');

const bottomContent = document.querySelector('.text-content h4'); //childNodes?

// const bottomServices = bottomContent[1]; //childNodes?
// const bottomProduct = bottomContent[3]; //childNodes?
// const bottomVision = bottomContent[5]; //childNodes?

const contact = document.querySelector('.contact'); //childNodes?
const footer = document.querySelector('footer'); //childNodes?

// Fun, fun, functions!

function addToNav() {
	//Creating new nav items and changing existing nav color to green.
	home.href = 'index.html';
	home.textContent = 'Home';
	home.style.color = 'green';
	nav.prepend(home); //Add store to end of nav.

	store.href = '#';
	store.textContent = 'Store';
	store.style.color = 'green';
	nav.appendChild(store); // Add home to beginning of nav.

	for (let i = 0; i < navArray.length; i++) {
		//Change existing nav color to green.
		navArray[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
		navArray[i].style.color = 'green';
	}
	logo.setAttribute('src', siteContent['nav']['img-src']);
}

function mainContent() {

}


function ctaSection() {
	// Styling - stretch
	button.style.background = 'lightgrey';
	ctaImg.style.border = '2px solid black';
	ctaImg.style.borderRadius = '10%';
	// cta
	// for (let i = 1; i < ctaTextArray.length; i++) {
	// 	if (i === 1) {
	// 		const ctaH1Text = siteContent['cta']['h1'].split(' ');
	// 		ctaTextArray[i].innerHTML = ctaH1Text.join('<br>');
	// 	}
	// 	if (i === 3) {
	// 		ctaTextArray[i].textContent = siteContent['cta']['button'];
	// 	}
	// }
	ctaText.textContent = siteContent['cta']['h1'];
	//Add cta img src
	ctaImg.src = siteContent['cta']['img-src'];
}
// console.log(ctaText);

//Add main content to site
function addContent() {
	//Features
	topContentFeatures[1].textContent = siteContent['main-content']['features-h4'];
	topContentFeatures[3].textContent = siteContent['main-content']['features-content'];

	//About
	topContentAbout[1].textContent = siteContent['main-content']['about-h4'];
	topContentAbout[3].textContent = siteContent['main-content']['about-content'];

	//Middle img src
	middleImg.src = siteContent['main-content']['middle-img-src'];

	// Bottom content
	// Bottom services
	bottomServices[1].textContent = siteContent['main-content']['services-h4'];
	bottomServices[3].textContent = siteContent['main-content']['services-content'];

	// Bottom product
	bottomProduct[1].textContent = siteContent['main-content']['product-h4'];
	bottomProduct[3].textContent = siteContent['main-content']['product-content'];

	// Bottom vision
	bottomVision[1].textContent = siteContent['main-content']['vision-h4'];
	bottomVision[3].textContent = siteContent['main-content']['vision-content'];
}

// Add contact section content
function makeContact() {
	//Resistance is futile!
	contact[1].textContent = siteContent['contact']['contact-h4'];
	//Address text content
	const addressText = siteContent['contact']['address'].split(' ');
	addressText[3] = 'Street<br>';
	contact[3].innerHTML = addressText.join(' ');
	contact[5].textContent = siteContent['contact']['phone'];
	contact[7].textContent = siteContent['contact']['email'];
}

// Add footer content
function makeFooter() {
	footer[1].textContent = siteContent['footer']['copyright'];
}
(function makePage() {
	addToNav();
	ctaSection();
	addContent();
	makeContact();
	makeFooter();
})();
