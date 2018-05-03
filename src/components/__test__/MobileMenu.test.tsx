import * as React from 'react';
import { mount } from 'enzyme';
import * as AppContext from '../../contexts/AppContext';
import MobileMenu from '../MobileMenu';

describe.skip('<MobileMenu />', () => {
  it('clicking the close menu button should hide the menu', () => {
    const wrap = mount(
      <AppContext.Provider>
        <MobileMenu />
      </AppContext.Provider>
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
      <AppContext.Provider>
        <MobileMenu />
      </AppContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    wrap.find('[data-test-id="menu-overlay"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });

  it('clicking the sign in button should hide the menu', () => {
    const wrap = mount(
      <AppContext.Provider>
        <MobileMenu />
      </AppContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    wrap.find('[data-test-id="sign-in-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });

  it('clicking the sign in button should show the AuthModal', () => {
    const wrap = mount(
      <AppContext.Provider>
        <MobileMenu />
      </AppContext.Provider>
    );

    wrap.find('[data-test-id="sign-in-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });

  it('clicking the sign up button should hide the menu', () => {
    const wrap = mount(
      <AppContext.Provider>
        <MobileMenu />
      </AppContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    wrap.find('[data-test-id="sign-up-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });

  it('clicking the sign up button should show the AuthModal', () => {
    const wrap = mount(
      <AppContext.Provider>
        <MobileMenu />
      </AppContext.Provider>
    );

    wrap.find('[data-test-id="sign-up-btn"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });
});
