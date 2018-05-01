import * as React from 'react';
import { shallow } from 'enzyme';
import AuthPrompt from '../AuthPrompt';

describe('<AuthPrompt />', () => {
  it('should render correctly', () => {
    const wrap = shallow(<AuthPrompt />);

    expect(wrap).toMatchSnapshot();
  });
});
