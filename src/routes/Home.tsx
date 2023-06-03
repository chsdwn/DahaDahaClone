import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  PromotionDetailsStack,
  PromotionsBottomTab,
} from '@/features/promotions/routes';
import { HomeBottomTabParamList } from '@/types';

const Stack = createNativeStackNavigator<HomeBottomTabParamList>();
export const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PromotionsBottomTab"
        component={PromotionsBottomTab}
      />
      <Stack.Screen
        name="PromotionDetailsStack"
        component={PromotionDetailsStack}
      />
    </Stack.Navigator>
  );
};
