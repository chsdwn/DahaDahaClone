import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '@/config/theme';

type IProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: IProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
});
