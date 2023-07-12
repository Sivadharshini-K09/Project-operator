function add(){
    var x = parseInt(document.getElementById("n1").value);
    var y = parseInt(document.getElementById("n2").value);
    var z = x+y;
    document.getElementById("add").innerHTML = z;
}

function sub(){
    var x =document.getElementById("n1").value;
    var y =document.getElementById("n2").value;
    var z =x-y;
    document.getElementById("sub").innerHTML = z;

}

function multiply(){
    var x =document.getElementById("n1").value;
    var y =document.getElementById("n2").value;
    var z =x*y;
    document.getElementById("multiply").innerHTML = z;

}

function division(){
    var x =document.getElementById("n1").value;
    var y =document.getElementById("n2").value;
    var z =x/y;
    document.getElementById("division").innerHTML = z;

}