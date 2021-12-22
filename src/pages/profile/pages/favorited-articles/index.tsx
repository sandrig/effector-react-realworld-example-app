import { useEffect } from 'react';
import * as article from 'entities/article';
import { Pagination } from 'shared/ui';
import { useQueryParam, withDefault, NumberParam } from 'use-query-params';
import * as profile from '../../model';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const FavoritedArticlesPage: React.FC<Props> = ({ pageSize = 5 }) => {
  const feed = useFeed(pageSize);

  return (
    <>
      <article.Feed
        articlesStore={model.$articles}
        isEmpty={feed.isEmpty}
        loading={feed.loading}
        onFavoriteToggle={feed.handleFavoriteToggle}
      />
      <Pagination
        current={feed.page}
        pageSize={pageSize}
        total={feed.totalPages}
        onPageChange={feed.handlePageChange}
      />
    </>
  );
};

function useFeed(pageSize: number) {
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1));
  const username = profile.selectors.useUserName();
  const loading = model.selectors.useGetFeedPending();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    model.getFeedFx({ username, page, pageSize });
  }, [username, page, pageSize]);

  const handlePageChange = (x: number) => {
    setPage(x);
  };

  const handleFavoriteToggle = (payload: article.types.SelectedArticle) => {
    model.favoriteArticleToggled(payload);
    model.setUnfavoriteArticleFx.done.watch(() => {
      model.getFeedFx({ username, page, pageSize });
    });
  };

  return {
    page,
    loading,
    isEmpty,
    totalPages,
    handlePageChange,
    handleFavoriteToggle,
  };
}

export default FavoritedArticlesPage;
