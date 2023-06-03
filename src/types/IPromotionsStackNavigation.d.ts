import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PromotionsStackParamList = {
  PromotionDetails: { id: number };
};

export type PromotionsNavigationProp =
  NativeStackNavigationProp<PromotionsStackParamList>;

export type PromotionDetailsRouteProp = RouteProp<
  PromotionsStackParamList,
  'PromotionDetails'
>;
