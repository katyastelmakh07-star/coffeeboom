// Дані франшизи
const franchisePrices = {
    mini: 150000,
    standard: 300000,
    premium: 500000
};

const cityRent = {
    kyiv: 200000,
    lviv: 150000,
    kharkiv: 120000,
    odesa: 130000,
    dnipro: 110000
};

function calculate() {
    const type = document.getElementById("type").value;
    const city = document.getElementById("city").value;

    const total = franchisePrices[type] + cityRent[city];

    document.getElementById("result").innerText =
        "Загальна стартова сума: " + total.toLocaleString() + " грн";
}
