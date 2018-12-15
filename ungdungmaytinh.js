function addition() {
    var a = parseInt(document.getElementById("caculator1").value);
    var b = parseInt(document.getElementById("caculator2").value);
    var c = a + b;
    alert("Ket qua la:" + c);
}
function subtraction() {
    var a = document.getElementById("caculator1").value;
    var b = document.getElementById("caculator2").value;
    var c = a - b;
    alert("Ket qua la:" + c);

}
function multiplication() {
    var a = document.getElementById("caculator1").value;
    var b = document.getElementById("caculator2").value;
    var c = a * b;
    alert("Ket qua la:" + c);


}
function division() {
    var a = document.getElementById("caculator1").value;
    var b = document.getElementById("caculator2").value;
    var c = a / b;
    alert("Ket qua la:" + c);

}