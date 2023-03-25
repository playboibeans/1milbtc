function countDays() {
    var startDate = new Date("2009-01-03");
    var today = new Date();

    var timeDiffFLoor = Math.abs(today.getTime() - startDate.getTime());
    var yearsDiffFLoor = Math.floor(timeDiffFLoor / (1000 * 60 * 60 * 24 * 365.25));
    timeDiffFLoor -= yearsDiffFLoor * (1000 * 60 * 60 * 24 * 365.25);
    var monthsDiffFLoor = Math.floor(timeDiffFLoor / (1000 * 60 * 60 * 24 * 30.4375));
    timeDiffFLoor -= monthsDiffFLoor * (1000 * 60 * 60 * 24 * 30.4375);
    var daysDiffFloor = Math.floor(timeDiffFLoor / (1000 * 60 * 60 * 24));
    document.getElementById("times").innerHTML = yearsDiffFLoor + " years " + monthsDiffFLoor + " months and " + daysDiffFloor + " days "

    var timeDiff = Math.abs(today.getTime() - startDate.getTime());
    var daysDiff = Math.round(timeDiff / (1000 * 3600 * 24));
    var monthsDiff = Math.round(timeDiff / (1000 * 3600 * 24 * 30.4375));
    document.getElementById("days").innerHTML = daysDiff.toLocaleString() + " days";
    document.getElementById("months").innerHTML = monthsDiff.toLocaleString() + " months";
}
countDays()

function btcPrice() {
    axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD")
        .then(result => {
            const bitcoin = result.data.bitcoin.usd
            document.getElementById("price").innerHTML = bitcoin.toLocaleString()
            const priceDiff = 1000000 - result.data.bitcoin.usd
            document.getElementById("priceDiff").innerHTML = priceDiff.toLocaleString()


        })
        .catch(error => {
            console.log(error);
        });

}
btcPrice()