import * as React from 'react';
import * as AppContext from '../contexts/AppContext';
import AuthPrompt from './AuthPrompt';
import Overlay from './Overlay';

const AuthModal: React.StatelessComponent = () => (
  <AppContext.Consumer>
    {ctx => (
      <>
        <Overlay dataTestID="modal-overlay" onClick={ctx.hideAuthModal} />
        <div className="AuthModal">
          <AuthPrompt />
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default AuthModal;
