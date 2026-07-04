const ADMIN_PASSWORD = 'webmaster2026';

let data = null;

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
}

function login() {
    const pass = document.getElementById('adminPassword').value;
    if (pass === ADMIN_PASSWORD) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadAdminData();
        renderAdmin();
    } else {
        showToast('❌ Неверный пароль!');
    }
}

function loadAdminData() {
    const d = loadData();
    if (!d) {
        showToast('❌ Данные не найдены!');
        return;
    }
    data = d;
    fillTexts();
    fillStats();
}

function fillTexts() {
    document.getElementById('editHeroDesc').value = data.heroDesc || '';
    document.getElementById('editAboutText').value = data.aboutText || '';
    document.getElementById('editContactsText').value = data.contactsText || '';
    document.getElementById('editFooterText').value = data.footerText || '';
    document.getElementById('editFooterCopyright').value = data.footerCopyright || '';
}

function fillStats() {
    document.getElementById('editStatProjects').value = data.stats?.projects || 0;
    document.getElementById('editStatClients').value = data.stats?.clients || 0;
    document.getElementById('editStatHappy').value = data.stats?.happy || 0;
}

function renderAdmin() {
    // Услуги
    const servicesContainer = document.getElementById('adminServices');
    if (data.services && data.services.length > 0) {
        servicesContainer.innerHTML = data.services.map((s, i) => `
            <div class="item">
                <span>${s.icon} ${s.title} — <span class="badge">${s.price}</span></span>
                <div class="item-actions">
                    <button class="edit" onclick="editService(${i})">✎</button>
                    <button class="delete" onclick="deleteService(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        servicesContainer.innerHTML = '<div class="empty">Нет услуг</div>';
    }
    
    // Портфолио
    const portfolioContainer = document.getElementById('adminPortfolio');
    if (data.portfolio && data.portfolio.length > 0) {
        portfolioContainer.innerHTML = data.portfolio.map((p, i) => `
            <div class="item">
                <span>${p.icon} ${p.title} ${p.tags ? p.tags.map(t => `<span class="badge">${t}</span>`).join(' ') : ''}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editPortfolio(${i})">✎</button>
                    <button class="delete" onclick="deletePortfolio(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        portfolioContainer.innerHTML = '<div class="empty">Нет проектов</div>';
    }
    
    // Тарифы
    const pricingContainer = document.getElementById('adminPricing');
    if (data.pricing && data.pricing.length > 0) {
        pricingContainer.innerHTML = data.pricing.map((p, i) => `
            <div class="item">
                <span>${p.name} — <strong>${p.price}</strong> ${p.popular ? '<span class="badge popular">🔥 Популярный</span>' : ''}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editPricing(${i})">✎</button>
                    <button class="delete" onclick="deletePricing(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        pricingContainer.innerHTML = '<div class="empty">Нет тарифов</div>';
    }
    
    // Особенности
    const featuresContainer = document.getElementById('adminFeatures');
    if (data.features && data.features.length > 0) {
        featuresContainer.innerHTML = data.features.map((f, i) => `
            <div class="item">
                <span>${f.icon} ${f.title}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editFeature(${i})">✎</button>
                    <button class="delete" onclick="deleteFeature(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        featuresContainer.innerHTML = '<div class="empty">Нет особенностей</div>';
    }
    
    // Этапы
    const stepsContainer = document.getElementById('adminSteps');
    if (data.steps && data.steps.length > 0) {
        stepsContainer.innerHTML = data.steps.map((s, i) => `
            <div class="item">
                <span>${s.number} ${s.title}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editStep(${i})">✎</button>
                    <button class="delete" onclick="deleteStep(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        stepsContainer.innerHTML = '<div class="empty">Нет этапов</div>';
    }
    
    // FAQ
    const faqContainer = document.getElementById('adminFaq');
    if (data.faq && data.faq.length > 0) {
        faqContainer.innerHTML = data.faq.map((f, i) => `
            <div class="item">
                <span>${f.question}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editFaq(${i})">✎</button>
                    <button class="delete" onclick="deleteFaq(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        faqContainer.innerHTML = '<div class="empty">Нет вопросов</div>';
    }
    
    // Соцсети
    const socialContainer = document.getElementById('adminSocial');
    if (data.social && data.social.length > 0) {
        socialContainer.innerHTML = data.social.map((s, i) => `
            <div class="item">
                <span>${s.icon} ${s.name}</span>
                <div class="item-actions">
                    <button class="edit" onclick="editSocial(${i})">✎</button>
                    <button class="delete" onclick="deleteSocial(${i})">✕</button>
                </div>
            </div>
        `).join('');
    } else {
        socialContainer.innerHTML = '<div class="empty">Нет контактов</div>';
    }
}

// ===== СОХРАНЕНИЕ =====
function saveTexts() {
    data.heroDesc = document.getElementById('editHeroDesc').value;
    data.aboutText = document.getElementById('editAboutText').value;
    data.contactsText = document.getElementById('editContactsText').value;
    data.footerText = document.getElementById('editFooterText').value;
    data.footerCopyright = document.getElementById('editFooterCopyright').value;
    saveData();
    showToast('✅ Тексты сохранены!');
    // Обновляем сайт через localStorage
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function saveStats() {
    data.stats.projects = parseInt(document.getElementById('editStatProjects').value) || 0;
    data.stats.clients = parseInt(document.getElementById('editStatClients').value) || 0;
    data.stats.happy = parseInt(document.getElementById('editStatHappy').value) || 0;
    saveData();
    showToast('✅ Статистика сохранена!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Услуга добавлена!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Услуга обновлена!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function deleteService(index) {
    if (!confirm('Удалить услугу?')) return;
    data.services.splice(index, 1);
    saveData();
    renderAdmin();
    showToast('🗑️ Услуга удалена');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Проект добавлен!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Проект обновлён!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function deletePortfolio(index) {
    if (!confirm('Удалить проект?')) return;
    data.portfolio.splice(index, 1);
    saveData();
    renderAdmin();
    showToast('🗑️ Проект удалён');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Тариф добавлен!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Тариф обновлён!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function deletePricing(index) {
    if (!confirm('Удалить тариф?')) return;
    data.pricing.splice(index, 1);
    saveData();
    renderAdmin();
    showToast('🗑️ Тариф удалён');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Особенность добавлена!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Особенность обновлена!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function deleteFeature(index) {
    if (!confirm('Удалить особенность?')) return;
    data.features.splice(index, 1);
    saveData();
    renderAdmin();
    showToast('🗑️ Особенность удалена');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Этап добавлен!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    renderAdmin();
    showToast('✅ Этап обновлён!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function deleteStep(index) {
    if (!confirm('Удалить этап?')) return;
    data.steps.splice(index, 1);
    saveData();
    renderAdmin();
    showToast('🗑️ Этап удалён');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

// ===== CRUD FAQ =====
function addFaq() {
    const question = prompt('Вопрос:');
    if (!question) return;
    const answer = prompt('Ответ:');
    if (!answer) return;
    data.faq.push({ question, answer });
    saveData();
    renderAdmin();
    showToast('✅ Вопрос добавлен!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function editFaq(index) {
    const f = data.faq[index];
    const question = prompt('Вопрос:', f.question);
    if (!question) return;
    const answer = prompt('Ответ:', f.answer);
    if (!answer) return;
    data.faq[index] = { question, answer };
    saveData();
    renderAdmin();
    showToast('✅ Вопрос обновлён!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function deleteFaq(index) {
    if (!confirm('Удалить вопрос?')) return;
    data.faq.splice(index, 1);
    saveData();
    renderAdmin();
    showToast('🗑️ Вопрос удалён');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

// ===== CRUD СОЦСЕТИ =====
function addSocial() {
    const icon = prompt('Иконка (эмодзи):', '📱');
    const name = prompt('Название (Telegram/Instagram/Email):');
    if (!name) return;
    const link = prompt('Ссылка:', '#');
    data.social.push({ icon: icon || '📱', name, link });
    saveData();
    renderAdmin();
    showToast('✅ Контакт добавлен!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function editSocial(index) {
    const s = data.social[index];
    const icon = prompt('Иконка:', s.icon);
    const name = prompt('Название:', s.name);
    if (!name) return;
    const link = prompt('Ссылка:', s.link);
    data.social[index] = { icon: icon || '📱', name, link };
    saveData();
    renderAdmin();
    showToast('✅ Контакт обновлён!');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
}

function deleteSocial(index) {
    if (!confirm('Удалить контакт?')) return;
    data.social.splice(index, 1);
    saveData();
    renderAdmin();
    showToast('🗑️ Контакт удалён');
    window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
            data = JSON.parse(e.target.result);
            saveData();
            fillTexts();
            fillStats();
            renderAdmin();
            showToast('📥 Данные импортированы!');
            window.dispatchEvent(new StorageEvent('storage', { key: 'webmaster_data', newValue: JSON.stringify(data) }));
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
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.4s';
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ===== АВТОВХОД (если уже авторизован) =====
document.addEventListener('DOMContentLoaded', () => {
    const stored = localStorage.getItem('webmaster_data');
    if (stored) {
        // Показываем форму входа, но можно автоматически войти если есть кука
        // Для безопасности оставляем ручной вход
    }
});
