// Код для изменения цвета фона
const colorButton = document.getElementById('changeColorBtn');

document.body.style.backgroundColor = localStorage.getItem('bgColor') || 'defaultColor';

colorButton.addEventListener('click', () => {
    const colors = ["purple", "pink", "green", "red", "blue", "#231414"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    localStorage.setItem('bgColor', randomColor);
});

// Код для формы логина
const loginPopupBtn = document.getElementById('loginPopupBtn');
const loginPopup = document.getElementById('loginPopup');
const closeLoginPopup = document.getElementById('closeLoginPopup');
const loginForm = document.getElementById('loginForm');

loginPopupBtn.addEventListener('click', function() {
    const isLoggedIn = localStorage.getItem('username');
    if (isLoggedIn) {
        localStorage.removeItem('username');
        loginPopupBtn.textContent = 'Login';
        alert('You have been logged out.');
    } else {
        loginPopup.style.display = 'flex';
    }
});

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.collapse');

// Добавляем обработчик на бургер-кнопку
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('active');
});

closeLoginPopup.addEventListener('click', function() {
    loginPopup.style.display = 'none';
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        loginPopupBtn.textContent = `Logout ${username}`;
        loginPopup.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        loginPopupBtn.textContent = `Logout ${savedUsername}`;
    }
});

window.addEventListener('click', function(event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = 'none';
    }
});

// Код для обработки событий на клавиатуре
const navItems = document.querySelectorAll('#navMenu .nav-item a, #navMenu button');

let currentIndex = 0;

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'ArrowRight' || key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % navItems.length;
        navItems[currentIndex].focus();
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;
        navItems[currentIndex].focus();
    }
});


// Код для приветсвия 
const greetBtn = document.getElementById('greet-btn');
const nameInput = document.getElementById('name-input');
const greeting = document.getElementById('greeting');

function getTimeBasedGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let timeGreeting;

    switch (true) {
        case (hour >= 5 && hour < 12):
            timeGreeting = "Good morning";
            break;
        case (hour >= 12 && hour < 18):
            timeGreeting = "Good afternoon";
            break;
        default:
            timeGreeting = "Good evening";
            break;
    }

    return timeGreeting;
}

// Обработчик события для кнопки
greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const timeGreeting = getTimeBasedGreeting();

    if (name) {
        greeting.innerHTML = `${timeGreeting}, ${name}!<br>I'm glad to see you here. My name is Alan Berikzhan,<br>and this is my portfolio at 18 y.o.`;
        greeting.style.display = 'block';
    } else {
        greeting.textContent = 'Please enter your name.';
        greeting.style.display = 'block';
    }
});


// Код для музыки на кнопке
const soundButton = document.getElementById('greet-btn');
const notificationSound = document.getElementById('notificationSound');

soundButton.addEventListener('click', () => {
    notificationSound.play();
});

