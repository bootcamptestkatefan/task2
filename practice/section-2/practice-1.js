'use strict';

function countSameElements(collection) {
var newArray = [];
for (var i = 0; i < collection.length; i++){
	var key = collection[i];
	if (newArray[key]){
 		newArray[key] += 1;
	}
	else {
		newArray[key] = 1;
	}
}
var result =[];
for (var key in newArray){
	result.push({key: key, count: newArray[key]});
}
return result;
}
