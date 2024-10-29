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
    .then(data => {
        console.log(data); //make sure the data appears as a JSON

        const products = data
        products.forEach(product => {
            const productFields = product.fields; //gets into the fields object

            const listItem = document.createElement('li'); //creates listItem as a variable for a list item in HTML

            listItem.innerHTML = `
                <img src="${productFields.image[0].url}" alt="${productFields.name}" style="width: 200px;">
                <span>${productFields.company} - ${productFields.name} - $${productFields.price}</span>
                <p></p>
                <p></p>
            `; //Use innerHTML to write the HTML structure inside this file. Allows the link to run using img src, and adds the proper text using <span>. Also adds spacing between each product with <p>

            productList.appendChild(listItem); //Adds each new listItem to the productList

        });
    })
    .catch(error => {
        console.error('There was a problem loading the products at this time. Please try again in a few minutes.', error);
    });