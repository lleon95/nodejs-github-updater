/*
 * Webhooks manager
 * Luis Leon V - 2020
 */

function load(app, express, git, repos) {
  app.get("/doUpdate", function(req, res) {
    git.pull(repos);
    res.json({error: 0});
  });
}

module.exports = {
  load: load
};
