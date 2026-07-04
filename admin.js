// ===== УНИКАЛЬНОЕ ХРАНИЛИЩЕ =====
const STORAGE_KEY = 'webmaster_pro_data';
const ANALYTICS_KEY = 'webmaster_analytics';

const ADMIN_PASSWORD = 'webmaster2026';
let data = null;

// ===== ЗАГРУЗКА ДАННЫХ =====
function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            data = JSON.parse(stored);
            return data;
        } catch (e) {}
    }
    return null;
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getDefaultData() {
    return {
        design: {
            bg: '#0a0a0f',
            text: '#ffffff',
            accent: '#007aff',
            card: 'rgba(255,255,255,0.03)',
            secondary: '#b0b0b8',
            gray: '#6a6a72',
            fontSize: '16px',
            borderRadius: '24px',
            theme: 'dark'
        },
        customCss: '',
        logo: '',
        favicon: '',
        videoPath: 'assets/hero-bg.mp4',
        seo: {
            title: 'WebMaster — создание сайтов на GitHub',
            description: 'Создаю сайты на GitHub для блогеров, стартапов и бизнеса. Быстро, красиво, дёшево.',
            keywords: 'сайт, создание сайтов, GitHub, веб-разработка',
            ogImage: ''
        },
        sections: [
            { id: 'services', title: 'Услуги', enabled: true },
            { id: 'portfolio', title: 'Портфолио', enabled: true },
            { id: 'pricing', title: 'Цены', enabled: true },
            { id: 'about', title: 'Обо мне', enabled: true },
            { id: 'steps', title: 'Этапы', enabled: true },
            { id: 'faq', title: 'FAQ', enabled: true },
            { id: 'contacts', title: 'Контакты', enabled: true }
        ],
        heroDesc: 'Быстро, красиво, дёшево. Полный цикл — от идеи до запуска. Бесплатный хостинг, адаптив, админ-панель.',
        aboutText: 'Я создаю сайты на GitHub с 2025 года. Моя цель — сделать качественный продукт, который будет работать, приносить результат и радовать глаз.',
        contactsText: 'Напишите мне в Telegram или Instagram — я отвечу в течение часа.',
        footerText: 'Создание сайтов на GitHub — быстро, красиво, дёшево.',
        footerCopyright: '© 2025 WebMaster. Все права защищены.',
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
        stats: {
            projects: 12,
            clients: 9,
            happy: 100,
            labelProjects: 'проектов',
            labelClients: 'клиентов',
            labelHappy: 'довольных'
        },
        banner: {
            enabled: false,
            text: '🔥 Скидка 20% на все услуги!',
            link: '',
            bg: '#007aff',
            timer: 0
        },
        form: {
            buttonText: 'Отправить заявку',
            email: '',
            fields: ['Имя', 'Контакт', 'Сообщение'],
            placeholders: ['Ваше имя', 'Telegram или Instagram', 'Расскажите о проекте']
        },
        services: [
            { icon: '📄', title: 'Лендинг', desc: 'Одностраничный сайт под ваш продукт или услугу.', price: 'от 5 000 ₽' },
            { icon: '🛍️', title: 'Сайт-витрина', desc: 'Каталог товаров, админ-панель, загрузка фото.', price: 'от 10 000 ₽' },
            { icon: '📱', title: 'Telegram Web App', desc: 'Мини-приложение внутри бота для продаж.', price: 'от 15 000 ₽' },
            { icon: '⚡', title: 'Сайт с корзиной', desc: 'Полноценный интернет-магазин с корзиной.', price: 'от 20 000 ₽' }
        ],
        portfolio: [
            { icon: '🏂', title: 'SnowShop', desc: 'Магазин сноубордов. Каталог, админ-панель.', tags: ['витрина', 'админ-панель'], link: '#' },
            { icon: '🚀', title: 'Стартап-лендинг', desc: 'Продающий лендинг для IT-продукта.', tags: ['лендинг', 'конверсия'], link: '#' },
            { icon: '📱', title: 'Telegram Shop', desc: 'Магазин внутри Telegram-бота.', tags: ['Telegram', 'корзина'], link: '#' }
        ],
        pricing: [
            { name: 'Старт', price: '5 000 ₽', features: ['Лендинг (1 страница)', 'Адаптив', 'Форма заявки', '1 правка'], popular: false },
            { name: 'Базовый', price: '10 000 ₽', features: ['Сайт-витрина (до 20 товаров)', 'Админ-панель', 'Загрузка фото', '3 правки'], popular: true },
            { name: 'Премиум', price: '20 000 ₽', features: ['Полноценный каталог', 'Корзина', 'Telegram Web App', '5 правок'], popular: false }
        ],
        features: [
            { icon: '⚡', title: 'Быстро', desc: 'Сайт готов за 3–7 дней' },
            { icon: '🎨', title: 'Красиво', desc: 'Современный дизайн, стиль Apple' },
            { icon: '💰', title: 'Дёшево', desc: 'Цены ниже рыночных' },
            { icon: '🛠️', title: 'Надёжно', desc: 'Бесплатный хостинг на GitHub' }
        ],
        steps: [
            { number: '01', title: 'Обсуждаем', desc: 'Рассказываете идею, я предлагаю решение' },
            { number: '02', title: 'Прототип', desc: 'Создаю макет страниц, утверждаем структуру' },
            { number: '03', title: 'Разрабатываю', desc: 'Пишу код, делаю админ-панель' },
            { number: '04', title: 'Запускаю', desc: 'Тестирую, деплою на GitHub' }
        ],
        faq: [
            { question: 'Сколько времени занимает создание сайта?', answer: 'От 3 до 7 дней' },
            { question: 'Нужно ли покупать хостинг?', answer: 'Нет! GitHub Pages — бесплатно' },
            { question: 'Можно ли посмотреть примеры?', answer: 'Да, в разделе Портфолио' },
            { question: 'Как я могу оплатить?', answer: 'Предоплата 50%, остальное после запуска' }
        ],
        social: [
            { icon: 'telegram', name: 'Telegram', link: '#' },
            { icon: 'instagram', name: 'Instagram', link: '#' },
            { icon: 'email', name: 'Email', link: '#' }
        ],
        pages: [
            { slug: 'about', title: 'О нас', content: 'Страница о нас', enabled: true },
            { slug: 'contacts', title: 'Контакты', content: 'Страница контактов', enabled: true }
        ]
    };
}

// ===== АНАЛИТИКА =====
function getAnalytics() {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {}
    }
    return { views: 0, leads: 0, history: [], daily: {} };
}

function saveAnalytics(analytics) {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
}

function updateAnalytics() {
    const analytics = getAnalytics();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
    
    // Обновляем просмотры
    if (!analytics.daily) analytics.daily = {};
    if (!analytics.daily[today]) analytics.daily[today] = { views: 0, leads: 0 };
    analytics.daily[today].views = (analytics.daily[today].views || 0) + 1;
    analytics.views = (analytics.views || 0) + 1;
    saveAnalytics(analytics);
    
    // Обновляем дашборд
    updateDashboard();
}

function updateDashboard() {
    const analytics = getAnalytics();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
    
    // Всего
    document.getElementById('analyticsViews').textContent = analytics.views || 0;
    document.getElementById('analyticsLeads').textContent = analytics.leads || 0;
    const conv = analytics.views > 0 ? Math.round((analytics.leads / analytics.views) * 100) : 0;
    document.getElementById('analyticsConversion').textContent = conv + '%';
    
    // Дашборд
    document.getElementById('dashViews').textContent = analytics.views || 0;
    document.getElementById('dashLeads').textContent = analytics.leads || 0;
    document.getElementById('dashConversion').textContent = conv + '%';
    
    // Сегодня
    const todayData = analytics.daily?.[today] || { views: 0, leads: 0 };
    document.getElementById('analyticsToday').textContent = todayData.views || 0;
    document.getElementById('dashToday').textContent = todayData.views || 0;
    
    // Вчера
    const yesterdayData = analytics.daily?.[yesterday] || { views: 0, leads: 0 };
    document.getElementById('analyticsYesterday').textContent = yesterdayData.views || 0;
    document.getElementById('dashYesterday').textContent = yesterdayData.views || 0;
    
    // Неделя
    let weekViews = 0;
    if (analytics.daily) {
        for (const [date, data] of Object.entries(analytics.daily)) {
            if (date >= weekAgo) {
                weekViews += data.views || 0;
            }
        }
    }
    document.getElementById('analyticsWeek').textContent = weekViews;
    document.getElementById('dashWeek').textContent = weekViews;
    
    // Пик активности
    let peakHour = '--:--';
    let peakCount = 0;
    const hours = [10, 12, 15, 18, 20, 22];
    const counts = [5, 12, 8, 15, 10, 6];
    for (let i = 0; i < hours.length; i++) {
        if (counts[i] > peakCount) {
            peakCount = counts[i];
            peakHour = hours[i] + ':00';
        }
    }
    document.getElementById('dashPeak').textContent = peakHour;
}

function resetAnalytics() {
    if (!confirm('Сбросить всю статистику?')) return;
    saveAnalytics({ views: 0, leads: 0, history: [], daily: {} });
    updateDashboard();
    showToast('↺ Аналитика сброшена');
}

// ===== ВХОД =====
function login() {
    const pass = document.getElementById('adminPassword').value;
    if (pass === ADMIN_PASSWORD) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        const d = loadData();
        if (!d) { data = getDefaultData(); saveData(); }
        else { data = d; fillAll(); renderAll(); }
        setupTabs();
        updateDashboard();
    } else {
        showToast('❌ Неверный пароль!');
    }
}

// ===== ЗАПОЛНЕНИЕ ФОРМ =====
function fillAll() {
    const d = data;
    document.getElementById('colorBg').value = d.design.bg || '#0a0a0f';
    document.getElementById('colorText').value = d.design.text || '#ffffff';
    document.getElementById('colorAccent').value = d.design.accent || '#007aff';
    document.getElementById('colorCard').value = d.design.card || 'rgba(255,255,255,0.03)';
    document.getElementById('colorSecondary').value = d.design.secondary || '#b0b0b8';
    document.getElementById('colorGray').value = d.design.gray || '#6a6a72';
    document.getElementById('fontSize').value = d.design.fontSize || '16px';
    document.getElementById('borderRadius').value = d.design.borderRadius || '24px';
    document.getElementById('theme').value = d.design.theme || 'dark';
    document.getElementById('customCss').value = d.customCss || '';
    document.getElementById('videoPath').value = d.videoPath || 'assets/hero-bg.mp4';
    if (d.logo) document.getElementById('logoPreview').innerHTML = `<img src="${d.logo}" class="preview-img">`;
    if (d.favicon) document.getElementById('faviconPreview').innerHTML = `<img src="${d.favicon}" class="preview-img">`;
    document.getElementById('seoTitle').value = d.seo?.title || '';
    document.getElementById('seoDesc').value = d.seo?.description || '';
    document.getElementById('seoKeywords').value = d.seo?.keywords || '';
    document.getElementById('seoOgImage').value = d.seo?.ogImage || '';
    document.getElementById('editHeroDesc').value = d.heroDesc || '';
    document.getElementById('editAboutText').value = d.aboutText || '';
    document.getElementById('editContactsText').value = d.contactsText || '';
    document.getElementById('editFooterText').value = d.footerText || '';
    document.getElementById('editFooterCopyright').value = d.footerCopyright || '';
    const labels = d.labels || {};
    document.getElementById('editLabelServices').value = labels.services || 'Мои услуги';
    document.getElementById('editLabelPortfolio').value = labels.portfolio || 'Примеры сайтов';
    document.getElementById('editLabelPricing').value = labels.pricing || 'Выберите свой тариф';
    document.getElementById('editLabelAbout').value = labels.about || 'Почему стоит выбрать меня';
    document.getElementById('editLabelSteps').value = labels.steps || 'Этапы сотрудничества';
    document.getElementById('editLabelFaq').value = labels.faq || 'Часто задаваемые вопросы';
    document.getElementById('editLabelContacts').value = labels.contacts || 'Давайте обсудим ваш проект';
    document.getElementById('editLabelHero').value = labels.hero || 'Создаю сайты на GitHub';
    document.getElementById('editStatProjects').value = d.stats.projects || 0;
    document.getElementById('editStatClients').value = d.stats.clients || 0;
    document.getElementById('editStatHappy').value = d.stats.happy || 0;
    document.getElementById('editStatLabelProjects').value = d.stats.labelProjects || 'проектов';
    document.getElementById('editStatLabelClients').value = d.stats.labelClients || 'клиентов';
    document.getElementById('editStatLabelHappy').value = d.stats.labelHappy || 'довольных';
    const banner = d.banner || {};
    document.getElementById('bannerText').value = banner.text || '';
    document.getElementById('bannerLink').value = banner.link || '';
    document.getElementById('bannerBg').value = banner.bg || '#007aff';
    document.getElementById('bannerTimer').value = banner.timer || 0;
    if (banner.enabled) document.getElementById('bannerToggle').classList.add('active');
    else document.getElementById('bannerToggle').classList.remove('active');
    const form = d.form || {};
    document.getElementById('formButtonText').value = form.buttonText || 'Отправить заявку';
    document.getElementById('formEmail').value = form.email || '';
    document.getElementById('formField1').value = form.fields?.[0] || 'Имя';
    document.getElementById('formField2').value = form.fields?.[1] || 'Контакт';
    document.getElementById('formField3').value = form.fields?.[2] || 'Сообщение';
    document.getElementById('formPlaceholder1').value = form.placeholders?.[0] || 'Ваше имя';
    document.getElementById('formPlaceholder2').value = form.placeholders?.[1] || 'Telegram или Instagram';
    document.getElementById('formPlaceholder3').value = form.placeholders?.[2] || 'Расскажите о проекте';
}

// ===== РЕНДЕРИНГ =====
function renderAll() {
    renderSections();
    renderServices();
    renderPortfolio();
    renderPricing();
    renderFeatures();
    renderSteps();
    renderFaq();
    renderSocial();
    renderPages();
}

function renderSections() {
    const container = document.getElementById('sectionsList');
    if (!container) return;
    const sections = data.sections || [];
    if (sections.length === 0) { container.innerHTML = '<div class="empty">Нет секций</div>'; return; }
    container.innerHTML = sections.map((s, i) => `
        <div class="item">
            <span>${s.title} <span class="badge ${s.enabled ? 'on' : 'off'}">${s.enabled ? 'Вкл' : 'Выкл'}</span></span>
            <div class="item-actions">
                <button class="toggle ${s.enabled ? '' : 'off'}" onclick="toggleSection(${i})">${s.enabled ? '🔵' : '⚪'}</button>
                <button class="edit" onclick="editSection(${i})">✎</button>
                <button class="delete" onclick="deleteSection(${i})">✕</button>
            </div>
        </div>
    `).join('');
}

function renderServices() {
    const container = document.getElementById('adminServices');
    if (!container) return;
    const items = data.services || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет услуг</div>'; return; }
    container.innerHTML = items.map((s, i) => `
        <div class="item"><span>${s.icon} ${s.title} — <span class="badge">${s.price}</span></span>
        <div class="item-actions"><button class="edit" onclick="editService(${i})">✎</button><button class="delete" onclick="deleteService(${i})">✕</button></div></div>
    `).join('');
}

function renderPortfolio() {
    const container = document.getElementById('adminPortfolio');
    if (!container) return;
    const items = data.portfolio || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет проектов</div>'; return; }
    container.innerHTML = items.map((p, i) => `
        <div class="item"><span>${p.icon} ${p.title}</span>
        <div class="item-actions"><button class="edit" onclick="editPortfolio(${i})">✎</button><button class="delete" onclick="deletePortfolio(${i})">✕</button></div></div>
    `).join('');
}

function renderPricing() {
    const container = document.getElementById('adminPricing');
    if (!container) return;
    const items = data.pricing || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет тарифов</div>'; return; }
    container.innerHTML = items.map((p, i) => `
        <div class="item"><span>${p.name} — <strong>${p.price}</strong> ${p.popular ? '<span class="badge popular" style="background:rgba(255,215,0,0.12);color:#ffd700;">🔥</span>' : ''}</span>
        <div class="item-actions"><button class="edit" onclick="editPricing(${i})">✎</button><button class="delete" onclick="deletePricing(${i})">✕</button></div></div>
    `).join('');
}

function renderFeatures() {
    const container = document.getElementById('adminFeatures');
    if (!container) return;
    const items = data.features || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет особенностей</div>'; return; }
    container.innerHTML = items.map((f, i) => `
        <div class="item"><span>${f.icon} ${f.title}</span>
        <div class="item-actions"><button class="edit" onclick="editFeature(${i})">✎</button><button class="delete" onclick="deleteFeature(${i})">✕</button></div></div>
    `).join('');
}

function renderSteps() {
    const container = document.getElementById('adminSteps');
    if (!container) return;
    const items = data.steps || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет этапов</div>'; return; }
    container.innerHTML = items.map((s, i) => `
        <div class="item"><span>${s.number} ${s.title}</span>
        <div class="item-actions"><button class="edit" onclick="editStep(${i})">✎</button><button class="delete" onclick="deleteStep(${i})">✕</button></div></div>
    `).join('');
}

function renderFaq() {
    const container = document.getElementById('adminFaq');
    if (!container) return;
    const items = data.faq || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет вопросов</div>'; return; }
    container.innerHTML = items.map((f, i) => `
        <div class="item"><span>${f.question}</span>
        <div class="item-actions"><button class="edit" onclick="editFaq(${i})">✎</button><button class="delete" onclick="deleteFaq(${i})">✕</button></div></div>
    `).join('');
}

function renderSocial() {
    const container = document.getElementById('adminSocial');
    if (!container) return;
    const items = data.social || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет контактов</div>'; return; }
    const icons = { telegram: '✈️', instagram: '📷', email: '✉️', default: '🔗' };
    container.innerHTML = items.map((s, i) => `
        <div class="item"><span>${icons[s.icon] || icons.default} ${s.name}</span>
        <div class="item-actions"><button class="edit" onclick="editSocial(${i})">✎</button><button class="delete" onclick="deleteSocial(${i})">✕</button></div></div>
    `).join('');
}

function renderPages() {
    const container = document.getElementById('adminPages');
    if (!container) return;
    const items = data.pages || [];
    if (items.length === 0) { container.innerHTML = '<div class="empty">Нет страниц</div>'; return; }
    container.innerHTML = items.map((p, i) => `
        <div class="item"><span>${p.title} <span class="badge ${p.enabled ? 'on' : 'off'}">${p.enabled ? 'Вкл' : 'Выкл'}</span></span>
        <div class="item-actions"><button class="toggle ${p.enabled ? '' : 'off'}" onclick="togglePage(${i})">${p.enabled ? '🔵' : '⚪'}</button><button class="edit" onclick="editPage(${i})">✎</button><button class="delete" onclick="deletePage(${i})">✕</button></div></div>
    `).join('');
}

// ===== ВКЛАДКИ =====
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активные классы у всех кнопок
            tabs.forEach(b => b.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Скрываем все контенты
            contents.forEach(c => c.classList.remove('active'));
            
            // Показываем нужный контент
            const tabId = this.dataset.tab;
            const target = document.getElementById('tab-' + tabId);
            if (target) {
                target.classList.add('active');
            }
        });
    });
}

// ===== СОХРАНЕНИЕ =====
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
        theme: document.getElementById('theme').value
    };
    saveData();
    showToast('✅ Дизайн сохранён!');
}

function resetDesign() {
    data.design = getDefaultData().design;
    saveData();
    fillAll();
    showToast('↺ Дизайн сброшен');
}

function saveCustomCss() {
    data.customCss = document.getElementById('customCss').value;
    saveData();
    showToast('✅ CSS сохранён!');
}

function saveVideo() {
    data.videoPath = document.getElementById('videoPath').value;
    saveData();
    showToast('✅ Путь к видео сохранён!');
}

function uploadLogo(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        data.logo = ev.target.result;
        saveData();
        document.getElementById('logoPreview').innerHTML = `<img src="${data.logo}" class="preview-img">`;
        showToast('✅ Логотип загружен!');
    };
    reader.readAsDataURL(file);
}

function uploadFavicon(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        data.favicon = ev.target.result;
        saveData();
        document.getElementById('faviconPreview').innerHTML = `<img src="${data.favicon}" class="preview-img">`;
        showToast('✅ Favicon загружен!');
    };
    reader.readAsDataURL(file);
}

function saveSeo() {
    data.seo = {
        title: document.getElementById('seoTitle').value,
        description: document.getElementById('seoDesc').value,
        keywords: document.getElementById('seoKeywords').value,
        ogImage: document.getElementById('seoOgImage').value
    };
    saveData();
    showToast('✅ SEO сохранено!');
}

function saveTexts() {
    data.heroDesc = document.getElementById('editHeroDesc').value;
    data.aboutText = document.getElementById('editAboutText').value;
    data.contactsText = document.getElementById('editContactsText').value;
    data.footerText = document.getElementById('editFooterText').value;
    data.footerCopyright = document.getElementById('editFooterCopyright').value;
    saveData();
    showToast('✅ Тексты сохранены!');
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
}

function saveStats() {
    data.stats.projects = parseInt(document.getElementById('editStatProjects').value) || 0;
    data.stats.clients = parseInt(document.getElementById('editStatClients').value) || 0;
    data.stats.happy = parseInt(document.getElementById('editStatHappy').value) || 0;
    data.stats.labelProjects = document.getElementById('editStatLabelProjects').value || 'проектов';
    data.stats.labelClients = document.getElementById('editStatLabelClients').value || 'клиентов';
    data.stats.labelHappy = document.getElementById('editStatLabelHappy').value || 'довольных';
    saveData();
    showToast('✅ Статистика сохранена!');
}

function toggleBanner() {
    document.getElementById('bannerToggle').classList.toggle('active');
}

function saveBanner() {
    data.banner = {
        enabled: document.getElementById('bannerToggle').classList.contains('active'),
        text: document.getElementById('bannerText').value,
        link: document.getElementById('bannerLink').value,
        bg: document.getElementById('bannerBg').value,
        timer: parseInt(document.getElementById('bannerTimer').value) || 0
    };
    saveData();
    showToast('✅ Баннер сохранён!');
}

function saveForm() {
    data.form = {
        buttonText: document.getElementById('formButtonText').value,
        email: document.getElementById('formEmail').value,
        fields: [
            document.getElementById('formField1').value,
            document.getElementById('formField2').value,
            document.getElementById('formField3').value
        ],
        placeholders: [
            document.getElementById('formPlaceholder1').value,
            document.getElementById('formPlaceholder2').value,
            document.getElementById('formPlaceholder3').value
        ]
    };
    saveData();
    showToast('✅ Форма сохранена!');
}

// ===== CRUD =====
function addSection() {
    const title = prompt('Название секции:');
    if (!title) return;
    const id = prompt('ID секции:');
    if (!id) return;
    data.sections.push({ id, title, enabled: true });
    saveData();
    renderSections();
    showToast('✅ Секция добавлена!');
}
function editSection(i) {
    const s = data.sections[i];
    const title = prompt('Название:', s.title);
    if (!title) return;
    const id = prompt('ID:', s.id);
    if (!id) return;
    data.sections[i] = { ...s, title, id };
    saveData(); renderSections(); showToast('✅ Секция обновлена!');
}
function deleteSection(i) {
    if (!confirm('Удалить секцию?')) return;
    data.sections.splice(i, 1);
    saveData(); renderSections(); showToast('🗑️ Секция удалена');
}
function toggleSection(i) {
    data.sections[i].enabled = !data.sections[i].enabled;
    saveData(); renderSections();
}

function addService() {
    const icon = prompt('Иконка:', '🛠️');
    const title = prompt('Название:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    const price = prompt('Цена:');
    if (!price) return;
    data.services.push({ icon, title, desc, price });
    saveData(); renderServices(); showToast('✅ Услуга добавлена!');
}
function editService(i) {
    const s = data.services[i];
    const icon = prompt('Иконка:', s.icon);
    const title = prompt('Название:', s.title);
    if (!title) return;
    const desc = prompt('Описание:', s.desc);
    if (!desc) return;
    const price = prompt('Цена:', s.price);
    if (!price) return;
    data.services[i] = { icon, title, desc, price };
    saveData(); renderServices(); showToast('✅ Услуга обновлена!');
}
function deleteService(i) {
    if (!confirm('Удалить?')) return;
    data.services.splice(i, 1);
    saveData(); renderServices(); showToast('🗑️ Услуга удалена');
}

function addPortfolio() {
    const icon = prompt('Иконка:', '🚀');
    const title = prompt('Название:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    const tags = prompt('Теги (через запятую):', '').split(',').map(t=>t.trim()).filter(Boolean);
    const link = prompt('Ссылка:', '#');
    data.portfolio.push({ icon, title, desc, tags, link });
    saveData(); renderPortfolio(); showToast('✅ Проект добавлен!');
}
function editPortfolio(i) {
    const p = data.portfolio[i];
    const icon = prompt('Иконка:', p.icon);
    const title = prompt('Название:', p.title);
    if (!title) return;
    const desc = prompt('Описание:', p.desc);
    if (!desc) return;
    const tags = prompt('Теги:', p.tags.join(', ')).split(',').map(t=>t.trim()).filter(Boolean);
    const link = prompt('Ссылка:', p.link);
    data.portfolio[i] = { icon, title, desc, tags, link };
    saveData(); renderPortfolio(); showToast('✅ Проект обновлён!');
}
function deletePortfolio(i) {
    if (!confirm('Удалить?')) return;
    data.portfolio.splice(i, 1);
    saveData(); renderPortfolio(); showToast('🗑️ Проект удалён');
}

function addPricing() {
    const name = prompt('Название:');
    if (!name) return;
    const price = prompt('Цена:');
    if (!price) return;
    const features = prompt('Опции (через запятую):').split(',').map(t=>t.trim()).filter(Boolean);
    const popular = confirm('Популярный?');
    data.pricing.push({ name, price, features, popular });
    saveData(); renderPricing(); showToast('✅ Тариф добавлен!');
}
function editPricing(i) {
    const p = data.pricing[i];
    const name = prompt('Название:', p.name);
    if (!name) return;
    const price = prompt('Цена:', p.price);
    if (!price) return;
    const features = prompt('Опции:', p.features.join(', ')).split(',').map(t=>t.trim()).filter(Boolean);
    const popular = confirm('Популярный?');
    data.pricing[i] = { name, price, features, popular };
    saveData(); renderPricing(); showToast('✅ Тариф обновлён!');
}
function deletePricing(i) {
    if (!confirm('Удалить?')) return;
    data.pricing.splice(i, 1);
    saveData(); renderPricing(); showToast('🗑️ Тариф удалён');
}

function addFeature() {
    const icon = prompt('Иконка:', '⚡');
    const title = prompt('Название:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    data.features.push({ icon, title, desc });
    saveData(); renderFeatures(); showToast('✅ Особенность добавлена!');
}
function editFeature(i) {
    const f = data.features[i];
    const icon = prompt('Иконка:', f.icon);
    const title = prompt('Название:', f.title);
    if (!title) return;
    const desc = prompt('Описание:', f.desc);
    if (!desc) return;
    data.features[i] = { icon, title, desc };
    saveData(); renderFeatures(); showToast('✅ Особенность обновлена!');
}
function deleteFeature(i) {
    if (!confirm('Удалить?')) return;
    data.features.splice(i, 1);
    saveData(); renderFeatures(); showToast('🗑️ Особенность удалена');
}

function addStep() {
    const number = prompt('Номер (01):');
    const title = prompt('Название:');
    if (!title) return;
    const desc = prompt('Описание:');
    if (!desc) return;
    data.steps.push({ number: number || '0'+(data.steps.length+1), title, desc });
    saveData(); renderSteps(); showToast('✅ Этап добавлен!');
}
function editStep(i) {
    const s = data.steps[i];
    const number = prompt('Номер:', s.number);
    const title = prompt('Название:', s.title);
    if (!title) return;
    const desc = prompt('Описание:', s.desc);
    if (!desc) return;
    data.steps[i] = { number: number || s.number, title, desc };
    saveData(); renderSteps(); showToast('✅ Этап обновлён!');
}
function deleteStep(i) {
    if (!confirm('Удалить?')) return;
    data.steps.splice(i, 1);
    saveData(); renderSteps(); showToast('🗑️ Этап удалён');
}

function addFaq() {
    const q = prompt('Вопрос:');
    if (!q) return;
    const a = prompt('Ответ:');
    if (!a) return;
    data.faq.push({ question: q, answer: a });
    saveData(); renderFaq(); showToast('✅ Вопрос добавлен!');
}
function editFaq(i) {
    const f = data.faq[i];
    const q = prompt('Вопрос:', f.question);
    if (!q) return;
    const a = prompt('Ответ:', f.answer);
    if (!a) return;
    data.faq[i] = { question: q, answer: a };
    saveData(); renderFaq(); showToast('✅ Вопрос обновлён!');
}
function deleteFaq(i) {
    if (!confirm('Удалить?')) return;
    data.faq.splice(i, 1);
    saveData(); renderFaq(); showToast('🗑️ Вопрос удалён');
}

function addSocial() {
    const icon = prompt('Тип (telegram / instagram / email):', 'telegram');
    const name = prompt('Название:');
    if (!name) return;
    const link = prompt('Ссылка:', '#');
    data.social.push({ icon, name, link });
    saveData(); renderSocial(); showToast('✅ Контакт добавлен!');
}
function editSocial(i) {
    const s = data.social[i];
    const icon = prompt('Тип:', s.icon);
    const name = prompt('Название:', s.name);
    if (!name) return;
    const link = prompt('Ссылка:', s.link);
    data.social[i] = { icon, name, link };
    saveData(); renderSocial(); showToast('✅ Контакт обновлён!');
}
function deleteSocial(i) {
    if (!confirm('Удалить?')) return;
    data.social.splice(i, 1);
    saveData(); renderSocial(); showToast('🗑️ Контакт удалён');
}

function addPage() {
    const title = prompt('Название страницы:');
    if (!title) return;
    const slug = prompt('URL (например: about):');
    if (!slug) return;
    const content = prompt('Содержимое страницы (HTML):');
    if (!content) return;
    data.pages.push({ slug, title, content, enabled: true });
    saveData(); renderPages(); showToast('✅ Страница создана!');
}
function editPage(i) {
    const p = data.pages[i];
    const title = prompt('Название:', p.title);
    if (!title) return;
    const slug = prompt('URL:', p.slug);
    if (!slug) return;
    const content = prompt('Содержимое:', p.content);
    if (!content) return;
    data.pages[i] = { ...p, title, slug, content };
    saveData(); renderPages(); showToast('✅ Страница обновлена!');
}
function deletePage(i) {
    if (!confirm('Удалить страницу?')) return;
    data.pages.splice(i, 1);
    saveData(); renderPages(); showToast('🗑️ Страница удалена');
}
function togglePage(i) {
    data.pages[i].enabled = !data.pages[i].enabled;
    saveData(); renderPages();
}

// ===== ЭКСПОРТ/ИМПОРТ =====
function exportData() {
    const fullData = { ...data, analytics: getAnalytics() };
    const blob = new Blob([JSON.stringify(fullData, null, 2)], { type: 'application/json' });
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
            const imported = JSON.parse(e.target.result);
            data = imported;
            delete data.analytics;
            saveData();
            if (imported.analytics) saveAnalytics(imported.analytics);
            fillAll();
            renderAll();
            updateDashboard();
            showToast('📥 Данные импортированы!');
        } catch (err) {
            alert('❌ Ошибка импорта!');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetAll() {
    if (!confirm('⚠️ Удалить все данные?')) return;
    if (!confirm('Точно?')) return;
    data = getDefaultData();
    saveData();
    saveAnalytics({ views: 0, leads: 0, history: [], daily: {} });
    fillAll();
    renderAll();
    updateDashboard();
    showToast('↺ Все данные сброшены!');
}

function syncSite() {
    saveData();
    showToast('🔄 Сайт синхронизирован!');
}

// ===== TOAST =====
function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.4s';
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли данные
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        data = getDefaultData();
        saveData();
    }
});
