
document.querySelector('#btnSubmit')
.addEventListener('click', function(){
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
       errorString += "<li>Sorry the user name is too short</li>";
       document.querySelector('#txtUserNameError').innerHTML = "Sorry, the user name is too short";
   }
   if (isEmailInvalid) {
       errorString += "<li>The email is invalid</li>";
       document.querySelector('#txtEmailError').innerHTML = "The email is invalid";
   }
   if (isPasswordTooShort) {
       errorString += "<li>The password is too short</li>";
       document.querySelector('#txtPasswordError').innerHTML = "The password is too short. Please make sure it has at least 7 characters"
   }
   if (isConditionNotAccepted) {
       errorString += "<li>Please accept the terms and conditions</li>";
       document.querySelector('#txtConditonError').innerHTML = "Please accept the terms and conditions";
   }

   document.querySelector('#errors').innerHTML = errorString;
   
   if (isUserNameTooShort || isEmailInvalid || isPasswordTooShort || isConditionNotAccepted) {
       document.querySelector('#errors').style.display = 'block';
   }

})