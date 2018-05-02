import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BookQuery, BOOK_QUERY } from '../api';
import BookDetail from '../components/BookDetail';
import View from '../components/View';

class BookView extends React.Component<RouteComponentProps<{ id: string }>> {
  public render() {
    const id = this.props.match.params.id;
    return (
      <BookQuery query={BOOK_QUERY} variables={{ id }}>
        {({ data, loading }) => {
          if (loading) {
            return <div />;
          }
          const book = data.getBookByID;
          return (
            <View title={`${book.title} - Finn`}>
              <div className="container">
                <BookDetail book={book} />
              </div>
            </View>
          );
        }}
      </BookQuery>
    );
  }
}

export default BookView;
