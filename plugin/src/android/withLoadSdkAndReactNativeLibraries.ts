import { ConfigPlugin, withSettingsGradle } from '@expo/config-plugins';
import { mergeContents } from "@expo/config-plugins/build/utils/generateCode";
import {BlueConicSdkPluginProps} from '../types'

/**
 * Include the React Native project in the settings.gradle.
 */
export const withLoadSdkAndReactNativeLibraries: ConfigPlugin<BlueConicSdkPluginProps> = (
  config, { packageName }
) => {
  return withSettingsGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {

      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        newSrc: `
// This loads both the BlueConic React Native library and the BlueConic Android SDK.
include ':blueconic'
include ':blueconic_blueconic-react-native'
project(':blueconic_blueconic-react-native').projectDir = 
        new File(rootProject.projectDir,
        '../node_modules/@blueconic/blueconic-react-native/android')
`.trim(),
        anchor: 'rootProject.name',
        offset: 1,
        tag: `${packageName}(load-blueconic)`,
        comment: '//'
      }).contents

    } else {
      throw new Error(`Cannot setup "${packageName}" because the settings.gradle is not groovy`)
    }

    return config;
  })
};
