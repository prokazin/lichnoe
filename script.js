var STORAGE_KEY = 'webmaster_pro_data';
var LEADS_KEY = 'webmaster_leads';

function getDefaultData() {
    return {
        heroDesc: 'Быстро, красиво, дёшево. Полный цикл — от идеи до запуска. Бесплатный хостинг, адаптив, админ-панель.',
        aboutText: 'Я создаю сайты на GitHub с 2025 года. Моя цель — сделать качественный продукт, который будет работать, приносить результат и радовать глаз.',
        contactsText: 'Напишите мне в Telegram или Instagram — я отвечу в течение часа.',
        footerText: 'Создание сайтов на GitHub — быстро, красиво, дёшево.',
        footerCopyright: '© 2025 WebMaster. Все права защищены.',
        stats: { projects: 12, clients: 9, happy: 100 },
        services: [
            { icon: '📄', title: 'Лендинг', desc: 'Одностраничный сайт под ваш продукт или услугу. Быстрый запуск.', price: 'от 5 000 ₽' },
            { icon: '🛍️', title: 'Сайт-витрина', desc: 'Каталог товаров, админ-панель, загрузка фото, фильтры, характеристики.', price: 'от 10 000 ₽' },
            { icon: '📱', title: 'Telegram Web App', desc: 'Мини-приложение внутри бота для продаж, каталога или сервиса.', price: 'от 15 000 ₽' },
            { icon: '⚡', title: 'Сайт с корзиной', desc: 'Полноценный интернет-магазин с корзиной, заказами и админкой.', price: 'от 20 000 ₽' }
        ],
        portfolio: [
            { icon: '🏂', title: 'SnowShop', desc: 'Магазин сноубордов. Каталог, админ-панель, фильтры, характеристики.', tags: ['витрина', 'админ-панель', 'адаптив'], link: '#', image: '' },
            { icon: '🚀', title: 'Стартап-лендинг', desc: 'Продающий лендинг для IT-продукта. Конверсия, аналитика, форма заявки.', tags: ['лендинг', 'конверсия', 'форма'], link: '#', image: '' },
            { icon: '📱', title: 'Telegram Shop', desc: 'Магазин внутри Telegram-бота. Каталог, корзина, оформление заказа.', tags: ['Telegram', 'корзина', 'бот'], link: '#', image: '' }
        ],
        pricing: [
            { name: 'Старт', price: '5 000 ₽', features: ['Лендинг (1 страница)', 'Адаптив под все устройства', 'Форма заявки', '1 правка бесплатно', 'Деплой на GitHub'], popular: false },
            { name: 'Базовый', price: '10 000 ₽', features: ['Сайт-витрина (до 20 товаров)', 'Админ-панель', 'Загрузка фото', 'Фильтры и характеристики', '3 правки бесплатно', 'Деплой на GitHub'], popular: true },
            { name: 'Премиум', price: '20 000 ₽', features: ['Полноценный каталог', 'Корзина и оформление', 'Telegram Web App', 'Админ-панель + аналитика', '5 правок бесплатно', 'Деплой на GitHub'], popular: false }
        ],
        features: [
            { icon: '⚡', title: 'Быстро', desc: 'Сайт готов за 3–7 дней' },
            { icon: '🎨', title: 'Красиво', desc: 'Современный дизайн, стиль Apple' },
            { icon: '💰', title: 'Дёшево', desc: 'Цены ниже рыночных, качество — выше' },
            { icon: '🛠️', title: 'Надёжно', desc: 'Бесплатный хостинг на GitHub' }
        ],
        steps: [
            { number: '01', title: 'Обсуждаем', desc: 'Рассказываете идею, я предлагаю решение и сроки' },
            { number: '02', title: 'Прототип', desc: 'Создаю макет страниц, утверждаем структуру' },
            { number: '03', title: 'Разрабатываю', desc: 'Пишу код, делаю админ-панель, настраиваю' },
            { number: '04', title: 'Запускаю', desc: 'Тестирую, деплою на GitHub, передаю клиенту' }
        ],
        faq: [
            { question: 'Сколько времени занимает создание сайта?', answer: 'От 3 до 7 дней в зависимости от сложности. Лендинг — 3 дня, витрина — 5 дней, полный каталог — 7 дней.' },
            { question: 'Нужно ли покупать хостинг?', answer: 'Нет! Я размещаю сайты на GitHub Pages — это полностью бесплатно и надёжно.' },
            { question: 'Можно ли посмотреть примеры?', answer: 'Конечно! В разделе «Портфолио» вы можете посмотреть готовые проекты и оценить качество.' },
            { question: 'Как я могу оплатить?', answer: 'Предоплата 50%, остальное — после запуска. Оплата на карту или по ссылке.' }
        ],
        social: [
            { icon: 'telegram', name: 'Telegram', link: '#' },
            { icon: 'instagram', name: 'Instagram', link: '#' },
            { icon: 'email', name: 'Email', link: '#' }
        ]
    };
}

var socialIcons = {
    telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 4.5L2.5 10.5L9.5 14.5L13.5 21.5L21.5 4.5Z"/><path d="M9.5 14.5L13.5 9.5"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

function loadData() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            var def = getDefaultData();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(def));
            return def;
        }
    }
    var def = getDefaultData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(def));
    return def;
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

var data = loadData();

function renderSite() {
    document.getElementById('heroDesc').textContent = data.heroDesc;
    document.getElementById('aboutText').textContent = data.aboutText;
    document.getElementById('contactsText').textContent = data.contactsText;
    document.getElementById('footerText').textContent = data.footerText;
    document.getElementById('footerCopyright').textContent = data.footerCopyright;
    
    document.getElementById('statProjects').textContent = data.stats.projects;
    document.getElementById('statClients').textContent = data.stats.clients;
    document.getElementById('statHappy').textContent = data.stats.happy + '%';
    
    var servicesHtml = '';
    for (var i = 0; i < data.services.length; i++) {
        var s = data.services[i];
        servicesHtml += '<div class="service-card"><div class="service-icon">' + s.icon + '</div><h3>' + s.title + '</h3><p>' + s.desc + '</p><div class="service-tag">' + s.price + '</div></div>';
    }
    document.getElementById('servicesGrid').innerHTML = servicesHtml;
    
    var portfolioHtml = '';
    for (var j = 0; j < data.portfolio.length; j++) {
        var p = data.portfolio[j];
        var imageHtml = (p.image && p.image.indexOf('data:image') === 0) ? '<img src="' + p.image + '" alt="' + p.title + '">' : '<span class="no-image">' + (p.icon || '📷') + '</span>';
        var tagsHtml = '';
        if (p.tags) {
            for (var t = 0; t < p.tags.length; t++) {
                tagsHtml += '<span>' + p.tags[t] + '</span>';
            }
        }
        portfolioHtml += '<div class="portfolio-card">';
        portfolioHtml += '<div class="portfolio-image">' + imageHtml + '</div>';
        portfolioHtml += '<div class="portfolio-info">';
        portfolioHtml += '<h3>' + p.title + '</h3>';
        portfolioHtml += '<p>' + p.desc + '</p>';
        portfolioHtml += '<div class="portfolio-tags">' + tagsHtml + '</div>';
        portfolioHtml += '<a href="' + (p.link || '#') + '" class="btn-outline" target="_blank">Смотреть</a>';
        portfolioHtml += '</div></div>';
    }
    document.getElementById('portfolioGrid').innerHTML = portfolioHtml;
    
    var pricingHtml = '';
    for (var k = 0; k < data.pricing.length; k++) {
        var pr = data.pricing[k];
        var featuresHtml = '';
        for (var f = 0; f < pr.features.length; f++) {
            featuresHtml += '<li>✅ ' + pr.features[f] + '</li>';
        }
        var popularBadge = pr.popular ? '<div class="pricing-badge">🔥 Популярный</div>' : '';
        var popularClass = pr.popular ? ' popular' : '';
        pricingHtml += '<div class="pricing-card' + popularClass + '">' + popularBadge + '<div class="pricing-name">' + pr.name + '</div><div class="pricing-price">' + pr.price + '</div><ul class="pricing-features">' + featuresHtml + '</ul><a href="#contacts" class="btn btn-primary">Заказать</a></div>';
    }
    document.getElementById('pricingGrid').innerHTML = pricingHtml;
    
    var featuresHtml2 = '';
    for (var l = 0; l < data.features.length; l++) {
        var ft = data.features[l];
        featuresHtml2 += '<div class="about-feature"><span>' + ft.icon + '</span><div><strong>' + ft.title + '</strong><p>' + ft.desc + '</p></div></div>';
    }
    document.getElementById('aboutFeatures').innerHTML = featuresHtml2;
    
    var stepsHtml = '';
    for (var m = 0; m < data.steps.length; m++) {
        var st = data.steps[m];
        stepsHtml += '<div class="step-card"><div class="step-number">' + st.number + '</div><h3>' + st.title + '</h3><p>' + st.desc + '</p></div>';
    }
    document.getElementById('stepsGrid').innerHTML = stepsHtml;
    
    var faqHtml = '';
    for (var n = 0; n < data.faq.length; n++) {
        var fa = data.faq[n];
        faqHtml += '<div class="faq-item"><button class="faq-question" onclick="toggleFaq(this)">' + fa.question + ' <span>+</span></button><div class="faq-answer"><p>' + fa.answer + '</p></div></div>';
    }
    document.getElementById('faqGrid').innerHTML = faqHtml;
    
    var socialHtml = '';
    for (var o = 0; o < data.social.length; o++) {
        var so = data.social[o];
        var iconSvg = socialIcons[so.icon] || socialIcons.default;
        socialHtml += '<a href="' + so.link + '" class="contact-link" target="_blank"><span class="contact-icon">' + iconSvg + '</span>' + so.name + '</a>';
    }
    document.getElementById('contactsSocial').innerHTML = socialHtml;
    
    var footerHtml = '';
    for (var p2 = 0; p2 < data.social.length; p2++) {
        var so2 = data.social[p2];
        var iconSvg2 = socialIcons[so2.icon] || socialIcons.default;
        footerHtml += '<a href="' + so2.link + '" target="_blank"><span class="footer-icon">' + iconSvg2 + '</span></a>';
    }
    document.getElementById('footerSocial').innerHTML = footerHtml;
}

function toggleFaq(btn) {
    var answer = btn.nextElementSibling;
    var isOpen = answer.style.maxHeight;
    var allAnswers = document.querySelectorAll('.faq-answer');
    for (var i = 0; i < allAnswers.length; i++) {
        allAnswers[i].style.maxHeight = null;
    }
    var allQuestions = document.querySelectorAll('.faq-question');
    for (var j = 0; j < allQuestions.length; j++) {
        allQuestions[j].classList.remove('active');
    }
    if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 50 + 'px';
        btn.classList.add('active');
    }
}

// ===== ОТПРАВКА ЗАЯВКИ В ЛОКАЛЬНОЕ ХРАНИЛИЩЕ =====
function sendForm(e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('.btn');
    var originalText = btn.textContent;

    var nameInput = form.querySelector('input[placeholder="Ваше имя"]');
    var contactInput = form.querySelector('input[placeholder="Telegram или Instagram"]');
    var messageInput = form.querySelector('textarea');

    var name = nameInput ? nameInput.value : 'Не указано';
    var contact = contactInput ? contactInput.value : 'Не указано';
    var message = messageInput ? messageInput.value : 'Не указано';

    // Сохраняем заявку в localStorage
    var leads = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
    leads.push({
        id: Date.now(),
        name: name,
        contact: contact,
        message: message,
        date: new Date().toLocaleString('ru-RU'),
        timestamp: new Date().toISOString()
    });
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));

    btn.textContent = '✅ Сохранено!';
    btn.style.background = '#34c759';
    form.reset();
    
    // Увеличиваем счётчик заявок
    var analytics = JSON.parse(localStorage.getItem('webmaster_analytics') || '{"leads":0,"views":0}');
    analytics.leads = (analytics.leads || 0) + 1;
    localStorage.setItem('webmaster_analytics', JSON.stringify(analytics));
    
    setTimeout(function() {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
    }, 3000);
}

document.getElementById('navToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

var navLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderSite();
    setTimeout(function() {
        var first = document.querySelector('.faq-question');
        if (first) first.click();
    }, 500);
});
