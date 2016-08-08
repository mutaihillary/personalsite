
function formValidation()
{
<!--name-->
function ValidateName(name)
{
  if(form_validate.name.value==""){
      alert("Please enter your name!");
      form_validate.name.focus();
      return false;
    }
var name = /^[A-Za-z]+$/;
if(regex.test(form_validate.name.value)==false){
  alert('Name must contain only letters!');
  form_validate.name.focus();
  return false;
}
return true;
}
<!--email-->
function ValidateEmail(uemail)
{
  if(form_validate.email.value==""){
      alert("Please enter an email!");
      form_validate.email.focus();
      return false;
    }
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(regex.test(form_validate.email.value)==false){
      alert('Invalid email address');
      form_validate.email.focus();
      return false;
    }
  return true;
}

/**function validatePhone() {
  var phoneNumber = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(form_validate.contact.value.match(phoneNumber)) {
    return true;
  }
  else {
    alert("Phone number is required!");
    return false;
  }*/

}
