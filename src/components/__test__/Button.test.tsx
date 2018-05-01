import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  it('should render "props.children"', () => {
    const btn = shallow(<Button>Button Text</Button>);
    expect(btn.text()).toEqual('Button Text');
  });

  it('should pass "props.className" to the element', () => {
    const btn = shallow(<Button className="CustomClass" />);

    expect(btn).toHaveClassName('CustomClass');
  });

  it('should pass "props.dataTestID" to the element', () => {
    const btn = shallow(<Button dataTestID="test-id" />);

    expect(btn.prop('data-test-id')).toEqual('test-id');
  });

  it('should have the class "Button--full-width" if "props.fullWidth" equals true', () => {
    const btn = shallow(<Button fullWidth />);

    expect(btn).toHaveClassName('Button--full-width');
  });

  it('should call "props.onClick" when the element is clicked', () => {
    const onClick = jest.fn();
    const btn = shallow(<Button onClick={onClick} />);

    btn.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  it('should pass "props.style" to the element', () => {
    const styles = {
      color: 'red'
    };
    const btn = shallow(<Button style={styles} />);

    expect(btn.prop('style')).toEqual(styles);
  });

  it('"props.theme" should by "primary" by default', () => {
    const btn = mount(<Button />);

    expect(btn.prop('theme')).toEqual('primary');
  });

  it('should have the class "Button--primary" if "props.theme" equals "primary"', () => {
    const btn = shallow(<Button theme="primary" />);

    expect(btn).toHaveClassName('Button--primary');
  });

  it('"props.type" should be "solid" by default', () => {
    const btn = mount(<Button />);

    expect(btn.prop('type')).toEqual('solid');
  });

  it('should have the class "Button--solid" if "props.type" equals "solid"', () => {
    const btn = shallow(<Button type="solid" />);

    expect(btn).toHaveClassName('Button--solid');
  });

  it('should have the class "Button--outline" if "props.type" equals "outline"', () => {
    const btn = shallow(<Button type="outline" />);

    expect(btn).toHaveClassName('Button--outline');
  });

  it('should have the class "Button--text" if "props.type" equals "text"', () => {
    const btn = shallow(<Button type="text" />);

    expect(btn).toHaveClassName('Button--text');
  });

  it('should have the class "Button" by default', () => {
    const btn = shallow(<Button />);

    expect(btn).toHaveClassName('Button');
  });
});
