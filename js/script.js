let formElement = document.querySelector(".js-form");
let yenElement = document.querySelector(".js-yen");
let zlotyElement = document.querySelector(".js-zloty");
let zlotyResult = document.querySelector(".js-zloty-result");
let yenResult = document.querySelector(".js-yen-result");

formElement.addEventListener("input", () => {
    let yen = yenElement.value;
    let zloty = zlotyElement.value;

    zlotyPrice = yen * 0.033;
    yenPrice = zloty / 0.033;

    zlotyResult.value = zlotyPrice.toFixed(2)
    yenResult.value = yenPrice.toFixed(2)
});

