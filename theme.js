const themeStorageKey = 'theme-preference';

const applyTheme = (theme) => {
    if (theme === 'system') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
};

// Apply theme immediately to avoid FOUC
const savedTheme = localStorage.getItem(themeStorageKey) || 'system';
applyTheme(savedTheme);

document.addEventListener('DOMContentLoaded', () => {
    // Create UI
    const themeContainer = document.createElement('div');
    themeContainer.className = 'theme-switcher';
    themeContainer.innerHTML = `
        <button class="theme-btn" aria-label="Changer le thème">
            <span class="material-symbols-outlined theme-icon">settings_brightness</span>
        </button>
        <div class="theme-menu">
            <button data-value="light"><span class="material-symbols-outlined">light_mode</span> Clair</button>
            <button data-value="dark"><span class="material-symbols-outlined">dark_mode</span> Sombre</button>
            <button data-value="system"><span class="material-symbols-outlined">settings_system_daydream</span> Système</button>
        </div>
    `;
    
    document.body.appendChild(themeContainer);

    // Styles for the switcher (injected via JS for simplicity)
    const style = document.createElement('style');
    style.textContent = `
        .theme-switcher {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 10000;
        }
        .theme-btn {
            background: var(--btn-bg);
            border: 1px solid var(--btn-border);
            color: var(--text-color);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        .theme-btn:hover {
            background: var(--accent-hover);
            border-color: var(--accent-border);
            transform: rotate(45deg);
        }
        .theme-menu {
            position: absolute;
            bottom: 60px;
            right: 0;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 12px;
            padding: 8px;
            display: none;
            flex-direction: column;
            gap: 4px;
            min-width: 150px;
            backdrop-filter: blur(16px);
            box-shadow: 0 4px 20px var(--card-shadow);
        }
        .theme-menu.active {
            display: flex;
            animation: fadeIn 0.2s ease;
        }
        .theme-menu button {
            background: none;
            border: none;
            color: var(--text-color);
            padding: 8px 12px;
            text-align: left;
            cursor: pointer;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: 'Space Grotesk', sans-serif;
            transition: background 0.2s;
        }
        .theme-menu button:hover {
            background: var(--accent-hover);
        }
        .theme-menu button.active {
            color: var(--accent-color);
            font-weight: bold;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Event Listeners
    const btn = themeContainer.querySelector('.theme-btn');
    const menu = themeContainer.querySelector('.theme-menu');
    const options = themeContainer.querySelectorAll('.theme-menu button');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!themeContainer.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            localStorage.setItem(themeStorageKey, value);
            applyTheme(value);
            menu.classList.remove('active');
            updateActiveState(value);
        });
    });

    const updateActiveState = (currentTheme) => {
        options.forEach(opt => {
            if (opt.getAttribute('data-value') === currentTheme) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
    };
    
    updateActiveState(savedTheme);
});
