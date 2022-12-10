$(document).ready(function(){
    doRequest();
});

if($('#btn-trans').click(function(){
    checkNotEmpty();
}));

var checkNotEmpty=()=>
{
    if($('#receiver').val() != "" && $('#amount').val() != "")
    {
        doProceedTransfer();
    }
    else
    {
        $('#errmsg').text("Please Fill in All the Fields");
    }
}

var doProceedTransfer=()=>
{
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data:{choice:'sendMoney', receiver:$('#receiver').val(), amount:$('#amount').val()},
        success: function(res)
        {
            if(res == 200)
            {
                $('#errmsg').text("Transfer Successfully");
                setTimeout(()=>{location.reload();}, 1000);    
            }
        },
        error: function(error)
        {
            console.log(error);
        }
    })
}

var doRequest =()=>{

    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: {choice:'viewMoney'},
        success: function(data){
            var json = JSON.parse(data);
            var str = "";
            let ctr = 1;
            json.forEach(element => {
                str += "<tr>";
                str += "<td>"+ctr+"</td>";
                str += "<td>"+element.receiver+"</td>";
                str += "<td>"+element.amount+"</td>";
                str += "<td>"+element.date_created+"</td>";
                str += "<td>"+element.status+"</td>";
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