import * as React from 'react';
import { mount } from 'enzyme';
import * as AuthModalContext from '../../contexts/AuthModalContext';
import * as MobileMenuContext from '../../contexts/MobileMenuContext';
import MobileMenu from '../MobileMenu';

describe('<MobileMenu />', () => {
  it('clicking the close menu button should hide the menu', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MobileMenu />
      </MobileMenuContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    expect(wrap.state().visible).toEqual(true);

    wrap.find('[data-test-id="hide-menu"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });

  it('clicking the menu overlay should hide the menu', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MobileMenu />
      </MobileMenuContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    wrap.find('[data-test-id="menu-overlay"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });

  it('clicking the sign in button should hide the menu', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MobileMenu />
      </MobileMenuContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    wrap.find('[data-test-id="sign-in-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });

  it('clicking the sign in button should show the AuthModal', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <MobileMenu />
      </AuthModalContext.Provider>
    );

    wrap.find('[data-test-id="sign-in-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });

  it('clicking the sign up button should hide the menu', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MobileMenu />
      </MobileMenuContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    wrap.find('[data-test-id="sign-up-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });

  it('clicking the sign up button should show the AuthModal', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <MobileMenu />
      </AuthModalContext.Provider>
    );

    wrap.find('[data-test-id="sign-up-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });
});
