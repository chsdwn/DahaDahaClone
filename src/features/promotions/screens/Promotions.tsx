import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Layout } from '@/components';
import {
  useGetPromotionsQuery,
  useGetTagsQuery,
} from '../api/promotionsApiSlice';
import {
  PromotionsCarousel,
  PromotionsHeader,
  TagButtonsList,
} from '../components';
import { selectActiveTag } from '../store/promotionsSlice';
import { IPromotionItem } from '../types';

export const Promotions = () => {
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

  return (
    <Layout>
      <PromotionsHeader />

      <TagButtonsList tags={tags} />

      <PromotionsCarousel promotions={promotions} isLoading={isLoading} />
    </Layout>
  );
};
