# Ember-cli-firebase-hosting

Wrapper for the `firebase-tools` package.  Allows usage of firebase hosting deployment from an ember-cli app.  The main advantage to this tool is that it ensures your app is built before you deploy.

## Setup

### Authenticate with Firebase

You must be authenticated with Firebase to deploy from the command line.  From within your Ember CLI application run:

```bash
firebase login
```

### Create Firebase App

You must create an app in your Firebase dashboard prior to using this tool.  Ideally you can name your Firebase app the same name as your ember-cli app.

## Usage

### Installation

From within your Ember CLI application run:

```bash
npm install --save-dev ember-cli-firebase-hosting
```

### Setting up Firebase Hosting

From within your Ember CLI application run:

```bash
ember generate firebase-hosting
```

### App naming

This tool assumes that your ember-cli app has the same name as your Firebase app.  If that is not the case open `firebase.json` file and change the `firebase` property from your ember-cli app's name to the name of your app in Firebase.  


### Deploy

```bash
ember firebase deploy
```

## Contributing

### Running Tests

* `npm test`

## License

MIT

Inspired by and heavily drawn from Robert Jackson's similar [library for Divshot](https://github.com/rwjblue/ember-cli-divshot)
