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

        const div = document.createElement("div")
        let productNew = "";
        let productPopular = "";
        let productSale = "";  
        productNumber = -1

        for (var i = 0; i < response.length && i < 100; i++) {
            productNumber += 1;
            if (response[i].Type == "New") {
                var image = response[i].Imagelinks;
                var imagelink = "Media\\" + image;
                let img = document.createElement("img");
                img.src = imagelink;
                img.style.width = "50%";
                img.style.height = "50%";
                var name = response[i].Name;
                var price = response[i].SellingPrice;
                
                productNew = productNew + "<element class = product onclick = document.location='product.html'>" + "<img src=" + imagelink + ">" + "<br>" + "<div class = product-text>" + "<p id=productName" + productNumber + ">" + name + "</p>" + "<br>" + "$" + price.toFixed(2) + "<br>" + "</div>" + "</element>";
                document.getElementsByClassName("product-display-new")[0].innerHTML = productNew;
            }

            if (response[i].Type == "Popular") {
                var image = response[i].Imagelinks;
                var imagelink = "Media\\" + image;
                let img = document.createElement("img");
                img.src = imagelink;
                img.style.width = "50%";
                img.style.height = "50%";
                var name = response[i].Name;
                var price = response[i].SellingPrice;
                
                productPopular = productPopular + "<div class = product onclick = document.location='product.html'>" + "<img src=" + imagelink + ">" + "<br>" + "<div class = product-text>" + "<p id=productName" + productNumber + ">" + name + "</p>" + "<br>" + "$" + price.toFixed(2) + "<br>" + "</div>" + "</div>";
                document.getElementsByClassName("product-display-popular")[0].innerHTML = productPopular;
            }

            if (response[i].Type == "Sale") {
                var image = response[i].Imagelinks;
                var imagelink = "Media\\" + image;
                let img = document.createElement("img");
                img.src = imagelink;
                img.style.width = "50%";   
                img.style.height = "50%";
                var name = response[i].Name;
                var price = response[i].SellingPrice;
                var discountedfrom = JSON.stringify(response[i].OriginalPrice.toFixed(2));
                document.getElementsByClassName("product-display-sale")[0].appendChild(img);
                console.log(imagelink);
                
                productSale = productSale + "<div class = product onclick = document.location='product.html'>" + "<img src=" + imagelink + ">" + "<br>" + "<div class = product-text>" + "<p id=productName" + productNumber + ">" + name + "</p>" + "<br>" + "$" + price.toFixed(2) + "         " + "<small>" + "<s>" + discountedfrom + "</s>" + "</small>" + "<br>" + "</div>" + "</div>";
                document.getElementsByClassName("product-display-sale")[0].innerHTML = productSale;
            }
        };
    });

});
