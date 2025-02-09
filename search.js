document.addEventListener("DOMContentLoaded", function () {
    var myInput = document.getElementsByClassName("search-bar")[0];
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://productinfo-0814.restdb.io/rest/products",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "67a71a4c4d87442aea827ff4",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);

        const div = document.createElement("div")
        let product = ""; 
        let productNumber = -1;
        if (myInput === null) {
            let myInput = "";}

        myInput.onkeyup = function() {
            product = "";
        for (var i = 0; i < response.length && i < 100; i++) {
            if (response[i].Name.includes(myInput.value)) {
                var image = response[i].Imagelinks;
                var imagelink = "Media\\" + image;
                let img = document.createElement("img");
                img.src = imagelink;
                img.style.width = "50%";
                img.style.height = "50%";
                var name = response[i].Name;
                var price = response[i].SellingPrice;
                
                product = product + "<element class = product onclick = document.location='product.html'>" + "<img src=" + imagelink + ">" + "<br>" + "<div class = product-text>" + "<p id=productName" + productNumber + ">" + name + "</p>" + "<br>" + "$" + price.toFixed(2) + "<br>" + "</div>" + "</element>";
            }
            document.getElementsByClassName("products")[0].innerHTML = product;
        }
    };
});
});
