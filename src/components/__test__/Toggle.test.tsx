import * as React from 'react';
import { shallow } from 'enzyme';
import Toggle from '../Toggle';

describe('<Toggle />', () => {
  it('.setFalse() should set "state.value" to false', () => {
    const wrap = shallow(<Toggle>{() => <div />}</Toggle>);

    wrap.setState({ value: true });
    expect(wrap.state('value')).toEqual(true);

    const instance = wrap.instance() as Toggle;
    instance.setFalse();

    expect(wrap.state('value')).toEqual(false);
  });

  it('.setTrue() should set "state.value" to true', () => {
    const wrap = shallow(<Toggle>{() => <div />}</Toggle>);

    const instance = wrap.instance() as Toggle;
    instance.setTrue();

    expect(wrap.state('value')).toEqual(true);
  });

  it('.toggle() should toggle "state.value"', () => {
    const wrap = shallow(<Toggle>{() => <div />}</Toggle>);

    const instance = wrap.instance() as Toggle;
    expect(wrap.state('value')).toEqual(false);

    instance.toggle();
    expect(wrap.state('value')).toEqual(true);

    instance.toggle();
    expect(wrap.state('value')).toEqual(false);

    instance.toggle();
    expect(wrap.state('value')).toEqual(true);
  });

  it('"state.value" should be false by default', () => {
    const wrap = shallow(<Toggle>{() => <div />}</Toggle>);
    expect(wrap.state('value')).toEqual(false);
  });

  it('should render children', () => {
    const wrap = shallow(<Toggle>{() => <button>Child Button</button>}</Toggle>);

    expect(wrap).toContainReact(<button>Child Button</button>);
  });

  it('"state.value" should equal "props.value" if provided', () => {
    const wrap = shallow(<Toggle value={true}>{() => <div />}</Toggle>);

    expect(wrap.state('value')).toEqual(true);
  });
});
