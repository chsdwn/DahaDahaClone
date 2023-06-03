import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/core';

import { PromotionDetailsRouteProp } from '@/types';

export const PromotionDetails = () => {
  const {
    params: { id },
  } = useRoute<PromotionDetailsRouteProp>();

  return (
    <View>
      <Text>Promotion Details: {id}</Text>
    </View>
  );
};
