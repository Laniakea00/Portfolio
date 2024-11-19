document.addEventListener('DOMContentLoaded', function() {
    // Код для изменения цвета фона
    const colorButton = document.getElementById('changeColorBtn');
    if (colorButton) {
        document.body.style.backgroundColor = localStorage.getItem('bgColor') || 'defaultColor';
        
        colorButton.addEventListener('click', () => {
            const colors = ["purple", "pink", "green", "red", "blue", "#231414"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
            localStorage.setItem('bgColor', randomColor);
        });
    }

    // Код для формы логина
    const loginPopupBtn = document.getElementById('loginPopupBtn');
    const loginPopup = document.getElementById('loginPopup');
    const closeLoginPopup = document.getElementById('closeLoginPopup');
    const loginForm = document.getElementById('loginForm');

    if (loginPopupBtn && loginPopup && closeLoginPopup && loginForm) {
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

        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            loginPopupBtn.textContent = `Logout ${savedUsername}`;
        }
    }

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.collapse');

    // Добавляем обработчик на бургер-кнопку
    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('active');
    });

    window.addEventListener('click', function(event) {
        if (event.target == loginPopup) {
            loginPopup.style.display = 'none';
        }
    });

    // Код для обработки событий на клавиатуре
    const navItems = document.querySelectorAll('#navMenu .nav-item a, #navMenu button');
    let currentIndex = 0;

    if (navItems.length > 0) {
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
    }

  

    // Код для фильтрации 
        const hobbyTypeSelect = document.getElementById('hobbyType');
        const applyFilterBtn = document.getElementById('applyFilter');
        const hobbyList = document.getElementById('hobbyList');
    
    // Данные о хобби
    const hobbies = [
        { 
            type: 'sports', 
            name: 'Judo', 
            image: 'Images/Judo.jpeg', 
            description: 'Practiced judo, which helps me stay disciplined and in good shape.' 
        },
        { 
            type: 'sports', 
            name: 'Swimming', 
            image: 'Images/swimming.jpg', 
            description: 'I enjoy swimming to stay healthy and relieve stress.' 
        },
        { 
            type: 'sports', 
            name: 'Martial Arts', 
            image: 'Images/martial-arts.jpg', 
            description: 'Practiced martial arts, which gives me confidence and self-defense skills.' 
        },
        { 
            type: 'sports', 
            name: 'Volleyball', 
            image: 'Images/volleyball.jpeg', 
            description: 'I play volleyball with friends for relaxation and team spirit.' 
        },
        { 
            type: 'programming', 
            name: 'Programming', 
            image: 'Images/coding.jpg', 
            description: 'I love programming and can spend hours working with code.' 
        },
        { 
            type: 'entertainment', 
            name: 'Gaming', 
            image: 'Images/genshin.jpg', 
            description: 'I sometimes play video games for relaxation and entertainment.' 
        },
        { 
            type: 'entertainment', 
            name: 'Anime and Movies', 
            image: 'Images/code-geass.png', 
            description: 'I watch anime, movies, and series for inspiration and relaxation.' 
        },
        { 
            type: 'study', 
            name: 'Learning Japanese', 
            image: 'Images/japanese.png', 
            description: 'I am gradually learning Japanese, as it fascinates me.' 
        },
        { 
            type: 'study', 
            name: 'Reading Books', 
            image: 'Images/reading.png', 
            description: 'I love fiction and manga, and read almost every day.' 
        },
        { 
            type: 'music', 
            name: 'Piano', 
            image: 'Images/piano.png', 
            description: 'I am learning to play the piano, inspired by the Moonlight Sonata from an anime.'
        },
        { 
            type: 'travel', 
            name: 'Traveling', 
            image: 'Images/travel.png', 
            description: 'I love exploring new places, experiencing different cultures, and meeting new people.' 
        },
        { 
            type: 'art', 
            name: 'Drawing', 
            image: 'Images/drawing.jpg', 
            description: 'I enjoy drawing and sketching, which helps me express my creativity and relax.' 
        }
        
        
    ];

    function displayHobbies(filteredHobbies) {
        hobbyList.innerHTML = ''; 
        const row = document.createElement('div');
        row.classList.add('row'); // Wrap all cards in a row
    
        filteredHobbies.forEach(hobby => {
            const col = document.createElement('div');
            col.classList.add('col-md-4', 'mb-4'); // Each card takes 1/3 of the row
    
            const hobbyCard = document.createElement('div');
            hobbyCard.classList.add('card', 'hobby-card', 'text-center');
    
            const hobbyImage = document.createElement('img');
            hobbyImage.src = hobby.image;
            hobbyImage.alt = hobby.name;
            hobbyImage.classList.add('card-img-top');
    
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
    
            const hobbyTitle = document.createElement('h5');
            hobbyTitle.classList.add('card-title');
            hobbyTitle.textContent = hobby.name;
    
            const hobbyDescription = document.createElement('p');
            hobbyDescription.classList.add('card-text');
            hobbyDescription.textContent = hobby.description;
    
            cardBody.appendChild(hobbyTitle);
            cardBody.appendChild(hobbyDescription);
            hobbyCard.appendChild(hobbyImage);
            hobbyCard.appendChild(cardBody);
            col.appendChild(hobbyCard);
            row.appendChild(col); 
        });
        hobbyList.appendChild(row); 
    }
    
    
        applyFilterBtn.addEventListener('click', () => {
            const selectedType = hobbyTypeSelect.value;
            console.log("selected type" + selectedType);

            let filteredHobbies;
    
            if (selectedType === 'all') {
                filteredHobbies = hobbies; 
            } else {
                filteredHobbies = hobbies.filter(hobby => hobby.type == selectedType);
            }
    
            displayHobbies(filteredHobbies);
            console.log('filtered h' + filteredHobbies);
    
            localStorage.setItem('selectedHobbyType', selectedType);
        });
    
        const savedType = localStorage.getItem('selectedHobbyType');
        if (savedType) {
            hobbyTypeSelect.value = savedType;
        }

});