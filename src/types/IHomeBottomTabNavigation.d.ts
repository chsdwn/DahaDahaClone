import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

import type {
  PromotionsBottomTabParamList,
  PromotionsStackParamList,
} from '@/features/promotions/types';

export type HomeBottomTabParamList = {
  PromotionsBottomTab: NavigatorScreenParams<PromotionsBottomTabParamList>;
  PromotionDetailsStack: NavigatorScreenParams<PromotionsStackParamList>;
};

export type HomeBottomTabNavigationProp =
  BottomTabNavigationProp<HomeBottomTabParamList>;
