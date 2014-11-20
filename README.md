# Ember-cli-firebase-hosting

Wrapper for the `firebase-tools` package.  Allows usage of firebase hosting deployment from an ember-cli app.  The main advantage to this tool is that it ensures your app is built before you deploy.

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

### Authenticate with Firebase

From within your Ember CLI application run:

```bash
firebase login
```

### Deploy

```bash
ember firebase deploy
```

## Contributing

### Running Tests

* `npm test`

## License

MIT
