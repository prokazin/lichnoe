const ADMIN_PASSWORD = 'webmaster2026';
let data = null;

// ===== ЗАГРУЗКА ДАННЫХ =====
function loadData() {
    const stored = localStorage.getItem('webmaster_data');
    if (stored) {
        try {
            data = JSON.parse(stored);
            return data;
        } catch (e) {}
    }
    return null;
}

function saveData() {
    localStorage.setItem('webmaster_data', JSON.stringify(data));
    // Синхронизация с сайтом
    window.dispatchEvent(new StorageEvent('storage', {
        key: 'webmaster_data',
        newValue: JSON.stringify(data)
    }));
}

function getDefaultData() {
    return {
        // Дизайн
        design: {
            bg: '#0a0a0f',
            text: '#ffffff',
            accent: '#007aff',
            card: 'rgba(255,255,255,0.03)',
            secondary: '#b0b0b8',
            gray: '#6a6a72',
            fontSize: '16px',
            borderRadius: '24px',
            bgOpacity: '0.75'
        },
        // Тексты
        heroDesc: 'Быстро, красиво, дёшево. Полный цикл — от идеи до запуска. Бесплатный хостинг, адаптив, админ-панель.',
        aboutText: 'Я создаю сайты на GitHub с 2025 года. Моя цель — сделать качественный продукт, который будет работать, приносить результат и радовать глаз.',
        contactsText: 'Напишите мне в Telegram или Instagram — я отвечу в течение часа.',
        footerText: 'Создание сайтов на GitHub — быстро, красиво, дёшево.',
        footerCopyright: '© 2025 WebMaster. Все права защищены.',
        // Названия секций
        labels: {
            hero: 'Создаю сайты на GitHub',
            services: 'Мои услуги',
            portfolio: 'Примеры сайтов',
            pricing: 'Выберите свой тариф',
            about: 'Почему стоит выбрать меня',
            steps: 'Этапы сотрудничества',
            faq: 'Часто задаваемые вопросы',
            contacts: 'Давайте обсудим ваш проект'
        },
        // Статистика
        stats: {
            projects: 12,
            clients: 9,
            happy: 100,
            labelProjects: 'проектов',
            labelClients: 'клиентов',
            labelHappy: 'довольных'
        },
        // Данные
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
}

// ===== ВХОД =====
function login() {
    const pass = document.getElementById('adminPassword').value;
    if (pass === ADMIN_PASSWORD) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        const d = loadData();
        if (!d) {
            data = getDefaultData();
            saveData();
        } else {
            data = d;
            // Проверяем наличие новых полей
            if (!data.design) {
                data.design = getDefaultData().design;
                saveData();
            }
            if (!data.labels) {
                data.labels = getDefaultData().labels;
                saveData();
            }
            if (!data.stats.labelProjects) {
                data.stats.labelProjects = 'проектов';
                data.stats.labelClients = 'клиентов';
                data.stats.labelHappy = 'довольных';
                saveData();
            }
        }
        fillAll();
        renderAll();
        setupTabs();
    } else {
        showToast('❌ Неверный пароль!');
    }
}

// ===== ЗАПОЛНЕНИЕ ФОРМ =====
function fillAll() {
    // Дизайн
    document.getElementById('colorBg').value = data.design.bg || '#0a0a0f';
    document.getElementById('colorText').value = data.design.text || '#ffffff';
    document.getElementById('colorAccent').value = data.design.accent || '#007aff';
    document.getElementById('colorCard').value = data.design.card || 'rgba(255,255,255,0.03)';
    document.getElementById('colorSecondary').value = data.design.secondary || '#b0b0b8';
    document.getElementById('colorGray').value = data.design.gray || '#6a6a72';
    document.getElementById('fontSize').value = data.design.fontSize || '16px';
    document.getElementById('borderRadius').value = data.design.borderRadius || '24px';
    document.getElementById('bgOpacity').value = data.design.bgOpacity || '0.75';

    // Тексты
    document.getElementById('editHeroDesc').value = data.heroDesc || '';
    document.getElementById('editAboutText').value = data.aboutText || '';
    document.getElementById('editContactsText').value = data.contactsText || '';
    document.getElementById('editFooterText').value = data.footerText || '';
    document.getElementById('editFooterCopyright').value = data.footerCopyright || '';

    // Названия секций
    const labels = data.labels || {};
    document.getElementById('editLabelServices').value = labels.services || 'Мои услуги';
    document.getElementById('editLabelPortfolio').value = labels.portfolio || 'Примеры сайтов';
    document.getElementById('editLabelPricing').value = labels.pricing || 'Выберите свой тариф';
    document.getElementById('editLabelAbout').value = labels.about || 'Почему стоит выбрать меня';
    document.getElementById('editLabelSteps').value = labels.steps || 'Этапы сотрудничества';
    document.getElementById('editLabelFaq').value = labels.faq || 'Часто задаваемые вопросы';
    document.getElementById('editLabelContacts').value = labels.contacts || 'Давайте обсудим ваш проект';
    document.getElementById('editLabelHero').value = labels.hero || 'Создаю сайты на GitHub';

    // Статистика
    document.getElementById('editStatProjects').value = data.stats.projects || 0;
    document.getElementById('editStatClients').value = data.stats.clients || 0;
    document.getElementById('editStatHappy').value = data.stats.happy || 0;
    document.getElementById('editStatLabelProjects').value = data.stats.labelProjects || 'проектов';
    document.getElementById('editStatLabelClients').value = data.stats.labelClients || 'клиентов';
    document.getElementById('editStatLabelHappy').value = data.stats.labelHappy || 'довольных';
}

// ===== РЕНДЕРИНГ СПИСКОВ =====
function renderAll() {
    renderServices();
    renderPortfolio();
    renderPricing();
    renderFeatures();
    renderSteps();
    renderFaq();
    renderSocial();
}

function renderServices() {
    const container = document.getElementById('adminServices');
    if (!container) return;
    if (data.services && data.services.length > 0) {
        container.innerHTML = data.services.map((s, i) => `
            <div class="item">
                <span>${s.icon} ${s.title} — <span class="badge">${s.price}</span></span>
                <div class="item-actions">
                    <button class="edit" onclick="editService(${i})">✎</button>
                    <button class="delete" onclick="deleteService(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<div class="empty">Нет услуг</div>';
    }
}

function renderPortfolio() {
    const container = document.getElementById('adminPortfolio');
    if (!container) return;
    if (data.portfolio && data.portfolio.length > 0) {
        container.innerHTML = data.portfolio.map((p, i) => `
            <div class="item">
                <span>${p.icon} ${p.title} ${p.tags ? p.tags.map(t => `<span class="badge">${t}</span>`).join(' ') : ''}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editPortfolio(${i})">✎</button>
                    <button class="delete" onclick="deletePortfolio(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<div class="empty">Нет проектов</div>';
    }
}

function renderPricing() {
    const container = document.getElementById('adminPricing');
    if (!container) return;
    if (data.pricing && data.pricing.length > 0) {
        container.innerHTML = data.pricing.map((p, i) => `
            <div class="item">
                <span>${p.name} — <strong>${p.price}</strong> ${p.popular ? '<span class="badge popular">🔥 Популярный</span>' : ''}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editPricing(${i})">✎</button>
                    <button class="delete" onclick="deletePricing(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<div class="empty">Нет тарифов</div>';
    }
}

function renderFeatures() {
    const container = document.getElementById('adminFeatures');
    if (!container) return;
    if (data.features && data.features.length > 0) {
        container.innerHTML = data.features.map((f, i) => `
            <div class="item">
                <span>${f.icon} ${f.title}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editFeature(${i})">✎</button>
                    <button class="delete" onclick="deleteFeature(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<div class="empty">Нет особенностей</div>';
    }
}

function renderSteps() {
    const container = document.getElementById('adminSteps');
    if (!container) return;
    if (data.steps && data.steps.length > 0) {
        container.innerHTML = data.steps.map((s, i) => `
            <div class="item">
                <span>${s.number} ${s.title}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editStep(${i})">✎</button>
                    <button class="delete" onclick="deleteStep(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<div class="empty">Нет этапов</div>';
    }
}

function renderFaq() {
    const container = document.getElementById('adminFaq');
    if (!container) return;
    if (data.faq && data.faq.length > 0) {
        container.innerHTML = data.faq.map((f, i) => `
            <div class="item">
                <span>${f.question}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editFaq(${i})">✎</button>
                    <button class="delete" onclick="deleteFaq(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<div class="empty">Нет вопросов</div>';
    }
}

function renderSocial() {
    const container = document.getElementById('adminSocial');
    if (!container) return;
    if (data.social && data.social.length > 0) {
        container.innerHTML = data.social.map((s, i) => `
            <div class="item">
                <span>${s.icon} ${s.name}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editSocial(${i})">✎</button>
                    <button class="delete" onclick="deleteSocial(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = '<div class="empty">Нет контактов</div>';
    }
}

// ===== ВКЛАДКИ =====
function setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        });
    });
}

// ===== СОХРАНЕНИЕ ДИЗАЙНА =====
function saveDesign() {
    data.design = {
        bg: document.getElementById('colorBg').value,
        text: document.getElementById('colorText').value,
        accent: document.getElementById('colorAccent').value,
        card: document.getElementById('colorCard').value,
        secondary: document.getElementById('colorSecondary').value,
        gray: document.getElementById('colorGray').value,
        fontSize: document.getElementById('fontSize').value,
        borderRadius: document.getElementById('borderRadius').value,
        bgOpacity: document.getElementById('bgOpacity').value
    };
    saveData();
    showToast('✅ Дизайн сохранён!');
    syncSite();
}

function resetDesign() {
    const def = getDefaultData().design;
    data.design = def;
    saveData();
    fillAll();
    showToast('↺ Дизайн сброшен');
    syncSite();
}

// ===== СОХРАНЕНИЕ ТЕКСТОВ =====
function saveTexts() {
    data.heroDesc = document.getElementById('editHeroDesc').value;
    data.aboutText = document.getElementById('editAboutText').value;
    data.contactsText = document.getElementById('editContactsText').value;
    data.footerText = document.getElementById('editFooterText').value;
    data.footerCopyright = document.getElementById('editFooterCopyright').value;
    saveData();
    showToast('✅ Тексты сохранены!');
    syncSite();
}

function saveLabels() {
    data.labels = {
        services: document.getElementById('editLabelServices').value,
        portfolio: document.getElementById('editLabelPortfolio').value,
        pricing: document.getElementById('editLabelPricing').value,
        about: document.getElementById('editLabelAbout').value,
        steps: document.getElementById('editLabelSteps').value,
        faq: document.getElementById('editLabelFaq').value,
        contacts: document.getElementById('editLabelContacts').value,
        hero: document.getElementById('editLabelHero').value
    };
    saveData();
    showToast('✅ Названия сохранены!');
    syncSite();
}

// ===== СОХРАНЕНИЕ СТАТИСТИКИ =====
function saveStats() {
    data.stats.projects = parseInt(document.getElementById('editStatProjects').value) || 0;
    data.stats.clients = parseInt(document.getElementById('editStatClients').value) || 0;
    data.stats.happy = parseInt(document.getElementById('editStatHappy').value) || 0;
    data.stats.labelProjects = document.getElementById('editStatLabelProjects').value || 'проектов';
    data.stats.labelClients = document.getElementById('editStatLabelClients').value || 'клиентов';
    data.stats.labelHappy = document.getElementById('editStatLabelHappy').value || 'довольных';
    saveData();
    showToast('✅ Статистика сохранена!');
    syncSite();
}

// ===== CRUD УСЛУГИ =====
function addService() {
    const icon = prompt('Иконка (эмодзи):', '🛠️');
    const title = prompt('Название услуги:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    const price = prompt('Цена (например: от 5 000 ₽):');
    if (!price) return;
    data.services.push({ icon: icon || '🛠️', title, desc, price });
    saveData();
    renderServices();
    showToast('✅ Услуга добавлена!');
    syncSite();
}

function editService(index) {
    const s = data.services[index];
    const icon = prompt('Иконка:', s.icon);
    const title = prompt('Название:', s.title);
    if (!title) return;
    const desc = prompt('Описание:', s.desc);
    if (!desc) return;
    const price = prompt('Цена:', s.price);
    if (!price) return;
    data.services[index] = { icon: icon || '🛠️', title, desc, price };
    saveData();
    renderServices();
    showToast('✅ Услуга обновлена!');
    syncSite();
}

function deleteService(index) {
    if (!confirm('Удалить услугу?')) return;
    data.services.splice(index, 1);
    saveData();
    renderServices();
    showToast('🗑️ Услуга удалена');
    syncSite();
}

// ===== CRUD ПОРТФОЛИО =====
function addPortfolio() {
    const icon = prompt('Иконка (эмодзи):', '🚀');
    const title = prompt('Название проекта:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    const tags = prompt('Теги (через запятую):', '').split(',').map(t => t.trim()).filter(Boolean);
    const link = prompt('Ссылка:', '#');
    data.portfolio.push({ icon: icon || '🚀', title, desc, tags, link });
    saveData();
    renderPortfolio();
    showToast('✅ Проект добавлен!');
    syncSite();
}

function editPortfolio(index) {
    const p = data.portfolio[index];
    const icon = prompt('Иконка:', p.icon);
    const title = prompt('Название:', p.title);
    if (!title) return;
    const desc = prompt('Описание:', p.desc);
    if (!desc) return;
    const tags = prompt('Теги (через запятую):', p.tags.join(', ')).split(',').map(t => t.trim()).filter(Boolean);
    const link = prompt('Ссылка:', p.link);
    data.portfolio[index] = { icon: icon || '🚀', title, desc, tags, link };
    saveData();
    renderPortfolio();
    showToast('✅ Проект обновлён!');
    syncSite();
}

function deletePortfolio(index) {
    if (!confirm('Удалить проект?')) return;
    data.portfolio.splice(index, 1);
    saveData();
    renderPortfolio();
    showToast('🗑️ Проект удалён');
    syncSite();
}

// ===== CRUD ТАРИФЫ =====
function addPricing() {
    const name = prompt('Название тарифа:');
    if (!name) return;
    const price = prompt('Цена:');
    if (!price) return;
    const features = prompt('Опции (через запятую):').split(',').map(f => f.trim()).filter(Boolean);
    const popular = confirm('Сделать популярным?');
    data.pricing.push({ name, price, features, popular });
    saveData();
    renderPricing();
    showToast('✅ Тариф добавлен!');
    syncSite();
}

function editPricing(index) {
    const p = data.pricing[index];
    const name = prompt('Название:', p.name);
    if (!name) return;
    const price = prompt('Цена:', p.price);
    if (!price) return;
    const features = prompt('Опции (через запятую):', p.features.join(', ')).split(',').map(f => f.trim()).filter(Boolean);
    const popular = confirm('Сделать популярным?');
    data.pricing[index] = { name, price, features, popular };
    saveData();
    renderPricing();
    showToast('✅ Тариф обновлён!');
    syncSite();
}

function deletePricing(index) {
    if (!confirm('Удалить тариф?')) return;
    data.pricing.splice(index, 1);
    saveData();
    renderPricing();
    showToast('🗑️ Тариф удалён');
    syncSite();
}

// ===== CRUD ОСОБЕННОСТИ =====
function addFeature() {
    const icon = prompt('Иконка (эмодзи):', '⚡');
    const title = prompt('Название:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    data.features.push({ icon: icon || '⚡', title, desc });
    saveData();
    renderFeatures();
    showToast('✅ Особенность добавлена!');
    syncSite();
}

function editFeature(index) {
    const f = data.features[index];
    const icon = prompt('Иконка:', f.icon);
    const title = prompt('Название:', f.title);
    if (!title) return;
    const desc = prompt('Описание:', f.desc);
    if (!desc) return;
    data.features[index] = { icon: icon || '⚡', title, desc };
    saveData();
    renderFeatures();
    showToast('✅ Особенность обновлена!');
    syncSite();
}

function deleteFeature(index) {
    if (!confirm('Удалить особенность?')) return;
    data.features.splice(index, 1);
    saveData();
    renderFeatures();
    showToast('🗑️ Особенность удалена');
    syncSite();
}

// ===== CRUD ЭТАПЫ =====
function addStep() {
    const number = prompt('Номер (01, 02, ...):');
    const title = prompt('Название:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    data.steps.push({ number: number || '0' + (data.steps.length + 1), title, desc });
    saveData();
    renderSteps();
    showToast('✅ Этап добавлен!');
    syncSite();
}

function editStep(index) {
    const s = data.steps[index];
    const number = prompt('Номер:', s.number);
    const title = prompt('Название:', s.title);
    if (!title) return;
    const desc = prompt('Описание:', s.desc);
    if (!desc) return;
    data.steps[index] = { number: number || s.number, title, desc };
    saveData();
    renderSteps();
    showToast('✅ Этап обновлён!');
    syncSite();
}

function deleteStep(index) {
    if (!confirm('Удалить этап?')) return;
    data.steps.splice(index, 1);
    saveData();
    renderSteps();
    showToast('🗑️ Этап удалён');
    syncSite();
}

// ===== CRUD FAQ =====
function addFaq() {
    const question = prompt('Вопрос:');
    if (!question) return;
    const answer = prompt('Ответ:');
    if (!answer) return;
    data.faq.push({ question, answer });
    saveData();
    renderFaq();
    showToast('✅ Вопрос добавлен!');
    syncSite();
}

function editFaq(index) {
    const f = data.faq[index];
    const question = prompt('Вопрос:', f.question);
    if (!question) return;
    const answer = prompt('Ответ:', f.answer);
    if (!answer) return;
    data.faq[index] = { question, answer };
    saveData();
    renderFaq();
    showToast('✅ Вопрос обновлён!');
    syncSite();
}

function deleteFaq(index) {
    if (!confirm('Удалить вопрос?')) return;
    data.faq.splice(index, 1);
    saveData();
    renderFaq();
    showToast('🗑️ Вопрос удалён');
    syncSite();
}

// ===== CRUD СОЦСЕТИ =====
function addSocial() {
    const icon = prompt('Иконка (эмодзи):', '📱');
    const name = prompt('Название (Telegram/Instagram/Email):');
    if (!name) return;
    const link = prompt('Ссылка:', '#');
    data.social.push({ icon: icon || '📱', name, link });
    saveData();
    renderSocial();
    showToast('✅ Контакт добавлен!');
    syncSite();
}

function editSocial(index) {
    const s = data.social[index];
    const icon = prompt('Иконка:', s.icon);
    const name = prompt('Название:', s.name);
    if (!name) return;
    const link = prompt('Ссылка:', s.link);
    data.social[index] = { icon: icon || '📱', name, link };
    saveData();
    renderSocial();
    showToast('✅ Контакт обновлён!');
    syncSite();
}

function deleteSocial(index) {
    if (!confirm('Удалить контакт?')) return;
    data.social.splice(index, 1);
    saveData();
    renderSocial();
    showToast('🗑️ Контакт удалён');
    syncSite();
}

// ===== ЭКСПОРТ/ИМПОРТ =====
function exportData() {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `webmaster_backup_${new Date().toISOString().slice(0,10)}.json`;
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
            data = JSON.parse(e.target.result);
            saveData();
            fillAll();
            renderAll();
            showToast('📥 Данные импортированы!');
            syncSite();
        } catch (err) {
            alert('❌ Ошибка импорта!');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetAll() {
    if (!confirm('⚠️ Удалить все данные и вернуть настройки по умолчанию?')) return;
    if (!confirm('Точно?')) return;
    data = getDefaultData();
    saveData();
    fillAll();
    renderAll();
    showToast('↺ Все данные сброшены!');
    syncSite();
}

// ===== СИНХРОНИЗАЦИЯ =====
function syncSite() {
    saveData();
    showToast('🔄 Сайт синхронизирован!');
    // Отправляем событие для обновления сайта
    window.dispatchEvent(new StorageEvent('storage', {
        key: 'webmaster_data',
        newValue: JSON.stringify(data)
    }));
}

// ===== TOAST =====
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.4s';
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, есть ли уже данные
    const stored = localStorage.getItem('webmaster_data');
    if (!stored) {
        data = getDefaultData();
        saveData();
    }
});
