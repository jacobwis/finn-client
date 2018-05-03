import * as React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../Overlay';

describe('<Overlay />', () => {
  it('should pass "props.dataTestID" to the element', () => {
    const overlay = shallow(<Overlay dataTestID="test-id" />);

    expect(overlay.prop('data-testid')).toEqual('test-id');
  });

  it('should call "props.onClick" when clicked', () => {
    const onClick = jest.fn();
    const overlay = shallow(<Overlay onClick={onClick} />);

    overlay.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
