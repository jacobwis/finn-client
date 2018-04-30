import * as actions from '../mobileMenu';
import { TypeKeys } from '../../constants';

describe('mobileMenu actions', () => {
  it('should create an action to show the menu', () => {
    expect(actions.showMobileMenu()).toEqual({
      type: TypeKeys.SHOW_MOBILE_MENU
    });
  });

  it('should create an action to hide the menu', () => {
    expect(actions.hideMobileMenu()).toEqual({
      type: TypeKeys.HIDE_MOBILE_MENU
    });
  });
});
