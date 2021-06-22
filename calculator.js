const paragraph = document.querySelector('.display');
const operators =["+","−","÷","×"];
const operatorsCorrect = {"+":"+","−":"-","÷":"/","×":"*"};
const numbers = ["1","2","3","4","5","6","7","8","9"];

document.querySelectorAll('.math-ops').forEach(el => {
    el.addEventListener('click', function(event) {
        if (paragraph.innerText==="0" && numbers.indexOf(event.target.innerText) >=0) {
            paragraph.innerText="";
            paragraph.innerText+=event.target.innerText;
        } else if (operators.indexOf(paragraph.innerText.slice(-1)) >=0 && operators.indexOf(event.target.innerText) >=0) {
            paragraph.innerText=paragraph.innerText;
        } else if (operators.indexOf(paragraph.innerText.slice(-1)) >=0 && event.target.innerText==="0") {
            paragraph.innerText=paragraph.innerText;
        } else if (paragraph.innerText==="0" && event.target.innerText==="0") {
            paragraph.innerText=paragraph.innerText;
        } else {
            paragraph.innerText+=event.target.innerText;
        };
    });
});


document.querySelector('.reset').addEventListener('click', function(event) {
    paragraph.innerText="0";
  });

document.querySelector('.remove').addEventListener('click', function(event) {
      if (paragraph.innerText==="0") {
        paragraph.innerText= paragraph.innerText;
      } else if (paragraph.innerText.length===1) {
        paragraph.innerText= "0";
      } else {
        paragraph.innerText= paragraph.innerText.slice(0, -1);
      }
  });

document.querySelector('.result').addEventListener('click', function(event) {
    paragraph.innerText=eval(paragraph.innerText.replace(/["+","−","÷","×"]/g, m => operatorsCorrect[m]))
  });