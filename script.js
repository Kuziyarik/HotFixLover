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

// Эффект fade и blur при прокрутке
window.addEventListener('scroll', function() {
    const overlay = document.querySelector('.overlay');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    let blur = (scrollPosition / windowHeight) * 1;
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
const products = [
  {
    id: 1,
    title: "Тралалело тралала",
    description: "Парквалело парквала",
    link: "/pages/products/proga1.html",
    image: "images/proga1.png"
  },
  {
    id: 2,
    title: "Тралалело тралала",
    description: "Парквалело парквала",
    link: "/pages/products/proga1.html",
    image: "images/proga1.png"
  },
  {
    id: 3,
    title: "Пример продукта 3",
    description: "Описание продукта 3",
    link: "/pages/products/proga3.html",
    image: "images/proga3.png"
  },
  {
    id: 4,
    title: "Пример продукта 4",
    description: "Описание продукта 4",
    link: "/pages/products/proga4.html",
    image: "images/proga4.png"
  },
  {
    id: 5,
    title: "Пример продукта 5",
    description: "Описание продукта 5",
    link: "/pages/products/proga5.html",
    image: "images/proga5.png"
  },
  {
    id: 6,
    title: "Пример продукта 6",
    description: "Описание продукта 6",
    link: "/pages/products/proga6.html",
    image: "images/proga6.png"
  },
  {
    id: 7,
    title: "Пример продукта 7",
    description: "Описание продукта 7",
    link: "/pages/products/proga7.html",
    image: "images/proga7.png"
  },
  {
    id: 8,
    title: "Пример продукта 8",
    description: "Описание продукта 8",
    link: "/pages/products/proga8.html",
    image: "images/proga8.png"
  }
];
  document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.getElementById('products-list');
    if (productsList) {
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
          <div class="product-image-container">
            ${product.image ? `<img src="${product.image}" alt="${product.title}">` : '<div class="no-image-placeholder"></div>'}
          </div>
          <div class="product-info">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" class="product-button">Подробнее</a>
          </div>
        `;
        productsList.appendChild(productCard);
      });
    }
  });