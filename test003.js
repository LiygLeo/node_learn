
var x;

// 闭包
function lazySum(x,y){
	var sum = function(){
		return x+y;
	};
	return sum;
}

// var f1 = lazySum(1,2);
// var f2 = lazySum(1,2);

// alert(f1);
// alert(f2);

// function count(){
	// var arr = [];
	// for (var i = 1;i<=3;i++){
		// arr.push(function(){
			// return i*i;
		// });
	// }
	// return arr;
// }

function count(){
	var arr = [];
	for (var i = 1;i<=3;i++){
		arr.push((function(x){
			return function(){
				return x*x;
			}
		})(i));
	}
	return arr;
}


var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

alert(f1);
alert(f2);
alert(f3);

alert(f1());
alert(f2());
alert(f3());








