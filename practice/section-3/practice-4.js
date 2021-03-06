'use strict';

function createUpdatedCollection(collectionA, objectB) {
var inputArr = countSameElements(collectionA);
var newArray = objectB.value;
var result = [...new Set(inputArr)];

	for (var i = 0 ; i < result.length ; i++){

		for (var j = 0 ; j < newArray.length ; j++){

			if (newArray[j] == result[i].key){

				result[i].count -= Math.floor(result[i].count / 3);
			}
		}
	}
  return result;
}


function countSameElements(collection) {
  var newArray = [];
	for (var i = 0; i < collection.length; i++){
		var key = collection[i].substring(0,1);
		var count = collection[i].match(/\d+/);
		var integerInArray = count ? parseInt(count[0],10) : 1;
		if (newArray[key]){
 			newArray[key] += 1;
		}
		else {
			newArray[key] = integerInArray;
		}
	}
  var result =[];
	for (var key in newArray){
		result.push({key: key, count: newArray[key]});
	}
  return result;
}