import * as React from 'react';
import { mount } from 'enzyme';
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

    wrap.find('.MobileMenu__overlay').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });
});
