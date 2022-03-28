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
const confirmationCloseBtn = document.querySelectorAll(".close")

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
confirmationCloseBtn.forEach(elt => elt.addEventListener("click", confirmationClose));

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
function confirmationClose() {
  modalbg.style.display = 'none';
}


// Validate form
function validate(e) {
  e.preventDefault();
  // Cacher tous les messages
  document.querySelectorAll('.error').forEach(elt => elt.style.display = 'none');

  // Verifier un par un les champs

  // First name
  if (!isLongEnough(firstElt.value.length, 2)) {
    document.querySelector('.errorFirstName').style.display = 'block';
  }

  // Last name
  if (!isLongEnough(lastElt.value.length, 2)) {
    document.querySelector('.errorLastName').style.display = 'block';
  }

  // Email
  if (!isEmailValid(emailElt.value)) {
    document.querySelector('.errorEmail').style.display = 'block';
  }

  // Date de naissance 
  if (!isBirthdateValid(birthdateElt.value)) {
    document.querySelector('.errorBirthdate').style.display = 'block';
  }

  // Vérifier nb de tournois
  if (!isQuantityValid(quantityElt.value)) {
    document.querySelector('.errorQuantity').style.display = 'block';
  }

  // Choisir la ville
  if (!isCheckRadioValid(locationElt.value)){
    document.querySelector('.errorLocation').style.display = 'block';
  }

  // Checkbox
  if (!isCheckbox1Valid(checkbox1Elt.value)){
    document.querySelector('.errorCheckbox1').style.display = 'block';
  }


  // Verification de tout
  if (isLongEnough(firstElt.value.length, 2) && isLongEnough(lastElt.value.length, 2) && isEmailValid(emailElt.value) && isBirthdateValid(birthdateElt.value) && isQuantityValid(quantityElt.value) && isCheckRadioValid(locationElt.value) && isCheckbox1Valid(checkbox1Elt.value)) {
    document.querySelector('.modal-confirmation').style.display = 'block';
   }
}



// Functions
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}

function isEmailValid(emailElt) {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return isEmailValid.test(emailElt);
}

function isBirthdateValid() {
  let regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  let inputValue = document.getElementById("birthdate").value;
  return regex.test(inputValue);
}

function isQuantityValid() {
  let regex = /^[0-9]+$/;
  let inputValue = document.getElementById("quantity").value;
  return regex.test(inputValue);
}

function isCheckRadioValid() {
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