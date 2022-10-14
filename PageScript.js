
var NFTDatas;

//data binding
$(document).ready(function () {
    LoadGrid();

    //Better to construct options first and then pass it as a parameter
    var options = {
        animationEnabled: true,
        title: {
            text: "Percentage Chart",
            fontColor: "Peru"
        },
        axisY: {
            tickThickness: 0,
            lineThickness: 0,
            valueFormatString: " ",
            includeZero: true,
            gridThickness: 0
        },
        axisX: {
            tickThickness: 0,
            lineThickness: 0,
            labelFontSize: 18,
            labelFontColor: "Peru"
        },
        data: [{
            indexLabelFontSize: 26,
            toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
            indexLabelFontWeight: 600,
            indexLabelFontFamily: "Verdana",
            color: "#62C9C3",
            type: "bar",
            dataPoints: [
                { y: parseFloat(NFTDatas[0].SalesPercent), label: NFTDatas[0].SalesPercent, indexLabel: NFTDatas[0].Collection },
                { y: parseFloat(NFTDatas[1].SalesPercent), label: NFTDatas[1].SalesPercent, indexLabel: NFTDatas[1].Collection },
                { y: parseFloat(NFTDatas[2].SalesPercent), label: NFTDatas[2].SalesPercent, indexLabel: NFTDatas[2].Collection },
                { y: parseFloat(NFTDatas[3].SalesPercent), label: NFTDatas[3].SalesPercent, indexLabel: NFTDatas[3].Collection },
                { y: parseFloat(NFTDatas[4].SalesPercent), label: NFTDatas[4].SalesPercent, indexLabel: NFTDatas[4].Collection },
                { y: parseFloat(NFTDatas[5].SalesPercent), label: NFTDatas[5].SalesPercent, indexLabel: NFTDatas[5].Collection },
                { y: parseFloat(NFTDatas[6].SalesPercent), label: NFTDatas[6].SalesPercent, indexLabel: NFTDatas[6].Collection },
                { y: parseFloat(NFTDatas[7].SalesPercent), label: NFTDatas[7].SalesPercent, indexLabel: NFTDatas[7].Collection },
                { y: parseFloat(NFTDatas[8].SalesPercent), label: NFTDatas[8].SalesPercent, indexLabel: NFTDatas[8].Collection }
            ]
        }]
    };

    $("#chartContainer").CanvasJSChart(options);



    //area chart
    var options = {
        animationEnabled: true,
        title: {
            text: "Company Revenue by Year"
        },
        axisY: {
            title: "Revenue in USD",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$"
        },
        data: [{
            type: "area",
            markerSize: 5,
            //xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: parseInt(NFTDatas[0].MarketCap) },
                { x: new Date(2001, 0), y: parseInt(NFTDatas[1].MarketCap) },
                { x: new Date(2002, 0), y: parseInt(NFTDatas[2].MarketCap) },
                { x: new Date(2003, 0), y: parseInt(NFTDatas[3].MarketCap) },
                { x: new Date(2004, 0), y: parseInt(NFTDatas[4].MarketCap) },
                { x: new Date(2005, 0), y: parseInt(NFTDatas[5].MarketCap) },
                { x: new Date(2006, 0), y: parseInt(NFTDatas[6].MarketCap) },
                { x: new Date(2007, 0), y: parseInt(NFTDatas[7].MarketCap) },
                { x: new Date(2008, 0), y: parseInt(NFTDatas[8].MarketCap) },
                { x: new Date(2009, 0), y: parseInt(NFTDatas[9].MarketCap) },
                { x: new Date(2010, 0), y: parseInt(NFTDatas[3].MarketCap) },
                { x: new Date(2011, 0), y: parseInt(NFTDatas[6].MarketCap) },
                { x: new Date(2012, 0), y: parseInt(NFTDatas[3].MarketCap) },
                { x: new Date(2013, 0), y: parseInt(NFTDatas[6].MarketCap) },
                { x: new Date(2014, 0), y: parseInt(NFTDatas[3].MarketCap) },
                { x: new Date(2015, 0), y: parseInt(NFTDatas[6].MarketCap) },
                { x: new Date(2016, 0), y: parseInt(NFTDatas[0].MarketCap) }

                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[0].MarketCap) },
                //{ x: parseInt(NFTDatas[1].SalesPercent), y: parseInt(NFTDatas[1].MarketCap) },
                //{ x: parseInt(NFTDatas[2].SalesPercent), y: parseInt(NFTDatas[2].MarketCap) },
                //{ x: parseInt(NFTDatas[3].SalesPercent), y: parseInt(NFTDatas[3].MarketCap) },
                //{ x: parseInt(NFTDatas[4].SalesPercent), y: parseInt(NFTDatas[4].MarketCap) },
                //{ x: parseInt(NFTDatas[5].SalesPercent), y: parseInt(NFTDatas[5].MarketCap) },
                //{ x: parseInt(NFTDatas[6].SalesPercent), y: parseInt(NFTDatas[6].MarketCap) },
                //{ x: parseInt(NFTDatas[7].SalesPercent), y: parseInt(NFTDatas[7].MarketCap) },
                //{ x: parseInt(NFTDatas[8].SalesPercent), y: parseInt(NFTDatas[8].MarketCap) },
                //{ x: parseInt(NFTDatas[9].SalesPercent), y: parseInt(NFTDatas[9].MarketCap) },
                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[3].MarketCap) },
                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[6].MarketCap) },
                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[3].MarketCap) },
                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[6].MarketCap) },
                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[3].MarketCap) },
                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[6].MarketCap) },
                //{ x: parseInt(NFTDatas[0].SalesPercent), y: parseInt(NFTDatas[0].MarketCap) }
            ]
        }]
    };
    $("#AreachartContainer").CanvasJSChart(options);
});

function LoadGrid() {
    var obj1 = {};
    $.ajax({
        async: false,
        type: "POST",
        url: "Service.asmx/LoadGrid",
        data: JSON.stringify(obj1),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = $.parseJSON(response.d);
            NFTDatas = result["Table"];
            //$('#Grid_NFT tbody tr').remove();
            console.log(result);
            for (var i = 0; i < NFTDatas.length; i++) {
                $('#Grid_body').append('<tr style="text-align:center !important;">' +
                    '<td>' + NFTDatas[i].Collection + '</td >' +
                    '<td>' + NFTDatas[i].FloorPricePercent + '</td >' +
                    '<td>' + NFTDatas[i].SalesPercent + '</td >' +
                    '<td>' + NFTDatas[i].HoldersPercent + '</td >' +
                    '<td>' + NFTDatas[i].VolumnePercent + '</td >' +
                    '<td>' + NFTDatas[i].MarketCap + '</td >' +
                    '</tr >');
            }
        },
        failure: function (msg) {
            alert(msg.d);
        },
        error: function (xhr, testStatus, error) {
            console.log(xhr);
        },
        beforeSend: function () {

        },
        complete: function () {

        }
    });
}