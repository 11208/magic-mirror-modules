var config = {
	address: "0.0.0.0",
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
    {
        module: 'aiclient',
        position: 'middle_center'
    },
    {
    	module: 'aiclientdebugger',
    	position: 'bottom_right'
    }
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
