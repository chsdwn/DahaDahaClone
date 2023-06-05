import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

import { theme } from '@/config/theme';

const ASPECT_RATIO = 7 / 61;

export const CarouselCardShadow = (props: SvgProps) => {
  const width = (props.width as number) || 61;
  const height = width * ASPECT_RATIO;

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      color={props.color || theme.black}
      viewBox="0 0 305 35"
      {...props}
    >
      <Path
        d="M0 0c.011 4.967.351 8.44 1.647 11.229a20.014 20.014 0 0 0 8.319 8.994c4.146 2.34 9.673 2.61 20.73 3.146l240.65 11.682c11.734.569 17.6.853 22.105-1.248a20.041 20.041 0 0 0 9.248-8.791c2.318-4.388 2.312-10.244 2.3-21.96L304.993 0Z"
        style={{
          fill: props.color || theme.black,
          strokeWidth: 1.00143,
        }}
      />
    </Svg>
  );
};
