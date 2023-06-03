import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PromotionDetails as PromotionDetailsScreen } from '@/screens';
import { PromotionsStackParamList } from '@/types';

const Stack = createNativeStackNavigator<PromotionsStackParamList>();

export const PromotionDetailsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PromotionDetails"
        component={PromotionDetailsScreen}
      />
    </Stack.Navigator>
  );
};
