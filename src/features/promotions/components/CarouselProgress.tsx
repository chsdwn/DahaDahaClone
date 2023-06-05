import React from 'react';
import { StyleSheet } from 'react-native';
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

const ACTIVE_INDICATOR_SIZE = 18;
const INDICATOR_SIZE = 8;

export const CarouselProgress = (props: IProps) => {
  const { animValue, index, length, backgroundColor } = props;

  const widthStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
    }

    return {
      width: interpolate(
        animValue?.value,
        inputRange,
        [INDICATOR_SIZE, ACTIVE_INDICATOR_SIZE, INDICATOR_SIZE],
        Extrapolate.CLAMP,
      ),
    };
  }, [animValue, index, length]);

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            [-INDICATOR_SIZE, 0, INDICATOR_SIZE],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <Animated.View style={[styles.container, widthStyle]}>
      <Animated.View
        style={[styles.indicator, { backgroundColor }, animStyle]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightGray,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE / 2,
    marginHorizontal: 2,
    overflow: 'hidden',
  },
  indicator: {
    borderRadius: 50,
    flex: 1,
  },
});
