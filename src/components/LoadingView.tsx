import * as React from 'react';

class LoadingView extends React.Component {
  public render() {
    return (
      <div className="LoadingView">
        <span className="LoadingView__spinner">
          <i className="fas fa-spin fa-spinner-third" />
        </span>
      </div>
    );
  }
}

export default LoadingView;
