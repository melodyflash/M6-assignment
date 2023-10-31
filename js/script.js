// GLOBAL VARIABLES
let idNum, fullName, ext, email, department, empForm
// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)
// GET THE DOM ELEMENTS
idNum            = $('idNum')
fullName         = $('fullName')
ext              = $('ext')
email            = $('email')
department       = $('department')
empForm          = $('empForm')
// display info entered on console
const displayInfo = () => (console.log(`ID: ${idNum.value} \nName: ${fullName.value}\nExt: ${ext.value}\nEmail: ${email.value}\nDepartment: ${department.value}`))
// event listener attached to form on submit
empForm.addEventListener('submit', (e) => {
    e.preventDefault()
    displayInfo()
    empForm.reset()
})
