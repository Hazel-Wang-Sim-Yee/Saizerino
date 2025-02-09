document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("add-to-cart-button")
    button.addEventListener("click", function () {
        AICString = localStorage.getItem("product-in-cart-name");
        AIC = JSON.parse(AICString);
        productName = document.getElementById(product-name-on-page);
        productNameString = JSON.stringify(productName + AIC);
        localStorage.setItem("product-in-cart-name", productNameString);
        console.log(productName);
    });
});