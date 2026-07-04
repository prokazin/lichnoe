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
        { icon: '📱', name: 'Telegram', link: '#' },
        { icon: '📷', name: 'Instagram', link: '#' },
        { icon: '✉️', name: 'Email', link: '#' }
    ]
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
    // Если данных нет — сохраняем дефолтные
    localStorage.setItem('webmaster_data', JSON.stringify(defaultData));
    return JSON.parse(JSON.stringify(defaultData));
}

function saveData(data) {
    localStorage.setItem('webmaster_data', JSON.stringify(data));
}

let data = loadData();

// ===== РЕНДЕРИНГ САЙТА =====
function renderSite() {
    // Hero
    document.getElementById('heroDesc').textContent = data.heroDesc;
    
    // About
    document.getElementById('aboutText').textContent = data.aboutText;
    document.getElementById('aboutAvatar').textContent = data.aboutAvatar || '🧑‍💻';
    
    // Contacts
    document.getElementById('contactsText').textContent = data.contactsText;
    
    // Footer
    document.getElementById('footerText').textContent = data.footerText;
    document.getElementById('footerCopyright').textContent = data.footerCopyright;
    
    // Stats
    document.getElementById('statProjects').textContent = data.stats.projects;
    document.getElementById('statClients').textContent = data.stats.clients;
    document.getElementById('statHappy').textContent = data.stats.happy + '%';
    
    // Services
    document.getElementById('servicesGrid').innerHTML = data.services.map(s => `
        <div class="service-card">
            <div class="service-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="service-tag">${s.price}</div>
        </div>
    `).join('');
    
    // Portfolio
    document.getElementById('portfolioGrid').innerHTML = data.portfolio.map(p => `
        <div class="portfolio-card">
            <div class="portfolio-image">${p.icon}</div>
            <div class="portfolio-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="portfolio-tags">
                    ${p.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
                <a href="${p.link}" class="btn btn-outline" target="_blank">Смотреть</a>
            </div>
        </div>
    `).join('');
    
    // Pricing
    document.getElementById('pricingGrid').innerHTML = data.pricing.map(p => `
        <div class="pricing-card ${p.popular ? 'popular' : ''}">
            ${p.popular ? '<div class="pricing-badge">🔥 Популярный</div>' : ''}
            <div class="pricing-name">${p.name}</div>
            <div class="pricing-price">${p.price}</div>
            <ul class="pricing-features">
                ${p.features.map(f => `<li>✅ ${f}</li>`).join('')}
            </ul>
            <a href="#contacts" class="btn btn-primary">Заказать</a>
        </div>
    `).join('');
    
    // Features
    document.getElementById('aboutFeatures').innerHTML = data.features.map(f => `
        <div class="about-feature">
            <span>${f.icon}</span>
            <div>
                <strong>${f.title}</strong>
                <p>${f.desc}</p>
            </div>
        </div>
    `).join('');
    
    // Steps
    document.getElementById('stepsGrid').innerHTML = data.steps.map(s => `
        <div class="step-card">
            <div class="step-number">${s.number}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');
    
    // FAQ
    document.getElementById('faqGrid').innerHTML = data.faq.map((f, i) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
                ${f.question} <span>+</span>
            </button>
            <div class="faq-answer">
                <p>${f.answer}</p>
            </div>
        </div>
    `).join('');
    
    // Social (contacts)
    document.getElementById('contactsSocial').innerHTML = data.social.map(s => `
        <a href="${s.link}" class="contact-link" target="_blank">
            <span class="contact-icon">${s.icon}</span> ${s.name}
        </a>
    `).join('');
    
    // Social (footer)
    document.getElementById('footerSocial').innerHTML = data.social.map(s => `
        <a href="${s.link}" target="_blank">${s.icon}</a>
    `).join('');
}

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight;

    document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = null;
    });
    document.querySelectorAll('.faq-question').forEach(b => {
        b.classList.remove('active');
    });

    if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 50 + 'px';
        btn.classList.add('active');
    }
}

// ===== АДМИН-ПАНЕЛЬ =====
const ADMIN_PASSWORD = 'webmaster2026';

function openAdmin() {
    document.getElementById('adminModal').classList.add('active');
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminPassword').value = '';
}

function closeAdmin() {
    document.getElementById('adminModal').classList.remove('active');
}

function checkAdminPassword() {
    const pass = document.getElementById('adminPassword').value;
    if (pass === ADMIN_PASSWORD) {
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        renderAdmin();
    } else {
        alert('❌ Неверный пароль!');
    }
}

// ===== РЕНДЕРИНГ АДМИНКИ =====
function renderAdmin() {
    // Тексты
    document.getElementById('editHeroDesc').value = data.heroDesc || '';
    document.getElementById('editAboutText').value = data.aboutText || '';
    document.getElementById('editContactsText').value = data.contactsText || '';
    document.getElementById('editFooterText').value = data.footerText || '';
    document.getElementById('editFooterCopyright').value = data.footerCopyright || '';
    
    document.getElementById('editStatProjects').value = data.stats.projects || 0;
    document.getElementById('editStatClients').value = data.stats.clients || 0;
    document.getElementById('editStatHappy').value = data.stats.happy || 0;
    
    // Услуги
    document.getElementById('adminServices').innerHTML = data.services.map((s, i) => `
        <div class="admin-item">
            <span>${s.icon} ${s.title} — ${s.price}</span>
            <div class="admin-item-actions">
                <button class="edit" onclick="editService(${i})">✎</button>
                <button class="delete" onclick="deleteService(${i})">✕</button>
            </div>
        </div>
    `).join('');
    
    // Портфолио
    document.getElementById('adminPortfolio').innerHTML = data.portfolio.map((p, i) => `
        <div class="admin-item">
            <span>${p.icon} ${p.title}</span>
            <div class="admin-item-actions">
                <button class="edit" onclick="editPortfolio(${i})">✎</button>
                <button class="delete" onclick="deletePortfolio(${i})">✕</button>
            </div>
        </div>
    `).join('');
    
    // Тарифы
    document.getElementById('adminPricing').innerHTML = data.pricing.map((p, i) => `
        <div class="admin-item">
            <span>${p.name} — ${p.price} ${p.popular ? '🔥' : ''}</span>
            <div class="admin-item-actions">
                <button class="edit" onclick="editPricing(${i})">✎</button>
                <button class="delete" onclick="deletePricing(${i})">✕</button>
            </div>
        </div>
    `).join('');
    
    // Особенности
    document.getElementById('adminFeatures').innerHTML = data.features.map((f, i) => `
        <div class="admin-item">
            <span>${f.icon} ${f.title}</span>
            <div class="admin-item-actions">
                <button class="edit" onclick="editFeature(${i})">✎</button>
                <button class="delete" onclick="deleteFeature(${i})">✕</button>
            </div>
        </div>
    `).join('');
    
    // Этапы
    document.getElementById('adminSteps').innerHTML = data.steps.map((s, i) => `
        <div class="admin-item">
            <span>${s.number} ${s.title}</span>
            <div class="admin-item-actions">
                <button class="edit" onclick="editStep(${i})">✎</button>
                <button class="delete" onclick="deleteStep(${i})">✕</button>
            </div>
        </div>
    `).join('');
    
    // FAQ
    document.getElementById('adminFaq').innerHTML = data.faq.map((f, i) => `
        <div class="admin-item">
            <span>${f.question}</span>
            <div class="admin-item-actions">
                <button class="edit" onclick="editFaq(${i})">✎</button>
                <button class="delete" onclick="deleteFaq(${i})">✕</button>
            </div>
        </div>
    `).join('');
    
    // Соцсети
    document.getElementById('adminSocial').innerHTML = data.social.map((s, i) => `
        <div class="admin-item">
            <span>${s.icon} ${s.name}</span>
            <div class="admin-item-actions">
                <button class="edit" onclick="editSocial(${i})">✎</button>
                <button class="delete" onclick="deleteSocial(${i})">✕</button>
            </div>
        </div>
    `).join('');
}

// ===== СОХРАНЕНИЕ ТЕКСТОВ =====
function saveTexts() {
    data.heroDesc = document.getElementById('editHeroDesc').value;
    data.aboutText = document.getElementById('editAboutText').value;
    data.contactsText = document.getElementById('editContactsText').value;
    data.footerText = document.getElementById('editFooterText').value;
    data.footerCopyright = document.getElementById('editFooterCopyright').value;
    
    saveData(data);
    renderSite();
    showToast('✅ Тексты сохранены!');
}

function saveStats() {
    data.stats.projects = parseInt(document.getElementById('editStatProjects').value) || 0;
    data.stats.clients = parseInt(document.getElementById('editStatClients').value) || 0;
    data.stats.happy = parseInt(document.getElementById('editStatHappy').value) || 0;
    
    saveData(data);
    renderSite();
    showToast('✅ Статистика сохранена!');
}

// ===== CRUD ДЛЯ ВСЕХ СЕКЦИЙ =====
function addService() {
    const title = prompt('Название услуги:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    const price = prompt('Цена (например: от 5 000 ₽):');
    if (!price) return;
    
    data.services.push({ icon: '🛠️', title, desc, price });
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Услуга добавлена!');
}

function editService(index) {
    const s = data.services[index];
    const title = prompt('Название:', s.title);
    if (!title) return;
    const desc = prompt('Описание:', s.desc);
    if (!desc) return;
    const price = prompt('Цена:', s.price);
    if (!price) return;
    
    data.services[index] = { ...s, title, desc, price };
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Услуга обновлена!');
}

function deleteService(index) {
    if (!confirm('Удалить услугу?')) return;
    data.services.splice(index, 1);
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('🗑️ Услуга удалена');
}

// Аналогичные функции для остальных секций
function addPortfolio() {
    const icon = prompt('Иконка (эмодзи):', '🚀');
    const title = prompt('Название проекта:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    const tags = prompt('Теги (через запятую):').split(',').map(t => t.trim());
    const link = prompt('Ссылка на проект:', '#');
    
    data.portfolio.push({ icon: icon || '🚀', title, desc, tags, link });
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Проект добавлен!');
}

function editPortfolio(index) {
    const p = data.portfolio[index];
    const icon = prompt('Иконка:', p.icon);
    const title = prompt('Название:', p.title);
    if (!title) return;
    const desc = prompt('Описание:', p.desc);
    if (!desc) return;
    const tags = prompt('Теги (через запятую):', p.tags.join(', ')).split(',').map(t => t.trim());
    const link = prompt('Ссылка:', p.link);
    
    data.portfolio[index] = { icon: icon || '🚀', title, desc, tags, link };
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Проект обновлён!');
}

function deletePortfolio(index) {
    if (!confirm('Удалить проект?')) return;
    data.portfolio.splice(index, 1);
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('🗑️ Проект удалён');
}

function addPricing() {
    const name = prompt('Название тарифа:');
    if (!name) return;
    const price = prompt('Цена:');
    if (!price) return;
    const features = prompt('Опции (через запятую):').split(',').map(f => f.trim());
    const popular = confirm('Сделать популярным?');
    
    data.pricing.push({ name, price, features, popular });
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Тариф добавлен!');
}

function editPricing(index) {
    const p = data.pricing[index];
    const name = prompt('Название:', p.name);
    if (!name) return;
    const price = prompt('Цена:', p.price);
    if (!price) return;
    const features = prompt('Опции (через запятую):', p.features.join(', ')).split(',').map(f => f.trim());
    const popular = confirm('Сделать популярным?');
    
    data.pricing[index] = { name, price, features, popular };
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Тариф обновлён!');
}

function deletePricing(index) {
    if (!confirm('Удалить тариф?')) return;
    data.pricing.splice(index, 1);
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('🗑️ Тариф удалён');
}

function addFeature() {
    const icon = prompt('Иконка (эмодзи):', '⚡');
    const title = prompt('Название особенности:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    
    data.features.push({ icon: icon || '⚡', title, desc });
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Особенность добавлена!');
}

function editFeature(index) {
    const f = data.features[index];
    const icon = prompt('Иконка:', f.icon);
    const title = prompt('Название:', f.title);
    if (!title) return;
    const desc = prompt('Описание:', f.desc);
    if (!desc) return;
    
    data.features[index] = { icon: icon || '⚡', title, desc };
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Особенность обновлена!');
}

function deleteFeature(index) {
    if (!confirm('Удалить особенность?')) return;
    data.features.splice(index, 1);
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('🗑️ Особенность удалена');
}

function addStep() {
    const number = prompt('Номер этапа (например: 01):');
    const title = prompt('Название этапа:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    
    data.steps.push({ number: number || '0' + (data.steps.length + 1), title, desc });
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Этап добавлен!');
}

function editStep(index) {
    const s = data.steps[index];
    const number = prompt('Номер:', s.number);
    const title = prompt('Название:', s.title);
    if (!title) return;
    const desc = prompt('Описание:', s.desc);
    if (!desc) return;
    
    data.steps[index] = { number: number || s.number, title, desc };
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Этап обновлён!');
}

function deleteStep(index) {
    if (!confirm('Удалить этап?')) return;
    data.steps.splice(index, 1);
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('🗑️ Этап удалён');
}

function addFaq() {
    const question = prompt('Вопрос:');
    if (!question) return;
    const answer = prompt('Ответ:');
    if (!answer) return;
    
    data.faq.push({ question, answer });
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Вопрос добавлен!');
}

function editFaq(index) {
    const f = data.faq[index];
    const question = prompt('Вопрос:', f.question);
    if (!question) return;
    const answer = prompt('Ответ:', f.answer);
    if (!answer) return;
    
    data.faq[index] = { question, answer };
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Вопрос обновлён!');
}

function deleteFaq(index) {
    if (!confirm('Удалить вопрос?')) return;
    data.faq.splice(index, 1);
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('🗑️ Вопрос удалён');
}

function addSocial() {
    const icon = prompt('Иконка (эмодзи):', '📱');
    const name = prompt('Название (Telegram/Instagram/Email):');
    if (!name) return;
    const link = prompt('Ссылка:', '#');
    
    data.social.push({ icon: icon || '📱', name, link });
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Контакт добавлен!');
}

function editSocial(index) {
    const s = data.social[index];
    const icon = prompt('Иконка:', s.icon);
    const name = prompt('Название:', s.name);
    if (!name) return;
    const link = prompt('Ссылка:', s.link);
    
    data.social[index] = { icon: icon || '📱', name, link };
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('✅ Контакт обновлён!');
}

function deleteSocial(index) {
    if (!confirm('Удалить контакт?')) return;
    data.social.splice(index, 1);
    saveData(data);
    renderSite();
    renderAdmin();
    showToast('🗑️ Контакт удалён');
}

// ===== ЭКСПОРТ/ИМПОРТ =====
function exportData() {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `webmaster_data_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤 Данные экспортированы!');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            data = imported;
            saveData(data);
            renderSite();
            renderAdmin();
            showToast('📥 Данные импортированы!');
        } catch (err) {
            alert('❌ Ошибка импорта!');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// ===== TOAST =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(20px);
        padding: 12px 24px;
        border-radius: 30px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        border: 0.5px solid rgba(255,255,255,0.04);
        animation: toastIn 0.4s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        toast.style.transition = '0.4s';
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ===== ФОРМА =====
function sendForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn');
    const originalText = btn.textContent;
    btn.textContent = '✅ Отправлено!';
    btn.style.background = '#34c759';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}

// ===== МОБИЛЬНОЕ МЕНЮ =====
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// ===== ЗАКРЫТИЕ АДМИНКИ ПО ESC =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAdmin();
    }
});

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', () => {
    renderSite();
    
    // Открываем первый FAQ автоматически
    setTimeout(() => {
        const firstFaq = document.querySelector('.faq-question');
        if (firstFaq) {
            firstFaq.click();
        }
    }, 800);
});
