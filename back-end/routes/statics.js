/*
 * Routes mananger
 * Luis Leon V - 2020
 */

function load(app, express) {
  app.use(express.static('../front-end'));
}

module.exports = {
  load: load
};
