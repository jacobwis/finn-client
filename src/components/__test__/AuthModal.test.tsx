import * as React from 'react';
import { mount } from 'enzyme';
import * as AuthModalContext from '../../contexts/AuthModalContext';
import AuthModal from '../AuthModal';

describe('<AuthModal />', () => {
  it('clicking the overlay should hide the modal', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <AuthModal />
      </AuthModalContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    wrap.find('[data-test-id="modal-overlay"]').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });
});
