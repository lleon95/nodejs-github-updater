/**
 * Gitlab updater
 * Luis Leon V
 */

var shell = require('shelljs');

function load() {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
    return false;
  }
  return true;
}

function pull(repo_locations) {
  repo_locations.forEach(repo => {
    if (shell.exec('cd ' + repo.path + ' && git pull origin ' + 
	    repo.branch).code !== 0) {
      shell.echo('Error: Git pull failed -> ' + repo.path);
      shell.exit(1);
    }
  });
}

module.exports = {
  load : load,
  pull : pull
};
