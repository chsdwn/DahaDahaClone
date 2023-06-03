import React from 'react';
import { Image, StyleSheet } from 'react-native';

const icon = require('@/assets/images/BottomBarPlus.png');

type IProps = {
  width?: number;
  height?: number;
};

export const BottomBarPlus = ({ width = 50, height }: IProps) => {
  return <Image source={icon} style={[styles.image, { width, height }]} />;
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
  },
});
