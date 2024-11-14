
const handleSubmitBtn = () => {
    const formValue = document.formValue;
    const nameValue = formValue.name.value;
    const emailValue = formValue.email.value;
    const passValue = formValue.pass.value;
    const genderValue = formValue.gender.value;
    const addressValue = formValue.address.value;
    const roundValue = formValue.round.value;

    let subjectValue = '';

    for (let i = 0; i < formValue.subject.length; i++) {
        if (formValue.subject[i].checked) {
            subjectValue += formValue.subject[i].value + ','
        }
    }
    subjectValue = subjectValue.slice(0, -1);

    if (nameValue && emailValue && passValue && genderValue && addressValue && roundValue) {
        const openWindow = window.open("", "", "width=600px, height=400px, top=150px, left=700px");

        with (openWindow.document) {

            write(`<div 
                style=" width: 400px;
                margin: 0 auto;
                padding: 40px;
                border-radius: 5px;
                color: white;
                background: linear-gradient(to right, rgb(38, 54, 54), rgb(53, 114, 114));
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                "
                >`);
            write(`Name: ${nameValue} <br> <br>`);
            write(`Email: ${emailValue} <br> <br>`);
            write(`Password: ${passValue} <br> <br>`);
            write(`Gender: ${genderValue} <br> <br>`);
            write(`Round: ${roundValue} <br> <br>`);
            write(`Subject: ${subjectValue} <br> <br>`);
            write(`Address: ${addressValue} <br> <br>`);

            write(`<button onclick="self.close()"
                style="padding: 10px 20px;
                border: none;
                outline: none;
                border-radius: 5px;
                color: white;
                background-color: red;
                margin-right:10px;
                "
                >Close</button>`);
            write(`<button onclick="self.print()"
                 style="padding: 10px 20px;
                border: none;
                outline: none;
                border-radius: 5px;
                color: white;
                background-color: green;
                "
                >Print</button>`);
        }
    }
    else {
        alert('Please Properly Fillup Your Input Field');
    }
}


// check name validation
const nameValidChecker = () => {
    const name = document.getElementById('name').value;
    const namePattern = /^[A-Za-z][A-Za-z0-9. ]{3,11}$/;
    const nameValidMessage = document.querySelector('.nameMessage');
    const nameField = document.getElementById('name');

    if (!namePattern.test(name)) {
        nameField.classList.add('invalid');
        nameField.classList.remove('valid');
        nameValidMessage.style.display = "block";
    }
    else {
        nameField.classList.add('valid');
        nameField.classList.remove('invalid');
        nameValidMessage.style.display = "none";
    }
}

// check email validation
const emailValidChecker = () => {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-z0-9.%+-]+@gmail\.com$/;
    const emailValidMessage = document.querySelector('.emailMessage');
    const emailField = document.getElementById('email')

    if (!emailPattern.test(email)) {
        emailField.classList.add('invalid');
        emailField.classList.remove('valid');
        emailValidMessage.style.display = "block";
    }
    else {
        emailField.classList.add('valid');
        emailField.classList.remove('invalid');
        emailValidMessage.style.display = "none";
    }
}

// check pass validation
const passValidChecker = () => {
    const pass = document.getElementById('pass').value;
    const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z0-9. ]{4,8}$/;
    const passValidMessage = document.querySelector('.passMessage');
    const passField = document.getElementById('pass');

    if (!passPattern.test(pass)) {
        passField.classList.add('invalid');
        passField.classList.remove('valid');
        passValidMessage.style.display = "block";
    }
    else {
        passField.classList.add('valid');
        passField.classList.remove('invalid');
        passValidMessage.style.display = "none";
    }
}
