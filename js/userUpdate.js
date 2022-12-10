$(document).ready(function () {
    displayText();
});

if($('#btn-updateUserInfo').click(function(){
    checkIfNotEmpty();
}));

var checkIfNotEmpty=()=>
{
    if($('#username').val() != "" && $('#fname').val() != "" && $('#lname').val() != "" &&
    $('#mname').val() != "" && $('#email').val() != "" && $('#contact_number').val() !=""  && $('#address').val() !=""
    && $('#gender').val() !="" && $('#isLocked').val() !="")
    {
        doUpdate();
    }
    else
    {
        $('#errmsg').text("Please Fill in empty field's");
    }
}

var doUpdate=()=>
{
    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: {choice:'updateUserInfo',user_id:localStorage.getItem('user_id'), username:$('#username').val(), fname:$('#fname').val(), lname:$('#lname').val(),
              mname:$('#mname').val(), email:$('#email').val(), contact_number:$('#contact_number').val(), address:$('#address').val(), gender:$('#gender').val(), 
              isLocked:$('#isLocked').val()},
        success: function(result)
        {
            if(result == 200)
            {
                $('#errmsg').text('Successfully Updated');
                localStorage.clear();
                setTimeout(()=>{location.replace("adminUserTable.html");}, 500);
            }
            else
            {
                $('#errmsg').text("Please Fill in empty field's");
                location.reload();
            }
        },
        error: function(error)
        {
            console.log(error);
        }
    })
}

var displayText=()=>
{
    $('#username').val(localStorage.getItem('username'));
    $('#fname').val(localStorage.getItem('fname'));
    $('#lname').val(localStorage.getItem('lname'));
    $('#mname').val(localStorage.getItem('mname'));
    $('#email').val(localStorage.getItem('email'));
    $('#contact_number').val(localStorage.getItem('contact_number'));
    $('#address').val(localStorage.getItem('address'));
    $('#gender').val(localStorage.getItem('gender'));
    $('#isLocked').val(localStorage.getItem('isLock'));
}