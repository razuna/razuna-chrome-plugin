// Load Options
function loadOptions() {
	// Load the Razuna Host value
	var razunaHost = localStorage["razHost"];
	// Write the value of the field
	$("#razunahost").val(razunaHost);
}
// Save Options
function saveOptions() {
	// Get value
	var thehost = $("#razunahost").val();
	// Check if value contains http and is also not empty
	if (thehost == '' || thehost.indexOf("http") == -1){
		// Define CSS
		var cssObj = {
	      'color' : 'red',
	      'font-weight' : 'bold'
	    }
		$('#status').css(cssObj);
		$('#status').html('You did not provide a valid entry!');
		return false;
	}
	// Store value in local storage
	localStorage["razHost"] = thehost;
	// Define CSS
	var cssObj = {
	      'color' : 'green',
	      'font-weight' : 'bold'
	    }
	$('#status').css(cssObj);
	$('#status').html('Your settings has been saved successfully!');
}
// Erase local storage
function eraseOptions() {
	localStorage.removeItem("razHost");
	location.reload();
}
// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
	loadOptions();
	document.querySelector('#buttonSave').addEventListener('click', saveOptions);
	document.querySelector('#buttonReset').addEventListener('click', eraseOptions);
});