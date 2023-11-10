import { AndroidConfig, ConfigPlugin, withAndroidManifest } from '@expo/config-plugins';
import { BlueConicSdkPluginProps } from "../types";

export const withPermissions: ConfigPlugin<BlueConicSdkPluginProps> =  (config, props) => {
  return withAndroidManifest(config, (config) => {
    AndroidConfig.Permissions.addPermission(config.modResults, 'android.permission.INTERNET')
    AndroidConfig.Permissions.addPermission(config.modResults, 'android.permission.ACCESS_NETWORK_STATE')

    return config
  })
}
