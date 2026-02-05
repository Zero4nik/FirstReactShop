import { Header } from './components/Header'
import { Main } from './pages/HomePage'
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ProductPage } from './pages/ProductsPage'
import { Counter } from './components/Counter'
import { ThemeToggle } from './components/ThemeToggle'
import { useState, useEffect } from 'react'
import { ContactPage } from './pages/ContactPage'

function App() {
  // Состояние для управления темной/светлой темой
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // Эффект для применения темы к body документа
  useEffect(() => {
    if (isDarkTheme) {
      document.body.style.backgroundColor = '#121212'
      document.body.style.color = '#ffffff'
    } else {
      document.body.style.backgroundColor = '#ffffff'
      document.body.style.color = '#000000'
    }
  }, [isDarkTheme]) // Запускается при изменении темы

  return (
    <Router>
      {/* Главный контейнер приложения с динамическими стилями */}
      <div className="App" style={{
        backgroundColor: isDarkTheme ? '#1e1e1e' : '#f5f5f5',
        color: isDarkTheme ? '#fff' : '#333',
        minHeight: '100vh',
        transition: 'all 0.3s ease' // Плавный переход при смене темы
      }}>
        {/* Шапка с передачей текущей темы */}
        <Header isDark={isDarkTheme} />
        
        {/* Навигационное меню с тематическими стилями */}
        <nav style={{ 
          padding: '20px', 
          textAlign: 'center',
          backgroundColor: isDarkTheme ? '#333' : '#e3f2fd',
          borderBottom: isDarkTheme ? '1px solid #444' : '1px solid #bbdefb'
        }}>
          {/* Ссылки на страницы приложения */}
          <Link to='/' style={{ 
            margin: '0 15px', 
            color: isDarkTheme ? '#bb86fc' : '#1565c0',
            textDecoration: 'none'
          }}>Главное</Link>
          
          <Link to='/counter' style={{ 
            margin: '0 15px', 
            color: isDarkTheme ? '#bb86fc' : '#1565c0',
            textDecoration: 'none'
          }}>Счетчик</Link>
          
          <Link to='/theme' style={{ 
            margin: '0 15px', 
            color: isDarkTheme ? '#bb86fc' : '#1565c0',
            textDecoration: 'none'
          }}>Тема</Link>
          
          <Link to='/products' style={{ 
            margin: '0 15px', 
            color: isDarkTheme ? '#bb86fc' : '#1565c0',
            textDecoration: 'none'
          }}>Товары</Link>
          
          <Link to='Contract' style={{ 
            margin: '0 15px', 
            color: isDarkTheme ? '#bb86fc' : '#1565c0',
            textDecoration: 'none'
          }}>Контакты</Link>
        </nav>
        
        {/* Определение маршрутов приложения */}
        <Routes>
          <Route path='/' element={<Main isDark={isDarkTheme} />} />
          <Route path='/counter' element={<Counter isDark={isDarkTheme} />} />
          <Route path='/theme' element={
            <ThemeToggle 
              isDark={isDarkTheme} 
              setIsDark={setIsDarkTheme} 
            />
          } />
          <Route path='/products' element={<ProductPage isDark={isDarkTheme} />} />
          <Route path='Contract' element={<ContactPage isDark={isDarkTheme} />} />
        </Routes>
        
        {/* самый низ с учетом текущей темы */}
        <Footer isDark={isDarkTheme} />
      </div>
    </Router>
  )
}

export default App