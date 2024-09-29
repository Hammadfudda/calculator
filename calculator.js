var cal = document.getElementById("cal");

function btn(val){
    cal.value += val;
}
function result(){
    var val = cal.value
    var ans = eval(val);
    cal.value = ans;
}
function clr(){
    cal.value = "";
}