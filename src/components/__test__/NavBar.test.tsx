import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../../config/store';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('clicking the menu toggle button should show the menu', () => {
    const store = configureStore();

    const wrap = mount(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    wrap.find('[data-test-id="menu-toggle"]').simulate('click');

    expect(store.getState().mobileMenu.visible).toEqual(true);
  });
});
