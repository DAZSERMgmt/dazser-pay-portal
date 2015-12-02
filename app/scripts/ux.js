'use strict';

function updatePaymentType(paymentType){
    //This function takes a payment type and unhides the correct div
    if(paymentType === 'credit'){
      console.log('Credit');
      document.getElementById('credit-card').style.display = 'block';
      document.getElementById('ach').style.display = 'none';
    } else if(paymentType === 'ach'){
      console.log('ACH');
      document.getElementById('credit-card').style.display = 'none';
      document.getElementById('ach').style.display = 'block';
    } else {
      console.log('Bad Payment type');
      document.getElementById('credit-card').style.display = 'none';
      document.getElementById('ach').style.display = 'none';
    }
}

//Run it on document load
//Find the value of Payment type dropdown
var paymentElement = document.getElementById('payment-form').elements['payment-type'];
updatePaymentType(paymentElement.value);
paymentElement.addEventListener('change', function(){
  updatePaymentType(this.value);
});

//Update the PAY button with the full amount
function updatePaymentAmount(amount, paymentType){
  if(paymentType === 'credit'){
    return +amount + 15;
  } else if(paymentType === 'ach'){
    return +amount + 1;
  } else {
    console.log('Bad Payment type');
  }
}

//Bind onchange for amount to updatePaymentAmount
var amountInput = document.getElementById('amount');
amountInput.addEventListener('change', function(){
  var newAmount = updatePaymentAmount(amountInput.value, paymentElement.value);
  console.log(newAmount);
  document.getElementById('span-amount').textContent = newAmount;
});
