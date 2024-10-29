//Task 1: Fetch products from API using Fetch and Promises
//We are going to link the API where the products are, and be able to pull (fetch) from the API into our product shop.

const productList = document.getElementById("product-list"); //Turns our product list into a constant variable

fetch('https://www.course-api.com/javascript-store-products') //Link we are grabbing the products from
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); //Turns response into JSON format
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.title} - $${product.price}`;
            productList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Fetch Operation Error:', error);
    });