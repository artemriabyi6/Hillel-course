const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Статичні файли (CSS, JS, HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Маршрут для API
app.get('/api/data', (req, res) => {
    const data = {
        categories: ['Electronics', 'Clothing', 'Books'],
        products: [
            { id: 1, name: 'Smartphone', category: 'Electronics', price: 299 },
            { id: 2, name: 'T-shirt', category: 'Clothing', price: 19 },
            { id: 3, name: 'Fiction Book', category: 'Books', price: 12 },
        ],
    };

    res.json(data);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
