import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { TypeKeys } from '../../constants';
import { configureStore } from '../../config/store';
import MobileMenu from '../MobileMenu';

describe('<MobileMenu />', () => {
  it('clicking the close menu button should hide the menu', () => {
    const store = configureStore();

    store.dispatch({
      type: TypeKeys.SHOW_MOBILE_MENU
    });

    expect(store.getState().mobileMenu.visible).toEqual(true);

    const wrap = mount(
      <Provider store={store}>
        <MobileMenu />
      </Provider>
    );

    wrap.find('[data-test-id="hide-menu"]').simulate('click');

    expect(store.getState().mobileMenu.visible).toEqual(false);
  });

  it('clicking the menu overlay should hide the menu', () => {
    const store = configureStore();

    store.dispatch({
      type: TypeKeys.SHOW_MOBILE_MENU
    });

    expect(store.getState().mobileMenu.visible).toEqual(true);

    const wrap = mount(
      <Provider store={store}>
        <MobileMenu />
      </Provider>
    );

    wrap.find('.MobileMenu__overlay').simulate('click');

    expect(store.getState().mobileMenu.visible).toEqual(false);
  });
});
