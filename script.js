// ===== АНИМАЦИЯ ЦИФР В СТАТИСТИКЕ =====
function animateNumbers() {
    const projects = document.getElementById('statProjects');
    const clients = document.getElementById('statClients');
    const happy = document.getElementById('statHappy');

    const targets = [12, 9, 100];
    const elements = [projects, clients, happy];
    const duration = 2000;

    elements.forEach((el, i) => {
        let start = 0;
        const target = targets[i];
        const increment = target / (duration / 16);
        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(interval);
            }
            if (i === 2) {
                el.textContent = Math.floor(start) + '%';
            } else {
                el.textContent = Math.floor(start);
            }
        }, 16);
    });
}

// ===== FAQ АККОРДЕОН =====
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isOpen = answer.style.maxHeight;

        // Закрываем все
        document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.maxHeight = null;
        });
        document.querySelectorAll('.faq-question').forEach(b => {
            b.classList.remove('active');
        });

        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 50 + 'px';
            this.classList.add('active');
        }
    });
});

// ===== МОБИЛЬНОЕ МЕНЮ =====
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

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

// ===== ЗАПУСК АНИМАЦИИ =====
document.addEventListener('DOMContentLoaded', () => {
    // Запускаем анимацию цифр
    animateNumbers();

    // Открываем первый FAQ автоматически
    const firstFaq = document.querySelector('.faq-question');
    if (firstFaq) {
        setTimeout(() => {
            firstFaq.click();
        }, 800);
    }
});
