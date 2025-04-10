const translations = {
    en: {
        tagline: "Developer | Creator",
        about: "Hi! I'm Kuziyarik, I code and create content. This is where I share my projects.",
        "support-btn": "Support me",
        "support-text": "Thanks for supporting my projects!",
        email: "Write to me: <a href=\"mailto:vert1xn@email.com\">vert1xn@email.com</a>",
        suggest: "Suggest an idea",
        footer: "© 2025, all rights belong to Kuziyarik aka Vert1xN"
    },
    ru: {
        tagline: "Разработчик | Креатор",
        about: "Привет! Я Kuziyarik, пишу код и создаю контент. Здесь делюсь своими проектами.",
        "support-btn": "Поддержать меня",
        "support-text": "Спасибо за поддержку моих проектов!",
        email: "Пиши мне: <a href=\"mailto:vert1xn@email.com\">vert1xn@email.com</a>",
        suggest: "Предложить идею",
        footer: "© 2025, все права принадлежат Kuziyarik aka Vert1xN"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = translations[lang][key];
    });
    document.documentElement.lang = lang;
}

window.onload = () => {
    const browserLang = navigator.language.slice(0, 2); // Get the first two characters of the browser language
    const supportedLangs = Object.keys(translations); // Get supported languages
    const defaultLang = supportedLangs.includes(browserLang) ? browserLang : 'en'; // Fallback to 'en' if not supported
    setLanguage(defaultLang);
};