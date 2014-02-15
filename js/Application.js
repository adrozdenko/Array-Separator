
/*Javascript

 Write some Javascript that will take an array of letters and numbers.
 It should separate the numbers and letters into two arrays.
 Finally it should print both the numbers and arrays.
 Both should be printed twice. Once sorted in ascending order, once descending.*/

Application = function (data) {

	this.separatedData = new ArraySeparator(data).separatedArray();
	this.sortedData = new ArraySorter(this.separatedData);

	this.display = function() {
		document.write("<p>Ascending Strings: " + this.sortedData.ascending.strings + "</p>");
		document.write("<p>Ascending Numbers: " + this.sortedData.ascending.numbers + "</p>");

		document.write("<p>Descending Strings: " + this.sortedData.descending.strings + "</p>");
		document.write("<p>Descending Numbers: " + this.sortedData.descending.numbers + "</p>");
	}
}