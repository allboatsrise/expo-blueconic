import { ConfigPlugin, withAppBuildGradle } from '@expo/config-plugins';
import { mergeContents } from "@expo/config-plugins/build/utils/generateCode";
import {BlueConicSdkPluginProps} from '../types'

/**
 * Add the SDK dependency
 */
export const withSdkDependency: ConfigPlugin<BlueConicSdkPluginProps> = (
  config, { androidBlueConicSdkVersion }
) => {
  return withAppBuildGradle(config, async config => {
    config.modResults.contents = mergeContents({
      src: config.modResults.contents,
      newSrc: `    implementation 'com.blueconic:blueconic-android-lib:${androidBlueConicSdkVersion}'`,
      anchor: /dependencies\s?{/,
      offset: 1,
      tag: '@allboatsrise/expo-blueconic(blueconic-android-lib)',
      comment: '//'
    }).contents
    
    return config
  })
};
