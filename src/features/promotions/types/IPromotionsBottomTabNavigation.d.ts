import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

export type PromotionsBottomTabParamList = {
  Promotions: undefined;
  Wallet: undefined;
};

export type PromotionsBottomTabNavigationProp =
  BottomTabNavigationProp<PromotionsBottomTabParamList>;

export type PromotionsBottomTabRouteProps =
  BottomTabScreenProps<PromotionsBottomTabParamList>;
