export interface IPromotionDetails {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Description: string;
  EndDate: string;
  Id: number;
  ImageUrl: string;
  CountryTimeZone: number;
  RemainingText: string;
  StartDate: string;
  Title: string;
  Type: string;
  ScenarioType: 'Default' | 'DahaPoint';
  SeoName: string;
  Unavailable: boolean;
  IsMapAvailable: boolean;
  Unvisible: boolean;
  DetailButtonText: string;
  ListButtonText: any;
  PromotionDetailItemAreas: {
    Title: string;
    PromotionDetailItems: {
      Title: string;
      Description: string;
      ImageUrl: string;
    }[];
  }[];
  NextFlowConfigurations: {};
}
