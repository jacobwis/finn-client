import * as React from 'react';
import { mount } from 'enzyme';
import * as AuthModalContext from '../../contexts/AuthModalContext';
import * as MobileMenuContext from '../../contexts/MobileMenuContext';
import MockApollo from '../../utils/mockApollo';
import NavBar from '../NavBar';

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });
};

describe('<NavBar />', () => {
  it('clicking the menu toggle button should show the menu', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MockApollo>
          <NavBar />
        </MockApollo>
      </MobileMenuContext.Provider>
    );

    wrap.find('[data-test-id="menu-toggle"]').simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });

  it('clicking the sign up button should show the auth modal', async () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <MockApollo
          mockResolvers={{
            // @ts-ignore
            User: () => null
          }}
        >
          <NavBar />
        </MockApollo>
      </AuthModalContext.Provider>
    );

    await wait();
    wrap
      .update()
      .find('[data-test-id="sign-up-btn"]')
      .simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });

  it('clicking the sign in button should show the auth modal', async () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <MockApollo
          mockResolvers={{
            // @ts-ignore
            User: () => null
          }}
        >
          <NavBar />
        </MockApollo>
      </AuthModalContext.Provider>
    );

    await wait();

    wrap
      .update()
      .find('[data-test-id="sign-in-btn"]')
      .simulate('click');

    expect(wrap.state().visible).toEqual(true);
  });
});
