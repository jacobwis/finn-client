import * as React from 'react';
import { Link } from 'react-router-dom';
import { BOOKS_BY_CATEGORY_QUERY, BooksByCategoryQuery, Category } from '../api';
import BookListHorizontal from './BookListHorizontal';

interface Props {
  category: Category;
}

class CategoryPreview extends React.Component<Props> {
  public render() {
    const { category } = this.props;
    return (
      <div className="CategoryPreview">
        <div className="CategoryPreview__header">
          <p className="CategoryPreview__name">{category.name}</p>
          <Link className="CategoryPreview__link" to={`/categories/${category.id}`}>
            View All
          </Link>
        </div>
        <BooksByCategoryQuery
          query={BOOKS_BY_CATEGORY_QUERY}
          variables={{ category: category.id, options: { maxResults: 10 } }}
        >
          {({ data, loading }) => {
            return <BookListHorizontal books={data.booksByCategory} />;
          }}
        </BooksByCategoryQuery>
      </div>
    );
  }
}

export default CategoryPreview;
