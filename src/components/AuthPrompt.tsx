import * as React from 'react';

interface Props {
  action?: 'SIGN_UP' | 'SIGN_IN';
}

const AuthPrompt: React.StatelessComponent<Props> = ({ action }) => {
  const headerText = action === 'SIGN_UP' ? 'Sign up to get started' : 'Sign in to get started';

  return (
    <div className="AuthPrompt">
      <h1 className="AuthPrompt__heading">{headerText}</h1>
      <p className="AuthPrompt__text">
        Create a Finn account using a service below to start creating reading lists
      </p>
      <div className="AuthPrompt__buttons">
        <a className="AuthPrompt__button AuthPrompt__button--twitter" href="/auth/twitter">
          <span className="AuthPrompt__button-icon">
            <i className="fab fa-twitter" />
          </span>
          <span className="AuthPrompt__button-text">Sign In with Twitter</span>
        </a>
        <a className="AuthPrompt__button AuthPrompt__button--facebook" href="/auth/facebook">
          <span className="AuthPrompt__button-icon">
            <i className="fab fa-facebook-f" />
          </span>
          <span className="AuthPrompt__button-text">Sign In with Facebook</span>
        </a>
        <a className="AuthPrompt__button AuthPrompt__button--google" href="/auth/google">
          <span className="AuthPrompt__button-icon">
            <i className="fab fa-google" />
          </span>
          <span className="AuthPrompt__button-text">Sign In with Google</span>
        </a>
      </div>
    </div>
  );
};

AuthPrompt.defaultProps = {
  action: 'SIGN_UP'
};

export default AuthPrompt;
