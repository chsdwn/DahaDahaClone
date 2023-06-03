import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { theme } from '@/config/theme';

type IProps = {
  url: string;
  backgroundColor: string;
};

export const BrandIcon = ({ url, backgroundColor }: IProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    position: 'absolute',
    bottom: -5,
    left: 0,
    borderRadius: 28,
    borderWidth: 5,
    borderColor: theme.white,
  },
  image: {
    aspectRatio: 1,
  },
});
