// setup a table of all the text that needs translation
let englishErrors = {
    "username_too_short": "Your username is too short. Please have at least 3 characters",
    "email_invalid": "Your email address is invalid",
    "password_too_short": "Your password is too short",
    "not_accepted":"Please accept the terms and conditions"
}

let japaneseErrors = {
    "username_too_short":"ユーザー名が短すぎます。 3文字以上お願いします",
    "email_invalid": "メールアドレスが無効です",
    "password_too_short":"スワードが短すぎます",
    "not_accepted":"利用規約に同意してください"
}

let errorMessages = {
    'en':englishErrors,
    'jp':japaneseErrors
}

let currentLanguage = 'jp';

document.querySelector('#btnSubmit')
.addEventListener('click', function(){


    let languageSelect = document.querySelector('#language');
    currentLanguage = languageSelect.value;

   // flags
   // each flag represents one error (like a red flag)
   let isUserNameTooShort = false;  // will be true if user name is less than 3 characters
   let isEmailInvalid = false; // will be true if the email is in an invalid format
   let isPasswordTooShort = false; // password must be at least seven characters
   let isConditionNotAccepted = false; // will be false if the terms and conditions are not accepted

   // check if the username is ok
   let username = document.querySelector("#txtUserName").value;

   if (username.length < 3) {
       isUserNameTooShort = true;
   }

   let email = document.querySelector('#txtEmail').value;

   if (!email.includes('@')  || !email.includes('.')) {
     isEmailInvalid = true;
   }

   let password = document.querySelector('#txtPassword').value;
   if (password.length < 7) {
       isPasswordTooShort = true;
   }

   let conditionCheckbox = document.querySelector('#agree').checked;
   if (!conditionCheckbox) {
    isConditionNotAccepted = true;
   }

   let errorString = "";
   if (isUserNameTooShort) {
       document.querySelector('#txtUserNameError').innerHTML = errorMessages[currentLanguage].username_too_short;

   }
   if (isEmailInvalid) {
    document.querySelector('#txtEmailError').innerHTML = errorMessages[currentLanguage].email_invalid;
    
   }
   if (isPasswordTooShort) {
       document.querySelector('#txtPasswordError').innerHTML= errorMessages[currentLanguage].password_too_short;
    
   }
   if (isConditionNotAccepted) {
    document.querySelector('#txtConditonError').innerHTML =  errorMessages[currentLanguage].not_accepted;
    
   }


})