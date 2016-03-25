function sum1(arr){
	return arr.reduce(function(x,y){
		return x+y;
	});
}

var sum = function(arr){
	var ret01 = arr.reduce(function(x,y){
		return x+y;
	});
	return ret01;
};


var ret1 = function(arr){
	var ret01 =arr.reduce(function(x,y){
		return x+y;
	});
	return ret01;
};


var arr = [1,2,3,4,5,6];

function test01(){
	return 100;
}

alert(test01);
alert(test01());


// alert(sum1);
// alert(sum1(arr));

// alert(sum);
// alert(sum(arr));
// alert(ret1);
// alert(ret1(arr));