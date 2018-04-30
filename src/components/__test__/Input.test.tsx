import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from '../Icon';
import Input from '../Input';

describe('<Input />', () => {
  it('should have the class "Input"', () => {
    const input = shallow(<Input />);

    expect(input.find('input')).toHaveClassName('Input');
  });

  it('the wrapper element should have the class "Input__wrapper"', () => {
    const input = shallow(<Input />);

    expect(input).toHaveClassName('Input__wrapper');
  });

  it('should pass "props.className" to the input element', () => {
    const input = shallow(<Input className="CustomClass" />);

    expect(input.find('input')).toHaveClassName('CustomClass');
  });

  it('should have the class "Input__wrapper--full-width" if "props.fullWidth" is true', () => {
    const input = shallow(<Input fullWidth />);

    expect(input).toHaveClassName('Input__wrapper--full-width');
  });

  it('should render "props.iconLeft"', () => {
    const input = shallow(<Input iconLeft={() => <Icon icon="search" />} />);

    expect(input).toContainReact(<Icon icon="search" />);
  });

  it('the input element should have the class "Input--with-icon-left" if "props.iconLeft" is defined', () => {
    const input = shallow(<Input iconLeft={() => <Icon icon="search" />} />);

    expect(input.find('input')).toHaveClassName('Input--with-icon-left');
  });

  it('should render a span element with the class "Input__icon-left" if "props.iconLeft" is defined', () => {
    const input = shallow(<Input iconLeft={() => <Icon icon="search" />} />);

    expect(input.children().find('span')).toHaveClassName('Input__icon-left');
  });

  it('should render "props.iconRight"', () => {
    const input = shallow(<Input iconRight={() => <Icon icon="search" />} />);

    expect(input).toContainReact(<Icon icon="search" />);
  });

  it('the input element should have the class "Input--with-icon-right" if "props.iconRight" is defined', () => {
    const input = shallow(<Input iconRight={() => <Icon icon="search" />} />);

    expect(input.find('input')).toHaveClassName('Input--with-icon-right');
  });

  it('should render a span element with the class "Input__icon-right" if "props.iconRight" is defined', () => {
    const input = shallow(<Input iconRight={() => <Icon icon="search" />} />);

    expect(input.children().find('span')).toHaveClassName('Input__icon-right');
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
