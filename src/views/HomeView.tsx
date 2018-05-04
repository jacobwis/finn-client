import * as React from 'react';
import AuthPrompt from '../components/AuthPrompt';
import ReadingList from '../components/ReadingList';
import View from '../components/View';
import * as AppContext from '../contexts/AppContext';

class HomeView extends React.Component {
  public render() {
    return (
      <View title="Finn">
        <div className="container">
          <AppContext.Consumer>
            {ctx => {
              if (ctx.currentUser) {
                return <ReadingList />;
              }

              return <AuthPrompt />;
            }}
          </AppContext.Consumer>
        </div>
      </View>
    );
  }
}

export default HomeView;
