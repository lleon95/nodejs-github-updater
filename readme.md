# NodeJS Git Wrapper for Websites

This project is a wrapper for easing the update of websites from several
repositories once a push to master is done. 

## How does it work?

Suppose that all the websites resides in a predetermined folder of your server.
You would like to keep them update each time that you have merged something to
`master`. To do so, you create a *webhook* which is triggered by a git event
in your remote repository. This webhook will trigger an API of this server,
allowing to update all the repositories from master.

## How do I configure the webhook?

### Github

Go in your repo: `Settings -> Webhooks` and type:

* *Payload URL*: `http://myserver.com:port/doUpdate`
* *Content type*: `application/json`
* *Events*: set what you need

Finally, *Add webhook*

### Gitlab

Go in your repo: `Settings -> Webhooks` and type:

* *URL*: `http://myserver.com:port/doUpdate`
* *Trigger*: set what you need

Finally, *Add webhook*

> Note: you need to disable SSL in case this script is not under a SSL site.

### This wrapper

Set your repo paths and branches in: `back-end/index.js`. For example:

```javascript
const repos = [
  {path: __dirname + "/../front-end",
  branch: "master"},
  {path: __dirname + "/../../other-site",
  branch: "develop"}
];
```

Version 0.1.0
