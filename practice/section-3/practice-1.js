'use strict';

function createUpdatedCollection(collectionA, objectB) {

var newArray = objectB.value;
var result = [...new Set(collectionA)];

	for (var i = 0 ; i < result.length ; i++){

		for (var j = 0 ; j < newArray.length ; j++){

			if (newArray[j] == result[i].key){

				result[i].count -= 1;
			}
		}

	}





  return result;
}
