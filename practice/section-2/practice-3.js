'use strict';

function countSameElements(collection) {
  var newArray = [];
	for (var i = 0; i < collection.length; i++){
		var key = collection[i].substring(0,1);
		var count = collection[i].match(/\d+/);
		var integerInArray = count ? parseInt(count[0],10) : 1;
		if (newArray[key]){
 			newArray[key] += integerInArray;
		}
		else {
			newArray[key] = integerInArray;
		}
	}
  var result =[];
	for (var key in newArray){
		result.push({name: key, summary: newArray[key]});
	}
  return result;
}
