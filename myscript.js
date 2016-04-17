var allData = [];
var xResult = [];
var yResult = [];

$().ready(function(){

    d3.csv("car.csv",function(error,csvdata){     
        allData = csvdata;
    });
});

function myFunction(){
     var xSelect = document.getElementById("sel-x");
     var xValue = xSelect.options[xSelect.selectedIndex].value;

     var ySelect = document.getElementById("sel-y");
     var yValue = ySelect.options[ySelect.selectedIndex].value;

     for( var i=0; i<allData.length; i++ ){
        // allData[i].xValue;
        // console.log(xValue+";"+yValue);
        xResult[i] = optionMatch(xValue,allData[i]);
        yResult[i] = optionMatch(yValue,allData[i]);
    }

    console.log(xResult+";"+yResult);
    
    return allData;
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
