import { AndroidConfig, ConfigPlugin, withDangerousMod, XML } from '@expo/config-plugins';
import {BlueConicSdkPluginProps} from '../types'

/**
 * Add the configuration file for BlueConic.
 */
export const withConfigurationValues: ConfigPlugin<Pick<BlueConicSdkPluginProps, 'debug' | 'serverUrl'>> = (
  config,
  { serverUrl, debug = false }
) => {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      // create a file named blueconic_configuration.xml in /res/values/
      const filePath = await AndroidConfig.Paths.getResourceXMLPathAsync(config.modRequest.projectRoot, {
        name: 'blueconic_configuration',
        kind: 'values',
      });
    
      // define xml content
      const xmlContent = {
        resources: [
          {
            string: {
              $: {
                'name': 'bc_server_url'
              },
              _: serverUrl
            }
          },
          {
            bool: {
              $: {
                name: 'bc_debug'
              },
              _: debug
            }
          }
        ]
      }
    
      // write xml file
      await XML.writeXMLAsync({ path: filePath, xml: xmlContent });

      return config;
    },
  ]);
};
