// Компонент переключателя темной и светлой темы
export function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  // Функция для переключения между темами
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div style={{ 
      padding: '40px',
      textAlign: 'center',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{ marginBottom: '30px' }}>Переключатель темы</h2>
      
      <button
        onClick={handleThemeToggle}
        style={{
          background: isDarkMode ? '#bb86fc' : '#2196F3',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          marginBottom: '20px'
        }}
      >
        {/* Меняем текст и иконку в зависимости от текущей темы */}
        {isDarkMode ? '🌙 Включить светлую тему' : '☀️ Включить темную тему'}
      </button>
      
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        borderRadius: '10px',
        maxWidth: '500px'
      }}>
        <p><strong>Текущая тема:</strong> {isDarkMode ? 'Тёмная' : 'Светлая'}</p>
      </div>
    </div>
  )
}