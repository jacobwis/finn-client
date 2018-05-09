import * as React from 'react';
import { CATEGORIES_QUERY, CategoriesQuery } from '../api';
import CategoryPreview from '../components/CategoryPreview';

class CategoriesView extends React.Component {
  public render() {
    return (
      <CategoriesQuery query={CATEGORIES_QUERY}>
        {({ data, loading }) => {
          if (loading) {
            return <div />;
          }

          const categories = data.categories;
          if (categories) {
            return (
              <div>
                {categories.map(category => {
                  return <CategoryPreview key={category.id} category={category} />;
                })}
              </div>
            );
          }
        }}
      </CategoriesQuery>
    );
  }
}

export default CategoriesView;
