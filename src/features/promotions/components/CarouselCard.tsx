import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { WINDOW_WIDTH } from '@/config';
import { theme } from '@/config/theme';
import { HomeBottomTabNavigationProp } from '@/types';
import {
  BrandIcon,
  CarouselButton,
  CarouselCardShadow,
  CarouselImage,
  CarouselRemainingDaysBadge,
  CarouselTitle,
} from '.';
import { IPromotionItem } from '../types';

type IProps = {
  promotion: IPromotionItem;
};

export const CarouselCard = ({ promotion }: IProps) => {
  const navigation = useNavigation<HomeBottomTabNavigationProp>();

  const handleNavigatePromotionDetails = (id: number) => {
    navigation.navigate('PromotionDetailsStack', {
      screen: 'PromotionDetails',
      params: { id },
    });
  };

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.shadow}>
        <CarouselCardShadow
          width={WINDOW_WIDTH}
          color={promotion.PromotionCardColor}
        />
      </View>

      <TouchableWithoutFeedback
        onPress={() => handleNavigatePromotionDetails(promotion.Id)}
      >
        <View key={promotion.Id} style={styles.container}>
          <View style={styles.imageContainer}>
            <CarouselImage url={promotion.ImageUrl} />

            <BrandIcon
              backgroundColor={promotion.BrandIconColor}
              url={promotion.BrandIconUrl}
            />
            <CarouselRemainingDaysBadge date={promotion.RemainingText} />
          </View>

          <CarouselTitle html={promotion.Title} />
          <CarouselButton html={promotion.ListButtonText} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const borderRadius = 16;
const styles = StyleSheet.create({
  shadowContainer: {
    marginTop: -WINDOW_WIDTH * 0.08,
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    bottom: -borderRadius,
    height: borderRadius * 2,
  },
  container: {
    backgroundColor: theme.white,
    borderColor: theme.lightestGray,
    borderWidth: 2,
    borderRadius,
    paddingBottom: 4,
  },
  imageContainer: {
    margin: 4,
    borderRadius,
    position: 'relative',
  },
});
