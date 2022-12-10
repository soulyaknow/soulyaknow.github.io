$(document).ready(function(){
    doRequest();
});

var doRequest =()=>{
    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: {choice:'viewTable'},
        success: function(data){
            var json = JSON.parse(data);
            var str = "";
            let ctr = 1;
            json.forEach(element => {
                
                str += "<tr>";
                str += "<td>"+ctr+"</td>";
                str += "<td>"+element.sender_name+"</td>";
                str += "<td>"+element.receiver_name+"</td>";
                str += "<td>"+element.email+"</td>";
                str += "<td>"+element.phone_no+"</td>";
                str += "<td><button type='button' onclick='reply("+element.ref_num+")'>View</button></td>";
                str += "</tr>";
                ctr++;
            });
            $('#tblmsg').append(str);
        }, 
        error: function (thrownError) {
            console.log(thrownError);
        }
    });
}

var getMessage=(key)=>
{
    $.ajax({
        type: "POST", 
        url: "./include/router.php",
        data: {choice: 'getMessage',key:key},
        success: function(data)
        {
            var json = JSON.parse(data);
            json.forEach(element => {
                $('#show-message').text(element.message);    
            });
            
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

var reply =(key)=>
{
    // alert(key);
    document.getElementById('show-modal').style.display = 'flex';
    getMessage(key);
}

var hideModal=()=>
{
    document.getElementById('show-modal').style.display = 'none';
}