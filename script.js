function validation(){
const fname = document.getElementById('fname').value
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value
const password = document.getElementById('password').value;
const confirm_password = document.getElementById('confirmpassword').value;
const register = document.getElementById('register');
const password_value= /^(?=.*[A-Z])(?=.*[-+_!@#$% ^&*,.?])/
/*method for password verification, it means their should be one or more upper 
case characters and one or more special characters*/

if (fname == ''|| lname == ''||email==''||password==''||confirm_password==''){
  alert('Please fill the remaining fields.')
}
//DO NOT FORGET EMAIL VERIFICATION!!

else if(password !== confirm_password){
  alert('Your passwords should be the same.')
}
else if (!password_value.test(password)||password.length<8){
  alert('Your password should be at least 8 characters long with at least one special character and one upper case letter.')
}
else{
  console.log('heyy')
}
}