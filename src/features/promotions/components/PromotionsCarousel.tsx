import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import { Loading } from '@/components';
import { WINDOW_WIDTH } from '@/config';
import { CarouselCard, CarouselProgress } from '.';
import { IPromotionItem } from '../types';

type IProps = {
  promotions?: IPromotionItem[];
  isLoading: boolean;
};

export const PromotionsCarousel = ({ promotions = [], isLoading }: IProps) => {
  const carouselProgress = useSharedValue(0);

  if (isLoading) return <Loading />;
  if (promotions.length === 0) return null;

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
          <CarouselCard promotion={promotion} />
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
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
