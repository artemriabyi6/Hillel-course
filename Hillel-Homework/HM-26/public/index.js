// Функція для отримання даних із сервера
function fetchData() {
    fetch('/api/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            displayCategories(data.categories);
            displayProducts(data.products);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

// Відображення категорій
function displayCategories(categories) {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '<h2>Categories</h2>';
    categories.forEach(category => {
        const p = document.createElement('p');
        p.textContent = category;
        categoriesDiv.appendChild(p);
    });
}

// Відображення продуктів
function displayProducts(products) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '<h2>Products</h2>';
    products.forEach(product => {
        const p = document.createElement('p');
        p.textContent = `${product.name} (${product.category}) - $${product.price}`;
        productsDiv.appendChild(p);
    });
}

// Завантаження даних після завантаження сторінки
window.addEventListener('load', fetchData);


