// const eventedPushState = (state, title, url) => {
// };

// const buttonCar = document.createElement("a");
// const buttonFlower = document.createElement("a");
// const buttonPhone = document.createElement("a");

// buttonCar.textContent = "Go to Cars category";
// buttonFlower.textContent = "Go to Flowers category";
// buttonPhone.textContent = "Go to Phones category";

// buttonCar.style = "background-color: yellow; margin-left: 20px;padding: 10px";
// buttonFlower.style = "background-color: purple;margin-left: 20px;color: white; padding: 10px";
// buttonPhone.style = "background-color: blue;margin-left: 20px;color: white; padding: 10px";

// const liCar = document.createElement("li");
// const liFlower = document.createElement("li");
// const liPhone = document.createElement("li");

// liCar.appendChild(buttonCar);
// liFlower.appendChild(buttonFlower);
// liPhone.appendChild(buttonPhone);

// const ulList = document.createElement("ul");
// ulList.appendChild(liCar);
// ulList.appendChild(liFlower);
// ulList.appendChild(liPhone);

// document.body.appendChild(ulList);

// const categories = document.querySelector("#categories");
// const myShop = document.getElementById("myshop");
// const basketBtn = document.querySelector("#basket");
// const mainBody = document.querySelector("main");
// const basketBox = document.querySelector(".basket-box");
// const clearBasketBtn = document.createElement("button");
// const navBar = document.querySelector('nav');

// navBar.appendChild(clearBasketBtn)
// clearBasketBtn.innerText = "Очистити кошик";
// clearBasketBtn.addEventListener("click", () => {
//   LocalStorageClear();
//   basketBox.innerHTML = "Ваш кошик порожній";
// });

// const Category = {
//   Flowers: "flowers",
//   Cars: "cars",
//   Phones: "phones",
// };

// const products = [
//   {
//     id: 1,
//     Category: Category.Flowers,
//     name: "Tulips",
//     price: 200,
//   },
//   {
//     id: 2,
//     Category: Category.Flowers,
//     name: "Aster",
//     price: 150,
//   },
//   {
//     id: 3, // 1
//     Category: Category.Cars,
//     name: "Lamborghini",
//     price: 10000,
//   },
//   {
//     id: 4, // 2
//     Category: Category.Cars,
//     name: "Ferrari",
//     price: 1000,
//   },
//   {
//     id: 5, // 1
//     Category: Category.Phones,
//     name: "Iphone",
//     price: 700,
//   },
//   {
//     id: 6, // 2
//     Category: Category.Phones,
//     name: "Samsung",
//     price: 500,
//   },
// ];

// buttonFlower.addEventListener("click", () => {
//   eventedPushState(Category.Flowers, "", "/flowers");
// });

// buttonCar.addEventListener("click", () => {
//   eventedPushState(Category.Cars, "", "/cars");
// });

// buttonPhone.addEventListener("click", () => {
//   eventedPushState(Category.Phones, "", "/phones");
// });

// myShop.addEventListener("click", () => {
//   eventedPushState("/", "", "/");
//   basketBox.style.display = "none"
// });
// basketBtn.addEventListener("click", () => {
//   eventedPushState("Basket", "", "basket");
//   basketBox.style.display = "block"
// });

// let basket = [];

// function saveBasketToLocalStorage() {
//   localStorage.setItem("basket", JSON.stringify(basket));
// }

// function updateBasketCount() {
//   basketBtn.innerHTML = `Кошик(${basket.length})`;
// }

// function LocalStorageClear() {
//   localStorage.clear(basket);
//   basket = [];
//   basketBtn.innerHTML = "Кошик(0)";
// }


// function loadBasketFromLocalStorage() {
//   const savedBasket = localStorage.getItem("basket");
//   if (savedBasket) {
//     basket = JSON.parse(savedBasket);
//   }
//   updateBasketCount();

//   if (basket.length > 0) {
//     basketBox.innerHTML = ""; 

//     basket.forEach((product) => {
//       const productElement = document.createElement("div");
//       productElement.textContent = `${product.name}, Price: ${product.price}`
//       ;
//       basketBox.appendChild(productElement);
//     });

//     basketBox.appendChild(clearBasketBtn); 
//   } else {
//     basketBox.innerHTML = "Ваш кошик порожній";
//     hideClearButton(); 
//   }
// }

// function buyButtonClick(category, productId) {
//   const product = products.find(
//     (p) => p.id === productId && p.Category === category
//   );

//   if (product) {
//     basket.push(product);
//     saveBasketToLocalStorage();
//     updateBasketCount();
//     loadBasketFromLocalStorage();
//     window.alert("Товар додано у кошик");
  
//       eventedPushState(
//        `/${category}/${productId}`,
//       "",
//       `/${category}/${productId}`
//         );
    
//   }
// }

// document.addEventListener("onpushstate", (e) => {
//   categories.innerHTML = ""; 

//   if (e.detail.state === "/") {
//     categories.innerHTML = "";
//   } else {
//     const selectedCategory = e.detail.state;
//     const filteredProducts = products.filter(
//       (product) => product.Category === selectedCategory
//     );

//     filteredProducts.forEach((product) => {
//       const categoryItem = document.createElement("span");
//       categoryItem.innerText = `${product.name}, Price: ${product.price}`;
//       const buyButton = document.createElement("button");
//       buyButton.textContent = "Buy";
//       buyButton.addEventListener("click", () => {
//         buyButtonClick(selectedCategory, product.id);
//       });
//       categoryItem.appendChild(buyButton);
//       categories.appendChild(categoryItem);
//     });
//   }
// });
// function fetchData() {
//   const apiUrl = '/api/data';

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//     console.log(data);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   fetchData();
// });
// loadBasketFromLocalStorage();