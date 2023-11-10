import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import { AndroidConfig, ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import {BlueConicSdkPluginProps} from '../types'

/**
 * Add the Android SDK blueconic-lib-.aar to your app project as a gradle module.
 */
export const withSdkModule: ConfigPlugin<BlueConicSdkPluginProps> = (
  config, { androidBlueConicSdkAarUrl }
) => {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      // get android project root
      const projectDir = await AndroidConfig.Paths.getProjectPathOrThrowAsync(config.modRequest.projectRoot)

      // Create a blueconic directory in your project's android root directory.
      const libDir = path.join(projectDir, 'blueconic')

      if (!fs.existsSync(libDir)) {
        await fs.promises.mkdir(libDir)
      }

      // Add the build.gradle file with these contents:
      const aarFileName = 'blueconic-android-lib.aar'
      fs.promises.writeFile(path.join(libDir, 'build.gradle'), `
configurations.maybeCreate("default") 
artifacts.add("default", file(${JSON.stringify(aarFileName)}))
`.trim(), {encoding: 'utf8'} )

      // Add the .aar file to the 'blueconic' directory, alongside the build.gradle.
      // You now have a gradle module called 'blueconic' that can be used in your app
      // as well as in the BlueConic react-native NPM module.
      await downloadFile(androidBlueConicSdkAarUrl, path.join(libDir, aarFileName))

      return config;
    },
  ]);
};

const downloadFile = async (url: string, path: string) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path)
  return new Promise((resolve, reject) => {
    res.body.pipe(fileStream)
    res.body.on("error", reject)
    fileStream.on("finish", resolve)
  })
}
