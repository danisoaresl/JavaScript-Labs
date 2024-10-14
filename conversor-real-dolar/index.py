import requests  # Import the requests library for making API calls

def converter():
  """
  This function converts Brazilian Real (BRL) to US Dollar (USD) using an API.
  """  

  # Get the value from the user (assuming you have an input field with ID 'valorReal')
  try:
    valorReal = float(input("Digite o valor em Real: "))
  except ValueError:
    print("Valor inválido. Insira um número.")
    return

  # Make an API call to retrieve the conversion rate
  url = "https://api.exchangeratesapi.io/latest?base=BRL"
  response = requests.get(url)

  # Check for successful response
  if response.status_code == 200:
    data = response.json()
    cotacaoDolar = data.rates["USD"]  # Access USD rate using dictionary notation
  else:
    print(f"Error retrieving exchange rate: {response.status_code}")
    return

  # Calculate and format the value in USD
  valorDolar = valorReal * cotacaoDolar
  valorDolarFormatado = valorDolar.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })

  # Print the result (assuming you don't have an output field)
  print(f"R$ {valorReal:.2f} equivale a US$ {valorDolarFormatado}")

# Call the converter function
converter()
