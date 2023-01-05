// Regular expressions for checking of user inputs
const regexp_email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const regexp_characters = /^[A-Za-zА-Яа-я].{1,29}$/;
const regexp_password = /(?=.*[a-z].*[a-z].*[a-z].*)(?=.*\d.*\d.*\d.*)[a-z0-9]{6,}/;

// All input fields
const first_name = document.getElementById("fname");
const last_name = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Checking symbols in inputs
function validateEmail(email) {
    return regexp_email.test(email);
}

function validateName(name) {
    return regexp_characters.test(name);
}

function validatePassword(password) {
    return regexp_password.test(password);
}

// Validating inputs (oninput)
function Validate() {

    first_name.oninput = function() {
        if (!validateName(first_name.value)) {
            var element_border = document.getElementById("fname");
            var element = document.getElementById("fname_error");
            element_border.style.border = "2.5px solid rgb(255 0 0)";
            element.style.display = "block";
            element.style.color = "red";
            element.innerHTML = "Имя должно содержать от 2 до 30 символов";
        } else {
            var element_border = document.getElementById("fname");
            var element = document.getElementById("fname_error");
            element_border.style.border = "2.5px solid rgb(51 233 51)";
            element.style.display = "none";
        }
    }

    last_name.oninput = function() {
        if (!validateName(last_name.value)) {
            var element_border = document.getElementById("lname");
            var element = document.getElementById("lname_error");
            element_border.style.border = "2.5px solid rgb(255 0 0)";
            element.style.display = "block";
            element.style.color = "red";
            element.innerHTML = "Фамилия должна содержать от 2 до 30 символов";
        } else {
            var element_border = document.getElementById("lname");
            var element = document.getElementById("lname_error");
            element_border.style.border = "2.5px solid rgb(51 233 51)";
            element.style.display = "none";
        }
    }

    email.oninput = function() {
        if (!validateEmail(email.value)) {
            var element_border = document.getElementById("email");
            var element = document.getElementById("email_error");
            element_border.style.border = "2.5px solid rgb(255 0 0)";
            element.style.display = "block";
            element.style.color = "red";
            element.innerHTML = "Email должен содержать 6-50 символов и быть в правильном формате";
        } else {
            var element_border = document.getElementById("email");
            var element = document.getElementById("email_error");
            element_border.style.border = "2.5px solid rgb(51 233 51)";
            element.style.display = "none";
        }
    }

    password.oninput = function() {
            if (!validatePassword(password.value)) {
                var element_border = document.getElementById("password");
                var element = document.getElementById("password_error");
                element_border.style.border = "2.5px solid rgb(255 0 0)";
                element.style.display = "block";
                element.style.color = "red";
                element.innerHTML = "Пароль должен содержать как минимум 3 символа и 3 цифры";
            } else {
                var element_border = document.getElementById("password");
                var element = document.getElementById("password_error");
                element_border.style.border = "2.5px solid rgb(51 233 51)";
                element.style.display = "none";
            }
        }
    }
    setTimeout(Validate, 50);

// Allowing user to see/hide password
function ShowPassword() {
    var password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Preventing page from resubmitting
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }