import { useState } from "react";

export function Counter() {
    // Используем хук состояния для отслеживания значения счетчика
    const [count, setCount] = useState(0)
    
    return (
        <main style={{
            padding: '20px',
            minHeight: '200px',
            backgroundColor: 'gray',
            border: 'black solid 3px',
            borderRadius: '10px',
            margin: '0px 690px',
            textAlign: "center",
            position: "relative"
        }}>
            <div>
                {/* Отображаем текущее значение счетчика */}
                <p>Счетчик <strong>{count}</strong></p>
                
                {/* Кнопка для увеличения значения */}
                <button 
                    style={{
                        padding: '10px',
                        marginRight: '10px'
                    }}
                    onClick={() => {
                        // Увеличиваем значение на 1
                        setCount(count + 1)
                    }}
                >
                    +
                </button>
                
                {/* Кнопка для уменьшения значения */}
                <button 
                    style={{
                        padding: '10px',
                        marginRight: '10px'
                    }}
                    onClick={() => {
                        // Уменьшаем значение на 1
                        setCount(count - 1)
                    }}
                >
                    -
                </button>
                
                {/* Кнопка сброса в начальное положение */}
                <button 
                    style={{
                        padding: '10px',
                        marginRight: '10px'
                    }}
                    onClick={() => {
                        // Возвращаем значение к нулю
                        setCount(0)
                    }}
                >
                    Сброс
                </button>
            </div>
        </main>
    )
}