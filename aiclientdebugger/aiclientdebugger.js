//aiclientdebugger.js

Module.register("aiclientdebugger",{

	// Default module config.
	defaults: {
		animationSpeed: 0.2 * 1000
	},

	// Define required translations.
	getTranslations: function() {
		// The translations for the defaut modules are defined in the core translation files.
		// Therefor we can just return false. Otherwise we should have returned a dictionairy.
		// If you're trying to build your own module including translations, check out the documentation.
		return false;
	},

	// Define start sequence.
	start: function() {
		Log.log("Starting module: " + this.name);

		this.sendSocketNotification("INITIALIZE", {})
		
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		switch(this.current_selection) {
			case "STATEMENT":
				var text = document.createElement("p")
				text.id = "text";
				text.innerHTML = this.text
				wrapper.appendChild(text);
				break
		}
		return wrapper
	},

	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		console.log("module received: " + notification)
		var self = this

		if (notification == "STATEMENT"){
			this.current_selection = "STATEMENT"
			this.text = payload.text
			this.updateDom(this.config.animationSpeed);
		}
	}
});
