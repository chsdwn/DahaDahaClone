import React, { useMemo } from 'react';
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

export const Promotions = () => {
  const { data: promotionsData, isLoading } = useGetPromotionsQuery();
  const activeTag = useSelector(selectActiveTag);

  const promotions = useMemo(() => {
    if (!promotionsData || promotionsData.length === 0) return [];
    if (!activeTag) return promotionsData;

    const filteredPromotions = promotionsData.filter((promotion) =>
      promotion.Title.toLocaleLowerCase('tr').includes(
        activeTag.Name.toLocaleLowerCase('tr'),
      ),
    );
    return filteredPromotions;
  }, [promotionsData, activeTag]);

  const { data } = useGetTagsQuery();
  const tags = [...(data || [])].sort((a, b) => a.Rank - b.Rank);

  return (
    <Layout>
      <PromotionsHeader />

      <TagButtonsList tags={tags} />

      <PromotionsCarousel promotions={promotions} isLoading={isLoading} />
    </Layout>
  );
};
