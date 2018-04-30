import * as React from 'react';
import { shallow, mount } from 'enzyme';
import IconButton from '../IconButton';
import Icon from '../Icon';

describe('<IconButton />', () => {
  it('should expose the Icon component via IconButton.Icon', () => {
    expect(IconButton.Icon).toEqual(Icon);
  });

  it('should render "props.children"', () => {
    const icon = () => <Icon icon="bars" />;
    const btn = shallow(<IconButton>{icon()}</IconButton>);

    expect(btn.children()).toContainReact(icon());
  });

  it('should pass "props.dataTestID" to the element', () => {
    const btn = shallow(
      <IconButton dataTestID="test">
        <IconButton.Icon icon="bars" />
      </IconButton>
    );

    expect(btn.prop('data-test-id')).toEqual('test');
  });

  it('should call "props.onClick" when clicked', () => {
    const onClick = jest.fn();
    const btn = shallow(
      <IconButton onClick={onClick}>
        <IconButton.Icon icon="bars" />
      </IconButton>
    );

    btn.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  it('"props.theme" should be "primary" by default', () => {
    const btn = mount(
      <IconButton>
        <IconButton.Icon icon="bars" />
      </IconButton>
    );

    expect(btn.prop('theme')).toEqual('primary');
  });

  it('should have the class "IconButton--primary" when "props.theme" equals "primary"', () => {
    const btn = shallow(
      <IconButton theme="primary">
        <IconButton.Icon icon="bars" />
      </IconButton>
    );

    expect(btn).toHaveClassName('IconButton--primary');
  });

  it('should have the class "IconButton--secondary" when "props.theme" equals "secondary"', () => {
    const btn = shallow(
      <IconButton theme="secondary">
        <IconButton.Icon icon="bars" />
      </IconButton>
    );

    expect(btn).toHaveClassName('IconButton--secondary');
  });

  it('"props.type" should be "solid" by default', () => {
    const btn = mount(
      <IconButton>
        <Icon icon="bars" />
      </IconButton>
    );

    expect(btn.prop('type')).toEqual('solid');
  });

  it('should have the class "IconButton--solid" when "props.type" equals "solid"', () => {
    const btn = shallow(
      <IconButton type="solid">
        <Icon icon="bars" />
      </IconButton>
    );

    expect(btn).toHaveClassName('IconButton--solid');
  });

  it('should have the class "IconButton--outline" when "props.type" equals "outline"', () => {
    const btn = shallow(
      <IconButton type="outline">
        <Icon icon="bars" />
      </IconButton>
    );

    expect(btn).toHaveClassName('IconButton--outline');
  });

  it('should have the class "IconButton--text" when "props.type" equals "text"', () => {
    const btn = shallow(
      <IconButton type="text">
        <Icon icon="bars" />
      </IconButton>
    );

    expect(btn).toHaveClassName('IconButton--text');
  });

  it('the button element should have the class "IconButton"', () => {
    const btn = shallow(
      <IconButton>
        <Icon icon="bars" />
      </IconButton>
    );

    expect(btn).toHaveClassName('IconButton');
  });
});
