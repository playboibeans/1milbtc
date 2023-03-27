function priceGraph() {
    axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=5&interval=daily")
        .then(result => {
            const json = result.data.prices;
            const chartPice = json.map(item => item[1]);

            const jsonTime = (result.data.prices);
            const charttime = jsonTime.map(item => item[0]);


            const yValues = chartPice
            const xValues = charttime

            new Chart("priceChart", {
                type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                        data: yValues,
                    }]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'BTC/USD'
                    },
                    elements: {
                        line: {
                            borderColor: "#4d4d4e",
                            borderCapStyle: "round",
                            borderJoinStyle: 'round',
                            borderWidth: 5,
                            fill: false,
                        },
                        point: {
                            radius: 0,
                        },
                    },
                    scales: {
                        xAxes: [{
                            display: false
                        }]
                    }
                }
            });
        })
        .catch(error => {
            console.log(error);
        });
}
priceGraph()