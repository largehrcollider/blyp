# Google Cloud Platform Deployment
Install SDK. [Link](https://cloud.google.com/sdk/docs/).

Run
```sh
gcloud init
```

## Basic configuration
Express:
```js
app.listen(process.env.PORT || '8080')
```

Configure GCP with `app.yaml`:
```yaml
runtime: nodejs
vm: true # instructs to use "flexible environment"
```

Configure app with `package.json`:
```json
{
  "engines": {
    "node": "6.2.0"
  },
  "scripts": {
    "bundle": "webpack --config webpack.config.js",
    "prestart": "npm run bundle",
    "start": "node index.js",
    "deploy": "gcloud app deploy --project getblyp16"
  }
}
```

## Deployment
Deploy command:
```sh
npm run deploy
```

Deploys at `https://getblyp16.appspot.com`.

## Additional reading
What it means to run in a **flexible environment**: [link](https://cloud.google.com/appengine/docs/flexible/).

Overview of App Engine: [link](https://cloud.google.com/appengine/docs/flexible/nodejs/an-overview-of-app-engine).
