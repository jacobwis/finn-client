import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as AuthModalContext from '../AuthModalContext';

describe('<AuthModalContext.Provider />', () => {
  it('"visible" should be false by default', () => {
    const wrap = shallow(<AuthModalContext.Provider />);

    expect(wrap.state().visible).toEqual(false);
  });

  it('.show() should set "state.visible" to true', () => {
    const wrap = shallow(<AuthModalContext.Provider />);

    const instance = wrap.instance() as AuthModalContext.Provider;
    instance.show();

    expect(wrap.state().visible).toEqual(true);
  });

  it('.hide() should set "state.visible" to false', () => {
    const wrap = shallow(<AuthModalContext.Provider />);

    wrap.setState({ visible: true });
    expect(wrap.state().visible).toEqual(true);

    const instance = wrap.instance() as AuthModalContext.Provider;
    instance.hide();

    expect(wrap.state().visible).toEqual(false);
  });
});

describe('<AuthModalContext.Consumer />', () => {
  it('should provide access to "ctx.visible"', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <AuthModalContext.Consumer>
          {ctx => <div data-visible={ctx.visible} />}
        </AuthModalContext.Consumer>
      </AuthModalContext.Provider>
    );

    expect(wrap.find('div').prop('data-visible')).toEqual(false);
  });

  it('calling "ctx.show" should set "ctx.visible" to true', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <AuthModalContext.Consumer>
          {ctx => (
            <div data-visible={ctx.visible}>
              <button onClick={ctx.show} />
            </div>
          )}
        </AuthModalContext.Consumer>
      </AuthModalContext.Provider>
    );

    wrap.find('button').simulate('click');

    expect(wrap.find('div').prop('data-visible')).toEqual(true);
  });

  it('calling "ctx.hide" should set "ctx.visible" to false', () => {
    const wrap = mount(
      <AuthModalContext.Provider>
        <AuthModalContext.Consumer>
          {ctx => (
            <div data-visible={ctx.visible}>
              <button onClick={ctx.hide} />
            </div>
          )}
        </AuthModalContext.Consumer>
      </AuthModalContext.Provider>
    );

    wrap.setState({
      visible: true
    });

    expect(wrap.find('div').prop('data-visible')).toEqual(true);

    wrap.find('button').simulate('click');

    expect(wrap.state().visible).toEqual(false);
  });
});
