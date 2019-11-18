/* const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function (paragraph) {
    paragraph.textContent = paragraph.textContent.toLowerCase();
}); */

//Add a new element
/* let newParagraph = document.createElement('p');
newParagraph.textContent = 'New text content';
document.querySelector('body').appendChild(newParagraph);
 */

let products = [];

const renderProducs = function (products) {
    let productList = document.querySelector('#product-list');
    productList.innerHTML = '';
    if (products.length > 0) {
        products.forEach(function (product) {
            let p = document.createElement('p');
            p.textContent = `${product.name.toLowerCase()}, ${product.color.toLowerCase()}, $${product.price}`;
            productList.appendChild(p);
        });
    }
};

const addProduct = function (products, product) {
    products.push({
        name: product.name || '',
        color: product.color || '',
        price: product.price || 0
    });
};

renderProducs(products);

document.querySelector('#products-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let product = {
        name: e.target.productName.value,
        color: e.target.productColor.value,
        price: e.target.productPrice.value
    }
    addProduct(products, product);
    renderProducs(products);
    e.target.productName.value = '';
    e.target.productColor.value = '';
    e.target.productPrice.value = '';
});

document.querySelector('#search-product').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('search product button is clicked');
});
