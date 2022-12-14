console.log(`Made with Love by Youssef Hafnawy`);
////////////////////////////////////////////////////////////////////////

// for the phone nav list function
let navListButton = document.querySelector(".mobile-nav-toggle");
let phoneNavList = document.querySelector(".main-navigation ul");
let notNavListButton = [...document.querySelectorAll("body > *:not(header)")];
let visible = phoneNavList.getAttribute("date-visible");
let pageSections = [...document.querySelectorAll("main section")];

let specialForScroll = "";
// console.log(pageSections);

// a function to open and close the phone navigation when clicking on the icon(Menu icon, [X]icon)
navListButton.onclick = function () {
	if (visible === "false") {
		phoneNavList.setAttribute("date-visible", true);
		navListButton.setAttribute("aria-expanded", true);
		visible = "true";
		gsap.to('ul[date-visible="true"]', {
			duration: 0.5,
			xPercent: -100,
		});
	} else if (visible === "true") {
		phoneNavList.setAttribute("date-visible", false);
		navListButton.setAttribute("aria-expanded", false);
		visible = "false";
		gsap.to('ul[date-visible="false"]', {
			duration: 0.5,
			xPercent: 0,
		});
	}
};
// a function to close the phone navigation when clicking Anything outside the navigation list
notNavListButton.forEach((ele) => {
	ele.onclick = function () {
		if (visible === "true") {
			phoneNavList.setAttribute("date-visible", false);
			navListButton.setAttribute("aria-expanded", false);
			visible = "false";
			gsap.to('ul[date-visible="false"]', {
				duration: 0.5,
				xPercent: 0,
			});
		}
	};
});

// a function To determine the active nav item

let navEle = [...document.querySelectorAll(".main-navigation ul li a")];
let mainNavSpecialEle = "";

navEle.forEach(function (ele) {
	ele.onclick = function () {
		mainNavSpecialEle = ele;
		for (let i = 0; i < navEle.length; i++) {
			if (navEle[i] == mainNavSpecialEle) {
				navEle[i].setAttribute("date-selected", true);
			} else if (navEle[i] != mainNavSpecialEle) {
				navEle[i].setAttribute("date-selected", false);
			}
		}
	};
});
////////////////////////////////////////////////////////////////////////

let destinationNav = [...document.querySelectorAll(".Flip")];
let destinationImage = [...document.querySelectorAll("picture")];
let destinationArticle = [...document.querySelectorAll("article")];

destinationNav.forEach(function (ele) {
	let SpecialEle = "";
	ele.onclick = function () {
		SpecialEle = ele;
		for (let i = 0; i < destinationNav.length; i++) {
			if (destinationNav[i] == SpecialEle) {
				destinationNav[i].setAttribute("date-selected", true);
				destinationImage[i].setAttribute("aria-hidden", false);
				destinationArticle[i].setAttribute("aria-hidden", false);
			} else if (destinationNav[i] != SpecialEle) {
				destinationNav[i].setAttribute("date-selected", false);
				destinationImage[i].setAttribute("aria-hidden", true);
				destinationArticle[i].setAttribute("aria-hidden", true);
			}
		}
	};
});
