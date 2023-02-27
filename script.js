function newCourse(event){
  event.preventDefault()
  const name = document.getElementById('name').value
  const crn = document.getElementById('crn').value
  const credits = document.getElementById('credits').value
  const time = document.getElementById('time').value  
  const instructor = document.getElementById('instructor').value

  const newCourse = new course(name, crn, credits, time, instructor)
}
function merge(left, right){
  const merged_array = []

  let leftpart = 0
  let rightpart = 0
  while (leftpart<left.length && rightpart<right.length) {
    if (left[leftpart]< right[rightpart]){
      merged_array.push(left[leftpart])
      leftpart++
    }
    else{
      merged_array.push(right[rightpart])
      rightpart++
  }}
 const sorted_array = [...merged_array, ...left.slice(leftpart), ...right.slice(rightpart)]
 return sorted_array
}
function mergeSort(unsorted_array){
  if (unsorted_array.length < 2) {
    return unsorted_array
  }
  const mid_number = Math.floor(unsorted_array.length/2)
  const left = unsorted_array.slice(0, mid_number)
  const right = unsorted_array.slice(mid_number)

  const left_sort = mergeSort(left)
  const right_sort = mergeSort(right)

  return merge(left_sort, right_sort)
}
function collectNumbers(){
  const numbers = prompt('ENTER NUMBERS PLEASE!')
  document.getElementById('merge').innerHTML = mergeSort(numbers)
}
function collectString(){
  const string = prompt('Enter any word, letters only please!')
  const leng = string.length
    for(let i = 0; i < leng / 2 ; i++){
      if (string[i] !== string[leng-i-1]){
        alert(string + ' is not a palindrome.')
        return
      }
    else{alert(string + ' is a palindrome!'); return}
}
}
function checkPrime(){
  const year = document.getElementById('birth').value
  const this_year = new Date().getFullYear()
  if (year<=this_year){
    const age = this_year - year
    console.log(age,year,this_year)
    //document.getElementById('birth').replaceWith()
    if(age == 2){
      console.log('WOWW, Your Age is Prime!')
      return;
    }
    for(let i = 2; i < age; i++){
      if (age % i == 0) {
        console.log('Your Age is not prime.')
        return;
    }
      else{
        console.log('WOWW, Your Age is Prime!')
        return;
      }
  }}
}

function validation(event){
const f_name = document.getElementById('fname').value;
const m_name = document.getElementById
const l_name = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirm_password = document.getElementById('confirmpassword').value;
const register = document.getElementById('register');
const password_value= /^(?=.*[A-Z])(?=.*[-+_!@#$% ^&*,.?])/;
  /*method for password verification, it means their should be one or more upper 
  ase characters and one or more special characters*/

if (f_name == ''|| l_name == ''||email==''||password==''||confirm_password==''){
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
  document.getElementById('hidden').style.display = "contents";
  const information = {
    first_name: f_name,
    middle_name: m_name,
    last_name: l_name,
    email: email,
    password: password,
  }
  event.preventDefault();
  //using a function to collect numbers from user input
  collectNumbers()
  collectString()
  console.log('yes I am here')

  }
}

class course{
  constructor(name,crn,credit,time,instructors){
  name = this.name;
  crn = this.crn;
  credit = this.credits;
  time = this.time;
  instructors = this.instructors;
}
}
function stringNumbers(){
let string_charactes = document.getElementById('stringnumbers').value;
let string_number = string_charactes.split(',');
for (let i = 0; i < string_number.length; i++){
  if(!isNaN(string_number[i])){
    string_number[i] = string_number[i].toString().split('').reverse('').join('')
    console.log(string_number)
  }
  let final_string = string_number.join('')
  console.log(final_string)
}
}