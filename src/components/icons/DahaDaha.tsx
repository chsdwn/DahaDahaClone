import React from 'react';
import { Image, StyleSheet } from 'react-native';

const icon = require('@/assets/images/DahaDaha.png');

type IProps = {
  width?: number;
  height?: number;
};

export const DahaDaha = ({ width, height }: IProps) => {
  return (
    <Image
      source={icon}
      style={[
        styles.image,
        {
          width,
          height,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 512 / 253,
  },
});
