var STORAGE_KEY = 'webmaster_pro_data';
var LEADS_KEY = 'webmaster_leads';
var photoModalImages = [];
var photoModalCurrentIndex = 0;

function getDefaultData() {
    return {
        heroDesc: 'Быстро, красиво, дёшево. Полный цикл — от идеи до запуска. Бесплатный хостинг, адаптив, админ-панель.',
        aboutText: 'Я создаю сайты на GitHub с 2025 года. Моя цель — сделать качественный продукт, который будет работать, приносить результат и радовать глаз.',
        contactsText: 'Напишите мне в Telegram или Instagram — я отвечу в течение часа.',
        footerText: 'Создание сайтов на GitHub — быстро, красиво, дёшево.',
        footerCopyright: '© 2025 WebMaster. Все права защищены.',
        stats: { projects: 12, clients: 9, happy: 100 },
        services: [
            { 
                icon: '📄', 
                title: 'Лендинг', 
                desc: 'Одностраничный сайт под ваш продукт или услугу. Быстрый запуск, максимальная конверсия.', 
                price: 'от 5 000 ₽',
                features: [
                    '1 страница (лендинг)',
                    'Адаптив под все устройства',
                    'Форма заявки',
                    'Деплой на GitHub Pages',
                    'Бесплатный хостинг',
                    '1 правка бесплатно'
                ]
            },
            { 
                icon: '🛍️', 
                title: 'Сайт-витрина', 
                desc: 'Каталог товаров с админ-панелью. Идеально для небольших магазинов и портфолио.', 
                price: 'от 10 000 ₽',
                features: [
                    'До 20 товаров',
                    'Админ-панель (CRUD)',
                    'Загрузка фото с телефона',
                    'Фильтры и характеристики',
                    'Деплой на GitHub Pages',
                    '3 правки бесплатно'
                ]
            },
            { 
                icon: '📱', 
                title: 'Telegram Mini App', 
                desc: 'Сайт внутри Telegram-бота. Каталог, корзина, заявки — всё в мессенджере.', 
                price: 'от 15 000 ₽',
                features: [
                    'Полноценный сайт в Telegram',
                    'Каталог товаров/услуг',
                    'Корзина и заказы',
                    'Админ-панель',
                    'Деплой на GitHub Pages'
                ]
            },
            { 
                icon: '⚡', 
                title: 'Сайт с корзиной', 
                desc: 'Полноценный интернет-магазин с корзиной, заказами и админ-панелью для менеджеров.', 
                price: 'от 20 000 ₽',
                features: [
                    'Полноценный каталог',
                    'Корзина и оформление заказа',
                    'Админ-панель + CRM',
                    'Экспорт заказов',
                    'Деплой на GitHub Pages',
                    '5 правок бесплатно'
                ]
            }
        ],
        portfolio: [
            { icon: '🏂', title: 'SnowShop', desc: 'Магазин сноубордов. Каталог, админ-панель, фильтры, характеристики.', tags: ['витрина', 'админ-панель', 'адаптив'], link: '#', images: [], image: '' },
            { icon: '🚀', title: 'Стартап-лендинг', desc: 'Продающий лендинг для IT-продукта. Конверсия, аналитика, форма заявки.', tags: ['лендинг', 'конверсия', 'форма'], link: '#', images: [], image: '' },
            { icon: '📱', title: 'Telegram Shop', desc: 'Магазин внутри Telegram-бота. Каталог, корзина, оформление заказа.', tags: ['Telegram', 'корзина', 'бот'], link: '#', images: [], image: '' }
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
        var featuresHtml = '';
        if (s.features && s.features.length > 0) {
            featuresHtml = '<ul class="service-features">';
            for (var f = 0; f < s.features.length; f++) {
                featuresHtml += '<li>' + s.features[f] + '</li>';
            }
            featuresHtml += '</ul>';
        }
        servicesHtml += '<div class="service-card">' +
            '<div class="service-icon">' + s.icon + '</div>' +
            '<h3>' + s.title + '</h3>' +
            '<p>' + s.desc + '</p>' +
            '<div class="service-price">' + s.price + '</div>' +
            featuresHtml +
            '</div>';
    }
    document.getElementById('servicesGrid').innerHTML = servicesHtml;
    
    // ===== ПОРТФОЛИО С КАРУСЕЛЬЮ =====
    var portfolioHtml = '';
    for (var j = 0; j < data.portfolio.length; j++) {
        var p = data.portfolio[j];
        var images = p.images || [];
        if (p.image && images.length === 0) {
            images = [p.image];
        }
        if (images.length === 0) {
            images = [''];
        }
        
        var carouselHtml = '';
        if (images.length > 0 && images[0]) {
            carouselHtml += '<div class="carousel-slides" style="display:flex;height:100%;transition:transform 0.5s ease;">';
            for (var imgIdx = 0; imgIdx < images.length; imgIdx++) {
                var imgSrc = images[imgIdx] || '';
                if (imgSrc) {
                    carouselHtml += '<div class="carousel-slide" style="min-width:100%;height:100%;display:flex;align-items:center;justify-content:center;" onclick="openPhotoModal(' + j + ', ' + imgIdx + ')">';
                    carouselHtml += '<img src="' + imgSrc + '" alt="' + p.title + '" style="width:100%;height:100%;object-fit:cover;cursor:pointer;">';
                    carouselHtml += '</div>';
                }
            }
            carouselHtml += '</div>';
            
            if (images.length > 1) {
                carouselHtml += '<button class="carousel-btn prev" onclick="event.stopPropagation();changeSlide(this, -1)">‹</button>';
                carouselHtml += '<button class="carousel-btn next" onclick="event.stopPropagation();changeSlide(this, 1)">›</button>';
                carouselHtml += '<div class="carousel-dots">';
                for (var dotIdx = 0; dotIdx < images.length; dotIdx++) {
                    var activeClass = dotIdx === 0 ? 'active' : '';
                    carouselHtml += '<span class="' + activeClass + '" onclick="event.stopPropagation();goToSlide(this, ' + dotIdx + ')"></span>';
                }
                carouselHtml += '</div>';
            }
        } else {
            carouselHtml += '<span class="no-image">' + (p.icon || '📷') + '</span>';
        }
        
        var tagsHtml = '';
        if (p.tags) {
            for (var t = 0; t < p.tags.length; t++) {
                tagsHtml += '<span>' + p.tags[t] + '</span>';
            }
        }
        
        portfolioHtml += '<div class="portfolio-card">';
        portfolioHtml += '<div class="portfolio-image" data-current="0">' + carouselHtml + '</div>';
        portfolioHtml += '<div class="portfolio-info">';
        portfolioHtml += '<h3>' + p.title + '</h3>';
        portfolioHtml += '<p>' + p.desc + '</p>';
        portfolioHtml += '<div class="portfolio-tags">' + tagsHtml + '</div>';
        portfolioHtml += '<a href="' + (p.link || '#') + '" class="btn-outline" target="_blank">Смотреть</a>';
        portfolioHtml += '</div></div>';
    }
    document.getElementById('portfolioGrid').innerHTML = portfolioHtml;
    
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

// ===== УПРАВЛЕНИЕ КАРУСЕЛЬЮ =====
function changeSlide(btn, direction) {
    var container = btn.closest('.portfolio-image');
    if (!container) return;
    var slides = container.querySelector('.carousel-slides');
    var dots = container.querySelectorAll('.carousel-dots span');
    var totalSlides = slides ? slides.children.length : 0;
    if (totalSlides <= 1) return;
    
    var current = parseInt(container.dataset.current) || 0;
    current = current + direction;
    if (current < 0) current = totalSlides - 1;
    if (current >= totalSlides) current = 0;
    
    container.dataset.current = current;
    slides.style.transform = 'translateX(-' + (current * 100) + '%)';
    
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.background = i === current ? '#fff' : 'rgba(255,255,255,0.3)';
        dots[i].className = i === current ? 'active' : '';
    }
}

function goToSlide(dot, index) {
    var container = dot.closest('.portfolio-image');
    if (!container) return;
    var slides = container.querySelector('.carousel-slides');
    var totalSlides = slides ? slides.children.length : 0;
    if (index >= totalSlides) return;
    
    container.dataset.current = index;
    slides.style.transform = 'translateX(-' + (index * 100) + '%)';
    
    var dots = container.querySelectorAll('.carousel-dots span');
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.background = i === index ? '#fff' : 'rgba(255,255,255,0.3)';
        dots[i].className = i === index ? 'active' : '';
    }
}

// ===== ФОТО МОДАЛЬНОЕ ОКНО =====
function openPhotoModal(projectIndex, imageIndex) {
    var project = data.portfolio[projectIndex];
    if (!project) return;
    var images = project.images || [];
    if (project.image && images.length === 0) {
        images = [project.image];
    }
    if (images.length === 0 || !images[0]) {
        showToast('❌ Нет фото для просмотра');
        return;
    }
    
    photoModalImages = images;
    photoModalCurrentIndex = imageIndex || 0;
    updatePhotoModal();
    document.getElementById('photoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
    document.getElementById('photoModal').classList.remove('active');
    document.body.style.overflow = '';
}

function changePhoto(direction) {
    var total = photoModalImages.length;
    if (total <= 1) return;
    photoModalCurrentIndex = (photoModalCurrentIndex + direction + total) % total;
    updatePhotoModal();
}

function updatePhotoModal() {
    var img = document.getElementById('photoModalImg');
    var counter = document.getElementById('photoModalCounter');
    img.src = photoModalImages[photoModalCurrentIndex] || '';
    counter.textContent = (photoModalCurrentIndex + 1) + ' / ' + photoModalImages.length;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePhotoModal();
    if (e.key === 'ArrowLeft') changePhoto(-1);
    if (e.key === 'ArrowRight') changePhoto(1);
});

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

// ===== ОПОВЕЩЕНИЕ О ЗАЯВКЕ =====
function playNotificationSound() {
    try {
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var oscillator = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.value = 0.3;
        
        oscillator.start();
        
        setTimeout(function() {
            oscillator.frequency.value = 1000;
        }, 150);
        
        setTimeout(function() {
            oscillator.frequency.value = 1200;
        }, 300);
        
        setTimeout(function() {
            oscillator.stop();
        }, 500);
    } catch (e) {
        console.log('Звук не поддерживается');
    }
}

function showBrowserNotification(name, contact) {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'granted') {
        new Notification('📩 Новая заявка!', {
            body: 'От: ' + name + '\nКонтакт: ' + contact,
            icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext y=".9em" font-size="90"%3E📩%3C/text%3E%3C/svg%3E'
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission();
    }
}

function showToast(msg) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transition = '0.4s';
        setTimeout(function() { toast.remove(); }, 400);
    }, 2500);
}

// ===== ОТПРАВКА ЗАЯВКИ =====
function sendForm(e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('.btn');
    var originalText = btn.textContent;

    var nameInput = form.querySelector('input[placeholder="Ваше имя"]');
    var contactInput = form.querySelector('input[placeholder="Email или мессенджер"]');
    var messageInput = form.querySelector('textarea');

    var name = nameInput ? nameInput.value : 'Не указано';
    var contact = contactInput ? contactInput.value : 'Не указано';
    var message = messageInput ? messageInput.value : 'Не указано';

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
    
    // ===== ОПОВЕЩЕНИЕ =====
    playNotificationSound();
    showBrowserNotification(name, contact);
    showToast('🔔 Новая заявка от ' + name + '!');
    
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
    
    // Запрашиваем разрешение на уведомления
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
});
