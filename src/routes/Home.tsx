import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeBottomTabParamList } from '@/types';
import { PromotionsBottomTab } from './PromotionsBottomTab';
import { PromotionDetailsStack } from './PromotionDetailsStack';

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
