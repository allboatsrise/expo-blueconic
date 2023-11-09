import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoBlueConic.web.ts
// and on native platforms to ExpoBlueConic.ts
import ExpoBlueConicModule from './ExpoBlueConicModule';
import ExpoBlueConicView from './ExpoBlueConicView';
import { ChangeEventPayload, ExpoBlueConicViewProps } from './ExpoBlueConic.types';

// Get the native constant value.
export const PI = ExpoBlueConicModule.PI;

export function hello(): string {
  return ExpoBlueConicModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoBlueConicModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoBlueConicModule ?? NativeModulesProxy.ExpoBlueConic);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoBlueConicView, ExpoBlueConicViewProps, ChangeEventPayload };
