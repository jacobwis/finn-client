import * as React from 'react';
import AuthPrompt from '../components/AuthPrompt';
import ReadingList from '../components/ReadingList';
import View from '../components/View';
import * as AppContext from '../contexts/AppContext';
import CategoriesView from './CategoriesView';

class HomeView extends React.Component {
  public render() {
    return (
      <View title="Finn">
        <AppContext.Consumer>
          {ctx => {
            if (ctx.currentUser) {
              return (
                <div className="container">
                  <ReadingList />
                </div>
              );
            }

            return (
              <>
                <div className="container">
                  <AuthPrompt />
                </div>
                <CategoriesView />
              </>
            );
          }}
        </AppContext.Consumer>
      </View>
    );
  }
}

export default HomeView;
