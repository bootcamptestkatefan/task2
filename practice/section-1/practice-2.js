'use strict';

function collectSameElements(collectionA, collectionB) {
    var newArray = collectionB[0];
	var result = [];
		for (var i = 0; i < collectionA.length; i++){

			for(var j = 0; j < newArray.length; j++){

				if(newArray[j] == collectionA[i]){
					result.push(collectionA[i]);
					break;
				}
		
			}
		}
  	return result;
}

