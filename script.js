function validation(){
const fname = document.getElementById('fname').value
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value
const password = document.getElementById('password').value;
const confirm_password = document.getElementById('confirmpassword').value;
const register = document.getElementById('register');

const password_value= "^(?=.*[A-Z])(?=.*[a-z])(?=.*[-+_!@#$% ^&*,.?]).+$" 
/*method for password verification, it means their should be one or more upper 
case characters and one or more special characters*/

if (fname == ''|| lname == ''||email==''||password==''||confirm_password==''){
  alert('Please Enter All Required Fields')
  console.log(fname)
  console.log(lname)
  console.log(email)
  console.log(password)
  console.log(confirm_password)
  console.log('false')
  return false
}
//DO NOT FORGET EMAIL VERIFICATION!!

if(password !== confirm_password){
  console.log(password)
  console.log(confirm_password)
  console.log('password error')
}
if(password !== password_value||password.length<8){
  console.log('password !== password_value||password.length<8')
}
}