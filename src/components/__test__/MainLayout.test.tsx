import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as MobileMenuContext from '../../contexts/MobileMenuContext';
import * as AuthModalContext from '../../contexts/AuthModalContext';
import MockApollo from '../../utils/mockApollo';
import MainLayout from '../MainLayout';

describe('<MainLayout />', () => {
  it('should render children', () => {
    const wrap = shallow(
      <MainLayout>
        <h1>Hello World</h1>
      </MainLayout>
    );

    expect(wrap.find('.MainLayout__content')).toContainReact(<h1>Hello World</h1>);
  });

  it('should render the AuthModal component when AuthModalContext.visible equals true', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <MockApollo>
          <MainLayout />
        </MockApollo>
      </AuthModalContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    expect(wrap.find('AuthModal').exists()).toEqual(true);
  });

  it('should not render the AuthModal component with AuthModalContext.visible equals false', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <MockApollo>
          <MainLayout />
        </MockApollo>
      </AuthModalContext.Provider>
    );

    wrap.setState({
      visible: false
    });

    expect(wrap.find('AuthModal').exists()).toEqual(false);
  });

  it('should render the MobileMenu component when MobileMenuContext.visible equals true', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MockApollo>
          <MainLayout />
        </MockApollo>
      </MobileMenuContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    expect(wrap.find('MobileMenu').exists()).toEqual(true);
  });

  it('should not render the MobileMenu component when MobileMenuContext.visible equals false', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MockApollo>
          <MainLayout />
        </MockApollo>
      </MobileMenuContext.Provider>
    );

    wrap.setState({
      visible: false
    });

    expect(wrap.find('MobileMenu').exists()).toEqual(false);
  });
});
