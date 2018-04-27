import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from '../Icon';

describe('<Icon />', () => {
  it('should have the class "fa-spin" if "props.animate" equals "spin"', () => {
    const i = shallow(<Icon animate="spin" icon="bars" />);

    expect(i.hasClass('fa-spin')).toEqual(true);
  });

  it('should have the class "fa-pulse" if "props.animate" equals "pulse"', () => {
    const i = shallow(<Icon animate="pulse" icon="bars" />);

    expect(i.hasClass('fa-pulse')).toEqual(true);
  });

  it('should have the class "fa-fw" if "props.fixedWith" equals true', () => {
    const i = shallow(<Icon fixedWidth icon="bars" />);

    expect(i.hasClass('fa-fw')).toEqual(true);
  });

  it('should properly add "props.icon" to the element', () => {
    const i = shallow(<Icon icon="bars" />);

    expect(i.hasClass('fa-bars')).toEqual(true);
  });

  it('"props.prefix" should be "regular" by default', () => {
    const i = mount(<Icon icon="bars" />);

    expect(i.prop('prefix')).toEqual('regular');
  });

  it('should have the class "far" when "props.prefix" equals "regular"', () => {
    const i = shallow(<Icon icon="bars" prefix="regular" />);

    expect(i.hasClass('far')).toEqual(true);
  });

  it('should have the class "fas" when "props.prefix" equals "solid"', () => {
    const i = shallow(<Icon icon="bars" prefix="solid" />);

    expect(i.hasClass('fas')).toEqual(true);
  });

  it('should have the class "fal" when "props.prefix" equals "light"', () => {
    const i = shallow(<Icon icon="bars" prefix="light" />);

    expect(i.hasClass('fal')).toEqual(true);
  });

  it('should have the class "fab" when "props.prefix" equals "brands"', () => {
    const i = shallow(<Icon icon="bars" prefix="brands" />);

    expect(i.hasClass('fab')).toEqual(true);
  });
});
