import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Wallet } from '@/screens';
import { PromotionsBottomTabParamList } from '../types';
import { Promotions } from '../screens';

const PromotionsBottomBar = ({ navigation }: BottomTabBarProps) => {
  const routeIndex = navigation.getState().index;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Promotions')}
      >
        <View
          style={{
            padding: 16,
            borderWidth: 2,
            borderColor: 'black',
            width: '33%',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: routeIndex === 0 ? '700' : '400',
            }}
          >
            Keşfet
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={{ width: '33%' }}>
        <Text style={{ textAlign: 'center' }}>Logo</Text>
      </View>

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Wallet')}>
        <View style={{ padding: 16, borderWidth: 2, borderColor: 'black' }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: routeIndex === 1 ? '700' : '400',
            }}
          >
            Daha Cüzdan
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const Tab = createBottomTabNavigator<PromotionsBottomTabParamList>();
export const PromotionsBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <PromotionsBottomBar {...props} />}
    >
      <Tab.Screen name="Promotions" component={Promotions} />
      <Tab.Screen name="Wallet" component={Wallet} />
    </Tab.Navigator>
  );
};
