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
   // window.location.href = "dashboard.html";
  }else{
    alert("Wrong PIN ❌");
    clearPin();
  }
}
