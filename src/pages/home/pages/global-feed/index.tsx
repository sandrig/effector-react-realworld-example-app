import { useEffect } from 'react';
import * as article from 'entities/article';
import {
  paginationChanged,
  favoriteArticleToggled,
  getFeedFx,
  $articles,
  selectors,
} from './model';

const GlobalFeedPage: React.FC = () => {
  const loading = selectors.useGetFeedPending();
  const isEmpty = selectors.useIsEmptyFeed();
  const pageSize = selectors.usePageSize();
  const pageIndex = selectors.usePageIndex();
  const pageNumber = selectors.usePageNumber();
  const totalPages = selectors.useTotalPages();

  const handlePageChange = (page: number) => {
    paginationChanged(page);
    getFeedFx({ pageSize, pageIndex });
  };

  useEffect(() => {
    getFeedFx({ pageSize, pageIndex });
  }, [pageSize, pageIndex]);

  return (
    <article.Feed
      articles={$articles}
      isEmpty={isEmpty}
      loading={loading}
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalPages={totalPages}
      onArticleClick={favoriteArticleToggled}
      onPageChange={handlePageChange}
    />
  );
};

export default GlobalFeedPage;