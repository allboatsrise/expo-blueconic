import fs from 'fs'
import path from 'path'
import {
  ConfigPlugin,
  withDangerousMod,
} from "@expo/config-plugins";
import { mergeContents } from "@expo/config-plugins/build/utils/generateCode";
import { BlueConicSdkPluginProps } from '../types';

export const withSdk: ConfigPlugin<BlueConicSdkPluginProps> = (config, props) => {
  return withDangerousMod(config, ['ios', async (config) => {
    const filePath = path.join(config.modRequest.platformProjectRoot, 'Podfile')
    const contents = fs.readFileSync(filePath, 'utf-8')

    const tag = `${props.packageName}(load-blueconic)`

    const newContents = mergeContents({
      src: contents,
      newSrc: `  pod 'BlueConicClient', '${props.iosBlueConicClientPodVersion}'`,
      anchor: /use_react_native/,
      offset: 0,
      tag: tag,
      comment: '#'
    }).contents

    await fs.promises.writeFile(filePath, newContents)

    return config
  }])
}
  