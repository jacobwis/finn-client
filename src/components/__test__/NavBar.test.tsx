import * as React from 'react';
import { mount } from 'enzyme';
import * as AuthModalContext from '../../contexts/AuthModalContext';
import * as MobileMenuContext from '../../contexts/MobileMenuContext';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('clicking the menu toggle button should show the menu', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <NavBar />
      </MobileMenuContext.Provider>
    );

    wrap.find('[data-test-id="menu-toggle"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });

  it('clicking the sign up button should show the auth modal', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <NavBar />
      </AuthModalContext.Provider>
    );

    wrap.find('[data-test-id="sign-up-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });

  it('clicking the sign in button should show the auth modal', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <NavBar />
      </AuthModalContext.Provider>
    );

    wrap.find('[data-test-id="sign-in-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });
});
