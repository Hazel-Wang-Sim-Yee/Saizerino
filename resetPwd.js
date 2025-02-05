//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
    // What kind of interface we want at the start 
  
    //[STEP 1]: Create our submit form listener
    let validationLowerCase = document.getElementById('letter').classList;
    let validationUpperCase = document.getElementById('capital').classList;
    let validationNumber = document.getElementById('number').classList;
    let validationLength = document.getElementById('length').classList;
    let validationMatch = document.getElementById("pwd-match").classList;
    document.getElementById("contact-submit").addEventListener("click", function (e) {
        if (validationLowerCase.contains("valid") && validationUpperCase.contains("valid") && validationNumber.contains("valid") && validationLength.contains("valid") && validationMatch.contains("valid")) {
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
        
        $.ajax(settings).done(function (response) {
          console.log(response);
          for (var i = 0; i < response.length && i < 100; i++) {
            if (response[i].email == contactEmail) {
                let contactUsername = response[i].username
                let contactid = response[i]._id
                console.log(contactid, contactUsername, contactEmail, contactPassword)
                var jsondata = {"email": contactEmail, "password": contactPassword, "username": contactUsername,};
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://interactivedev-41e4.restdb.io/rest/contact/"+contactid,
                    "method": "PUT",
                    "headers": {
                      "content-type": "application/json",
                      "x-apikey": "677c888c202b145ef1101358",
                      "cache-control": "no-cache"
                    },
                    "processData": false,
                    "data": JSON.stringify(jsondata)
                  }
          
                $.ajax(settings).done(function (response) {
                console.log(response);
            });
        };
      };
    });
  };
});
});
