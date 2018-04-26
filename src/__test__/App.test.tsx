import * as React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('should run tests', () => {
    const wrap = shallow(<App />);
    expect(wrap).toMatchSnapshot();
  });
});
