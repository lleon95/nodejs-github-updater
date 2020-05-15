/*
 * Server main script
 * Luis Leon V - 2020
 */

const express = require('express');
const app = express();

/* Constants */
const repos = [{
  path: __dirname + "/../front-end",
  branch: "master"
}];

/* Load modules */
const git_engine = require("./modules/git.js");
if (!git_engine.load()) {
  console.error("Error while loading git module");
}

/* Load routes */
require("./routes/statics.js").load(app, express);
require("./routes/webhooks.js").load(app, express, git_engine, repos);

/* Start web server */
const port = 7000;
app.listen(port, () => console.log('Listening on port ' + port));
