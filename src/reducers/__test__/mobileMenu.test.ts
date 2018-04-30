import { TypeKeys } from '../../constants';
import mobileMenu, { initialState } from '../mobileMenu';

describe('mobileMenu reducer', () => {
  it('should return default state', () => {
    // @ts-ignore
    expect(mobileMenu(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${TypeKeys.SHOW_MOBILE_MENU}`, () => {
    expect(
      mobileMenu(undefined, {
        type: TypeKeys.SHOW_MOBILE_MENU
      })
    ).toEqual({
      visible: true
    });
  });

  it(`should handle ${TypeKeys.HIDE_MOBILE_MENU}`, () => {
    expect(mobileMenu({ visible: true }, { type: TypeKeys.HIDE_MOBILE_MENU })).toEqual({
      visible: false
    });
  });
});
