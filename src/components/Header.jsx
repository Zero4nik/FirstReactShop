// Компонент  с переключением темы
export function Header({ isDark }) {
    return (
        <header style={{
            padding: '20px',
            textAlign: 'center',
            // Динамическое изменение цвета фона
            backgroundColor: isDark ? '#333' : '#2196F3',
            color: 'white',
            // Анимация изменения темы
            transition: 'all 0.3s ease'
        }}>
            <h1>Мое React Приложение</h1>
            <p>Простой SPA с переключением темы</p>
        </header>
    )
}