import { ConfigPlugin } from '@expo/config-plugins';
import { BlueConicSdkPluginProps } from "../types";
import { withConfigurationValues } from './withConfigurationValuesXml';
import { withSdkDependency } from './withSdkDependency';

export const withAndroidConfig: ConfigPlugin<BlueConicSdkPluginProps> =  (config, props) => {
  config = withConfigurationValues(config, props)
  config = withSdkDependency(config, props)
  
  return config;
}
