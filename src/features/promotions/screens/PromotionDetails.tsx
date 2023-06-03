import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/core';

import { PromotionDetailsRouteProp } from '../types';
import { useGetPromotionDetailsQuery } from '../api/promotionsApiSlice';

export const PromotionDetails = () => {
  const {
    params: { id },
  } = useRoute<PromotionDetailsRouteProp>();

  const { data: promotion, isLoading } = useGetPromotionDetailsQuery(id);

  if (isLoading) return <Text>Loading...</Text>;
  if (!promotion) return <Text>Promotion not found</Text>;

  return (
    <View>
      <Text>Promotion Details</Text>
      <Text>{promotion.Title}</Text>
      <Text>{promotion.Description}</Text>
    </View>
  );
};
