
//function 1 - msg
    var time = new Date();
    var currentTime = time.getHours();
    var hello; 
    if (currentTime > 15){
      hello = 'Good Evening!';
    }else if (currentTime > 11){
      hello = 'Good Afternoon!';
    }else if (currentTime > 5){
      hello = 'Good Morning!';
    }else{  msg = 'Welcome to my site';}
      document.getElementById("hello").textContent = hello;
   
      
// function 2 - banner text
window.onload = function() {
  var day = new Date();
  var saleDay = day.getDay();
  var msg; 
  if (saleDay == 5){
    msg = '15% off, Sale ends in 3 day';
  }else if (saleDay == 6){
    msg = '15% off, Sale ends in 2 day';
  }else if (saleDay == 0){
    msg = '15% off, Sale ends in 1 day';
  }else{  msg = 'Sale Begins Friday';}
    document.getElementById("ban").textContent = msg;
  }
  

// funtction 3 - back to top:
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// function 4 - get user name & cart button
var name = prompt("Welcome to EcoPeach! What is your name?")
document.getElementById("bCart").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("iCartID").classList.toggle("show");
}
document.getElementById('user').innerHTML = name;


// function 5 - sale price
var elements = document.getElementsByClassName('price');
if (elements.length > 2) { 
  var el = elements[0];
  var el2 = elements[1];
  var el3 = elements[2];
  var el4 = elements[3];

  el.className = 'pr';    
  el2.className = 'pr';
  el3.className = 'pr';    
  el4.className = 'pr';

};
var car1 = document.getElementById('suvPrice');
var car2  = document.getElementById('wPrice');
var car3  = document.getElementById('vanPrice');
var car4  = document.getElementById('carPrice');

var sale;
var saleDay = time.getDay();
if (saleDay == 0 || saleDay == 5 || saleDay == 6){
  sale = .85;
}else{
  sale = 1;
};
var suvValue = (51995 * sale);
var wValue = (49430 * sale);
var vanValue = (70125 * sale);
var carValue = (25290 * sale);

car1.textContent = suvValue.toFixed(2);
car2.textContent = wValue.toFixed(2);
car3.textContent = vanValue.toFixed(2);
car4.textContent = carValue.toFixed(2);


// function 6 - on html file, line 62

// funtion 7 - add

total = document.getElementById('total');
priceA = document.getElementById('A');
priceB = document.getElementById('B');
priceC = document.getElementById('C');
priceD = document.getElementById('D');

function myFuncA(){
  document.getElementById('a').textContent = 'EcoPeach - Hummingbird'
  priceA.textContent = suvValue;
  total.textContent = suvValue;
};
function myFuncB(){
  document.getElementById('b').textContent = 'EcoPeach - Sparrow'
  priceB.textContent = wValue;
  total.textContent = suvValue + wValue;
};
function myFuncC(){
  document.getElementById('c').textContent = 'EcoPeach - Vulture'
  priceC.textContent = vanValue;
  total.textContent = suvValue + wValue + vanValue;
};
function myFuncD(){
  document.getElementById('d').textContent = 'EcoPeach - Bluejay'
  priceD.textContent = carValue;
  total.textContent = suvValue + wValue + vanValue + carValue;
};





