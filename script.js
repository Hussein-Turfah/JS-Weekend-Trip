function validation(){
const fname = document.forms['registrationform']['fname'].value;
const lname = document.forms['registrationform']['lname'].value;
const email = document.forms['registrationform']['email'].value;
const password = document.forms['registrationform']['password'].value;
const confirm_password = document.forms['registrationform']['confirmpassword'].value;
const register = document.getElementById('register');

if (fname == ''|| lname == ''||email==''||password==''||confirm_password==''){
  alert('Please Enter All Required Fields')
  console.log(email)
  console.log(fname)
  console.log(lname)
  console.log(password)
  console.log(confirm_password)
  console.log('false')
}

}