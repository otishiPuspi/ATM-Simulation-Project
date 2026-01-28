// ====== INITIAL SETUP ======
let pinInputs = document.querySelectorAll("#pin-box input");
let currentPin = "";

// first time pin set
if (!localStorage.getItem("pin")) {
  localStorage.setItem("pin", "1234");
}

// ====== KEYPAD ======
function press(num) {
  if (currentPin.length < 4) {
    currentPin += num;
    pinInputs[currentPin.length - 1].value = "●";
  }

  if (currentPin.length === 4) {
    setTimeout(checkPin, 300);
  }
}

function clearPin() {
  currentPin = "";
  pinInputs.forEach(i => i.value = "");
}

// ====== LOGIN CHECK ======
function checkPin() {
  let savedPin = localStorage.getItem("pin");

  if (currentPin === savedPin) {
    alert("Login Successful ✅");
    clearPin();
  } else {
    alert("Wrong PIN ❌");
    clearPin();
  }
}

// ====== FORGOT PASSWORD ======
function openForgot() {
  document.getElementById("forgotBox").style.display = "block";
}

function changePin() {
  let newPin = document.getElementById("newPin").value;

  if (newPin.length !== 4 || isNaN(newPin)) {
    alert("PIN must be exactly 4 digits ❌");
    return;
  }

  // save new pin
  localStorage.setItem("pin", newPin);

  alert("PIN changed successfully ✅");

  // 👉 MAIN PAGE এ পাঠিয়ে দাও
  window.location.href = "main.html";
}

function checkPin() {
  let savedPin = localStorage.getItem("pin");

  if (currentPin === savedPin) {
    window.location.href = "main.html";
  } else {
    alert("Wrong PIN ❌");
    clearPin();
  }
}



