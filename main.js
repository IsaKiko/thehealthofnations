d3.json("nations.json", function(nations){
	// what to do with it?
	var chart_area = d3.select("#chart_area");

	var frame = chart_area.append("svg");
	var canvas = frame.append("g");

	// set margins, width, height
	var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
	var frame_width = 960;
	var frame_height = 350;
	var canvas_width = frame_width-margin.left - margin.right;
	var canvas_height = frame_height-margin.top - margin.bottom;

	// set frame attributes width and height
	frame.attr("width", frame_width);
	frame.attr("height", frame_height);

	// shift the canvas and make it slightly smaller than the svg canvas
	canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// create log scale for income (x-axis)
	var xScale = d3.scale.log(); // income
	xScale.domain([250, 1e5]); // set min and max values
	xScale.range([0, canvas_width]); // set min and max range on page

	// create x-axis
	var xAxis = d3.svg.axis().orient("bottom").scale(xScale);

	// add axis to page
	canvas.append("g")
			.attr("class","x-axis")
			.attr("transform","translate(0," + canvas_height + ")")
			.call(xAxis);



})