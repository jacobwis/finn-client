import { TypeKeys } from '../constants';
import { MobileMenuAction } from '../actions';

export interface MobileMenu {
  visible: boolean;
}

export const initialState: MobileMenu = {
  visible: false
};

const mobileMenu = (state: MobileMenu = initialState, action: MobileMenuAction) => {
  switch (action.type) {
    case TypeKeys.SHOW_MOBILE_MENU:
      return {
        ...state,
        visible: true
      };
    case TypeKeys.HIDE_MOBILE_MENU:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
};

export default mobileMenu;
