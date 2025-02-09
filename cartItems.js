document.addEventListener("DOMContentLoaded", function () {
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

        ICString = localStorage.getItem("product-in-cart-name");
        IC = JSON.parse(ICString);
        IC = "ZEROBASEONE 4th Mini Album 'CINEMA PARADISE'" + "BOYNEXTDOOR 2nd EP 'How?'";
        let inCart = "";
        

        for (var i = 0; i < response.length && i < 100; i++) {
            if (IC.includes(response[i].Name)) {
                var image = response[i].Imagelinks;
                var imagelink = "Media\\" + image;
                let img = document.createElement("img");
                img.src = imagelink;
                img.style.width = "50%";
                img.style.height = "50%";
                var name = response[i].Name;
                var price = response[i].SellingPrice;
                if (response[i].OriginalPrice > 0) {
                    var originalprice = response[i].OriginalPrice;
                    inCart = inCart + "<div class=cart-item>" + "<img class = cartImage src=" + imagelink + ">" + "<br>" + "<h3 class = item-text>" + "<br>" + "$" + price.toFixed(2) + "         " + "<small>" + "<s>" + originalprice + "</s>" + "</small>" + "<br>" + name + "</h3>" + "</div>";
                    document.getElementById("cart-items").innerHTML = inCart;
                } else{
                
                    inCart = inCart + "<div class = cart-item>" + "<img class = cartImage src=" + imagelink + ">" + "<br>" + "<h3 class = item-text>" + "<br>" + "$" + price.toFixed(2) + "<br>" + name  + "</h3>" + "</div>";
                    document.getElementById("cart-items").innerHTML = inCart;
                }
                var total = total + price;
                document.getElementById("total").innerHTML = total.toFixed(2);
                document.getElementById("subtotal").innerHTML = total.toFixed(2);
            }
        }
        document.getElementById("proceed-to-checkout-button").addEventListener("click", function () {
            totalString = JSON.stringify(total);
            localStorage.setItem("totalCost", totalString);
            console.log(productName);
            window.location.href = "checkout.html";
        });
    });
});
