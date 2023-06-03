import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { theme } from '@/config/theme';

type IProps = {
  style?: ViewProps['style'];
  children: React.ReactNode;
};

export const Layout = ({ style, children }: IProps) => {
  return <View style={[styles.container, style || {}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
});
