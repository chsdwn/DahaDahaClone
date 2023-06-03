import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { theme } from '@/config/theme';

type IProps = {
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
};

export const CarouselProgress = (props: IProps) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 8;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length, width]);

  return (
    <View
      style={[
        styles.container,
        { transform: [{ rotateZ: isRotate ? '90deg' : '0deg' }] },
      ]}
    >
      <Animated.View
        style={[styles.indicator, { backgroundColor }, animStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightGray,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    overflow: 'hidden',
  },
  indicator: {
    borderRadius: 50,
    flex: 1,
  },
});
