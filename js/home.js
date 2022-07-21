let registerBtn = document.querySelector('.account-form__register');
let loginBtn = document.querySelector('.account-form__login');
let registerForm = document.querySelector('.register-form');
let loginForm = document.querySelector('.login-form');
let accountForm = document.querySelector('.account-form');
let accountBtn = document.querySelector('#account-btn');
let closeBtn = document.querySelector('#close-form');

accountBtn.onclick = () => {
	accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
	accountForm.classList.remove('active');
};

registerBtn.onclick = () => {
	registerBtn.classList.add('active');
	loginBtn.classList.remove('active');
	document.querySelector('.login-form').classList.remove('active');
	document.querySelector('.register-form').classList.add('active');
};

loginBtn.onclick = () => {
	registerBtn.classList.remove('active');
	loginBtn.classList.add('active');
	loginForm.classList.add('active');
	registerForm.classList.remove('active');
};

var swiper = new Swiper(".home__swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	grabCursor: true,
});

var swiper = new Swiper(".home-courses__swiper", {
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
});

let navbar = document.querySelector('.header__navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeMenuBtn = document.querySelector('#close-btn');

menuBtn.onclick = () =>{
  navbar.classList.add('active');
}

closeMenuBtn.onclick = () =>{
  navbar.classList.remove('active');
};

display = () => {

	const time = document.querySelector('#time');
	const date = document.querySelector('#date');
	const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const dateTime = new Date();
	dayName = dateTime.getDay();
	dayNumber = dateTime.getDate();
	month = dateTime.getMonth();
	year = dateTime.getFullYear();
	hours = dateTime.getHours();
	minutes = dateTime.getMinutes();
	seconds = dateTime.getSeconds();
	let midday = "AM";

	if (hours > 12) {
		midday = "PM";
	}
	if (dayNumber < 10) {
		dayNumber = '0' + dayNumber;
	}
	if (month < 10) {
		month = '0' + month;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	date.textContent = week[dayName] + ', ' + dayNumber + '.' + month + '.' + year;
	time.textContent = hours + ' : ' + minutes + ' : ' + seconds + ' ' + midday;
}

setInterval(display);