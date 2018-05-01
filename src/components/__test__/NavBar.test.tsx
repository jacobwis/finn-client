import * as React from 'react';
import { mount } from 'enzyme';
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
});
