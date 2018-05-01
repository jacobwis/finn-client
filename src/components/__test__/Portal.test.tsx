import * as React from 'react';
import { mount } from 'enzyme';
import Portal from '../Portal';

describe('<Portal />', () => {
  it('should append a div element to the document body on mount, and remove it on unmount', () => {
    const wrap = mount(<Portal />);
    expect(document.body.innerHTML).toEqual('<div></div>');
    wrap.unmount();
    expect(document.body.innerHTML).toEqual('');
  });

  it('should render children', () => {
    const wrap = mount(
      <Portal>
        <h1>Child Node</h1>
      </Portal>
    );

    expect(wrap).toContainReact(<h1>Child Node</h1>);
  });
});
