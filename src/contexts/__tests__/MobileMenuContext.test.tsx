import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as MobileMenuContext from '../MobileMenuContext';

describe('<MobileMenuContext.Provider />', () => {
  it('"visible" should be false by default', () => {
    const wrap = shallow(<MobileMenuContext.Provider />);

    expect(wrap.state().visible).toEqual(false);
  });

  it('.show() should set "state.visible" to true', () => {
    const wrap = shallow(<MobileMenuContext.Provider />);

    const instance = wrap.instance() as MobileMenuContext.Provider;
    instance.show();

    expect(wrap.state().visible).toEqual(true);
  });

  it('.hide() should set "state.visible" to false', () => {
    const wrap = shallow(<MobileMenuContext.Provider />);

    wrap.setState({ visible: true });
    expect(wrap.state().visible).toEqual(true);

    const instance = wrap.instance() as MobileMenuContext.Provider;
    instance.hide();

    expect(wrap.state().visible).toEqual(false);
  });
});

describe('<MobileMenuContext.Consumer />', () => {
  it('should provide access to "ctx.visible"', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MobileMenuContext.Consumer>
          {ctx => <div data-visible={ctx.visible} />}
        </MobileMenuContext.Consumer>
      </MobileMenuContext.Provider>
    );

    expect(wrap.find('div').prop('data-visible')).toEqual(false);
  });

  it('calling "ctx.show" should set "ctx.visible" to true', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MobileMenuContext.Consumer>
          {ctx => (
            <div data-visible={ctx.visible}>
              <button onClick={ctx.show} />
            </div>
          )}
        </MobileMenuContext.Consumer>
      </MobileMenuContext.Provider>
    );

    wrap.find('button').simulate('click');

    expect(wrap.find('div').prop('data-visible')).toEqual(true);
  });

  it('calling "ctx.hide" should set "ctx.visible" to false', () => {
    const wrap = mount(
      <MobileMenuContext.Provider>
        <MobileMenuContext.Consumer>
          {ctx => (
            <div data-visible={ctx.visible}>
              <button onClick={ctx.hide} />
            </div>
          )}
        </MobileMenuContext.Consumer>
      </MobileMenuContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    expect(wrap.find('div').prop('data-visible')).toEqual(true);

    wrap.find('button').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });
});
