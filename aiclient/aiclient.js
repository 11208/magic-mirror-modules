//aiclient.js

Module.register("aiclient",{

	// Default module config.
	defaults: {
		animationSpeed: 0.5 * 1000
	},

	// Define required translations.
	getTranslations: function() {
		// The translations for the defaut modules are defined in the core translation files.
		// Therefor we can just return false. Otherwise we should have returned a dictionairy.
		// If you're trying to build your own module including translations, check out the documentation.
		return false;
	},

	// Define required scripts.
	getStyles: function() {
		return [
			this.file("css/custom.css")
		];
	},

	start: function() {
		Log.log("Starting module: " + this.name);

		this.sendSocketNotification("INITIALIZE", {})
		
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		var img = document.createElement("img");
		img.id = "img";
		img.src = this.file("public/face.gif")
		wrapper.appendChild(img);
		return wrapper
	},

	socketNotificationReceived: function(notification, payload) {
		console.log("module received: " + notification)
		var self = this
		this.updateDom(this.config.animationSpeed);
	}
});
