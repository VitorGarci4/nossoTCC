document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.getElementsByClassName("fas fa-times");
    const addToCartButtons = document.getElementsByClassName("btn");

    for (var i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click", function(event) {
            event.target.parentElement.remove();
            updateTotal();
        });
    }

    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", function(event) {
            event.preventDefault();
            const button = event.target;
            const productElement = button.parentElement;
            const title = productElement.getElementsByTagName("h3")[0].innerText;
            const price = productElement.getElementsByClassName("price")[0].innerText.split(" ")[0];
            const imgSrc = productElement.getElementsByTagName("img")[0].src;
            addItemToCart(title, price, imgSrc);
            updateTotal();
        });
    }

    function addItemToCart(title, price, imgSrc) {
        const cartRow = document.createElement('div');
        cartRow.classList.add('box');
        const cartItems = document.getElementsByClassName('shopping-cart')[0];
        const cartItemNames = cartItems.getElementsByClassName('h3');
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText === title) {
                alert('Este item já está no carrinho');
                return;
            }
        }
        const cartRowContents = `
            <i class="fas fa-times"></i>
            <img src="${imgSrc}" alt="">
            <div class="content">
                <h3>${title}</h3>
                <span class="quantidade">1</span>
                <span class="multiply">x</span>
                <span class="price">${price}</span>
            </div>`;
        cartRow.innerHTML = cartRowContents;
        cartItems.insertBefore(cartRow, cartItems.firstChild);
        cartRow.getElementsByClassName("fas fa-times")[0].addEventListener("click", function(event) {
            event.target.parentElement.remove();
            updateTotal();
        });
    }

    function updateTotal() {
        let totalAmount = 0;
        const cartItems = document.getElementsByClassName("shopping-cart")[0].getElementsByClassName("box");
        for (var i = 0; i < cartItems.length; i++) {
            const priceElement = cartItems[i].getElementsByClassName("price")[0];
            const quantityElement = cartItems[i].getElementsByClassName("quantidade")[0];
            const price = parseFloat(priceElement.innerText.replace("$", ""));
            const quantity = parseInt(quantityElement.innerText, 10);
            totalAmount += price * quantity;
        }
        const totalElement = document.getElementsByClassName("total")[0];
        totalElement.innerText = "total: $" + totalAmount.toFixed(2);
    }

    const totalElement = document.getElementsByClassName("total")[0];
    totalElement.innerText = "total: $0.00";
});
