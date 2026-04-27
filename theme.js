const THEME_KEY = 'gm-theme';
const root = document.documentElement;
const toggleButtons = document.querySelectorAll('.theme-toggle');

const syncLabel = (theme) => {
  toggleButtons.forEach((button) => {
    button.textContent = theme === 'light' ? '🌙' : '☀️';
    button.setAttribute('aria-label', theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro');
  });
};

const savedTheme = localStorage.getItem(THEME_KEY);
const initialTheme = savedTheme || 'light';
root.setAttribute('data-theme', initialTheme);
syncLabel(initialTheme);

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    syncLabel(nextTheme);
  });
});
