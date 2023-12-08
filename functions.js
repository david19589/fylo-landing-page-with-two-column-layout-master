const emailfield = document.getElementById("input");
const emailfield2 = document.getElementById("input2");
const correctemail = document.getElementById("demo");
const correctemail2 = document.getElementById("demo2");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

button1.addEventListener("click", () =>{
  if (emailfield.value == ""){
  correctemail.innerText = "Please fill the box";
  correctemail.style.color = "gray";
  emailfield.style.borderColor = "grey";

  } else if (emailfield.value.match (regex)){
  correctemail.innerText = "Please check your email";
  correctemail.style.color = "blue";
  emailfield.style.borderColor = "blue";

 } else {
  correctemail.innerText = "Please enter valid email";
  correctemail.style.color = "red";
  emailfield.style.borderColor = "red";
 }
});

button2.addEventListener("click", () =>{
  if (emailfield2.value == ""){
  correctemail2.innerText = "Please fill the box";
  correctemail2.style.color = "#c2c2c2";
  emailfield2.style.borderColor = "#c2c2c2";

  }else if (emailfield2.value.match (regex)){
  correctemail2.innerText = "Please check your email";
  correctemail2.style.color = "white";
  emailfield2.style.borderColor = "white";

 } else {
  correctemail2.innerText = "Please enter valid email";
  correctemail2.style.color = "red";
  emailfield2.style.borderColor = "red";
 }
});
