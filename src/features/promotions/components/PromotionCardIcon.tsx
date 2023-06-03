import React from 'react';
import { StyleSheet, View } from 'react-native';

type IProps = {
  backgroundColor: string;
};

export const PromotionCardIcon = ({ backgroundColor }: IProps) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 16,
        left: 16,
      }}
    >
      <View style={[styles.firstSquare, { backgroundColor }]} />
      <View style={[styles.secondSquare, { backgroundColor }]} />
      <View style={[styles.thirdSquare, { backgroundColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  firstSquare: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  secondSquare: {
    width: 64,
    height: 64,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 10,
    transform: [{ rotate: '30deg' }],
  },
  thirdSquare: {
    width: 64,
    height: 64,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 10,
    transform: [{ rotate: '60deg' }],
  },
});
