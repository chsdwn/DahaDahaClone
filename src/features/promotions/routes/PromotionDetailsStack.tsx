import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PromotionsStackParamList } from '../types';
import { PromotionDetails } from '../screens';

const Stack = createNativeStackNavigator<PromotionsStackParamList>();

export const PromotionDetailsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PromotionDetails" component={PromotionDetails} />
    </Stack.Navigator>
  );
};
