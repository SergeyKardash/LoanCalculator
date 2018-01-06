// add EventListener on Submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {

  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  // Calculating
  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12; 

  // Compute monthly payment
  const x = Math.pow ( 1 + calculateInterest, calculatedPayments);
  const monthly = ( principal * x * calculateInterest)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Please check you numbers');
  }

  e.preventDefault();
}

//Show Error
function showError(error){
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';
  errorDiv.setAttribute('role', 'alert');
  errorDiv.appendChild(document.createTextNode(error))

  card.insertBefore(errorDiv, heading)

// Clear ErrorDiv after 2 sec
  setTimeout (removeErrorDiv, 2000)

// remove ErrorDiv
  function removeErrorDiv(){
    errorDiv.remove()
  }
}