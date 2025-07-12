declare module '@blueconic/blueconic-react-native' {
  interface Builder {
    setHostName: (hostName: string) => this
    setDebug: (debug: boolean) => this
    setOverrideAppId: (overrideAppId: string) => this
    setSimulatorUsername: (simulatorUsername: string) => this
    setSimulatorSessionId: (simulatorSessionId: string) => this
    build: () => BlueConicConfiguration
  }

  export class BlueConicConfiguration {
    static get Builder(): { new (): Builder };
  }

  export class EventName {
    static PropertiesDialogue: string
  }

  export class PropertiesDialogueEvent {
    variantId: string
    position: string
    data: string
  }
}
