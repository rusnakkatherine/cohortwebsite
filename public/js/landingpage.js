document.getElementById('regForm').addEventListener('submit', submitForm);
var form = document.getElementById('regForm');


// submit form
function submitForm(e) {
    e.preventDefault();


    var fname = getInputValues('fname');
    var lname = getInputValues('lname');
    var company = getInputValues('company');
    var email = getInputValues('email');
    var phone = getInputValues('phone');

    db.collection("messages").add({
        fname: fname,
        lname: lname,
        company: company,
        email: email,
        phone: phone
    });
    form.requestFullscreen();
    return false;
}


// get form input values
function getInputValues(id) {
    return document.getElementById(id).value;
}


