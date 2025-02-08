document.addEventListener("DOMContentLoaded", function () {
    userInfoString = localStorage.getItem("user-info");
    UserInfo = JSON.parse(userInfoString);
    console.log(UserInfo);
    
    const username = document.getElementsByClassName("username")[0];

    let user = document.createElement("p");
    let userText = document.createTextNode(UserInfo.username);
    user.appendChild(userText);
    username.appendChild(user);

    const userEmail = document.getElementsByClassName("email")[0];

    let email = document.createElement("p");
    let emailText = document.createTextNode(UserInfo.email);
    email.appendChild(emailText);
    userEmail.appendChild(email);

    const userDate = document.getElementsByClassName("date")[0];

    let date = document.createElement("p");
    let dateText = document.createTextNode(UserInfo.date);
    date.appendChild(dateText);
    userDate.appendChild(date);

    const userPoints = document.getElementsByClassName("points")[0];

    let points = document.createElement("p");
    let pointsText = document.createTextNode(UserInfo.points);
    points.appendChild(pointsText);
    userPoints.appendChild(points);
});