
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault()
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let rules = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    //console.log('email', email)
    
    if ( email.match(rules)) {
        document.getElementById("error-message").innerHTML = "it was not right"
        document.getElementById("error-message").style.display = "none"
        console.log("ishdedi")
    }
    else {
        document.getElementById("error-message").innerHTML = "it was not right"
        document.getElementById("error-message").style.display = "block"
        console.log("islemedi")
    }
})