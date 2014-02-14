
/*Javascript

Write some Javascript that will take an array of letters and numbers.
It should separate the numbers and letters into two arrays.
Finally it should print both the numbers and arrays.
Both should be printed twice. Once sorted in ascending order, once descending.*/

Application = function (data) {
	this.parsedData = new ArraySeparator(data);

	this.ascendingData = function() {

		var dataNum = this.parsedData.numbers.sort( function (a, b) {
			return a-b
		});

		var dataStr = this.parsedData.strings.sort().reverse();

		return {
			numbers : dataNum,
			strings : dataStr
		}
	};

	this.descendingData = function () {
		var dataNum = this.parsedData.numbers.sort( function (a, b) {
			return b-a
		});

		var dataStr = this.parsedData.strings.sort();

		return {
			numbers : dataNum,
			strings : dataStr
		}
	};

	this.display = function() {
		document.write("<p>Ascending Strings: " + this.ascendingData().strings + "</p>");
		document.write("<p>Ascending Numbers: " + this.ascendingData().numbers + "</p>");

		document.write("<p>Descending Strings: " + this.descendingData().strings + "</p>");
		document.write("<p>Descending Numbers: " + this.descendingData().numbers + "</p>");
	}
}