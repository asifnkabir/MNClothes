let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let submitBtnInput = document.getElementById('submitBtn');

submitBtnInput.addEventListener('click', function () {

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === "" || password === ""){
        alert('Please fill in all fields');
    }
    else if (username === 'asif' && password === '1234'){
            alert('You are logged in!')
            window.location.href = "products.html";
    }
        
    else{
        alert("Wrong log in information provided.");
    }
})