var Cat = function(number, name){
    this.number = number;
    this.name = name;
    this.count = 0;
};

var total1 = 0;

$(document).ready(function() {
	$("#numba1").click(function(e) {
		var cat = new Cat(1, "George");
		var newcat1 = '<img class="cat1" src="kitty1.jpg" alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">George</h1>';
		$(".catname").replaceWith(newcatname);

		total1 = 0;
		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, total1);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			total1 = total1 + 1;
			console.log(total1);
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, total1);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba2").click(function(e) {
		var cat = new Cat(2, "Frederick");
		var newcat1 = '<img class="cat1" src="kitty2.jpg" alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">Frederick</h1>';
		$(".catname").replaceWith(newcatname);

		total1 = 0;
		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, total1);
		$(".cat1clicks").replaceWith(newCount1);
		console.log("test");
		$(".cat1").click(function(e) {
			total1 = total1 + 1;
			console.log(total1);
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, total1);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$(".cat1").click(function(e) {
		total1 = total1 + 1;
		console.log(total1);
		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, total1);
		$(".cat1clicks").replaceWith(newCount1);
	});

	// var total2 = 0;
	// $(".cat2").click(function(e) {
	// 	total2 = total2 + 1;
	// 	console.log(total2);
	// 	var cat2count = '<span class="cat2clicks">%data%</span>';
	// 	var data = "%data%";
	// 	var newCount2 = cat2count.replace(data, total2);
	// 	$(".cat2clicks").replaceWith(newCount2);
	// });
});