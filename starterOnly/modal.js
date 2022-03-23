function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");
const formElt = document.getElementById("form");

// Form elements
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const birthdateElt = document.getElementById("birthdate");
const quantityElt = document.getElementById("quantity");
const locationElt = document.getElementById("location1");
const checkbox1Elt = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// Validate form
formElt.addEventListener("submit", validate);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = 'none';
}

// Validate form
function validate(e) {
  e.preventDefault();
  // Cacher tous les messages
  document.querySelectorAll('.error').forEach(elt => elt.style.display = 'none');

  // Verifier un par un les champs

  // First name
  const isFirstValid = isLongEnough(firstElt.value.length, 2) ? true : false;

  if (!isFirstValid) {
    document.querySelector('.errorFirstName').style.display = 'block';
  }

  // Last name
  const isLastValid = isLongEnough(lastElt.value.length, 2) ? true : false;

  if (!isLastValid) {
    document.querySelector('.errorLastName').style.display = 'block';
  }

  // Email
  const isEmailValid = isEmailValid(emailElt.value) ? true : false;

  console.log(isEmailValid);

  if (!isEmailValid) {
    document.querySelector('.errorEmail').style.display = 'block';
  }

  // Date de naissance 
  // const isBirthdateValid = isBirthdateValid(birthdateElt.value) ? true : false;

  if (!isBirthdateValid) {
    document.querySelector('.errorBirthdate').style.display = 'block';
  }

  // Vérifier nb de tournois
  // const isQuantityValid = isQuantityValid(quantityElt.value) ? true : false;

  if (!isQuantityValid) {
    document.querySelector('.errorQuantity').style.display = 'block';
  }



  // Verification de tout
  if (isFirstValid && isLastValid && isEmailValid && isBirthdateValid && isQuantityValid && isLocationValid && isCheckbox1Valid) {
    alert("Merci pour votre inscription")
  }
}



// Functions
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}

function isEmailValid(emailElt) {
  // let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  // let inputValue = document.getElementById("email").value;
  // return regex.test(inputValue);

  // let email = "test@email.com";
  // let regex_validation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
  // console.log("email valide?" + regex_validation.test(email));

  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return isEmailValid.test(emailElt);
}

function isBirthdateValid() {
  let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  let inputValue = document.getElementById("birthdate").value;
  return regex.test(inputValue);
}

function isQuantityValid() {
  let regex = /^[0-9]+$/;
  let inputValue = document.getElementById("quantity").value;
  return regex.test(inputValue);
}

function isLocationValid() {
  let radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
  for (let radio of radioButtons) {
    if (radio.checked === true) return true;
  }
  return false;
}

function isCheckbox1Valid(){
  let inputValue = document.getElementById("checkbox1").checked;
	return inputValue;
}