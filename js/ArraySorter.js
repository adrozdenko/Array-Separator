var ArraySorter = function (data) {
	if ( !data ) return;
	this.getData = data;

};

Object.defineProperties( ArraySorter.prototype, {
	ascending : {
		get : function () {
			var numbers = this.getData.numbers.sort( function ( a, b ) {
				return a-b
			});

			var strings = this.getData.strings.sort().reverse();

			return {
				numbers : numbers,
				strings : strings
			}
		},
		enumerable : true
	},
	descending : {
		get : function () {
			var numbers = this.getData.numbers.sort( function ( a, b ) {
				return b-a;
			});

			var strings = this.getData.strings.sort();

			return {
				numbers : numbers,
				strings : strings
			}

		},
		enumerable : true
	}
});