function validation(){
const name = document.forms['registrationform']['name'].value;
const email = document.forms['registrationform']['email'].value;
const password = document.forms['registrationform']['password'].value;
const confirm_password = document.forms['registrationform']['confirmpassword'].value;
const register = document.getElementById('register');

if (name == ''||email==''||password==''||confirm_password==''){
  alert('Please Enter All Required Fields')
  console.log('false')
}}