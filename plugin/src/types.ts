export type BlueConicSdkPluginProps = {
  packageName: string,
  packageVersion: string,

  /** BlueConic server url */
  serverUrl: string,
  
  /** Set to true in order to receive debug logs from the BlueConic SDK */
  debug?: boolean,

  /**
   * BlueConic SDK version to use on Android. For example: '5.1.0'
   * @see https://support.blueconic.com/hc/en-us/articles/20095976036251-BlueConic-SDK-for-Android-Release-Notes
   */
  androidBlueConicSdkVersion?: string,

  /**
   * Version of `BlueConicClient` Cocoa pod to use. For example: '3.2.0'
   * @see https://support.blueconic.com/hc/en-us/articles/20151716578971-BlueConic-SDK-for-iOS-Release-Notes
   */
  iosBlueConicClientPodVersion?: string,
}
