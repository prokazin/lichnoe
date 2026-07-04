// ===== ДАННЫЕ ПО УМОЛЧАНИЮ =====
const defaultData = {
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
        { icon: '🏂', title: 'SnowShop', desc: 'Магазин сноубордов. Каталог, админ-панель, фильтры, характеристики.', tags: ['витрина', 'админ-панель', 'адаптив'], link: '#' },
        { icon: '🚀', title: 'Стартап-лендинг', desc: 'Продающий лендинг для IT-продукта. Конверсия, аналитика, форма заявки.', tags: ['лендинг', 'конверсия', 'форма'], link: '#' },
        { icon: '📱', title: 'Telegram Shop', desc: 'Магазин внутри Telegram-бота. Каталог, корзина, оформление заказа.', tags: ['Telegram', 'корзина', 'бот'], link: '#' }
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

// ===== ИКОНКИ ДЛЯ СОЦСЕТЕЙ (SVG) =====
const socialIcons = {
    telegram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 4.5L2.5 10.5L9.5 14.5L13.5 21.5L21.5 4.5Z"/><path d="M9.5 14.5L13.5 9.5"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

// ===== ЗАГРУЗКА ДАННЫХ =====
function loadData() {
    const stored = localStorage.getItem('webmaster_data');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            return JSON.parse(JSON.stringify(defaultData));
        }
    }
    localStorage.setItem('webmaster_data', JSON.stringify(defaultData));
    return JSON.parse(JSON.stringify(defaultData));
}

let data = loadData();

// ===== РЕНДЕРИНГ =====
function renderSite() {
    document.getElementById('heroDesc').textContent = data.heroDesc;
    document.getElementById('aboutText').textContent = data.aboutText;
    document.getElementById('contactsText').textContent = data.contactsText;
    document.getElementById('footerText').textContent = data.footerText;
    document.getElementById('footerCopyright').textContent = data.footerCopyright;
    
    document.getElementById('statProjects').textContent = data.stats.projects;
    document.getElementById('statClients').textContent = data.stats.clients;
    document.getElementById('statHappy').textContent = data.stats.happy + '%';
    
    document.getElementById('servicesGrid').innerHTML = data.services.map(s => `
        <div class="service-card">
            <div class="service-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="service-tag">${s.price}</div>
        </div>
    `).join('');
    
    document.getElementById('portfolioGrid').innerHTML = data.portfolio.map(p => `
        <div class="portfolio-card">
            <div class="portfolio-image">${p.icon}</div>
            <div class="portfolio-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="portfolio-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
                <a href="${p.link}" class="btn btn-outline" target="_blank">Смотреть</a>
            </div>
        </div>
    `).join('');
    
    document.getElementById('pricingGrid').innerHTML = data.pricing.map(p => `
        <div class="pricing-card ${p.popular ? 'popular' : ''}">
            ${p.popular ? '<div class="pricing-badge">🔥 Популярный</div>' : ''}
            <div class="pricing-name">${p.name}</div>
            <div class="pricing-price">${p.price}</div>
            <ul class="pricing-features">${p.features.map(f => `<li>✅ ${f}</li>`).join('')}</ul>
            <a href="#contacts" class="btn btn-primary">Заказать</a>
        </div>
    `).join('');
    
    document.getElementById('aboutFeatures').innerHTML = data.features.map(f => `
        <div class="about-feature">
            <span>${f.icon}</span>
            <div><strong>${f.title}</strong><p>${f.desc}</p></div>
        </div>
    `).join('');
    
    document.getElementById('stepsGrid').innerHTML = data.steps.map(s => `
        <div class="step-card">
            <div class="step-number">${s.number}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');
    
    document.getElementById('faqGrid').innerHTML = data.faq.map((f, i) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">${f.question} <span>+</span></button>
            <div class="faq-answer"><p>${f.answer}</p></div>
        </div>
    `).join('');
    
    // ===== СОЦСЕТИ С ОРИГИНАЛЬНЫМИ ИКОНКАМИ =====
    document.getElementById('contactsSocial').innerHTML = data.social.map(s => `
        <a href="${s.link}" class="contact-link" target="_blank">
            <span class="contact-icon">${socialIcons[s.icon] || socialIcons.default}</span>
            ${s.name}
        </a>
    `).join('');
    
    document.getElementById('footerSocial').innerHTML = data.social.map(s => `
        <a href="${s.link}" target="_blank">
            <span class="footer-icon">${socialIcons[s.icon] || socialIcons.default}</span>
        </a>
    `).join('');
}

// ===== FAQ =====
function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight;
    document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
    document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('active'));
    if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 50 + 'px';
        btn.classList.add('active');
    }
}

// ===== ФОРМА =====
function sendForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn');
    const original = btn.textContent;
    btn.textContent = '✅ Отправлено!';
    btn.style.background = '#34c759';
    setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}

// ===== МОБИЛЬНОЕ МЕНЮ =====
document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => document.getElementById('navMenu').classList.remove('active'));
});

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', () => {
    renderSite();
    setTimeout(() => {
        const first = document.querySelector('.faq-question');
        if (first) first.click();
    }, 500);
});
