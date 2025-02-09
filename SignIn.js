//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
      // What kind of interface we want at the start 
    
      //[STEP 1]: Create our submit form listener
      document.getElementById("contact-submit").addEventListener("click", function (e) {
        
        // Prevent default action of the button 
        e.preventDefault();
    
        //[STEP 2]: Let's retrieve form data
        // For now, we assume all information is valid
        // You are to do your own data validation
        let contactEmail = document.getElementById("contact-email").value;
        let contactPassword = document.getElementById("contact-pwd").value;
    
        //[STEP 3]: Get form values when the user clicks on send
        // Adapted from restdb API
    
        //[STEP 4]: Create our AJAX settings. Take note of API key
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://interactivedev-41e4.restdb.io/rest/contact",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": "677c888c202b145ef1101358",
              "cache-control": "no-cache"
            }
          }
          
          if (typeof $ !== "undefined") {
          $.ajax(settings).done(function (response) {
            console.log(response);
            for (var i = 0; i < response.length && i < 100; i++) {
                if (response[i].email == contactEmail && response[i].password == contactPassword) {
                    console.log("Login successful");
                    responsestring = JSON.stringify(response[i]);
                    console.log(responsestring)
                    localStorage.setItem("user-info", responsestring)
                    window.location.replace("index.html");
                    break;
                }
              }
          });
        } else {
          console.log("Login failed");
          alert("Login failed. Username and password do not match. Please try again.");
      };
    });
});