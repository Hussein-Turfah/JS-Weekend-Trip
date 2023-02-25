function validation(){
const name = document.forms['registrationform']['name'].value;
const email = document.getElementsByClassName('email');
const password = document.getElementsByClassName('password');
const confirm_password = document.getElementsByClassName('confirmpassword');
const register = document.getElementById('register');

  console.log(name)
    if (name == "" ||email==''||password==''||confirm_password==''){
      alert('Please Fill in The Fields')
      console.log('false')
    }}//)//register end
//}
