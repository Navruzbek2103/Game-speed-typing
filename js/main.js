let array = ["alias", "consequatur", "voluptates", "dolores", "voluptatibus", "laborum", "culpa", "numquam", "Perspiciatis", "maxime", "officia", "quam", "odit", "nobis", "esse", "nihil", "veniam", "corporis", "voluptatibus", "harum", "Veritatis", "elit", "adipisicing", "consectetur", "amet", "sit", "dolor", "ipsum", "Lorem"]

let elBody = document.querySelector("body")
let elContainer = document.querySelector(".container");
let elHeading = document.querySelector(".view-word");
let elInput = document.querySelector("#word-input");
let boxResult = document.querySelector(".resultGame")
let coinStrong = document.querySelector(".coin")
let errorStrong = document.querySelector(".error")
let elSpanCoin = document.querySelector(".result-span-coin");
let elSpanError = document.querySelector(".result-span-error");
let elClockTitle = document.querySelector(".clock-title");
let elsecundSpan = document.querySelector(".secund-span");

elClockTitle.style.margin = '0px'

elContainer.style.width = "300px"
elContainer.style.margin = "30px auto"
elContainer.style.display = "flex"
elContainer.style.gap = "25px"
elContainer.style.flexDirection = "column"
elContainer.style.alignItems = "center"
elContainer.style.padding = "30px 20px"
elContainer.style.boxShadow = "0 0 20px 5px blue"
elContainer.style.borderRadius = "10px"

elInput.style.fontSize = "16px"
elInput.style.fontFamily = "Arial"
elInput.style.padding = "8px"
elInput.style.borderRadius = "5px"
elInput.placeholder = "Input word"

boxResult.style.display = "flex";
boxResult.style.width = "80%";
boxResult.style.justifyContent = "space-between"

coinStrong.style.fontSize = "20px"
errorStrong.style.fontSize = "20px"

let rand = Math.trunc(Math.random() * array.length)
elHeading.textContent = array[rand]
elHeading.style.margin = "0"


elSpanCoin.textContent = 0;
elSpanError.textContent = 0;

setInterval(() => {
  elsecundSpan.textContent -= 1;
  if(elsecundSpan.textContent == 0){
    elBody.style.backgroundColor = 'red'
    elContainer.style.backgroundColor = "white"
    elContainer.style.boxShadow = "0 0 30px 15px yellow"
  }
}, 1000);

elInput.addEventListener("input", () => {
  if(elHeading.textContent === elInput.value){
    elSpanCoin.textContent++
    let rand = Math.trunc(Math.random() * array.length)
    elHeading.textContent = array[rand]
    elInput.value = "";
  }

})
