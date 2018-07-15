function visualizeData() {

    var predictedContent = document.getElementById("predictedContent");
    predictedContent.style.visibility="visible"
    //start the left chart
    // prepare dom，initialize echarts
    var leftContainer = document.getElementById('leftVisualContent');
    leftContainer.style.height="400px";
    leftContainer.style.width="550px";
    var leftChart = echarts.init(leftContainer);
    // set chart property
    var option = {
        title: {
            text: 'Real Estate'
        },
        tooltip: {},
        legend: {
            data: [5000000]
        },
        xAxis: {
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yAxis: {},
        series: [{
            name: 'Price',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20, 52, 12, 32, 21, 32, 12]
        }]
    };
    // use the property
    leftChart.setOption(option);

    //stary the right chary, same to above content
    var rightContainer = document.getElementById('rightVisualContent');
    rightContainer.style.height="400px";
    rightContainer.style.width="550px";
    var rightChart = echarts.init(rightContainer);
    // set chart property
    var option = {
        title: {
            text: 'Real Estate'
        },
        tooltip: {},
        legend: {
            data: ['Price']
        },
        xAxis: {
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yAxis: {},
        series: [{
            name: 'Price',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 52, 12, 32, 21, 32, 12]
        }]
    };
    // use the property
    rightChart.setOption(option);

}



