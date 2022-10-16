function login() {
    email = document.getElementById("email").value;
    if (validateEmail(email))
        window.location.href = 'clientRequest.html';
    else
        alert('email not valid!')
}

function validateEmail(email) {
    return email.includes("@seb.se");
}

function submitRequest() {
    alert("request submitted");
    window.location.href = 'submittedPage.html';
}
