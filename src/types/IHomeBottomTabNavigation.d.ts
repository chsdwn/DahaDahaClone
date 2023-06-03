import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import { PromotionsBottomTabParamList, PromotionsStackParamList } from '.';

export type HomeBottomTabParamList = {
  PromotionsBottomTab: NavigatorScreenParams<PromotionsBottomTabParamList>;
  PromotionDetailsStack: NavigatorScreenParams<PromotionsStackParamList>;
};

export type HomeBottomTabNavigationProp =
  BottomTabNavigationProp<HomeBottomTabParamList>;
