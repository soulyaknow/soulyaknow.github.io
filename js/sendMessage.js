//function click

if($('#btn-send-drrmo').click(function(){
    if(checkDetails())
    {
        doSendDRRMO();
    }
}));

if($('#btn-send-fireman').click(function(){
    if(checkDetails())
    {
        doSendFireman();
    }
}));

if($('#btn-send-hospital').click(function(){
    if(checkDetails())
    {
        doSendHospital();
    }
}));

if($('#btn-send-police').click(function(){
    if(checkDetails())
    {
        doSendPolice();
    }
}));

var checkDetails=()=>
{
    if($('#sname').val() != "" && $('#rname').val() != "" && $('#email').val() != "" && $('#contact').val()
    != "" && $('#message').val() != "")
    {
        return true;
    }else
    {
        $('#errmsg').text("Please Fill in all the details below");
    }
}

//Send Message to Different Department

var doSendDRRMO=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'DRRMO',sname:$('#sname').val(),rname:$('#rname').val(),email:$('#email').val(),
        contact:$('#contact').val(),message:$('#message').val()},
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

var doSendFireman=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'FIREMAN',sname:$('#sname').val(),rname:$('#rname').val(),email:$('#email').val(),
        contact:$('#contact').val(),message:$('#message').val()},
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

var doSendHospital=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'HOSPITAL',sname:$('#sname').val(),rname:$('#rname').val(),email:$('#email').val(),
        contact:$('#contact').val(),message:$('#message').val()},
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

var doSendPolice=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'POLICE',sname:$('#sname').val(),rname:$('#rname').val(),email:$('#email').val(),
        contact:$('#contact').val(),message:$('#message').val()},
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