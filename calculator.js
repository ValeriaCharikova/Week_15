function calcSum() {
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("result").value = Number(a) + Number(b);
  }
  function calcSubtraction() {
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("result").value = a - b;
  }
  function calcMultiplication() {
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("result").value = a * b;
  }
  function calcDivision() {
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    document.getElementById("result").value = a / b;
    if (b == 0) {
      alert("На ноль делить нельзя!");
    }
  }
  