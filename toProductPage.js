document.getElementsByClassName("product").onclick = function() {
    productName = document.getElementById(productName);
    productNameString = JSON.stringify(productName);
    localStorage.setItem("product-name", responsestring)
   console.log(productName) 
}