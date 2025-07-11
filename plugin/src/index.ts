import fs from 'fs';
import path from 'path';
import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';
import { withAndroidConfig } from './android';

const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(path.dirname(__dirname)), 'package.json'), 'utf8'));
const packageName = pkg.name as string
const packageVersion = pkg.version as string

const withMarketingCloudSdk: ConfigPlugin<unknown> = (config) => {
  config = withAndroidConfig(config, {packageName, packageVersion});

  return config  
};

export default createRunOncePlugin(withMarketingCloudSdk, packageName, packageVersion);
