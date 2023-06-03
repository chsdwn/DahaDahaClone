import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { HomeBottomTabNavigationProp } from '@/types';

export const Promotions = () => {
  const navigation = useNavigation<HomeBottomTabNavigationProp>();

  return (
    <View>
      <Button
        title="Promotion 1"
        onPress={() => {
          navigation.navigate('PromotionDetailsStack', {
            screen: 'PromotionDetails',
            params: { id: 1 },
          });
        }}
      />
      <Button
        title="Promotion 2"
        onPress={() => {
          navigation.navigate('PromotionDetailsStack', {
            screen: 'PromotionDetails',
            params: { id: 2 },
          });
        }}
      />
    </View>
  );
};
