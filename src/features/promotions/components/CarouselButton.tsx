import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import RenderHtml from 'react-native-render-html';

import { HomeBottomTabNavigationProp } from '@/types';

type IProps = {
  id: number;
  html: string;
};

export const CarouselButton = ({ id, html }: IProps) => {
  const navigation = useNavigation<HomeBottomTabNavigationProp>();

  const handleNavigatePromotionDetails = () => {
    navigation.navigate('PromotionDetailsStack', {
      screen: 'PromotionDetails',
      params: { id },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleNavigatePromotionDetails}>
      <View>
        <RenderHtml
          source={{ html }}
          contentWidth={100}
          tagsStyles={{
            p: {
              fontFamily: 'Helvetica',
              fontWeight: '700',
              fontSize: 14,
              textAlign: 'center',
            },
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
