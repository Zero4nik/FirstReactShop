import { useState } from "react"
import { ProductCard } from "../components/ProductCard"

export function ProductPage() {
    // Массив товаров с базовыми данными
    const products = [
        { id: 1, name: 'Видеокарта', category: 'Видеокарта', price: 35000, image: '../img/photo1.avif' },
        { id: 2, name: 'Материнская плата', category: 'Материнская плата', price: 50000, image: '../img/photo2.avif' },
        { id: 3, name: 'Блок питания', category: 'Блок питания', price: 10500, image: '../img/photo3.avif' },
        { id: 4, name: 'Оперативная память', category: 'Оперативная память', price: 5500, image: '../img/photo4.avif' },
        { id: 5, name: 'Процессор', category: 'Процессоры', price: 45000, image: '../img/photo5.avif' },
        { id: 6, name: 'Видеокарта RTX 4080', category: 'Видеокарта', price: 120000, image: '../img/photo6.avif' }
    ]

    // Состояния для управления фильтрацией и сортировкой
    const [sortOption, setSortOption] = useState('name-asc') // Текущий вариант сортировки
    const [searchQuery, setSearchQuery] = useState('') // Поисковый запрос
    const [selectedCategories, setSelectedCategories] = useState([]) // Выбранные категории

    // Обработчик изменения поискового запроса
    const handleSearchChange = function(event) {
        setSearchQuery(event.target.value)
    }

    // Обработчик изменения варианта сортировки
    const handleSortChange = function(event) {
        setSortOption(event.target.value)
    }

    // Получаем уникальные категории из всех товаров
    const allCategories = products.map(product => product.category)
    const uniqueCategories = [...new Set(allCategories)]

    // Функция для переключения выбора категории
    const handleCategoryToggle = function(category) {
        setSelectedCategories(prevCategories => {
            if (prevCategories.includes(category)) {
                // Убираем категорию из выбранных
                return prevCategories.filter(cat => cat !== category);
            } else {
                // Добавляем категорию в выбранные
                return [...prevCategories, category];
            }
        });
    }

    // Функция для получения отфильтрованных и отсортированных товаров
    const getFilteredAndSortedProducts = function() {
        // Фильтрация по поисковому запросу
        const filteredBySearch = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )

        // Фильтрация по выбранным категориям
        const filteredByCategory = filteredBySearch.filter(product => {
            if (selectedCategories.length === 0) return true // Если категории не выбраны, показываем все
            return selectedCategories.includes(product.category)
        })

        // Сортировка товаров согласно выбранному варианту
        const sortedProducts = [...filteredByCategory].sort((a, b) => {
            if (sortOption === 'name-asc') return a.name.localeCompare(b.name) // По названию А-Я
            if (sortOption === 'name-desc') return b.name.localeCompare(a.name) // По названию Я-А
            if (sortOption === 'price-asc') return a.price - b.price // По цене (дешевые сверху)
            if (sortOption === 'price-desc') return b.price - a.price // По цене (дорогие сверху)
            return 0
        })

        return sortedProducts
    }

    return (
        <div className="userList">
            <h2 style={{ textAlign: 'center' }}>Каталог товаров</h2>
            
            <div style={{ marginTop: '10px' }}>
                {/* Поле поиска товаров */}
                <input 
                    type="text"
                    placeholder="🔍 Поиск товаров..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                
                {/* Выпадающий список для сортировки */}
                <select 
                    onChange={handleSortChange}
                    value={sortOption}
                >
                    <option value="name-asc">По названию (А-Я)</option>
                    <option value="name-desc">По названию (Я-А)</option>
                    <option value="price-asc">По цене (дешевые)</option>
                    <option value="price-desc">По цене (дорогие)</option>
                </select>
                
                {/* Фильтр по категориям с чекбоксами */}
                <div className="categories-filter" style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h3>Категории:</h3>
                    {uniqueCategories.map(category => (
                        <label key={category}>
                            <input 
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryToggle(category)}
                            />
                            {category}
                        </label>
                    ))}
                </div>
            </div>
            
            <div>
                {/* Отображение товаров или сообщения об отсутствии результатов */}
                {getFilteredAndSortedProducts().length === 0 ? (
                    <h1>Ничего не найдено</h1>
                ) : (
                    <div className="product-list" style={{
                        display: 'grid', 
                        gap: '20px',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        marginTop: '20px'
                    }}>
                        {getFilteredAndSortedProducts().map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}