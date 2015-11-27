var Cat = function(number, name){
    this.number = number;
    this.name = name;
    this.count = 0;
};

var numba1count = 0;
var numba2count = 0;
var numba3count = 0;
var numba4count = 0;
var numba5count = 0; 

$(document).ready(function() {
	$("#numba1").click(function(e) {
		var cat = new Cat(1, "George");
		var newcat1 = '<img class="cat1" src="kitty1.jpg" alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">George</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, numba1count);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			numba1count = numba1count + 1;
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, numba1count);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba2").click(function(e) {
		var cat = new Cat(2, "Frederick");
		var newcat1 = '<img class="cat1" src="kitty2.jpg" alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">Frederick</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, numba2count);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			numba2count = numba2count + 1;
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, numba2count);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba3").click(function(e) {
		var cat = new Cat(3, "Wendy");
		var newcat1 = '<img class="cat1" src="kitty3.jpg" alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">Wendy</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, numba3count);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			numba3count = numba3count + 1;
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, numba3count);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba4").click(function(e) {
		var cat = new Cat(3, "Marge");
		var newcat1 = '<img class="cat1" src="kitty4.jpg" alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">Marge</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, numba4count);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			numba4count = numba4count + 1;
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, numba4count);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$("#numba5").click(function(e) {
		var cat = new Cat(3, "Gambino");
		var newcat1 = '<img class="cat1" src="kitty5.jpg" alt="This is a picture of a kitty">';
		$(".cat1").replaceWith(newcat1);
		var newcatname = '<h1 class="catname">Gambino</h1>';
		$(".catname").replaceWith(newcatname);

		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, numba5count);
		$(".cat1clicks").replaceWith(newCount1);
		$(".cat1").click(function(e) {
			numba5count = numba5count + 1;
			var cat1count = '<span class="cat1clicks">%data%</span>';
			var data = "%data%";
			var newCount1 = cat1count.replace(data, numba5count);
			$(".cat1clicks").replaceWith(newCount1);
		});
	});

	$(".cat1").click(function(e) {
		numba1count = numba1count + 1;
		var cat1count = '<span class="cat1clicks">%data%</span>';
		var data = "%data%";
		var newCount1 = cat1count.replace(data, numba1count);
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