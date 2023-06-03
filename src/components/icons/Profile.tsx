import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

import { theme } from '@/config/theme';

export const Profile = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 17 17" {...props}>
    <Path
      fill={props.color || theme.black}
      fillRule="evenodd"
      d="M12.262 4.127C12.262 1.757 10.577 0 8.5 0S4.737 1.757 4.737 4.127 6.421 8.421 8.5 8.421c2.078 0 3.763-1.923 3.763-4.294zm4.193 10.566-.381-1.72c-.471-2.13-2.466-3.557-4.618-3.304a25.305 25.305 0 0 1-5.912 0C3.39 9.416 1.397 10.843.926 12.974l-.38 1.719A1.888 1.888 0 0 0 2.381 17h12.236c.138 0 .275-.015.41-.045a1.895 1.895 0 0 0 1.427-2.262z"
      clipRule="evenodd"
    />
  </Svg>
);
