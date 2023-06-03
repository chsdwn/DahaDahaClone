import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type IProps = {
  url: string;
};

export const CarouselImage = ({ url }: IProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} resizeMode="cover" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 16,
    borderBottomLeftRadius: 96,
  },
  image: {
    aspectRatio: 750 / 628,
    top: 0,
  },
});
