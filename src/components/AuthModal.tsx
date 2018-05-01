import * as React from 'react';
import * as AuthModalContext from '../contexts/AuthModalContext';
import AuthPrompt from './AuthPrompt';
import Overlay from './Overlay';

const AuthModal: React.StatelessComponent = () => (
  <AuthModalContext.Consumer>
    {authModal => (
      <>
        <Overlay dataTestID="modal-overlay" onClick={authModal.hide} />
        <div className="AuthModal">
          <AuthPrompt />
        </div>
      </>
    )}
  </AuthModalContext.Consumer>
);

export default AuthModal;
