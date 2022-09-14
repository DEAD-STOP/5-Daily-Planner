// var nineAM = $("9AM");
// var nineAMText = $("9text");
// var nineAMBtn = $("9btn");
var nineAM = document.getElementById("9AM");
var nineAMText = document.getElementById("9text");
var nineAMBtn = document.getElementById("9btn");

var hour = moment().format("H");

nineAMBtn.onclick = function(){
    localStorage.setItem('9text', nineAMText.value);
};

$(nineAMText).val(localStorage.getItem('9text'));

console.log(localStorage);