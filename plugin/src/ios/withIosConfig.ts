import { ConfigPlugin } from '@expo/config-plugins';
import { BlueConicSdkPluginProps } from '../types';
import { withAppDelegate } from './withAppDelegate';
import { withConfiguration } from './withConfiguration';
import { withSdk } from './withSdk';

export const withIosConfig: ConfigPlugin<BlueConicSdkPluginProps> = (
  config,
  props
) => {
  config = withAppDelegate(config, props)
  config = withConfiguration(config, props)
  config = withSdk(config, props)

  return config;
};
