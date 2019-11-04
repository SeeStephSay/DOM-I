const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
console.log(logo);
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("a");
const navArray = Array.from(navLinks);

//Add nav links
// let navArray = document.querySelectorAll("a");
// navArray[0].textContent = siteContent["nav"]["nav-item-1"];
// navArray[1].textContent = siteContent["nav"]["nav-item-2"];
// navArray[2].textContent = siteContent["nav"]["nav-item-3"];
// navArray[3].textContent = siteContent["nav"]["nav-item-4"];
// navArray[4].textContent = siteContent["nav"]["nav-item-5"];
// navArray[5].textContent = siteContent["nav"]["nav-item-6"];


// Creating new nav items and changing existing nav color to green.
const blog = document.createElement('a');
blog.href = "#";
blog.textContent = "Blog";
blog.style.color = "green";
navBar.appendChild(blog);

const home = document.createElement('a');
home.href = "index.html";
home.textContent = "Home";
home.style.color = "green";
navBar.prepend(home);

navBar.forEach((value, i) => value.textContent = siteContent.nav[`nav-item-${i + 1}`]);
navBar.forEach(element => element.style.color = 'green');

// for (let i = 0; i < navArray.length; i++) {
//   navArray[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
//   navArray[i].style.color = green;
// }

// Change nav link color to green
// navItems[0].style.color = "green";
// navItems[1].style.color = "green";
// navItems[2].style.color = "green";
// navItems[3].style.color = "green";
// navItems[4].style.color = "green";
// navItems[5].style.color = "green";
// navItems.querySelectorAll("a").forEach(link => link.setAttribute("style", "color: green"));
// logo.src = siteContent['nav']['img-src'];
// logo.setAttribute('src', siteContent["nav"]["img-src"]);


// CTA
let h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

let button = document.querySelector("button");
button.textContent = siteContent.cta.button;

// Images
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Titles
let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features=h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
h4[5].textContent = siteContent["main-content"]["contact-h4"];

// Text Content
let p = document.querySelectorAll("p");
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

// Contact 
p[5].textContent = siteContent.contact.address;
p[6].textContent = siteContent.contact.phone;
p[7].textContent = siteContent.contact.email;

// Copyright
p[8].textContent = siteContent.footer.copyright;

(function makePage() {
  addToNav();
})();
