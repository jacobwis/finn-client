import * as React from 'react';
import { shallow } from 'enzyme';
import View from '../View';

describe('<View />', () => {
  it('should set "document.title" to the value of "props.title"', () => {
    const wrap = shallow(<View title="Test Title" />);
    expect(document.title).toEqual('Test Title');
  });

  it('the title value should be available via View.getTitle()', () => {
    const wrap = shallow(<View title="Another Title" />);

    expect(View.getTitle()).toEqual('Another Title');
  });

  it('should update the title value on each render', () => {
    shallow(<View title="First Title" />);
    expect(document.title).toEqual('First Title');
    expect(View.getTitle()).toEqual('First Title');

    shallow(<View title="Second Title" />);
    expect(document.title).toEqual('Second Title');
    expect(View.getTitle()).toEqual('Second Title');
  });

  it('should render children', () => {
    const wrap = shallow(
      <View title="Page Title">
        <h1>Hello</h1>
      </View>
    );

    expect(wrap.text()).toEqual('Hello');
  });
});
