function validateName(){
    let inputName = document.getElementById("form-name").value;

    if (!inputName.match(/^[a-zA-ZäöåÄÖÅ]+$/)) {
      alert("Please provide correct name!");
      return false;
    }
    return true;
}

function validateNumber(){
    let inputNumber = document.getElementById("form-number").value;
      
    if (!inputNumber.match(/^[0-9]+$/)) {
      alert("Please provide correct number!");
      return false;
    }
    return true;
}
  
function validateEmail(){
    let inputEmail = document.getElementById("form-email").value;

    if (!inputEmail.match(/\S+@\S+\.\S+/)) {
      alert("Please provide correct email!");
      return false;
    }
    return true;
}

function validateStreet(){
    let inputStreet = document.getElementById("form-street").value;

    if (!inputStreet.match(/^[a-zA-ZäöåÄÖÅ]+$/)) {
      alert("Please provide correct street!");
      return false;
    }
    return true;
}

function validateZip(){
    let inputZip = document.getElementById("form-zip").value;

    if (!inputZip.match(/^[0-9]+$/)) {
      alert("Please provide correct zip!");
      return false;
    }
    return true;
}

function validateCity(){
    let inputCity = document.getElementById("form-city").value;
    
    if (!inputCity.match(/^[a-zA-ZäöåÄÖÅ]+$/)) {
      alert("Please provide correct city!");
      return false;
    }
    return true;
}

function checkOutCart(){
    if (validateName() && validateNumber() && validateEmail() && validateStreet() && validateZip() && validateCity()) {
        localStorage.removeItem("productsInCart");
        productsArray = new Array();
        return true;
    }
    return false;
}