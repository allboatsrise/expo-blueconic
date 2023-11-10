import {
  ConfigPlugin,
  withAppDelegate as withAppDelegateBase,
} from "@expo/config-plugins";
import { mergeContents } from "@expo/config-plugins/build/utils/generateCode";
import { BlueConicSdkPluginProps } from "../types";

export const withAppDelegate: ConfigPlugin<BlueConicSdkPluginProps> = (config, {packageName}) => {
  return withAppDelegateBase(config, async config => {
    config.modResults.contents = mergeContents({
      src: config.modResults.contents,
      newSrc: `#import <BlueConicClient/BlueConicClient-swift.h>`,
      anchor: /#import "AppDelegate\.h"/,
      offset: 1,
      tag: `${packageName}(header)`,
      comment: '//'
    }).contents

    config.modResults.contents = mergeContents({
      src: config.modResults.contents,
      newSrc: `BlueConicClient *client = [BlueConicClient getInstance];`,
      anchor: /return \[super application:application didFinishLaunchingWithOptions:launchOptions\];/,
      offset: 0,
      tag: `${packageName}(didFinishLaunchingWithOptions)`,
      comment: '//'
    }).contents

    config.modResults.contents = mergeContents({
      src: config.modResults.contents,
      newSrc: `[[BlueConicClient getInstance] setURL:url];`,
      anchor: /return \[super application:application openURL:url options:options\]/,
      offset: 0,
      tag: `${packageName}(openURL)`,
      comment: '//'
    }).contents

    return config;
  })
}
  