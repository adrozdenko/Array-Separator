var ArraySeparator = function (data) {
	if ( !data ) return;
}

Object.defineProperties( ArraySeparator.prototype, {
	getData : {
		get : function () {
			return data
		}
	},
	separatedArray : {
		value : function () {
			var arrNumbers = [];
			var arrStrings = [];
			for ( var i = 0; i < this.getData.length; i++ ) {
				if ( typeof this.getData[ i ] === 'number') {
					arrNumbers.push( this.getData[i] );
				} else if ( typeof this.getData[ i ] === 'string' ) {
					arrStrings.push( this.getData[ i ] );
				} else {
					console.log( 'Type of data is not sortable' );
				}
			}
			return {
				numbers : arrNumbers,
				strings : arrStrings
			}
		},
		enumerable: true
	}
});