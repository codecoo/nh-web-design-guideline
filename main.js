
// Main JavaScript for N Health Web Design Guideline

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme (Dark/Light)
    initTheme();

    // 2. Initialize Language (TH/EN)
    initLanguage();


    // 3. Initialize Code Box Copy Functionality
    initCodeCopy();

    // 4. Initialize Mobile Menu
    initMobileMenu();
});

/* --- 1. Theme Handling --- */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update both desktop and mobile icons if they exist
    const themeIcons = document.querySelectorAll('.fa-moon, .fa-sun');
    themeIcons.forEach(icon => {
        // Simple toggle logic based on icon class might be flaky if we have multiple icons.
        // Better to explicitly set class based on theme.
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

/* --- 2. Language Handling --- */
const translations = {
    'en': {
        'nav_overview': 'Overview',
        'nav_components': 'Components',
        'nav_pages': 'Pages',
        'nav_figma': 'Figma Docs',
        'nav_login': 'Login',
        'nav_dashboard': 'Dashboard',
        'nav_crud': 'CRUD Table',
        'nav_settings': 'Settings',
        'nav_users': 'Users',
        'nav_errors': 'Error Pages',
        'page_title': 'N Health Web Design Guideline',
        'hero_subtitle': 'A comprehensive design system based on Ant Design principles with N_Health branding'
    },
    'th': {
        'nav_overview': 'ภาพรวม',
        'nav_components': 'องค์ประกอบ',
        'nav_pages': 'หน้าเว็บ',
        'nav_figma': 'เอกสาร Figma',
        'nav_login': 'เข้าสู่ระบบ',
        'nav_dashboard': 'แดชบอร์ด',
        'nav_crud': 'ตารางข้อมูล',
        'nav_settings': 'การตั้งค่า',
        'nav_users': 'ผู้ใช้งาน',
        'nav_errors': 'หน้าข้อผิดพลาด',
        'page_title': 'คู่มือการออกแบบเว็บ N Health',
        'hero_subtitle': 'ระบบการออกแบบที่ครอบคลุมตามหลักการ Ant Design พร้อมแบรนด์ N_Health'
    }
};

function initLanguage() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');

    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const newLang = currentLang === 'en' ? 'th' : 'en';
            setLanguage(newLang);
        });
    }
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    const langTexts = document.querySelectorAll('#lang-text, #lang-text-mobile'); // Support mobile text
    langTexts.forEach(el => el.textContent = lang.toUpperCase());

    // Update text content where data-i18n attribute exists
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has an icon to preserve
            const icon = element.querySelector('i');
            if (icon) {
                // Preserve the icon and update the text
                // formatting: icon + space + translated text
                element.innerHTML = `${icon.outerHTML} ${translations[lang][key]}`;
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

/* --- 3. Code Copy Functionality --- */
function initCodeCopy() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.closest('.code-box-container').querySelector('.code-preview').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            });
        });
    });
}

/* --- 4. Mobile Menu Handling --- */
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const navMenu = document.querySelector('.nav-menu');

    if (!toggleBtn || !overlay) return;

    // 1. Clone Menu Items (if empty)
    if (navMenu && overlay.innerHTML.trim() === '') {
        // Clone top-level items
        const listItems = navMenu.querySelectorAll('li');

        listItems.forEach(li => {
            // If it's a simple link
            const link = li.querySelector('a.nav-link');
            if (!link) return; // Skip if no link

            // Check if it is a dropdown (contains sub-menu)
            const dropdownContent = li.querySelector('.nav-dropdown-content');

            // Create a clone of the link
            const clonedLink = link.cloneNode(true);
            // Remove dropdown icon from the main link in mobile if we plan to just show everything flattened
            // Or keep it.

            // If it was a dropdown parent
            if (dropdownContent) {
                // We will append the parent link first
                overlay.appendChild(clonedLink);

                // Then append all children as indented links
                const subLinks = dropdownContent.querySelectorAll('a');
                subLinks.forEach(sub => {
                    const clonedSub = sub.cloneNode(true);
                    clonedSub.style.paddingLeft = '32px'; // Indent
                    clonedSub.style.fontSize = '16px';
                    clonedSub.style.background = 'transparent'; // Reset default bg if any
                    overlay.appendChild(clonedSub);
                });
            } else {
                // Just a normal link
                overlay.appendChild(clonedLink);
            }
        });

        // 2. Clone Actions (Language, Theme)
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'nav-actions-mobile';

        // Theme
        const themeBtn = document.createElement('button');
        themeBtn.className = 'action-icon';
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Default, will be updated by initTheme
        themeBtn.style.border = '1px solid var(--color-border)';
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
        actionsContainer.appendChild(themeBtn);

        // Language
        const langBtn = document.createElement('button');
        langBtn.className = 'lang-switch';
        langBtn.style.border = '1px solid var(--color-border)';
        langBtn.innerHTML = '<i class="fa-solid fa-globe"></i> <span id="lang-text-mobile">EN</span>';
        langBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            const newLang = currentLang === 'en' ? 'th' : 'en';
            setLanguage(newLang);
        });
        actionsContainer.appendChild(langBtn);

        overlay.appendChild(actionsContainer);
    }

    // Toggle Event
    toggleBtn.addEventListener('click', () => {
        const isOpen = overlay.classList.contains('active');
        if (isOpen) {
            overlay.classList.remove('active');
            toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else {
            overlay.classList.add('active');
            toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        }
    });
}
