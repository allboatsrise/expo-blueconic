import { z } from 'zod';

export type BlueConicSdkPluginOptions = z.infer<typeof BlueConicSdkPluginOptionsSchema>

export const BlueConicSdkPluginOptionsSchema = z.object({

  /** BlueConic server url */
  serverUrl: z.string({required_error: 'Must provide server url. For example "https://example.blueconic.net"'}).url({message: 'Invalid server url.'}),
  
  /** Set to true in order to receive debug logs from the BlueConic SDK */
  debug: z.boolean({required_error: 'Must provide app id.'}).optional(),

  /**
   * Url to Android SDK .aar to download
   * source: https://mvnrepository.com/artifact/com.blueconic/blueconic-android-lib
   * alternate source: https://central.sonatype.com/artifact/com.blueconic/blueconic-android-lib/versions
   */
  androidBlueConicSdkVersion: z.string().url().optional().default('5.1.0'),

  /**
   * Version of `BlueConicClient` Cocoa pod to use.
   * source: https://github.com/search?q=repo%3ACocoaPods%2FSpecs+blueconicclient&type=commits&p=1
   */
  iosBlueConicClientPodVersion: z.string().optional().default('3.1.0'),
  
}, {required_error: 'Must configure plugin options.'})


export type BlueConicSdkPluginProps = BlueConicSdkPluginOptions & {
  packageName: string
  packageVersion: string
}
