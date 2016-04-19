var allData = [];
var xResult = [];
var yResult = [];
var nameResult = [];
var finalResult = [];
var mpgs = [];
$().ready(function(){

    d3.csv("car.csv",function(error,csvdata){     
        allData = csvdata;
    });

});
// 现在函数的返回值是一个被过滤的数组，其中第一项是X的结果，第二项是Y的结果。
function getData(){
     var xSelect = document.getElementById("sel-x");
     var xValue = xSelect.options[xSelect.selectedIndex].value;

     var ySelect = document.getElementById("sel-y");
     var yValue = ySelect.options[ySelect.selectedIndex].value;

     var mpgMin = +document.getElementById("mpg-min").value;
     var mpgMax = +document.getElementById("mpg-max").value;

     for( var i=0; i<allData.length; i++ ){
        // allData[i].xValue;
        // console.log(xValue+";"+yValue);

        var currentMpg = +allData[i].mpg;
        if(mpgMin <= currentMpg && currentMpg <= mpgMax){
            var x_axis = optionMatch(xValue,allData[i]);
            var y_axis = optionMatch(yValue,allData[i]);
            var name = allData[i].name;

            // xResult.push(x_axis);
            // yResult.push(y_axis);
            // nameResult.push(name);

            var currentResult = {"x_axis":x_axis,"y_axis":y_axis,"name":name}; 
            finalResult.push(currentResult);

        }
        
    }

    var result = {"x":xResult,"y":yResult,"name":nameResult};   
    //console.log(xResult+";"+yResult);
    //console.log(mpgMin+";"+mpgMax);
    //console.log(result.x);
    //console.log(finalResult[0]);
    //console.log(mpgs);
    return finalResult;

}
//name,mpg,cylinders,displacement,horsepower,weight,acceleration,model.year,origin
function optionMatch(input,set){
    var result = "";

    if(input == "name") 
        result = set.name;
    if(input == "mpg") 
        result = set.mpg;
    if(input == "cylinders") 
        result = set.cylinders;
    if(input == "displacement") 
        result = set.displacement;
    if(input == "horsepower") 
        result = set.horsepower;
    if(input == "weight") 
        result = set.weight;
    if(input == "acceleration") 
        result = set.acceleration;
    if(input == "model.year") 
        result = set.modelyear;
    if(input == "origin") 
        result = set.origin;

    return result
}
