import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Heading from '../Heading';

describe('<Heading />', () => {
  it('should have the class "Heading"', () => {
    const heading = shallow(<Heading />);

    expect(heading).toHaveClassName('Heading');
  });

  it('should render "props.children"', () => {
    const heading = shallow(<Heading>Heading Text</Heading>);

    expect(heading).toHaveText('Heading Text');
  });

  it('"props.tag" should have a default value of "h1"', () => {
    const heading = mount(<Heading />);

    expect(heading.prop('tag')).toEqual('h1');
  });

  it('should return the proper element based on "props.tag"', () => {
    const heading = shallow(<Heading tag="p">Heading Text</Heading>);

    expect(heading.type()).toEqual('p');
  });
});
