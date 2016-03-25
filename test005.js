'use strict';

// function create_counter(initial){
	// var x = initial || 0;
	// return {
		// inc:function(){
			// x+=1;
			// return x;
		// }
	// }
// }


// var c1 = create_counter();
// var ret1 = c1.inc();
// var ret2 = c1.inc();


// alert(c1);
// alert(ret1);
// alert(ret2);

// var c2 = create_counter(10);
// alert(c2.inc());

function make_pow(n)
{
	return function(x)
	{
		return Math.pow(x,n);
	}
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

alert(pow2);
alert(pow3);

alert(pow2(5));
alert(pow3(7));








