let btnCheck = document.querySelector("button");
let output = document.querySelector("h1");
let myString = `hello`;
let regExp = /\p{P}/gu;
btnCheck.addEventListener("click", () => {
  let found = regExp.test(myString);
  let result = found ? "Yes" : "No";
  output.innerText = result;
  
});