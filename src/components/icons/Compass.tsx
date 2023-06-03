import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Compass = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 26 26" {...props}>
    <Path
      fill={props.color || '#000'}
      fillRule="evenodd"
      d="M.135 13C.135 5.904 5.905.135 13 .135c7.096 0 12.865 5.77 12.865 12.865 0 7.096-5.77 12.865-12.865 12.865C5.904 25.865.135 20.095.135 13Zm16.386 2.274 3.087-7.095c.488-1.137-.65-2.275-1.787-1.787l-7.095 3.087a2.432 2.432 0 0 0-1.247 1.246l-3.06 7.122c-.515 1.111.65 2.248 1.76 1.76l7.096-3.086a2.433 2.433 0 0 0 1.246-1.247ZM13 14.76a1.76 1.76 0 1 0 0-3.52 1.76 1.76 0 0 0 0 3.52Z"
      clipRule="evenodd"
    />
  </Svg>
);
