var arr = [1,3,5,7,9];
var arr2=arr.reduce(function(x,y){
	return x*y;
});

var ret1 = function(arr){
	var ret01 =arr.reduce(function(x,y){
		return x*y;
	});
	return ret01;
};


alert(arr);
alert(arr2);
alert(ret1);
alert(ret1(arr));
