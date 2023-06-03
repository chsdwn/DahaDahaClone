import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Wallet } from '@/screens';
import { PromotionsBottomBar } from '../components';
import { Promotions } from '../screens';
import { PromotionsBottomTabParamList } from '../types';

const Tab = createBottomTabNavigator<PromotionsBottomTabParamList>();
export const PromotionsBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <PromotionsBottomBar {...props} />}
    >
      <Tab.Screen name="Promotions" component={Promotions} />
      <Tab.Screen name="Wallet" component={Wallet} />
    </Tab.Navigator>
  );
};
