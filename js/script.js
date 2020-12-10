var elCalculateForm = document.querySelector('.calculate-form');
var elMoneyInput = elCalculateForm.querySelector('.money-input');
var elCurrencyInput = elCalculateForm.querySelector('.currency-input');
var elResultWrapper = elCalculateForm.querySelector('.result-wrapper');
var elResult = elCalculateForm.querySelector('.result');


var converCurrencyUzs = function (evt) {
  evt.preventDefault();

  var money = parseFloat(elMoneyInput.value.trim(), 10);
  var currencyValue = parseFloat(elCurrencyInput.value.trim(), 10);
 

  if (money >= 0) {
    var result = parseFloat((money * currencyValue).toFixed(2), 10);

    elResultWrapper.classList.remove('d-none');
    elResult.textContent = result;
  }
  else {
    elMoneyInput.classList.add('is-invalid');
    return;
  } 
};

elCalculateForm.addEventListener('submit', converCurrencyUzs);

