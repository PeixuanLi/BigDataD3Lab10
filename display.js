function display(){
	var padding = {left:30, right:30, top:20, bottom:20};
	width=500;
	height=500;
	var jsonCircles = getData();
	var xmax=Math.max.apply(Math,jsonCircles.map(function(o){return o.x_axis;}))
	var ymax=Math.max.apply(Math,jsonCircles.map(function(o){return o.y_axis;}))
	
	var xlinear = d3.scale.linear()
				.domain([0, xmax+50])
				.range([0, width - padding.left - padding.right]);
 	var ylinear = d3.scale.linear()
				.domain([0, ymax+50])
				.range([height - padding.top - padding.bottom,0]);
	var svgContainer = d3.select("svg")
	.attr("width",width)
	.attr("height",height);
 
	var circles =svgContainer.selectAll("circle")
	.data(jsonCircles)
	.enter()
	.append("circle");
 
	var circleAttributes = circles
	.attr("transform","translate(" + padding.left + "," + padding.top + ")")
	.attr("cx",function(d){return xlinear(d.x_axis);})
	.attr("cy",function(d){return ylinear(d.y_axis);})
	.attr("r",5)
	.attr("text",function(d){return d.name;});
	
	
	
	var axisx = d3.svg.axis()
					.scale(xlinear)		//指定比例尺
					.orient("bottom")	//指定刻度的方向
					.ticks(7)			//指定刻度的数量
	var axisy = d3.svg.axis()
					.scale(ylinear)		//指定比例尺
					.orient("left")	//指定刻度的方向
					.ticks(7)			//指定刻度的数量
					
	
	
	svgContainer
		.append("text")
		.attr("text-anchor", "end")
		.attr("x",width-padding.right)
		.attr("y",height - padding.bottom-5)
		.attr("font-size",15)
		.attr("font-family","simsun")
		.text("awdf");
	
	svgContainer.append("text")
		.attr("transform","rotate(90,"+(padding.left+5)+","+(padding.top)+")")
		.attr("x",padding.left+5)
		.attr("y",padding.top)
		.attr("font-size",15)
		.attr("font-family","simsun")
		.text("awdf");
		
	
	svgContainer.append("g")
	.attr("class","axis")
	.attr("transform","translate(" + padding.left + "," + padding.top + ")")
	.call(axisy);
	
	svgContainer.append("g")
  	.attr("class","axis")
  	.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
  	.call(axisx); 
  	
  	
 
	circles.on("mouseover", function(d,i){
        var str=d3.select(this).attr("text")
        d3.select("body").selectAll("h4").text(str)
	}	
    );
}
