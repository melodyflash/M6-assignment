// GLOBAL VARIABLES
let idNum
let fullName
let ext
let email
let department      
let submit 
// let output   

// OPTION 1
// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// GET THE DOM ELEMENTS
idNum            = $('idNum')
fullName         = $('fullName')
ext              = $('ext')
email            = $('email')
department       = $('department')
submit           = $('submit')


// // display info entered
const displayInfo = () => (console.log(`${idNum.value}, ${fullName.value}, ${ext.value}, ${email.value}, ${department.value}`))

submit.addEventListener('click', (e) => {
    e.preventDefault()
    displayInfo()
})
