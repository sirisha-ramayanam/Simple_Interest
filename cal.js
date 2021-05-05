function si() {
    var p = document.getElementById("pi").value;
    var r = document.getElementById("ri").value;
    var t = document.getElementById("ti").value;
    var ia = p*(1+r*t)/100;
    var tap = parseInt(p)+ia;
    document.getElementById("si").innerHTML="\n Interest Amount:"+ia;
    document.getElementById("ta").innerHTML="\n Total Amount:"+tap;

}