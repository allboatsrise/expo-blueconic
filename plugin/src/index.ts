import fs from 'fs';
import path from 'path';
import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';
import { BlueConicSdkPluginOptions, BlueConicSdkPluginOptionsSchema } from './types';
import { withAndroidConfig } from './android';
import { withIosConfig } from './ios';


const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(path.dirname(__dirname)), 'package.json'), 'utf8'));
const packageName = pkg.name as string
const packageVersion = pkg.version as string

const ERROR_PREFIX = 'Expo BlueConic SDK Plugin:';

const withMarketingCloudSdk: ConfigPlugin<BlueConicSdkPluginOptions | unknown> = (config, unsafeProps) => {
  const result = BlueConicSdkPluginOptionsSchema.safeParse(unsafeProps)

  if (!result.success) {
    throw new Error(`${ERROR_PREFIX} ${result.error.toString()}`);
  }

  config = withAndroidConfig(config, {...result.data, packageName, packageVersion});
  config = withIosConfig(config, {...result.data, packageName, packageVersion});
  return config;
};

export default createRunOncePlugin(withMarketingCloudSdk, packageName, packageVersion);
