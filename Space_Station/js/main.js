function validateForm() {
    let x = document.forms['myForm']['number'].value;
    if (x === "") {
        alert('Phone Number must be entered');
        return false;
    }
}