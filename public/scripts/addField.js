// search for button
document.querySelector("#add-time")
// When click in button
.addEventListener('click',cloneField)


// run a action
function cloneField() {
    // Clone the fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)    

    // get the fields
    const fields = newFieldContainer.querySelectorAll('input');
   
    // for each fields, clear
    fields.forEach(function(field) {
       field.value = ""
    })
   
    // Place on page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
