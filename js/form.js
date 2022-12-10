//button click function 
if($('#btn-reg').click(function(){
    checkFormNotEmpty();
}));

if($('#btn-login').click(function(){
    checkLoginFormNotEmpty();
}));

if($('#btn-reset').click(function(){
    checkIfTrueUser();
}));

//Checker
var checkFormNotEmpty=()=>
{
    if($('#user').val() != "" && $('#pass').val() != "" && $('#fname').val() != "" && $('#lname').val() != "" &&
     $('#mname').val() != "" && $('#address').val() != "" && $('#contact_number').val() != "" &&
     $('#email').val() != "" && $('#gender').val() != ""){
        doRegister();
     }else{
        $('#errmsg').text("Please Fill in all the Field!");
     }
}

var checkLoginFormNotEmpty=()=>
{
    if($('#user').val() != "" && $('#pass').val() != ""){
        doLogin();
    }else{
        $('#errmsg').text("Please Fill in all the Field!");
    }
}

var checkIfTrueUser=()=>
{
    if($('#user').val() != "" && $('#old_pass').val() != "" && $('#new_pass').val() != "")
    {
        doReset();
    }
    else{
        $('#errmsg').text("Please Fill in all the Field!");
    }
}


//function request
var doRegister=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'register', user:$('#user').val(),pass:$('#pass').val(),fname:$('#fname').val(),lname:$('#lname').val(),
        mname:$('#mname').val(), address:$('#address').val(), contact_number:$('#contact_number').val(), 
        email:$('#email').val(), gender:$('#gender').val()},
        success: function(result)
        {
            if(result == 200)
            {
                alert("Account Successfully Created");
                location.replace("login.html");
            }
            else
            {
                $('#errmsg').text("Username Already Been Used Please Choose Another Username");
            }
        },
        error: function(error)
        {

            console.log(error);
        }
    })
}

let login_attemps = 3;
var doLogin=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data: {choice: 'login', user:$('#user').val(),pass:$('#pass').val()},
        success: function(data)
        {
            if(data == 1)
            {
                alert("Welcome"+  " " + $('#user').val());
                location.replace("admin.html");
                
            }
            else if(data == 2)
            {
                alert("Welcome"+  " " + $('#user').val());
                location.replace("afterIndex.html");
            }
            else if(data == 3)
            {
                $('#errmsg').text("Sorry You Already Use All Your Attempt Contact Admin For Changes");
            }
            else
            {
                if(login_attemps == 0)
                {
                    let attempt = 1;
                    let disable = 1;
                    alert("You have " + login_attemps + " attempt left");
                    $('#errmsg').text("No More Login Attempt Reload the page to try");  
                    isLocked(attempt,disable);                 
                }
                else
                {
                    login_attemps -= 1;
                    $('#errmsg').text("Incorrect Username and Password");
                    if(login_attemps == 0)
                    {
                        document.getElementById("user").disabled = true;
                        document.getElementById("pass").disabled = true;
                    }
                }
            }
        },
        error: function(error)
        {
            console.log(error);
        }
    })
}

var doReset=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'reset', user:$('#user').val(),old_pass:$('#old_pass').val(),new_pass:$('#new_pass').val()},
        success: function(res)
        {
            console.log(res);
        },
        error: function(error)
        {
            console.log(error);
        }
    })
}

var doLogout=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'logout'},
        success: function(res)
        {
            if(res==200)
            {
                alert("Logout Successfully")
                setTimeout(()=>{location.replace("index.html");}, 500);
            }
        },
        error: function(error)
        {
            console.log(error);
        }
    })
}

var isLocked=(attempt,disable)=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'lockUser',attempt:attempt,disable:disable,user:$('#user').val()},
        success: function(res)
        {
            console.log(res);
        },
        error: function(error)
        {
            console.log(error);
        }
    })
}
