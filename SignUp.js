//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
  let validationLowerCase = document.getElementById('letter').classList;
  let validationUpperCase = document.getElementById('capital').classList;
  let validationNumber = document.getElementById('number').classList;
  let validationLength = document.getElementById('length').classList;
    // What kind of interface we want at the start 
    const APIKEY = "677c888c202b145ef1101358";
    getContacts();
  
    //[STEP 1]: Create our submit form listener
    document.getElementById("contact-submit").addEventListener("click", function (e) {
      if (validationLowerCase.contains("valid") && validationUpperCase.contains("valid") && validationNumber.contains("valid") && validationLength.contains("valid")) {
      // Prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: Let's retrieve form data
      // For now, we assume all information is valid
      // You are to do your own data validation
      let contactUsername = document.getElementById("contact-username").value;
      let contactEmail = document.getElementById("contact-email").value;
      let contactPassword = document.getElementById("contact-pwd").value;
  
      //[STEP 3]: Get form values when the user clicks on send
      // Adapted from restdb API
      let jsondata = {
        "username": contactUsername,
        "email": contactEmail,
        "password": contactPassword
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        method: "POST", //[cher] we will use post to send info
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
        beforeSend: function () {
          //@TODO use loading bar instead
          // Disable our button or show loading bar
          document.getElementById("contact-submit").disabled = true;
          // Clear our form using the form ID and triggering its reset feature
          document.getElementById("add-contact-form").reset();
        }
      }
  
      //[STEP 5]: Send our AJAX request over to the DB and print response of the RESTDB storage to console.
      fetch("https://interactivedev-41e4.restdb.io/rest/contact", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.getElementById("contact-submit").disabled = false;
          //@TODO update frontend UI 
          setTimeout(function () {
          }, 3000);
          // Update our table 
          getContacts();
        });
      }
    });//end click 
  
  
    //[STEP] 6
    // Let's create a function to allow you to retrieve all the information in your contacts
    // By default, we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        method: "GET", //[cher] we will use GET to retrieve info
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      // Once we get the response, we modify our table content by creating the content internally. We run a loop to continuously add on data
      // RESTDb/NoSql always adds in a unique id for each data; we tap on it to have our data and place it into our links 
    };
  
    //[STEP 10]: Create our update listener
    // Here we tap onto our previous table when we click on update
    // This is a delegation feature of jQuery
    // Because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row, we have a class .update to help us
    //end contact-list listener for update function
  
    
  
    
  
      
    }
  ); 
  
      //[STEP 13a]: Send our AJAX request and hide the update contact form
      