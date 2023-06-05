import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/core';

import { Loading } from '@/components';
import { WINDOW_WIDTH } from '@/config';
import { theme } from '@/config/theme';
import { HomeBottomTabNavigationProp } from '@/types';
import {
  BrandIcon,
  CarouselButton,
  CarouselCardShadow,
  CarouselImage,
  CarouselProgress,
  CarouselRemainingDaysBadge,
  CarouselTitle,
} from '.';
import { IPromotionItem } from '../types';

type IProps = {
  promotions?: IPromotionItem[];
  isLoading: boolean;
};

export const PromotionsCarousel = ({ promotions = [], isLoading }: IProps) => {
  const navigation = useNavigation<HomeBottomTabNavigationProp>();

  const carouselProgress = useSharedValue(0);

  const handleNavigatePromotionDetails = (id: number) => {
    navigation.navigate('PromotionDetailsStack', {
      screen: 'PromotionDetails',
      params: { id },
    });
  };
  if (isLoading) return <Loading />;
  return (
    <View>
      <Carousel
        width={WINDOW_WIDTH}
        height={WINDOW_WIDTH * 1.1}
        pagingEnabled
        snapEnabled
        loop={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: WINDOW_WIDTH * 0.25,
        }}
        onProgressChange={(_, absoluteValue) => {
          carouselProgress.value = absoluteValue;
        }}
        data={promotions}
        renderItem={({ item: promotion }) => (
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
        )}
      />
      <View style={styles.progressContainer}>
        {!isLoading &&
          promotions.map((p, index) => (
            <CarouselProgress
              key={p.Id}
              backgroundColor={promotions[index].PromotionCardColor}
              animValue={carouselProgress}
              index={index}
              length={promotions.length}
            />
          ))}
      </View>
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
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
