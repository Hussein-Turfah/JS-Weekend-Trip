function merge(left,right){
  let sorted_array = []
  while (left.length && right.length){
    if (left[0]< right[0]){
      sorted_array.push(left.shift());
    }
    else{
      sorted_array.push(right.shift());
  }
return [...sorted_array, ...left, ...right];
}}

function mergeSort(array){
  if (array.length <= 1) return array;

  let mid_number = Math.floor(array.length/2)
  let left = mergeSort(array.slice(0,mid_number))
  let right = mergeSort(array.slice(mid_number))
  return merge(left,right)
}
console.log(mergeSort([4, 5, 4, 3, 9, 8]))

/*function validation(){
const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirm_password = document.getElementById('confirmpassword').value;
const register = document.getElementById('register');
const password_value= /^(?=.*[A-Z])(?=.*[-+_!@#$% ^&*,.?])/;
  /*method for password verification, it means their should be one or more upper 
  ase characters and one or more special characters*/

/*if (fname == ''|| lname == ''||email==''||password==''||confirm_password==''){
  alert('Please fill the remaining fields.');
  return false;
}
//DO NOT FORGET EMAIL VERIFICATION!!

else if(password !== confirm_password){
  alert('Your passwords should be the same.')
  return false
}
else if (!password_value.test(password)||password.length<8){
  alert('Your password should be at least 8 characters long with at least one special character and one upper case letter.')
  return false
}
else{
  console.log('heyy')
  const numbers = prompt('10 numbers please!')

  if (numbers.length=10){ 
    console.log('true')
    x = mergeSort(numbers)
    console.log(x)

  }
  else{
  return false
}}}*/