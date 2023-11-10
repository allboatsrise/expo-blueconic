import {
  ConfigPlugin,
  withInfoPlist,
} from "@expo/config-plugins";
import { BlueConicSdkPluginProps } from '../types';

export const withConfiguration: ConfigPlugin<BlueConicSdkPluginProps> = (config, props) => {
  return withInfoPlist(config, (config) => {
    config.modResults.bc_server_url = props.serverUrl
    config.modResults.bc_debug = props.debug ?? false
    return config
  })
}
  