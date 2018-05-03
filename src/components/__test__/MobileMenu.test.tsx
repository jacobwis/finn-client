import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import * as AppContext from '../../contexts/AppContext';
import MobileMenu from '../MobileMenu';

const selectTestID = (testID: string) => `[data-testid="${testID}"]`;

describe('<MobileMenu />', () => {
  it('clicking the menu overlay should set AppContexts "state.mobileMenuVisible" to false', () => {
    const wrap = mount(
      <AppContext.Provider>
        <MemoryRouter>
          <MobileMenu />
        </MemoryRouter>
      </AppContext.Provider>
    );

    wrap.setState({
      mobileMenuVisible: true
    });

    wrap.find(selectTestID('menu-overlay')).simulate('click');

    expect(wrap.state('mobileMenuVisible')).toEqual(false);
  });

  it('clicking the close button should set AppContexts "state.mobileMenuVisible" to false', () => {
    const wrap = mount(
      <AppContext.Provider>
        <MemoryRouter>
          <MobileMenu />
        </MemoryRouter>
      </AppContext.Provider>
    );

    wrap.setState({
      mobileMenuVisible: true
    });

    wrap.find(selectTestID('hide-menu')).simulate('click');

    expect(wrap.state('mobileMenuVisible')).toEqual(false);
  });
});
