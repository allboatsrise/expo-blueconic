import { z } from 'zod';

export type BlueConicSdkPluginOptions = z.infer<typeof BlueConicSdkPluginOptionsSchema>

export const BlueConicSdkPluginOptionsSchema = z.object({

  /** BlueConic server url */
  serverUrl: z.string({required_error: 'Must provide server url. For example "https://example.blueconic.net"'}).url({message: 'Invalid server url.'}),
  
  /** Set to true in order to receive debug logs from the BlueConic SDK */
  debug: z.boolean({required_error: 'Must provide app id.'}).optional(),

  /**
   * BlueConic SDK version to use on Android.
   * @see https://support.blueconic.com/hc/en-us/articles/20095976036251-BlueConic-SDK-for-Android-Release-Notes
   */
  androidBlueConicSdkVersion: z.string().optional().default('5.1.0'),

  /**
   * Version of `BlueConicClient` Cocoa pod to use.
   * @see https://support.blueconic.com/hc/en-us/articles/20151716578971-BlueConic-SDK-for-iOS-Release-Notes
   */
  iosBlueConicClientPodVersion: z.string().optional().default('3.1.0'),
  
}, {required_error: 'Must configure plugin options.'})


export type BlueConicSdkPluginProps = BlueConicSdkPluginOptions & {
  packageName: string
  packageVersion: string
}
