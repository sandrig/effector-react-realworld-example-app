// export const getArticle = (slug: string) => {
//   return http
//     .request<{ article: article.types.Article }>({
//       url: `articles/${slug}`,
//       method: 'GET',
//     })
//     .then((response) => response.article)
//     .then(({ createdAt, ...rest }) => ({
//       ...rest,
//       createdAt: new Date(createdAt).toDateString(),
//     }));
// };
