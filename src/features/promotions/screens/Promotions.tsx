import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

import { Layout, Text } from '@/components';
import { HomeBottomTabNavigationProp } from '@/types';
import {
  useGetPromotionsQuery,
  useGetTagsQuery,
} from '../api/promotionsApiSlice';
import { PromotionsHeader, TagButtonsList } from '../components';
import { selectActiveTag } from '../store/promotionsSlice';
import { IPromotionItem } from '../types';

export const Promotions = () => {
  const navigation = useNavigation<HomeBottomTabNavigationProp>();

  const { data: promotionsData, isLoading } = useGetPromotionsQuery();
  const [promotions, setPromotions] = useState<IPromotionItem[]>([]);

  const { data } = useGetTagsQuery();
  const tags = [...(data || [])].sort((a, b) => a.Rank - b.Rank);

  const activeTag = useSelector(selectActiveTag);

  useEffect(() => {
    if (!promotionsData || promotionsData.length === 0) return;
    if (!activeTag) {
      setPromotions(promotionsData);
      return;
    }

    const filteredPromotions = promotionsData.filter((promotion) =>
      promotion.Title.toLocaleLowerCase('tr').includes(
        activeTag.Name.toLocaleLowerCase('tr'),
      ),
    );
    setPromotions(filteredPromotions);
  }, [activeTag, promotionsData]);

  const handleNavigatePromotionDetails = (id: number) => {
    navigation.navigate('PromotionDetailsStack', {
      screen: 'PromotionDetails',
      params: { id },
    });
  };

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Layout>
      <PromotionsHeader />

      <TagButtonsList tags={tags} />

      <Text>Promotions</Text>
      {promotions?.map((promotion) => (
        <TouchableWithoutFeedback
          key={promotion.Id}
          onPress={() => handleNavigatePromotionDetails(promotion.Id)}
        >
          <View>
            <Text>{promotion.Title}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Layout>
  );
};
