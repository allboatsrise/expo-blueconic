import { ConfigPlugin } from '@expo/config-plugins';
import { BlueConicSdkPluginProps } from "../types";
import { withProguardRules } from './withProguardRules';

export const withAndroidConfig: ConfigPlugin<BlueConicSdkPluginProps> =  (config, props) => {
  config = withProguardRules(config, props)
  
  return config;
}
