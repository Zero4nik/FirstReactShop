// Компонент  с поддержкой темной темы
export function Footer({ isDark }) {
    return (
        <footer style={{
            padding: '10px',
            // Меняем цвета в зависимости от темы
            background: isDark ? '#333' : '#eee',
            color: isDark ? '#eee' : '#222',
            textAlign: 'center',
            // Плавный переход при изменении темы
            transition: 'all 0.3s linear'
        }}>
            <p>© Первый SPA в React. Все права защищены</p>
        </footer>
    )
}