import * as React from 'react';

const AuthPrompt: React.StatelessComponent = () => (
  <div className="AuthPrompt">
    <h1 className="AuthPrompt__heading">Sign up to get started</h1>
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
      <a className="AuthPrompt__button AuthPrompt__button--facebook" href="#">
        <span className="AuthPrompt__button-icon">
          <i className="fab fa-facebook-f" />
        </span>
        <span className="AuthPrompt__button-text">Sign In with Facebook</span>
      </a>
      <a className="AuthPrompt__button AuthPrompt__button--google" href="#">
        <span className="AuthPrompt__button-icon">
          <i className="fab fa-google" />
        </span>
        <span className="AuthPrompt__button-text">Sign In with Google</span>
      </a>
    </div>
  </div>
);

export default AuthPrompt;
