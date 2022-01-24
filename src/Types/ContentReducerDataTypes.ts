export type dataResultType = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    headline: string;
    standfirst: string;
    trailText: string;
    byline: string;
    main: string;
    body: string;
    wordcount: string;
    firstPublicationDate: string;
    isInappropriateForSponsorship: string;
    isPremoderated: string;
    lastModified: string;
    productionOffice: string;
    publication: string;
    shortUrl: string;
    shouldHideAdverts: string;
    showInRelatedContent: string;
    thumbnail: string;
    legallySensitive: string;
    lang: string;
    isLive: string;
    bodyText: string;
    charCount: string;
    shouldHideReaderRevenue: string;
    showAffiliateLinks: string;
    bylineHtml: string;
  };
  tags: [
    {
      id: string;
      type: string;
      sectionId: string;
      sectionName: string;
      webTitle: string;
      webUrl: string;
      apiUrl: string;
      references?: [];
    }
  ];
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
};
export type DataType = {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: Array<dataResultType>;
};
export type initialStateType = {
  data: DataType;
  Fetching: boolean;
};
