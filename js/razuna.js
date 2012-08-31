var MAJOR_VERSION = 1.0;        
var welcomeURL = "http://sites.google.com/site/chromeplayground/razuna/";
var updateURL = "";

// The host storage
var razunaHost = localStorage["razHost"];

function loadRazuna(){
	// If the razunahost is not defined or not valid then
	if (razunaHost == undefined) {
		chrome.tabs.create({url: "options.html", selected: true});
		window.close();
	}
	else{
		// Get cookie
		$("#mainrazuna").attr("src", razunaHost + "/index.cfm?fa=c.mini_browser&start=true");
		$("#razunaStandard").attr("href", razunaHost );
	}
}

function loadrazunaframe(){
	$("#razunaframe").attr("src", razunaHost + "/index.cfm?fa=c.mini_browser");
}

function showWelcomePage(){
    if (!localStorage["updateread"]) {
        localStorage["updateread"] = MAJOR_VERSION;
        chrome.tabs.create({url: welcomeURL});
    }

    if (localStorage["updateread"] < MAJOR_VERSION){
        localStorage["updateread"] = MAJOR_VERSION;
        chrome.tabs.create({url: updateURL});
    }
}
// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
	loadRazuna();
	// document.querySelector('#buttonSave').addEventListener('click', saveOptions);
	// document.querySelector('#buttonReset').addEventListener('click', eraseOptions);
});
