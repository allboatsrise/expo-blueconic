# @allboatsrise/expo-blueconic

Expo module for BlueConic SDK React Native

## Installation

To install the package use your prefered package manager:

```bash
npm install @allboatsrise/expo-blueconic @blueconic/blueconic-react-native zod
```
or
```bash
yarn add @allboatsrise/expo-blueconic @blueconic/blueconic-react-native zod
```

## Plugin setup
#### [View parameters](#plugin-parameters)

Add package to `plugins` in `app.js`/`app.config.js`.

```json
"expo": {
  "plugins": [
    [
      "@allboatsrise/expo-blueconic", {
        "serverUrl": "<< BLUECONIC_SERVER_URL >>",
        "debug": false,
        "androidBlueConicSdkVersion": "5.1.0", // optional
        "iosBlueConicClientPodVersion": "3.2.0" // optional
      }
    ]
  ]
}
```
