$(document).ready(function(){
    doRequest();
});

var doRequest =()=>{

    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: {choice:'viewDetails'},
        success: function(data){
            var json = JSON.parse(data);
            var user = "";
            var fname = "";
            var lname = "";
            var mname = "";
            var email = "";
            var gender = "";
            json.forEach(element => {
                user = element.username;
                fname = element.fname;
                lname = element.lname;
                mname = element.mname;
                email = element.email;
                gender = element.gender;
            });           
            $('#profile_user').text(fname);
            $('#user_fname').text(fname);
            $('#user_lname').text(lname);
            $('#user_mname').text(mname);
            $('#user_email').text(email);
            $('#user_gender').text(gender);
        }, 
        error: function (thrownError) {
            console.log(thrownError);
        }
    });
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