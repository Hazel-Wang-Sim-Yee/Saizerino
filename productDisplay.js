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

        var productName = "ZEROBASEONE 4th Mini Album 'CINEMA PARADISE'";
        console.log(productName);

        for (var i = 0; i < response.length && i < 100; i++) {
            if (response[i].Name == productName) {
                var namediv = document.getElementById("product-name-on-page");
                namediv.innerHTML += response[i].Name;
                var pricediv = document.getElementById("product-price-on-page");
                pricediv.innerHTML += "$" + response[i].SellingPrice.toFixed(2);
                if (response[i].OriginalPrice > 0) {
                    var originalpricediv = document.getElementById("product-ogprice-on-page");
                    originalpricediv.innerHTML += "$" + response[i].OriginalPrice.toFixed(2);
                }
                var descriptiondiv = document.getElementById("product-description-on-page");
                descriptiondiv.innerHTML += response[i].Description;
                var img = document.createElement("img");
                img.src = "Media\\" + response[i].Imagelinks;
                var src = document.getElementById("product-image-on-page");
                src.appendChild(img);
            }
        }
      });
    });