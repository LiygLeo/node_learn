var arr=[1,2];
var i = arr.push('A',true,function(x){return x*x;},null,100,undefined,101,NaN,102);

// alert(i);
alert(arr);
alert(arr[4]);
alert(arr[4](5));

