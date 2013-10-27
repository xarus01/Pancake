var	express = require("express");
var application_root = "/home/ubuntu/Pancake/app/";
var app = express();

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(application_root));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.listen(3000);
console.log("listening on port 3000");