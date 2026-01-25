let pin = "";
let inputs = document.querySelectorAll("#pin-box input");
const correctPin = "1234";

function press(num){
  if(pin.length < 4){
    pin += num;
    inputs[pin.length - 1].value = "●";
  }

  if(pin.length === 4){
    setTimeout(checkPin, 300);
  }
}

function clearPin(){
  pin = "";
  inputs.forEach(i => i.value = "");
}

function checkPin(){
  if(pin === correctPin){
    alert("Login Successful ✅");
  }else{
    alert("Wrong PIN ❌");
    clearPin();
  }
}
let pinInputs = document.querySelectorAll("#pin-box input");
let currentPin = "";


if (localStorage.getItem("pin") === null) {
  localStorage.setItem("pin", "1234");
  localStorage.setItem("balance", "1000");
}

function press(num) {
  if (currentPin.length < 4) {
    currentPin += num;
    pinInputs[currentPin.length - 1].value = "*";
  }

  // when 4 digit entered
  if (currentPin.length === 4) {
    checkPin();
  }
}

function clearPin() {
  currentPin = "";
  pinInputs.forEach(input => input.value = "");
}

function checkPin() {
  let savedPin = localStorage.getItem("pin");

  setTimeout(() => {
    if (currentPin === savedPin) {
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Wrong PIN");
      clearPin();
    }
  }, 300);
}
function checkPin() {
  let savedPin = localStorage.getItem("pin");

  setTimeout(() => {
    if (currentPin === savedPin) {
      window.location.href = "main.html";
    } else {
      alert("Wrong PIN ❌");
      clearPin();
    }
  }, 300);
}


