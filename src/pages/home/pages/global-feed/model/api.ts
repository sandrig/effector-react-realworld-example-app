import { api } from '@/shared/api';
import { limit } from '@/shared/library/limit';
import * as article from '@/entities/article';

export type getFeedFxArgs = {
  pageSize: number;
  page: number;
};

export const getFeed = ({ pageSize, page }: getFeedFxArgs) => {
  const pageIndex = page - 1;

  return api.request<article.types.FeedType>({
    url: `/articles?${limit(pageSize, pageIndex)}`,
    method: 'GET',
  });
};
