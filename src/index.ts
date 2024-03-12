import BlueConicRN from '@blueconic/blueconic-react-native'
export default BlueConicRN

/**
 * Returns the ID of the BlueConic Profile.
 * @returns The ID of the BlueConic profile
 */
export const getProfileId = async (): Promise<string> => BlueConicRN.getProfileId()

/**
 * Returns the first value for a given profile property.
 * @param property The profile property to get the value for.
 * @returns The first value
 */
export const getProfileValue = async (property: string): Promise<string> => BlueConicRN.getProfileValue(property)

/**
 * Return the values for a given profile property.
 * @param property The profile property to get the values for.
 * @returns A collection containing the values.
 */
export const getProfileValues = async (property: string): Promise<string[]> => BlueConicRN.getProfileValues(property)


/**
 * Adds a single property value to the profile. If there are already values for a property the new value will be added. Values for a property need to be unique; passing the same value multiple times will have no effect.
 * @param property The profile property to add the values for.
 * @param value The property value to add to the profile.
 */
export const addProfileValue = (property: string, value: string) => {
  BlueConicRN.addProfileValue(property, value)
}

/**
 * Adds property values to the profile. The values from the collection are added to the profile. If there are already values for a property the new values will be added. Values for a property need to be unique; passing the same values multiple times will have no effect.
 * @param property The profile property to add the values for.
 * @param values The property values to add to the profile.
 */
export const addProfileValues = (property: string, values: string[]) => {
  BlueConicRN.addProfileValues(property, values)
}

/**
 * It sets value on the profile. Passing a property that was already set with value will cause the old values to be removed.
 * @param name The profile property to add the values for.
 * @param value The profile values to store.
 */
export const setProfileValue = (name: string, value: string) => {
  BlueConicRN.setProfileValue(name, value)
}

/**
 * It sets values on the profile. Passing a property that was already set with values will cause the old values to be removed.
 * @param name The profile property to add the values for.
 * @param values The profile values to store.
 */
export const setProfileValues = (name: string, values: string[]) => {
  BlueConicRN.setProfileValues(name, values)
}

/**
 * Update sync the BlueConic Profile
 */
export const updateProfile = () => {
  BlueConicRN.updateProfile()
}

/**
 * Setter for the locale to get the parameters for. By default, the default locale configured in BlueConic is used.
 * Note: the only valid locales currently are `'en_US'` and `'nl_NL'`.
 * @param locale The locale, e.g.‘en_US’.
 */
export const setLocale = (locale: 'en_US' | 'nl_NL') => {
  BlueConicRN.setLocale(locale)
}

/**
 * Registers an event of the specified type with the given properties. For a `“PAGEVIEW"` event a screen name can be passed, so interactions can be restricted on the where tab in BlueConic. For a `“VIEW"`, `“CLICK"` or `“CONVERSION"` event an interactionId should be passed to register the event for.
 * @param eventType The event type. (e.g:`"PAGEVIEW"`,`"VIEW"`,`“CLICK"`,`“CONVERSION"`)
 * @param properties A map with properties for the event.
 */
export function createEvent(eventType: 'PAGEVIEW', properties: {screenName: string})
export function createEvent(eventType: 'VIEW' | 'CLICK' | 'CONVERSION', properties: {interactionId: string})
export function createEvent(eventType: 'PAGEVIEW' | 'VIEW' | 'CLICK' | 'CONVERSION', properties: {screenName: string} | {interactionId: string}) {
  BlueConicRN.createEvent(eventType, properties)
}


/**
 * Registers a page event. For a “PAGEVIEW" event a screen name can be passed, so interactions can be restricted on the where tab in BlueConic.
 * @param screenName The screen name for this page view
 */
export const registerPageView = (screenName: string) => {
  BlueConicRN.registerPageView(screenName)
}

/**
 * Registers a dialogue event of the specified type with the given properties. For a “VIEW", “CLICK" or “CONVERSION" event an interactionId should be passed to register the event for.
 * @param eventType The event type. (e.g:“VIEW",“CLICK",“CONVERSION")
 * @param interactionId The interaction id.
 */
export const registerDialogueEvent = (eventType: 'VIEW' | 'CLICK' | 'CONVERSION', interactionId: string) => {
  BlueConicRN.registerDialogueEvent(eventType, interactionId)
}

/**
 * Register a user click. For the event, a selector can be passed to trigger BlueConic Listeners, to execute their logic.
 * @param selector The selector, which can be used in the listener rules, to listen on
 */
export const registerClickEvent = (selector: string) => {
  BlueConicRN.registerClickEvent(selector)
}

/**
 * Register a user click. For the event, a selector can be passed to trigger BlueConic Listeners, to execute their logic.
 * @param selector The selector, which can be used in the listener rules, to listen on
 * @param values context of the click event 
 */
export const registerClickEventWithContext = (selector: string, values: string[]) => {
  BlueConicRN.registerClickEventWithContext(selector, values)
}

/**
 * Register a user update values event. For the event, a selector can be passed to trigger BlueConic Listeners, to execute their logic.
 * @param selector The selector, which can be used in the listener rules, to listen on
 * @param values context of the update values event
 */
export const registerUpdateValuesEvent = (selector: string, values: string[]) => {
  BlueConicRN.registerUpdateValuesEvent(selector, values)
}

/**
 * Register a user update values event. For the event, a selector can be passed to trigger BlueConic Listeners, to execute their logic.
 * @param name The name of the advanced even, which can be used in the listener rules, to listen on
 * @param values context of the advanced event
 */
export const registerAdvancedEvent = (name: string, values: string[]) => {
  BlueConicRN.registerAdvancedEvent(name, values)
}
