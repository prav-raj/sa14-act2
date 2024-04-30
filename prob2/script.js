function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const apiKey = '699b1e630e9fb7faa6db4484'; 
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.result === "error") {
            throw new Error(data['error-type']);
        }
        const rate = data.conversion_rate;
        const result = amount * rate;
        document.getElementById('result').innerHTML = `
            ${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency} at an exchange rate of ${rate}.
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = `Error: ${error.message}`;
    });
}
