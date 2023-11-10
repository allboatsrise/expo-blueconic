import { ConfigPlugin } from '@expo/config-plugins';
import { BlueConicSdkPluginProps } from "../types";
import { withConfigurationValues } from './withConfigurationValuesXml';
import { withLoadSdkAndReactNativeLibraries } from './withLoadSdkAndReactNativeLibraries';
import { withPermissions } from './withPermissions';
import { withSdkModule } from './withSdkModule';

export const withAndroidConfig: ConfigPlugin<BlueConicSdkPluginProps> =  (config, props) => {
  config = withConfigurationValues(config, props)
  config = withLoadSdkAndReactNativeLibraries(config, props)
  config = withPermissions(config, props)
  config = withSdkModule(config, props)
  
  return config;
}
