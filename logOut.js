document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("log-out-button").addEventListener("click", function (e) {
        localStorage.clear();
        window.location.replace("landing.html");
    });
});