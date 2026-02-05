import { useState } from "react";

// Компонент карточки товара с функцией лайка
export function ProductCard({ product }) {
    // Состояние для отслеживания, лайкнул ли пользователь товар
    const [isProductLiked, setIsProductLiked] = useState(false);
    
    // Стили для контейнера карточки товара
    const productCardStyle = {
        border: "2px black solid",
        borderRadius: '10px',
        margin: '10px',
        padding: '20px',
        minHeight: '350px',
        width: '202px',
        position: "relative",
        justifyContent: 'center',
        backgroundColor: 'gray'
    };

    return (
        <div style={productCardStyle}>
            <h2>Карточка товара</h2>
            <img 
                src={product.image || 'https://via.placeholder.com/200'} 
                alt={product.name}
                style={{
                    width: '200px',
                    height: '200px'
                }}
            />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button 
                onClick={() => setIsProductLiked(!isProductLiked)} 
                style={{
                    borderRadius: '10px',
                    backgroundColor: isProductLiked ? 'gray' : 'red',
                    cursor: 'pointer',
                    fontSize: '20px'
                }}
            >
                {/* Меняем иконку и текст в зависимости от состояния лайка */}
                {isProductLiked ? '❤️ Убрать из избранного' : '🤍 Добавить в избранное'}
            </button>
        </div>
    );
}