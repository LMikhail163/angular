calculation();
function addProduct(id) {
    const product = JSON.parse(document.getElementById(id).getAttribute('product-data'));
    fetch('http://127.0.0.1:3000/products/', {method: "POST", body: JSON.stringify(product), headers: {'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => console.log(data));

    const btn = document.getElementById(id).querySelector('button');
    btn.innerHTML = 'В корзине';
    btn.classList.add('buy');
    calculation();
}

function crossClose(id) { 
    const product = JSON.parse(document.getElementById(id).getAttribute('product-data'));
    fetch('http://127.0.0.1:3000/products/delete', {method: "DELETE", body: JSON.stringify(product), headers: {'Content-Type': 'application/json'}});

    document.getElementById(id).remove();
    const btn = document.getElementById(id).querySelector('button');
    btn.innerHTML = 'Купить';
    btn.classList.remove('buy');
    calculation();
}

function calculation() {
    const allPrice = [...document.querySelectorAll('.price-for-basket')];
    const sum = allPrice.map(element => +element.textContent).reduce((summa, current) => summa + current, 0);
    const coast = document.querySelector('#coast');
    coast.textContent = sum + ' руб.';
}

function increase(id) {
    const value = document.getElementById(id).querySelector('.jsValue');
    let inc = 1;
    inc = +inc + 1;
    value.textContent = inc;
    const price = document.getElementById(id).querySelector('.price-for-basket');
    const product = JSON.parse(document.getElementById(id).getAttribute('product-data'));
    price.textContent = inc * product.price;
    calculation();
}

function decrease(id) {
    let value = document.getElementById(id).querySelector('.jsValue');
    let dec = value.textContent;
    dec = +dec - 1;
    if (dec <= 0) {
        dec = 1;
    }
    value.textContent = dec;
    const price = document.getElementById(id).querySelector('.price-for-basket');
    const product = JSON.parse(document.getElementById(id).getAttribute('product-data'));
    price.textContent = dec * product.price;
    calculation();
}