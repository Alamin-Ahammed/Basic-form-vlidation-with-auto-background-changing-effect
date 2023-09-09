let make_random_color = document.querySelector(".make_random_color");
let body = document.querySelector("body");
let btn = document.querySelector("#make_random_color");

btn.addEventListener("click", () => {
  auto();
});

function auto() {
  let rand1 = Math.round(Math.random() * 255);
  let rand2 = Math.round(Math.random() * 255);
  let rand3 = Math.round(Math.random() * 255);

  let rgb = `rgb(${rand1},${rand2},${rand3})`;
  body.style.background = rgb;
  body.style.color = `#fff`;
  setInterval(auto, 2000);
}

// class -10 Asif sir project 6

let allInputs = document.querySelectorAll("form input");
let userName = document.querySelector('input[type="text"]');
let singUp = document.querySelector('input[type="submit"]');
let warnings = document.querySelectorAll(".form form div");

let stoper = false;
singUp.addEventListener("click", () => {
  allInputs.forEach((item, i) => {
    if (item.value === "" && !stoper) {
      let element = document.createElement("div");
      element.innerHTML = "Please fill out this";
      element.style.color = "red";
      element.style.marginInline = "6rem";
      warnings[i].insertAdjacentElement("afterend", element);
    }
  });
  stoper = true;
});

allInputs.forEach((input_values_for_checking, index) => {
  let elemen2 = document.createElement("div");
  input_values_for_checking.addEventListener("input", () => {
    if (
      warnings[index].nextElementSibling.innerHTML === "Please fill out this"
    ) {
      warnings[index].nextElementSibling.remove();
    }
    
    elemen2.style.marginInline = "6rem";
    elemen2.style.fontSize = "0.8rem";
    elemen2.style.color = "green";

    if (index === 0) {
      if (/\d/.test(input_values_for_checking.value)) {
        elemen2.style.color = "red";
      }
    elemen2.textContent = "Name should be in just letters.[a-z,A-Z]";
    } else if (index === 1) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      elemen2.style.color = 'red';
      if (emailPattern.test(input_values_for_checking.value)) {
        elemen2.style.color = 'green';
      }
      elemen2.textContent = "Email must have to valid.";
    }else if (index === 2) {
      if (/[^\d]/.test(input_values_for_checking.value)) {
        elemen2.style.color = 'red';
      }
      elemen2.textContent = "Number must have to valid.";
    }
    warnings[index].insertAdjacentElement("afterend", elemen2);

    if (input_values_for_checking.value === "") {
      elemen2.innerHTML = "";
    }
  });
});

window.addEventListener("load", () => {
  allInputs.forEach((item) => {
    if (item.value === "Sing Up") {
    } else {
      item.value = "";
    }
  });
});