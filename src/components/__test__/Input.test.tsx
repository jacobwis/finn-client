import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';

describe('<Input />', () => {
  it('should have the class "Input"', () => {
    const input = shallow(<Input />);

    expect(input.find('input')).toHaveClassName('Input');
  });

  it('should pass "props.className" to the input element', () => {
    const input = shallow(<Input className="CustomClass" />);

    expect(input.find('input')).toHaveClassName('CustomClass');
  });

  it('should pass "props.name" to the input element', () => {
    const input = shallow(<Input name="firstName" />);

    expect(input.find('input').prop('name')).toEqual('firstName');
  });

  it('should call "props.onChange" when the input changes', () => {
    const onChange = jest.fn();
    const input = shallow(<Input onChange={onChange} />);

    input.find('input').simulate('change');

    expect(onChange).toHaveBeenCalled();
  });

  it('should pass "props.placeholder" to the input element', () => {
    const input = shallow(<Input placeholder="First Name" />);

    expect(input.find('input').prop('placeholder')).toEqual('First Name');
  });

  it('"props.type" should be "text" by default', () => {
    const input = mount(<Input />);

    expect(input.prop('type')).toEqual('text');
  });

  it('should pass "props.type" to the input element', () => {
    const input = shallow(<Input type="password" />);

    expect(input.find('input').prop('type')).toEqual('password');
  });

  it('should pass "props.value" to the input element', () => {
    const input = shallow(<Input value="Jacob" />);

    expect(input.find('input').prop('value')).toEqual('Jacob');
  });
});
