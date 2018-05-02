import { ApolloClient } from 'apollo-client';
import { BOOK_QUERY, BookQueryResponse } from '../api';

export const preloadBookData = async (client: ApolloClient<any>, id: string) => {
  const res = await client.query<BookQueryResponse>({
    query: BOOK_QUERY,
    variables: { id }
  });
  const book = res.data.getBookByID;
  const covers = book.covers;
  const cover =
    covers.large || covers.medium || covers.small || covers.thumbnail || covers.smallThumbnail;
  const el = document.createElement('img');
  el.src = cover;
};
