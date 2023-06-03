import React from 'react';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Layout, Text } from '@/components';
import { HomeBottomTabNavigationProp } from '@/types';
import {
  useGetPromotionsQuery,
  useGetTagsQuery,
} from '../api/promotionsApiSlice';
import { PromotionsHeader } from '../components';

export const Promotions = () => {
  const navigation = useNavigation<HomeBottomTabNavigationProp>();

  const { data: promotions, isLoading } = useGetPromotionsQuery();
  const { data } = useGetTagsQuery();
  const tags = [...(data || [])].sort((a, b) => a.Rank - b.Rank);

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Layout>
      <PromotionsHeader />

      <Text>Promotion Tags</Text>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tags.length > 0 &&
            tags.map((tag) => (
              <TouchableWithoutFeedback key={tag.Id}>
                <View style={{ borderWidth: 1, borderColor: 'black' }}>
                  <Text>{tag.Name}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
        </ScrollView>
      </View>

      <Text>Promotions</Text>
      {promotions?.map((promotion) => (
        <TouchableWithoutFeedback
          key={promotion.Id}
          onPress={() =>
            navigation.navigate('PromotionDetailsStack', {
              screen: 'PromotionDetails',
              params: { id: promotion.Id },
            })
          }
        >
          <View>
            <Text>{promotion.Title}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Layout>
  );
};
