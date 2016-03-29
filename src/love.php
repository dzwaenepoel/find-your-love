<?php 

echo getLove($_POST['name1'] , $_POST['name2'] );

function getLove($name1 , $name2 )
{

	//var

	$num=array();
	$name10=strtolower( str_replace(" ", "", $name1));
	$name20=strtolower( str_replace(" ", "", $name2));
	$fullname=$name10."love".$name20;
	$counter=0;
	$prev=array();
	$new_num=array();

	//check for mutli letters in names
	$name_array= preg_split('//', $fullname, -1, PREG_SPLIT_NO_EMPTY);
	for ($i=0; $i < sizeof($name_array) ; $i++) {
		$go=true;
		$counter=0;
		for ($j=0; $j < sizeof($prev) ; $j++) { 
			if ($name_array[$i]==$prev[$j]) {
				$go = false;

			}
		}
		if ($go != false) {

			for ($k=$i; $k < sizeof($name_array) ; $k++) { 
				if ($name_array[$i] == $name_array[$k]) {
					$counter++;
				}
			}

			array_push($prev,$name_array[$i] );
			if ($counter != 0) {
				array_push($num, $counter);		
			}
		}


	}

	// do the math
	while (sizeof($num) > 2 ) {
		$new_num=array();
		$high=0;
		
		for ($l=0; $l < round(sizeof($num)/2) ; $l++) { 

			if ($l == round(sizeof($num)/2)-1 && sizeof($num)%2 != 0) {
				array_push($new_num, $num[$l]+$high);
				$high=0;
			}
			else{
				$math = $num[$l]+$num[sizeof($num)-1-$l] + $high;
				$high=0;
				if ($math > 9) {
					$math = $math-10;
					$high=1;
				}
				array_push($new_num, $math);
			}

		}

		$num = $new_num;



	}


	return $new_num[0].$new_num[1];



}
