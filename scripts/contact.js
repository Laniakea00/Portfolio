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

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.collapse');

// Добавляем обработчик на бургер-кнопку
navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('active');
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


// Код для часов в реальном времени 
function displayDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('dateTime').textContent = formattedDate;
}

setInterval(displayDateTime, 1000); 


// Код для показа времени  
document.getElementById("showTimeBtn").addEventListener("click", function() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("timeDisplay").textContent = "Current Time: " + currentTime;
});


// Код для имейла 
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
        alert('Form has been sended');
    }
});


// Интеграция внешнего API
fetch('https://api.github.com/users/Laniakea00/repos')
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('repo-list');
        data.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.textContent = repo.name;
            repoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));