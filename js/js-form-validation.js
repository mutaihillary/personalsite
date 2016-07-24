
<script>
function formValidation()
{
var uname = document.registration.username;
var uemail = document.registration.email;
<!--name-->
function allLetter(uname)
{
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
<!--email-->
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}


else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
</script>
