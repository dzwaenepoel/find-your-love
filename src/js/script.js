$(document).ready(function(){
	var margin = (($( window ).width()-200)/2);
	$('#bgheart').css("margin-left", margin);

});
$(window).resize(function(){
	var margin = (($( window ).width()-200)/2);
	$('#bgheart').css("margin-left", margin);
});
$('#replace').click(function () {
	var name1 = $('#name1').val();
	var name2 = $('#name2').val();
	$('#name1').val(name2);
	$('#name2').val(name1);
});
$('#sub').click(function() {
	$('#sub').prop('disabled', true);
	var name1 = $('#name1').val();
	var name2 = $('#name2').val();

	var	num = [];
	var name10 = name1.replace(" ","").toLowerCase();
	var name20 = name2.replace(" ","").toLowerCase();
	var fullname= name10 + "love" + name20;
	var counter = 0;
	var prev = [];
	var new_num = [];
	var name_array = fullname.split("");

	for (var i = 0; i < name_array.length; i++) {
		var go = true;
		var counter = 0;
		for (var j = 0; j < prev.length; j++) {
			if (name_array[i] == prev[j]) {
				go = false;
			}	
		}
		if (go != false) {
			for (var k = i; k < name_array.length; k++) {
				if (name_array[i] == name_array[k]) {
					counter++;
				}
			}
			prev.push(name_array[i]);
			if (counter != 0) {
				num.push(counter);
			}
		}
	}
	num = sum(num);
	if (num[1] == 10 && num.length ==2){
		num = sum(num);
	}
	var output = num[0].toString() + num[1].toString();
	var i =0;
		timer = setInterval(function(){ 
		i++;
			$('#ulove').text(i+"%");
			if (i == output) {
				 clearInterval(timer);
				 $('#sub').prop('disabled', false);
			}
		}, 90);	
});
function sum(num) {
	while(num.length >2 )  ){
		new_num = [];
		console.log("num:");
		console.log(num);

		var high = 0;
		for (var l = 0; l < Math.round((num.length)/2); l++) {
			if ( l == Math.round((num.length)/2) -1 && num.length%2 != 0 ) {
				new_num.push(num[l]+high);
			}
			else{
				var sum = num[l] + num[num.length - l -1]+high;
				high=0;
				if (sum >9) {
					sum= sum -10;
					high=1;
				}
				new_num.push(sum);
			}
		}


		num =new_num;
		
	}
	return num;
};

