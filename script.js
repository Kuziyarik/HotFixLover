// Переключение контента с анимацией
function showContent(page) {
    const aboutContent = document.getElementById('content-about');
    const licenseContent = document.getElementById('content-license');
    const buttons = document.querySelectorAll('.tab-button');
    const activeContent = page === 'about' ? aboutContent : licenseContent;
    const inactiveContent = page === 'about' ? licenseContent : aboutContent;

    // Сначала размываем и скрываем текущий контент
    activeContent.classList.add('blur-out');
    inactiveContent.classList.add('blur-out');

    // Через 500мс меняем видимость и показываем новый контент
    setTimeout(() => {
        // Скрываем неактивный контент
        inactiveContent.style.display = 'none';
        activeContent.style.display = 'flex';

        // Убираем размытие у старого и добавляем анимацию появления нового
        activeContent.classList.remove('blur-out');
        activeContent.classList.add('blur-in');

        // Убираем класс анимации после её завершения
        setTimeout(() => {
            activeContent.classList.remove('blur-in');
        }, 500);
    }, 500);

    // Обновляем активную вкладку
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase().includes(page)) {
            button.classList.add('active');
        }
    });
}

// Эффект fade и blur при прокрутке (оставляем без изменений)
window.addEventListener('scroll', function() {
    const overlay = document.querySelector('.overlay');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    let blur = (scrollPosition / windowHeight) * 10;
    let brightness = 100 - (scrollPosition / windowHeight) * 100;
    let opacity = 1 - (scrollPosition / windowHeight);
    
    if (brightness >= 0) {
        overlay.style.filter = `brightness(${brightness}%) blur(${blur}px)`;
        overlay.style.opacity = opacity;
    } else {
        overlay.style.filter = 'brightness(0%) blur(10px)';
        overlay.style.opacity = 0;
    }
});