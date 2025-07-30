import { NativeModule } from 'expo';
import {default as UntypedBlueConicClient, BlueConicConfiguration, PropertiesDialogueEvent} from '@blueconic/blueconic-react-native'

type BlueConicClientModuleEvents = {
  propertiesDialogueEvent: (event: PropertiesDialogueEvent) => void
}

declare class BlueConicClientModule extends NativeModule<BlueConicClientModuleEvents> {
  initialize: (configuration: BlueConicConfiguration, callback: (success: boolean, error: null | string) => void) => void

  /**
   * Returns the ID of the BlueConic Profile.
   * @returns The ID of the BlueConic profile
   */
  getProfileIdAsync: () => Promise<string>

  /**
   * Returns the first value for a given profile property.
   * @param property The profile property to get the value for.
   * @returns The first value
   */
  getProfileValueAsync: (property: string) => Promise<string>

  /**
   * Return the values for a given profile property.
   * @param property The profile property to get the values for.
   * @returns A collection containing the values.
   */
  getProfileValuesAsync: (property: string) => Promise<string[]>

  /**
   * Retrieves all the profile properties and their values.
   */
  getAllProfilePropertiesAsync: () => Promise<Array<{id: string, value: string}>>

  /**
   * Gets the privacy legislation of the BlueConic profile. The value is passed to the provided callback function as a String.
   */
  getPrivacyLegislationAsync: () => Promise<string>
  
  /**
   * Gets the Consented Objectives of the BlueConic profile.
   */
  getConsentedObjectivesAsync: () => Promise<string[]>

  /**
   * Gets the Refused Objectives of the BlueConic profile.
   */
  getRefusedObjectivesAsync: () => Promise<string[]>

  /**
   * Adds a single property value to the profile. If there are already values for a property the new value will be added. Values for a property need to be unique; passing the same value multiple times will have no effect.
   * @param property The profile property to add the values for.
   * @param value The property value to add to the profile.
   */
  addProfileValue: (property: string, value: string) => void

  /**
   * Adds property values to the profile. The values from the collection are added to the profile. If there are already values for a property the new values will be added. Values for a property need to be unique; passing the same values multiple times will have no effect.
   * @param property The profile property to add the values for.
   * @param values The property values to add to the profile.
   */
  addProfileValues: (property: string, values: string[]) => void

  /**
   * Adds an objective to the consented objectives list.
   */
  addConsentedObjective: (objectId: string) => void

  /**
   * Adds objective to th refused objectives list.
   */
  addRefusedObjective: (objectId: string) => void

  /**
   * It sets value on the profile. Passing a property that was already set with value will cause the old values to be removed.
   * @param name The profile property to add the values for.
   * @param value The profile values to store.
   */
  setProfileValue: (property: string, value: string) => void

  /**
   * It sets values on the profile. Passing a property that was already set with values will cause the old values to be removed.
   * @param name The profile property to add the values for.
   * @param values The profile values to store.
   */
  setProfileValues: (property: string, values: string[]) => void

  /**
   * Increments the given values to the specified profile property.
   */
  incrementProfileValue: (property: string, value: string) => void

  /**
   * Sets the privacy legislation.
   */
  setPrivacyLegislation: (privacyLegislation: string) => void

  /**
   * Sets the given objectives for consented objectives.
   */
  setConsentedObjectives: (objectiveIds: string[]) => void

  /**
   * Sets the given objectives for refused objectives.
   */
  setRefusedObjectives: (objectiveIds: string[]) => void

  /**
   * Clears the profile ID from the BlueConic client locally (cache). A new profile ID will be generated.
   */
  createProfile: (callback: (success: boolean, error: null | string) => void) => void


  /**
   * Removes the profile from the BlueConic servers. The profile ID will be removed from the BlueConic client. A new profile ID will be generated.
   */
  deleteProfile: (callback: (success: boolean, error: null | string) => void) => void

  /**
   * Update sync the BlueConic Profile
   */
  updateProfileAsync: () => Promise<[]>

  /**
   * Setter for the locale to get the parameters for. By default, the default locale configured in BlueConic is used.
   * @param locale The locale, e.g.‘en_US’.
   */
  setLocale: (locale: string) => void

  /**
   * Calls the createEvent method of the BlueConicClient to register a PAGEVIEW event. This must be called
   * on every screen change as it triggers the BlueConic SDK to load all plugins (i.e. listeners, dialoges)
   * for the screen.
   * @param screenName The screen name for this page view
   */
  createPageViewEventAsync: (screenName: string, properties: Record<string, unknown>) => Promise<void>

  /**
   * Calls the createEvent method of the BlueConicClient to register a VIEW event.
   */
  createViewEventAsync: (interactionId: string, properties: Record<string, unknown>) => Promise<void>

  /**
   * Calls the createEvent method of the BlueConicClient to register a CONVERSION event.
   */
  createConversionEventAsync: (interactionId: string, properties: Record<string, unknown>) => Promise<void>

  /**
   * Static method that is called by the BlueConicInteraction when it receives the parameters of the dialogue,
   * and when the dialogue is destroyed by the BlueConic SDK. An event is published to which the JavaScript of the app
   * should subscribe.
   */
  publishDialogueEvent: (properties: PropertiesDialogueEvent, eventName: string) => void
}

// This call loads the native module object from the JSI.
export const BlueConicClient = UntypedBlueConicClient as unknown as BlueConicClientModule
export {BlueConicConfiguration, EventName, PropertiesDialogueEvent} from '@blueconic/blueconic-react-native'
