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
            name: 'Дзюдо', 
            image: 'Images/Judo.jpeg', 
            description: 'Занимался дзюдо, что помогает мне оставаться дисциплинированным и в хорошей форме.' 
        },
        { 
            type: 'sports', 
            name: 'Плавание', 
            image: 'Images/swimming.jpg', 
            description: 'Люблю плавать для поддержания здоровья и снятия стресса.' 
        },
        { 
            type: 'sports', 
            name: 'Рукопашный бой', 
            image: 'Images/martial-arts.jpg', 
            description: 'Практиковал рукопашный бой, что дает уверенность и умение защищаться.' 
        },
        { 
            type: 'sports', 
            name: 'Волейбол', 
            image: 'Images/volleyball.jpeg', 
            description: 'Играю в волейбол с друзьями для отдыха и командного духа.' 
        },
        { 
            type: 'programming', 
            name: 'Программирование', 
            image: 'Images/coding.jpg', 
            description: 'Люблю программировать и разбираться в коде часами.' 
        },
        { 
            type: 'entertainment', 
            name: 'Игры', 
            image: 'Images/genshin.jpg', 
            description: 'Иногда играю в видеоигры для отдыха и развлечения.' 
        },
        { 
            type: 'entertainment', 
            name: 'Аниме и фильмы', 
            image: 'Images/code-geass.png', 
            description: 'Смотрю аниме, фильмы и сериалы для вдохновения и отдыха.' 
        },
        { 
            type: 'study', 
            name: 'Изучение японского', 
            image: 'Images/japanese.png', 
            description: 'Постепенно изучаю японский язык, так как он меня привлекает.' 
        },
        { 
            type: 'study', 
            name: 'Чтение книг', 
            image: 'Images/reading.png', 
            description: 'Люблю художественную литературу и манги, читаю почти каждый день.' 
        },
        { 
            type: 'music', 
            name: 'Фортепиано', 
            image: 'Images/piano.png', 
            description: 'Учусь играть на фортепиано, вдохновившись Лунной сонатой из аниме.' 
        }
    ];
        function displayHobbies(filteredHobbies) {
            hobbyList.innerHTML = ''; 
            filteredHobbies.forEach(hobby => {
                const hobbyCard = document.createElement('div');
                hobbyCard.classList.add('hobby-card');
                
                const hobbyImage = document.createElement('img');
                hobbyImage.src = hobby.image;
                hobbyImage.alt = hobby.name;
                hobbyImage.style.width = '200px'; 
                
                const hobbyTitle = document.createElement('h3');
                hobbyTitle.textContent = hobby.name;
                
                const hobbyDescription = document.createElement('p');
                hobbyDescription.textContent = hobby.description;
                
                hobbyCard.appendChild(hobbyImage);
                hobbyCard.appendChild(hobbyTitle);
                hobbyCard.appendChild(hobbyDescription);
                
                hobbyList.appendChild(hobbyCard);
            });
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