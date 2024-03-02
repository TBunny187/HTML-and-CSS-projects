function validateForm() {
    let x = document.forms['myForm']['number'].value;
    if (x === "") {
        alert('Phone Number must be entered');
        return false;
    }
}

function openCloseForm() {
    btnForm = document.querySelector('.form-popup').style;
    btnClass = document.querySelector('.form-popup');

    btnClass.classList.toggle('show-form');

    // if(btnForm.display) {
    //     btnForm.display = '';
    // } else {
    //     btnForm.display = 'block';
    // }
}