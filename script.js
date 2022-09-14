var nineAM = document.getElementById("9AM");
var tenAM = document.getElementById("10AM");
var elevenAM = document.getElementById("11AM");
var twelveAM = document.getElementById("12AM");
var onePM = document.getElementById("1PM");
var twoPM = document.getElementById("2PM");
var threePM = document.getElementById("3PM");
var fourPM = document.getElementById("4PM");
var fivePM = document.getElementById("5PM");

var nineAMText = document.getElementById("9text");
var tenAMText = document.getElementById("10text");
var elevenAMText = document.getElementById("11text");
var twelveAMText = document.getElementById("12text");
var onePMText = document.getElementById("1text");
var twoPMText = document.getElementById("2text");
var threePMText = document.getElementById("3text");
var fourPMText = document.getElementById("4text");
var fivePMText = document.getElementById("5text");

var nineAMBtn = document.getElementById("9btn");
var tenAMBtn = document.getElementById("10btn");
var elevenAMBtn = document.getElementById("11btn");
var twelveAMBtn = document.getElementById("12btn");
var onePMBtn = document.getElementById("1btn");
var twoPMBtn = document.getElementById("2btn");
var threePMBtn = document.getElementById("3btn");
var fourPMBtn = document.getElementById("4btn");
var fivePMBtn = document.getElementById("5btn");

var hour = moment().format("H");

// var setStorage = (local, text) => {
//     localStorage.setItem(local, text);
// }
// nineAMBtn.onclick = setStorage('9text', nineAMText.value);

nineAMBtn.onclick = function(){
    localStorage.setItem('9text', nineAMText.value);
};
tenAMBtn.onclick = function(){
    localStorage.setItem('10text', tenAMText.value);
};
elevenAMBtn.onclick = function(){
    localStorage.setItem('11text', elevenAMText.value);
};
twelveAMBtn.onclick = function(){
    localStorage.setItem('12text', twelveAMText.value);
};
onePMBtn.onclick = function(){
    localStorage.setItem('1text', onePMText.value);
};
twoPMBtn.onclick = function(){
    localStorage.setItem('2text', twoPMText.value);
};
threePMBtn.onclick = function(){
    localStorage.setItem('3text', threePMText.value);
};
fourPMBtn.onclick = function(){
    localStorage.setItem('4text', fourPMText.value);
};
fivePMBtn.onclick = function(){
    localStorage.setItem('5text', fivePMText.value);
};

$(nineAMText).val(localStorage.getItem('9text'));
$(tenAMText).val(localStorage.getItem('10text'));
$(elevenAMText).val(localStorage.getItem('11text'));
$(twelveAMText).val(localStorage.getItem('12text'));
$(onePMText).val(localStorage.getItem('1text'));
$(twoPMText).val(localStorage.getItem('2text'));
$(threePMText).val(localStorage.getItem('3text'));
$(fourPMText).val(localStorage.getItem('4text'));
$(fivePMText).val(localStorage.getItem('5text'));

// var begoneVal = () => {
//     localStorage.clear;
// }

// begoneVal();

console.log(localStorage);