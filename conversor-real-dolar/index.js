// Function to convert Brazilian Real (BRL) to US Dollar (USD) using an API
function converter() {
    // Get the value from the input field with ID 'valorReal'
    const valorRealInput = document.getElementById('valorReal');
    const valorReal = parseFloat(valorRealInput.value);
  
    // Check if the input is a valid number
    if (isNaN(valorReal)) {
      alert('Valor inválido. Insira um número.');
      return;
    }
  
    // Make an API call to retrieve the conversion rate
    fetch('https://api.exchangeratesapi.io/latest?base=BRL')
      .then(response => response.json())
      .then(data => {
        if (response.status !== 200) {
          console.error(`Error retrieving exchange rate: ${response.status}`);
          return;
        }
  
        // Get the USD rate from the API response
        const cotacaoDolar = data.rates.USD;
  
        // Calculate the value in USD
        const valorDolar = valorReal * cotacaoDolar;
  
        // Format the value in USD with two decimal places
        const valorDolarFormatado = valorDolar.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
  
        // Update the value in the output field with ID 'valorDolar'
        const valorDolarOutput = document.getElementById('valorDolar');
        valorDolarOutput.value = valorDolarFormatado;
      });
  }
  