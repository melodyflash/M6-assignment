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
// submit           = $('submit')
empForm          = $('empForm')

// // display info entered
const displayInfo = () => (console.log(`ID: ${idNum.value} \nName: ${fullName.value}\nExt: ${ext.value}\nEmail: ${email.value}\nDepartment: ${department.value}`))

empForm.addEventListener('submit', (e) => {
    e.preventDefault()
    displayInfo()
})
