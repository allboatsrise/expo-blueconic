# @allboatsrise/expo-blueconic

Expo module for BlueConic SDK React Native

## Installation

To install the package use your prefered package manager:

```bash
npm install @allboatsrise/expo-blueconic @blueconic/blueconic-react-native
```
or
```bash
yarn add @allboatsrise/expo-blueconic @blueconic/blueconic-react-native
```

## Plugin setup

Add package to `plugins` in `app.js`/`app.config.js`.

```json
"expo": {
  "plugins": [
    "@allboatsrise/expo-blueconic"
  ]
}
```

## Usage

### Initialization

```typescript
import {BlueConicClient, BlueConicConfiguration} from '@allboatsrise/expo-blueconic'

// initialization
BlueConicClient.initialize(
  new BlueConicConfiguration.Builder()
    .setHostName(BLUECONIC_SERVER_URL) // your server url
    .setDebug(false) // optional
    .build(),
  (_success, fail) => {
    if (!fail) return
    console.error(fail) // log error
  }
)

// sample api call
BlueConicClient.setProfileValue('property_name', 'property value')
```
