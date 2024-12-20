const express = require('express');
const path = require('path');
const { products } = require('./public/js/productsData.js');

const app = express();
const PORT = 3001;

// Використовуємо вже визначений __dirname
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API маршрут для отримання даних
app.get('/api/data', (req, res) => {
    res.json(products); // Відправлення даних з `products.js`
});

app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});
