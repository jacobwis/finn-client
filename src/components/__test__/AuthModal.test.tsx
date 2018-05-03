import * as React from 'react';
import { mount } from 'enzyme';
import * as AppContext from '../../contexts/AppContext';
import AuthModal from '../AuthModal';

describe('<AuthModal />', () => {
  it('clicking the overlay should hide the modal', () => {
    const wrap = mount(
      <AppContext.Provider>
        <AuthModal />
      </AppContext.Provider>
    );

    wrap.setState({
      authModalVisible: true
    });

    wrap.find('[data-testid="modal-overlay"]').simulate('click');

    expect(wrap.state('authModalVisible')).toEqual(false);
  });
});
