import { AndroidConfig, ConfigPlugin, withAndroidManifest } from '@expo/config-plugins';
import { BlueConicSdkPluginProps } from "../types";

export const withPermissions: ConfigPlugin<BlueConicSdkPluginProps> =  (config, props) => {
  return withAndroidManifest(config, (config) => {
    AndroidConfig.Permissions.ensurePermissions(config.modResults, [
      'android.permission.INTERNET',
      'android.permission.ACCESS_NETWORK_STATE',
    ])

    return config
  })
}
