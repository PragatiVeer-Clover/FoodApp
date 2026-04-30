import React from 'react';
import iconMap, { type IconKey } from '../assets/iconMap';
import { ViewStyle } from 'react-native';

type IconByVariantProps = {
  name: IconKey;
  size?: number;
  color?: string;
  fillColor?: string;
  style?: ViewStyle;
};

const IconByVariant = ({
  name,
  size = 24,
  color,
  style,
  fillColor
}: IconByVariantProps) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.error(`❌ Icon not found: ${name}`);
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      stroke={color}
      fill={fillColor ? fillColor : 'none'}
      style={style}
    />
  );
};

export default IconByVariant;
