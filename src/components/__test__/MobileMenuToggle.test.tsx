import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../../config/store';
import MobileMenuToggle from '../MobileMenuToggle';

describe('<MobileMenuToggle />', () => {
  it('mobileMenu.show() should set the menus visibility to true', () => {
    const store = configureStore();

    const wrap = mount(
      <Provider store={store}>
        <MobileMenuToggle>
          {({ show }) => <button onClick={show}>Click Me</button>}
        </MobileMenuToggle>
      </Provider>
    );
    wrap.find('button').simulate('click');

    expect(store.getState().mobileMenu.visible).toEqual(true);
  });

  it('mobileMenu.hide() should set the menus visibility to false', () => {
    const store = configureStore();

    store.dispatch({
      type: 'MOBILE_MENU:SHOW'
    });

    expect(store.getState().mobileMenu.visible).toEqual(true);

    const wrap = mount(
      <Provider store={store}>
        <MobileMenuToggle>
          {({ hide }) => <button onClick={hide}>Click Me</button>}
        </MobileMenuToggle>
      </Provider>
    );
    wrap.find('button').simulate('click');

    expect(store.getState().mobileMenu.visible).toEqual(false);
  });
});
