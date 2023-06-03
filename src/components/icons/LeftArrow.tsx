import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const LeftArrow = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 17.02 17.02" {...props}>
    <Path
      fill={props.color || '#000'}
      fillRule="evenodd"
      d="m.41 7.55 5.495-5.494c.253-.253.6-.411.947-.411.348 0 .695.126.947.41a1.354 1.354 0 0 1 0 1.928L4.642 7.139h11.02c.757 0 1.358.6 1.358 1.358 0 .758-.6 1.359-1.358 1.359H4.642l3.19 3.19a1.354 1.354 0 0 1 0 1.927 1.354 1.354 0 0 1-1.927 0L.41 9.445C.158 9.192 0 8.845 0 8.498c0-.348.158-.695.41-.948z"
      clipRule="evenodd"
    />
  </Svg>
);
