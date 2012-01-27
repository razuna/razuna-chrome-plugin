var defaultHost = "Enter a valid Razuna host name";

// Load Options
function loadOptions() {
	// Load the Razuna Host value
	var razunaHost = localStorage["razHost"];
	// If host is not stored yet
	if (razunaHost == undefined) {
		razunaHost = defaultHost;
	}
	// Write the value of the field
	document.getElementById("razunahost").value = razunaHost;
}

// Save Options
function saveOptions() {
	var thehost = document.getElementById("razunahost").value;
	localStorage["razHost"] = thehost;
	$('#status').html('Your settings have been saved successfully!');
}

function eraseOptions() {
	localStorage.removeItem("razHost");
	location.reload();
}