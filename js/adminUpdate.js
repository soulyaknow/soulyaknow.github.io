$(document).ready(function () {
    displayText();
});

if($('#btn-updateOfficial').click(function(){
    checkIfNotEmpty();
}));

var checkIfNotEmpty=()=>
{
    if($('#fname').val() != "" && $('#position').val() != "" && $('#department').val() != "" &&
    $('#contact_number').val() != "" && $('#gender').val() != "")
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
        data: {choice:'updateOfficial',user_id:localStorage.getItem('user_id'), fname:$('#fname').val(), position:$('#position').val(), department:$('#department').val(),
              contact_number:$('#contact_number').val(), gender:$('#gender').val()},
        success: function(result)
        {
            if(result == 200)
            {
                $('#errmsg').text('Successfully Updated');
                localStorage.clear();
                setTimeout(()=>{location.replace("admin.html");}, 500);
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
    $('#fname').val(localStorage.getItem('fname'));
    $('#position').val(localStorage.getItem('position'));
    $('#department').val(localStorage.getItem('department'));
    $('#contact_number').val(localStorage.getItem('contact_number'));
    $('#gender').val(localStorage.getItem('gender'));
}