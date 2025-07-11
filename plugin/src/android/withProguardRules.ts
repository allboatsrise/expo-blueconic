import fs from "fs";
import path from "path";
import { ConfigPlugin, withDangerousMod } from '@expo/config-plugins';
import {BlueConicSdkPluginProps} from '../types'

const PROGUARD_RULES = `
# BlueConic SDK rules
-keep class com.blueconic.** { *; }
`;

export const withProguardRules: ConfigPlugin<BlueConicSdkPluginProps> = (
  config, _props
) => {
  return withDangerousMod(config, [
    "android",
    async (config) => {
      const projectRoot = config.modRequest.projectRoot;
      const proguardPath = path.join(
        projectRoot,
        "android",
        "app",
        "proguard-rules.pro"
      );

      // Append custom rules if not already present
      let contents = "";
      if (fs.existsSync(proguardPath)) {
        contents = fs.readFileSync(proguardPath, "utf8");
        if (!contents.includes(PROGUARD_RULES.trim())) {
          contents += `\n${PROGUARD_RULES}`;
          fs.writeFileSync(proguardPath, contents);
        }
      }
      return config;
    },
  ]);
};
