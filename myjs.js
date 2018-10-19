var btnSubmit = document.forms[0]["btn-submit"];
btnSubmit.onclick = function () {
    var txtusername = document.forms[0]["username"];
    var msgUsername = txtusername.nextElementSibling;
    if (txtusername == null || txtusername.value.length == 0) {
        msgUsername.innerHTML = "*Vui lòng nhập tên!";
        msgUsername.classList.add("danger-text");
        msgUsername.classList.remove("hidden-text");
    } else if (txtusername.value.length < 5) {
        msgUsername.innerHTML = "*Tên phải lớn hơn 5 ký tự";
        msgUsername.classList.remove("success-text");
        msgUsername.classList.add("danger-text");
        msgUsername.classList.remove("hidden-text");
    } else if (txtusername.value.length > 20) {
        msgUsername.innerHTML = "*Tên phải ít hơn 20 ký tự.";
        msgUsername.classList.remove("success-text");
        msgUsername.classList.add("danger-text");
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = "Tên hợp lệ.";
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
        msgUsername.classList.remove("hidden-text");
    }
    var txtpassword = document.forms[0]["password"];
    var msgpassword = txtpassword.nextElementSibling;
    if (txtpassword == null || txtpassword.value.length == 0) {
        msgpassword.innerHTML = "*vui lòng nhập password";
        msgpassword.classList.remove("success-text");
        msgpassword.classList.add("danger-text");
        msgpassword.classList.remove("hidden-text");
    } else {
        msgpassword.innerHTML = "Password hợp lệ.";
        msgpassword.classList.remove("danger-text");
        msgpassword.classList.add("success-text");
        msgpassword.classList.remove("hidden-text");
    }
    var txtFullName = document.forms[0]["fullName"];
    var msgFullName = txtFullName.nextElementSibling;
    if (txtpassword == null || txtFullName.value.length == 0) {
        msgFullName.innerHTML = "*vui lòng nhập fulname";
        msgFullName.classList.remove("success-text");
        msgFullName.classList.add("danger-text");
        msgFullName.classList.remove("hidden-text");
    } else if (txtFullName.value.length < 5) {
        msgFullName.innerHTML = "*Fullname phải trên 5 ký tự";
        msgFullName.classList.remove("success-text");
        msgFullName.classList.add("danger-text");
        msgFullName.classList.remove("hidden-text");
    } else if (txtFullName.value.length > 20) {
        msgFullName.innerHTML = "*Fullname phải ít hơn 30 ký tự!";
        msgFullName.classList.remove("success-text");
        msgFullName.classList.add("danger-text");
        msgFullName.classList.remove("hidden-text");
    } else {
        msgFullName.innerHTML = "Fullname hợp lệ.";
        msgFullName.classList.add("success-text");
        msgFullName.classList.remove("hidden-text");
    }
    var txtEmail = document.forms[0]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var a=txtEmail.value.includes("@");
    if (txtpassword == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove("success-text");
        msgEmail.classList.add("danger-text");
        msgEmail.classList.remove("hidden-text");
    }
    else if (a==false){
        msgEmail.innerHTML = "Sai cú pháp email!";
        msgEmail.classList.remove("success-text");
        msgEmail.classList.add("danger-text");
        msgEmail.classList.remove("hidden-text");
    }
    else{
        msgEmail.innerHTML = "Email hợp lệ.";
        msgEmail.classList.remove("danger-text");
        msgEmail.classList.add("success-text");
        msgEmail.classList.remove("hidden-text");
    }
}
