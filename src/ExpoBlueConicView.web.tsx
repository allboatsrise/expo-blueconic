import * as React from 'react';

import { ExpoBlueConicViewProps } from './ExpoBlueConic.types';

export default function ExpoBlueConicView(props: ExpoBlueConicViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
