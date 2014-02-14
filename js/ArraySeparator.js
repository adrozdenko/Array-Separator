ArraySeparator = function(data) {
	if(!data) return;

	var arrData= data;

	this.parsedArray = function () {
		var arrNumbers = [];
		var arrStrings = [];

		for ( var i = 0; i < arrData.length; i++ ) {
			if ( typeof arrData[i] === 'number') {
				arrNumbers.push(arrData[i]);
			} else if ( typeof arrData[i] === 'string' ) {
				arrStrings.push(arrData[i]);
			} else {
				console.log('Type of data is not parsable');
			}
		}

		return {
			numbers : arrNumbers,
			strings : arrStrings
		};
	};

	return this.parsedArray();
};