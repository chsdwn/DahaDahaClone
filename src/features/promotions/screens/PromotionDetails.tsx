import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import RenderHtml from 'react-native-render-html';

import { Layout, Loading, Text } from '@/components';
import { LeftArrow } from '@/components/icons';
import { theme } from '@/config/theme';
import { useGetPromotionDetailsQuery } from '../api/promotionsApiSlice';
import { BrandIcon, CarouselRemainingDaysBadge } from '../components';
import { PromotionDetailsRouteProp } from '../types';
import { WINDOW_WIDTH } from '@/config';

export const PromotionDetails = () => {
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute<PromotionDetailsRouteProp>();

  const { data: promotion, isLoading } = useGetPromotionDetailsQuery(id);

  if (isLoading) return <Loading />;
  if (!promotion) return <Text>Promotion not found</Text>;

  return (
    <Layout style={styles.container}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.imageBadgeContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: promotion.ImageUrl }}
              resizeMode="cover"
              style={styles.image}
            />
          </View>

          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.goBackBtn}>
              <LeftArrow color={theme.white} width={16} height={16} />
            </View>
          </TouchableWithoutFeedback>

          <BrandIcon
            backgroundColor={promotion.BrandIconColor}
            url={promotion.BrandIconUrl}
          />
          <CarouselRemainingDaysBadge date={promotion.RemainingText} />
        </View>

        <View style={styles.textContentContainer}>
          <RenderHtml
            source={{ html: promotion.Title }}
            contentWidth={WINDOW_WIDTH - 32}
            tagsStyles={{
              p: {
                fontFamily: 'Helvetica',
                fontWeight: '700',
                fontSize: 26,
                textAlign: 'left',
                color: theme.darkGray,
              },
            }}
          />

          <RenderHtml
            source={{ html: promotion.Description }}
            contentWidth={WINDOW_WIDTH - 32}
            tagsStyles={{
              p: {
                fontFamily: 'Helvetica',
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'left',
                color: theme.darkGray,
              },
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBtnShadow} />
      <View style={styles.bottomBtnContainer}>
        <Text style={styles.bottomBtnTitle}>{promotion.DetailButtonText}</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: { position: 'relative' },
  scrollViewContainer: { flex: 1 },
  scrollViewContent: { paddingBottom: 96 },
  imageBadgeContainer: {
    borderRadius: 16,
    position: 'relative',
  },
  imageContainer: {
    overflow: 'hidden',
    borderBottomLeftRadius: 96,
  },
  image: {
    aspectRatio: 750 / 628,
    top: 0,
  },
  goBackBtn: {
    position: 'absolute',
    top: 56,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.darkGray,
  },
  textContentContainer: { marginHorizontal: 16 },
  bottomBtnShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: theme.white,
    opacity: 0.5,
    width: '100%',
    height: 96,
  },
  bottomBtnContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    width: WINDOW_WIDTH - 32,
    backgroundColor: theme.red,
    padding: 18,
    borderRadius: 28,
  },
  bottomBtnTitle: {
    textAlign: 'center',
    color: theme.white,
    fontWeight: '700',
    fontSize: 14,
  },
});
