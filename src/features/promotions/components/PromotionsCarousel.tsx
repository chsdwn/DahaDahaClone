import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import { Loading } from '@/components';
import { WINDOW_WIDTH } from '@/config';
import { theme } from '@/config/theme';
import {
  BrandIcon,
  CarouselButton,
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
  const carouselProgress = useSharedValue(0);

  if (isLoading) return <Loading />;
  return (
    <View>
      <Carousel
        width={WINDOW_WIDTH}
        style={styles.carousel}
        pagingEnabled
        snapEnabled
        loop={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 90,
        }}
        onProgressChange={(_, absoluteValue) => {
          carouselProgress.value = absoluteValue;
        }}
        data={promotions}
        renderItem={({ item: promotion }) => (
          <View
            style={[
              styles.outerShadow,
              { backgroundColor: promotion.PromotionCardColor },
            ]}
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
              <CarouselButton
                id={promotion.Id}
                html={promotion.ListButtonText}
              />
            </View>
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

const styles = StyleSheet.create({
  outerShadow: {
    paddingBottom: 16,
    borderRadius: 16,
  },
  carousel: {
    width: WINDOW_WIDTH,
    height: 450,
    marginTop: -16,
  },
  container: {
    backgroundColor: theme.white,
    borderColor: theme.lightestGray,
    borderWidth: 2,
    borderRadius: 16,
  },
  imageContainer: {
    margin: 4,
    borderRadius: 16,
    position: 'relative',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -48,
  },
});
