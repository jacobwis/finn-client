import * as React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../MainLayout';

describe('<MainLayout />', () => {
  it('should render children', () => {
    const wrap = shallow(
      <MainLayout>
        <h1>Hello World</h1>
      </MainLayout>
    );

    expect(wrap.find('.MainLayout__content')).toContainReact(<h1>Hello World</h1>);
  });
});
