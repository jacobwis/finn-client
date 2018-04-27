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
  // it('should pass "props.icon" to the i element', () => {
  //   const btn = shallow(<IconButton icon="bars" />);

  //   expect(btn.find('i').hasClass('fa-bars')).toEqual(true);
  // });

  // it('"props.prefix" should equal "regular" by default', () => {
  //   const btn = mount(<IconButton icon="bars" />);

  //   expect(btn.prop('prefix')).toEqual('regular');
  // });

  // it('when "props.prefix" equals "solid", the i element should have the class "fas"', () => {
  //   const btn = shallow(<IconButton icon="bars" prefix="solid" />);

  //   expect(btn.find('i').hasClass('fas')).toEqual(true);
  // });

  // it('when "props.prefix" equals "regular", the i element should have the class "far"', () => {
  //   const btn = shallow(<IconButton icon="bars" prefix="regular" />);

  //   expect(btn.find('i').hasClass('far')).toEqual(true);
  // });

  // it('when "props.prefix" equals "light", the i element should have the class "fal"', () => {
  //   const btn = shallow(<IconButton icon="bars" prefix="light" />);

  //   expect(btn.find('i').hasClass('fal')).toEqual(true);
  // });

  // it('when "props.prefix" equals "brands", the i element should have the class "fab"', () => {
  //   const btn = shallow(<IconButton icon="bars" prefix="brands" />);

  //   expect(btn.find('i').hasClass('fab')).toEqual(true);
  // });

  // it('"props.theme" should be "primary" by default', () => {
  //   const btn = mount(<IconButton icon="bars" />);

  //   expect(btn.prop('theme')).toEqual('primary');
  // });

  // it('should have the class "IconButton--primary" when "props.theme" equals "primary"', () => {
  //   const btn = shallow(<IconButton icon="bars" theme="primary" />);

  //   expect(btn.hasClass('IconButton--primary')).toEqual(true);
  // });

  // it('should have the class "IconButton--secondary" when "props.theme" equals "secondary"', () => {
  //   const btn = shallow(<IconButton icon="bars" theme="secondary" />);

  //   expect(btn.hasClass('IconButton--secondary')).toEqual(true);
  // });

  // it('"props.type" should be "solid" by default', () => {
  //   const btn = mount(<IconButton icon="bars" />);

  //   expect(btn.prop('type')).toEqual('solid');
  // });

  // it('should have the class "IconButton--solid" when "props.type" equals "solid"', () => {
  //   const btn = shallow(<IconButton icon="bars" type="solid" />);

  //   expect(btn.hasClass('IconButton--solid')).toEqual(true);
  // });

  // it('should have the class "IconButton--outline" when "props.type" equals "outline"', () => {
  //   const btn = shallow(<IconButton icon="bars" type="outline" />);

  //   expect(btn.hasClass('IconButton--outline')).toEqual(true);
  // });

  // it('should have the class "IconButton--text" when "props.type" equals "text"', () => {
  //   const btn = shallow(<IconButton icon="bars" type="text" />);

  //   expect(btn.hasClass('IconButton--text')).toEqual(true);
  // });

  // it('the button element should have the class "IconButton"', () => {
  //   const btn = shallow(<IconButton icon="bars" />);

  //   expect(btn.find('button').hasClass('IconButton')).toEqual(true);
  // });
});
