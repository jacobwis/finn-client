import * as React from 'react';
import { shallow } from 'enzyme';
import Box from '../Box';

const displayValues = ['none', 'flex', 'inline-flex', 'block', 'inline-block'];

describe('<Box />', () => {
  it('should render "props.children"', () => {
    const box = shallow(
      <Box>
        <h1>Hello</h1>
      </Box>
    );

    expect(box).toContainReact(<h1>Hello</h1>);
  });

  it('should assign the proper classes for "props.display"', () => {
    displayValues.forEach(dv => {
      // @ts-ignore
      const box = shallow(<Box display={dv} />);

      expect(box).toHaveClassName(`display-${dv}`);
    });
  });

  it('should assign the proper classes for "props.xsDisplay"', () => {
    displayValues.forEach(dv => {
      // @ts-ignore
      const box = shallow(<Box xsDisplay={dv} />);

      expect(box).toHaveClassName(`display-xs-${dv}`);
    });
  });

  it('should assign the proper classes for "props.smDisplay"', () => {
    displayValues.forEach(dv => {
      // @ts-ignore
      const box = shallow(<Box smDisplay={dv} />);

      expect(box).toHaveClassName(`display-sm-${dv}`);
    });
  });

  it('should assign the proper classes for "props.mdDisplay"', () => {
    displayValues.forEach(dv => {
      // @ts-ignore
      const box = shallow(<Box mdDisplay={dv} />);

      expect(box).toHaveClassName(`display-md-${dv}`);
    });
  });

  it('should assign the proper classes for "props.lgDisplay"', () => {
    displayValues.forEach(dv => {
      // @ts-ignore
      const box = shallow(<Box lgDisplay={dv} />);

      expect(box).toHaveClassName(`display-lg-${dv}`);
    });
  });

  it('should assign the proper classes for "props.xlDisplay"', () => {
    displayValues.forEach(dv => {
      // @ts-ignore
      const box = shallow(<Box xlDisplay={dv} />);

      expect(box).toHaveClassName(`display-xl-${dv}`);
    });
  });
});
