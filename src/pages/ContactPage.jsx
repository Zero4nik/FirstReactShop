import { useState } from "react"

export function ContactPage() {
    // Состояние для хранения данных формы
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    // Состояние для хранения ошибок валидации
    const [validationErrors, setValidationErrors] = useState({})
    
    // Обработчик изменений в полях формы
    const handleChange = function(event) {
        const fieldName = event.target.name 
        const newValue = event.target.value
        
        // Обновляем данные формы
        const updatedForm = {
            ...formData
        }
        
        // Создаем копию текущих ошибок
        const updatedErrors = { ...validationErrors }
        
        // Убираем ошибку для текущего поля при изменении
        delete updatedErrors[fieldName]
        
        // Обновляем значение поля
        updatedForm[fieldName] = newValue
        
        // Применяем обновления
        setValidationErrors(updatedErrors)
        setFormData(updatedForm)
    }
    
    // Обработчик отправки формы
    const handleSubmit = function(event) {
        event.preventDefault() // Предотвращаем стандартную отправку формы

        const errors = {}
        
        // Валидация поля имени
        if (!formData.name.trim()) {
            errors.name = 'Имя обязательно'
        } else if (formData.name.length < 2) {
            errors.name = 'Минимум 2 символа'
        }
        
        // Валидация поля email
        if (!formData.email.trim()) {
            errors.email = 'Email обязателен'
        } else if (!formData.email.includes('@')) {
            errors.email = 'Некорректный email'
        }
        
        // Валидация поля сообщения
        if (!formData.message.trim()) {
            errors.message = 'Сообщение обязательно'
        } else if (formData.message.length < 10) {
            errors.message = 'Минимум 10 символов'
        }
        
        // Если есть ошибки, показываем их и прерываем отправку
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors)
            console.log('Ошибки формы:', errors)
            alert('Исправьте ошибки в форме')
            return
        }
        
        // Если валидация прошла успешно
        console.log('Форма отправлена:', formData)
        alert('Сообщение отправлено успешно!')
        
        // Сбрасываем форму после успешной отправки
        setFormData({ name: '', email: '', message: '' })
        setValidationErrors({})
    }
    
    return(
        <div style={{
            display: 'grid',
            placeItems: 'center', 
            padding: '20px'
        }}>
            <h2 style={{textAlign:'center'}}>Контакты</h2>
            
            <form 
                onSubmit={handleSubmit} 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    width: '400px',
                    border: 'black solid 3px',
                    padding: '20px',
                    borderRadius: '10px',
                }}
            >
                {/* Поле для имени */}
                <input 
                    type="text" 
                    placeholder="Имя" 
                    style={{border: validationErrors.name ? '2px solid #ff4444' : '1px solid #ccc'}}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                
                {/* Поле для email */}
                <input 
                    type="email" 
                    placeholder="Email" 
                    style={{border: validationErrors.email ? '2px solid #ff4444' : '1px solid #ccc'}}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                
                {/* Поле для сообщения */}
                <textarea 
                    placeholder="Минимум 10 символов" 
                    style={{border: validationErrors.message ? '2px solid #ff4444' : '1px solid #ccc'}}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                
                {/* Кнопка отправки формы */}
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}