$(document).ready(function () {
    doRequest();
});

if ($('#btn-updateOfficial').click(function () {
    checkIfNotEmpty();
}));

var checkIfNotEmpty = () => {
    if ($('#fname').val() != "" && $('#position').val() != "" && $('#department').val() != "" &&
        $('#contact_number').val() != "" && $('#gender').val() != "") {
        doUpdate();
    }
    else {
        $('#errmsg').text("Please Fill in empty field's");
    }
}

var doRequest = () => {
    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: { choice: 'officialList' },
        success: function (data) {
            var json = JSON.parse(data);
            var str = "";
            let ctr = 1;
            var id = "";
            json.forEach(element => {
                str += "<tr>";
                str += "<td>" + ctr + "</td>";
                str += "<td>" + element.fname + "</td>";
                str += "<td>" + element.position + "</td>";
                str += "<td>" + element.department + "</td>";
                str += "<td>" + element.contact_number + "</td>";
                str += "<td>" + element.gender + "</td>";
                str += "<td><button onclick=update('"+element.user_id+"','"+element.fname+"','"+element.position+"','"+element.department+"','"+element.contact_number+"','"+element.gender+"')>Update</button><button onclick='deleteUser("+element.user_id+")'>Delete</button></td>";
                str += "</tr>";
                ctr++;
            });
            $('#officialTbl').append(str);
        },
        error: function (error) {
            console.log(error);
        }
    })
}

var deleteInformation = (user_id) => {
    $.ajax({
        type: "POST",
        url: "./include/router.php",
        data: { choice: 'deleteInformation', user_id: user_id },
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

var doLogout = () => {
    $.ajax({
        type: "POST",
        url: "include/router.php",
        data: { choice: 'logout' },
        success: function (res) {
            if (res == 200) {
                alert("Logout Successfully")
                setTimeout(() => { location.replace("index.html"); }, 500);
            }
        },
        error: function (error) {
            console.log(error);
        }
    })
}

var update = (user_id,fname,position,department,contact_number,gender) => {
    localStorage.setItem('user_id',user_id);
    localStorage.setItem('fname',fname);
    localStorage.setItem('position',position);
    localStorage.setItem('department',department);
    localStorage.setItem('contact_number',contact_number);
    localStorage.setItem('gender',gender);
    location.replace("officialInformation.html");
}

var deleteUser = (user_id) => {
    deleteInformation(user_id);
}

var hideModal = () => {
    document.getElementById('show-modal').style.display = 'none';
}