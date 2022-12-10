$(document).ready(function(){
    doRequest();
});

var doRequest=()=>
{
    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: {choice:'userInformation'},
        success: function(data)
        {
            var json = JSON.parse(data);
            var str = "";
            let ctr = 1;
            json.forEach(element => {
                str += "<tr>";
                str += "<td>"+ctr+"</td>";
                str += "<td>"+element.username+"</td>";
                str += "<td>"+element.fname+"</td>";
                str += "<td>"+element.lname+"</td>";
                str += "<td>"+element.mname+"</td>";
                str += "<td>"+element.email+"</td>";
                str += "<td>"+element.contact_number+"</td>";
                str += "<td>"+element.address+"</td>";
                str += "<td>"+element.gender+"</td>";
                str += "<td>"+element.isLock+"</td>";
                str += "<td><button onclick=update('"+element.user_id+"','"+element.username+"','"+element.fname+"','"+element.lname+"','"+element.mname+"','"+element.email+"','"+element.contact_number+"','"+element.address+"','"+element.gender+"','"+element.isLock+"')>Update</button><button onclick='deleteUser("+element.user_id+")'>Delete</button></td>";
                str += "</tr>";
                ctr++;
            });
            $('#userTbl').append(str);
        },
        error: function(error)
        {
            console.log(error);
        }
    })
}

var deleteInformation=(user_id)=> {
    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: { choice: 'deleteUserInformation', user_id: user_id },
        success: function (result) {
            if (result == 200) {
                alert("Delete Successfully");
                setTimeout(() => { location.reload(); }, 500);
            }
        },
        error: function (error) {
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

var update=(user_id,username,fname,lname,mname,email,contact_number,address,gender,isLock)=>
{
    localStorage.setItem('user_id',user_id);
    localStorage.setItem('username',username);
    localStorage.setItem('fname',fname);
    localStorage.setItem('lname',lname);
    localStorage.setItem('mname',mname);
    localStorage.setItem('email',email);
    localStorage.setItem('contact_number',contact_number);
    localStorage.setItem('address',address);
    localStorage.setItem('gender',gender);
    localStorage.setItem('isLock',isLock);
    location.replace("userInformationUpdate.html");
}

var deleteUser=(user_id)=>
{
    deleteInformation(user_id);
}