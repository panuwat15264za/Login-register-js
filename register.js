window.onload = pageLoad;

function pageLoad() {
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"];

    var error = document.getElementById("errormsg");
    var repassT = true;
    error.innerHTML = "";
    
    if (pass[0].value != pass[1].value)
    {
        error.innerHTML += "สมัครไม่ถูกต้อง, โปรดลองอีกครั้ง";
        repassT = false;
    }
    return repassT;
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}