const axios = require('axios');
const canvas = document.getElementById('price-chart');
const ctx = canvas.getContext('2d');
document.getElementById("click for graph").onclick = priceGraph();

function priceGraph() {
    axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily%27,%20{%20headers:%20{")
        .then(result => {

            const json = result.data.prices;
            const price = json.map(item => item[1]);
            console.log(price);
            resolve(price);
            const priceChart = [0];
            for (let i = 1; i < price.length; i++) {
                const prevPrice = price[i - 1];
                const curPrice = price[i];
                const relativePrice = (curPrice - prevPrice) / prevPrice * 100;
                relativePrice.push(priceChart)
            } ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            for (let i = 0; i < relativePrices.length; i++) {
                const x = i / (relativePrices.length - 1) * canvas.width; const y = canvas.height - relativePrices[i] / 100 * canvas.height;
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        })
        .catch(error => {
            console.log(error);
        });

}
