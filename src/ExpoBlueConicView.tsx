import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoBlueConicViewProps } from './ExpoBlueConic.types';

const NativeView: React.ComponentType<ExpoBlueConicViewProps> =
  requireNativeViewManager('ExpoBlueConic');

export default function ExpoBlueConicView(props: ExpoBlueConicViewProps) {
  return <NativeView {...props} />;
}
