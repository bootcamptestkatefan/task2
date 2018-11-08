'use strict';

function collectSameElements(collectionA, objectB) {
    var newArray = objectB.value;
	var result = [];
		for (var i = 0; i < collectionA.length; i++){

			for(var j = 0; j < newArray.length; j++){

				if(newArray[j] == collectionA[i].key){
					result.push(collectionA[i].key);
					break;
				}
		
			}
		}
  	return result;
}