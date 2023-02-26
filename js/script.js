let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let convertedElement = document.querySelector(".js-converted");

let kesRate = 0.035;
let ugxRate = 0.0012;
let tzsRate = 0.0019;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    // ten + niżej sprawia, że wartość zostaje przekonwertowana z tekstu na liczbę. Bez tego też zadziała ale tak też można //
    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let currencyRate;
    switch (currency) {
        case "KES":
            currencyRate = kesRate;
            break;
        case "UGX":
            currencyRate = ugxRate;
            break;
        case "TZS":
            currencyRate = tzsRate;
            break;
    };

    let result = amount / currencyRate;
    convertedElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});


/* można też było zrobić
 let result;

 switch (currency) {
    case "KES":
        result = amount / kesRate;
        break;
    case "UGX":
        result = amount / ugxRate;
        break;
    case "TZS":
        result = amount / tzsRate;
        break;

 };

 convertedElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
 */