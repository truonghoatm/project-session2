function doitien() {
    var amount = document.getElementById('amount').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    if(from == "VND" && to == "VND") {
        var area = amount;
        alert("Nhap lai so tien");
    }else {
        if(from == "VND" && to == "USD"){
            var area = amount/23000;
            alert("so tien la:" + area);
        }else{
            if(from == "USD" && to == "USD"){
                alert("Nhap lai");
            }else {
                var area = amount * 23000;
                alert("So tien la:" + area);
            }
        }
    }


}