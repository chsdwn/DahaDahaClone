import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

type IProps = { bold?: boolean } & TextProps;

export const Text = ({ bold = false, style, children, ...props }: IProps) => {
  return (
    <RNText
      style={[
        { color: 'black' },
        style,
        { fontFamily: 'Helvetica', fontWeight: bold ? '700' : '400' },
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
