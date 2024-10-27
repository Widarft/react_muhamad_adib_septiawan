export async function convertCurrency(amount, fromCurrency, toCurrency) {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching data for ${fromCurrency}`);
    }
    const data = await response.json();
    if (!data.rates[toCurrency]) {
      throw new Error(`Currency ${toCurrency} not found`);
    }
    const convertedAmount = amount * data.rates[toCurrency];
    console.log(`Converted Amount: ${convertedAmount}`);
    return convertedAmount;
  } catch (error) {
    console.error("Error:", error);
  }
}

convertCurrency(100, "USD", "IDR");
